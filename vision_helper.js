async function findBestMatchDeepLearning(uploadedImageBase64, assetLogosMapBase64) {
    const model = await mobilenet.load({ version: 2, alpha: 1.0 });

    function base64ToImage(base64) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.src = 'data:image/png;base64,' + base64;
            img.onload = () => resolve(img);
            img.onerror = reject;
        });
    }

    async function extractFeatures(img) {
        const tensor = tf.browser.fromPixels(img)
            .resizeNearestNeighbor([224, 224])
            .toFloat()
            .div(tf.scalar(255))
            .expandDims();
        const activation = model.infer(tensor, 'conv_preds');
        const features = await activation.data();
        tensor.dispose();
        activation.dispose();
        return features;
    }

    function cosineSimilarity(a, b) {
        let dot = 0, normA = 0, normB = 0;
        for (let i = 0; i < a.length; i++) {
            dot += a[i] * b[i];
            normA += a[i] * a[i];
            normB += b[i] * b[i];
        }
        return dot / (Math.sqrt(normA) * Math.sqrt(normB));
    }

    try {
        const uploadedImg = await base64ToImage(uploadedImageBase64);
        const uploadedFeatures = await extractFeatures(uploadedImg);

        let bestMatchPath = '';
        let bestScore = -1;

        for (const path in assetLogosMapBase64) {
            const assetImg = await base64ToImage(assetLogosMapBase64[path]);
            const assetFeatures = await extractFeatures(assetImg);

            const score = cosineSimilarity(uploadedFeatures, assetFeatures);
            if (score > bestScore) {
                bestScore = score;
                bestMatchPath = path;
            }
        }

        console.log(`Best deep learning match: ${bestMatchPath} with score ${bestScore.toFixed(3)}`);
        return bestScore > 0.7 ? bestMatchPath : '';
    } catch (e) {
        console.error("Deep learning matching error:", e);
        return '';
    }
}
window.findBestMatchDeepLearning = findBestMatchDeepLearning;