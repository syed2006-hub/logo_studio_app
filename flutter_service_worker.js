'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "92d9d33579aae2a9615f27ab6140c24c",
".git/config": "762aac0f64cc42adebf0ce51ed6eef1a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5a0b8746d68ee76a4d012bfbcd470461",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b8ed04f4f55979dadbc46987a47cb354",
".git/logs/refs/heads/main": "5ac62d3cdb16cc56659903ef624bd569",
".git/logs/refs/remotes/origin/main": "0e7398165e40a0071395670b4d95d2e7",
".git/objects/00/33800131ef083dac379b4db4644857fcd17c1e": "5b056f8fb6dc3d288df71d4bd692f53e",
".git/objects/00/ef98e091f90e33ae9c38a75ef89654725def0b": "4266cf83816d5899bf0ff999bd796d88",
".git/objects/04/e0a5cda1a50edc467e35ae522a291273269f83": "17256c800d69f757bb5ba1e6b5fe1b99",
".git/objects/0e/ccac8a730a69ada9c54a1aa8e314a3023214a7": "e80daef8296b371cd03274995743e81c",
".git/objects/11/8badc85306c98ce324d34d7b6f5d2f6f8d578d": "287164853f0a726de624c96e7d2badba",
".git/objects/12/894c62793c393be2fe791ae2925fd8d901ee24": "cd8295abd2296088582ad33b78d2c411",
".git/objects/17/c0c302ebc6b353723a0c25ab15addb15b4a087": "c765e4d64c515ce6291cccb6ae926968",
".git/objects/18/a581873fe72c21b17f377167189b48d152dff5": "09c301eb9f87c9344a606da1a4b1ce68",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/21/aeae6ea7517839ccb9638f1595bbabfb08d0d8": "62df6d2e02305b9a64499655c1c6b5ab",
".git/objects/25/c6d7fec3324b585496982b6328c7a4950eaf99": "9d6d107b386ce565a9b8a252b195c048",
".git/objects/27/bd0db8a1a65018bca19e2dc8ceb53fc7735eb2": "a8110e75b816df845a1fdd2adda1e733",
".git/objects/32/ce302089c04b85148a81d9f234622e6b6bda71": "4eb4fbb17576ba31e05b422456bc7121",
".git/objects/34/e2ecb78a973b565e8024886e9f2ec990688030": "4faddc0d583a05b7da8e73f47cd16368",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/38/e939762ba285da544ba06e8eac50ad87c58da4": "d2e71b3c0aadddaa8fbd72f4b6fb1ca7",
".git/objects/39/b46754bb17cf4858e6d556aa51e85786ac733a": "dffc1940d09ce0de6ac26131b5f68b6f",
".git/objects/3a/4a86ff085794cbfa5e8e57066953bf46f4bb21": "d8998776b296b7e83ea105029398e9e0",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/e4470e1060ea9b8ca9e93830ec92ba0a525c5a": "44cd8c57466d0dfb89d14ba1bb29fbba",
".git/objects/43/6fad777268506eae6314ab293dd6804fac819e": "1be1d3fcd2487ba178a4d18851ac5f61",
".git/objects/44/5075bb795fbdcd2d31a3e4ae1eb89f726764f5": "e0b4a2c3ad33fbcff252fc4e96f82245",
".git/objects/45/c1cd472e93a2aa85331d777090ec2ce24c97ca": "8a8b879e0586dc7d66cc3014f82c2ce4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/05b4c3f0ebb8b7fc0aef0adc6dfd55bf8efb00": "06da05c44f76a34e82b4ee5966be652f",
".git/objects/4c/52a6adb8debbdb4be4cb59a05667e1bc73821b": "81cc0802cf6a390a29dc722d00bd8b4f",
".git/objects/4f/f8399f4b09e38baaf1cc59dc7c4ff1969833f3": "538428c43596c6c5043a7b6d5bdaadc3",
".git/objects/51/dfe4ea4d91214f2a9751dc5c923d257bb0c0cc": "8330e775a2892c64965912867f7a87ba",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5c/42df3304624b6e3688e3e5ecf4849e19390d9b": "cf0e46635fdf2eae6d88d8215fdf135e",
".git/objects/5c/d980804309bfde7d0d1ad9619acbb802fa080e": "b7ba1c33373f8084affd0f6eb24cde38",
".git/objects/5f/09d3eefb6978a50553273898cc5fb09a4c4d7c": "823cb518b2550c3853fe9a5d9a64d9cb",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/69/ad8882185818be82021a02da61c15867430937": "437323c8338609e8ac006c6a94397c1f",
".git/objects/69/d0a5c104287847c70a50dc67bfbcdbde9e6e63": "ca5ff38c94da48958d8b379b5f2d8165",
".git/objects/6a/11ac131c8dac2f71d18902a6334e1678d4b788": "993cd2ca253fd0305b7de7cf5da7c2f9",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/76c175c111daf6f759a55ee532cab2beeb5d13": "7c5f4d34bca2c3f1f0c8118931d1a4f0",
".git/objects/6c/c85fb2027868e077b1b196b664784b8fa50e90": "e961806615f2aa0e0e0ec377b0c04898",
".git/objects/6f/9a116af3c76ee8c1ccb5d07bffe1db01e35488": "e6d7f1045c545240a00ab3cfcfb7264f",
".git/objects/6f/ad75cb0d850689e7d8a2caa5b6cbbcb75e1a61": "60a22058606c357655db1620a8ee0897",
".git/objects/71/94cf4be37d349e3d4335813eb05047ec754a94": "6b975a2ab37de036b333be9fe824beff",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/72/599207a19463ea57c7dd705b7e6c429ee66d0a": "87151a4bf99c5833e45544fee5979ba6",
".git/objects/75/3c1946a7fd9d28edf18520262337fdec4b4074": "ece079455fb876db58d37d0f1f896880",
".git/objects/82/c510442c4da407f38b733651d36a796b0b01cb": "13955363e3c1c9b9eadfa461d310cc81",
".git/objects/84/a3d39aa8761a0239fca9df40171911399d80d5": "07c0158740f12335dcd8baefa991df03",
".git/objects/84/f86fe28f0ebdb4d5cdbcb045cc65e4dc45b263": "504569aa685d73bd1e34fd5d9751d5fa",
".git/objects/85/5a42c1347abf0c4b33d270124525e5a265ac24": "03411c9d002f70307267c63d7d54cc94",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/8341f813a2320df84f25bad2a955c76685b286": "943c7b8dd9e64d44bf94ca29af9f24f9",
".git/objects/8d/25f9f378fe46706fe0e404cafa6eec99f83e54": "dab99067c5dda3b382e3285872494326",
".git/objects/8e/9647b50eae01b76830f97025e8ef206009fb52": "4fda48d2432f4e54b4249841a1bd0457",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8f/faad154bc3c1ceb04d9b447024192813d872f5": "b958ffac09c0dbc4f602cbcda53f1540",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/7e4ae64a86999d4ab8415e87881ec04059c54f": "d462f889f86133c74652ed3d9281a001",
".git/objects/96/8bd23332d709dc35ae78691787fe07a2d08de0": "7eb61017fd55efcaf0add2a8d0ec3998",
".git/objects/9a/ee7d22bb54edab9091078e0c3e9de60af93bec": "4bf980808632b0c47606a09b657f29e4",
".git/objects/9b/10945a47fbf1a2e78a094c29b434b4922f6070": "f5c8ec1f395daece5a1927520e864390",
".git/objects/9b/7c9c4b976522c1aa3dd12132f5e31e7c31529f": "a03ee104a0b5f0b0907bc65fa82b572a",
".git/objects/a5/dc6164bcf15a218f977474b47a14c3b6bec82e": "8afba600d5cf7365891883a66f7002dc",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/4f5c797667e4617d30c8b7e08ce2337e986d3a": "5b34d9bbe215560d3a1449f52c14655c",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ae/203f452dc41acc59a54f33f0f5cbb1c3fd1ae6": "1d8f022616bab1b682a36d414072a119",
".git/objects/b0/fe39f33232e581ae6af559c47f2cfc8b0210f3": "5ea12177721dc6c572cf6674f5e89a68",
".git/objects/b2/a0ca658f2b9e4b30a1560be8c14f9817e2f9cb": "e6a46723c02af75826582ca83ddbbe87",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8021d0c003351bcc380e191f8ea80bb1ace689": "4f6aaaccc9a35ea3b26d9f7529d7d0dd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/bc43ff455c974de260af66d583431760b45fef": "92dd52b25a8a3619568385e76b8113d0",
".git/objects/bb/b70a4f2c7c95e61214d2b1043fabed193fe693": "b1d429a2e0dbd127d71cffd12e70b5f0",
".git/objects/bb/e282d4fdfc3cc8560d00ad3cb1fcbcb559ed13": "220711a0427bb0365fbca45ea130461e",
".git/objects/bd/17a2f7f17130aa1cb395f4bdd4e639d2c0c7e2": "0af2045784a3513cfd15f3104d910d72",
".git/objects/be/70fceb3624f995663dfd865774e0f1462e49c3": "013984e0cce4379dc5d8f0c8191b1d70",
".git/objects/c7/adb107f6abf85fa416bd2e055b413b9db62d4b": "bcb83c7b91c2e87c13886595065211ed",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/6d05047b2600310f8d0006143549a1e5292020": "8d4c89326681a7417ec7328fb8aac236",
".git/objects/d6/1bd4e9fc7e420a2d575435b2c06fdc6b2a0cc2": "5725ee2193ed5232dc694f887179d4f5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/5659189eb5f8f3b7ee509a241d862a261eb15b": "0590fb6ab5a24114d808f1a31d99999c",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/22720712cdbf854c0f7197a05fc61cd241b0ee": "57e90a039f11518727b4923d8985f5dc",
".git/objects/e5/47b6b980c0b384d4f868cc781a2f0c220079bb": "cca386f25e0c13fec8c79bf201125329",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/f032408958508338856ddfd3e52c825998443f": "b3d6d789689c348c7a63830c11033ba9",
".git/objects/ed/0c4196f4b19e951baf66b21d3df59ed24a9edb": "2e76e5a8ce396477e15d3017d5fdd8b9",
".git/objects/ed/b2a367fa92175aed73ca502c93f81a1b378ee4": "d981d890c6f29bc218dfd9ddd57e4374",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/ac58e38c082a8f7770b9e3fcc31549ac4d0b68": "46184744838ac85d76d937d94e778aae",
".git/objects/f1/27f401d729716e0884812d14f924b68dfdc400": "cf447e8908615f0fb83c35ef2e339d00",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/92949826be08c6adf05a23ba0dfc19e861544e": "6f0dd8ef089e6a83f9952190c27252bd",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/4feff21a926994df3c22af9a5314db9c065dee": "daef348c6cb6be3cb6716511d9fefabc",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/df7bf902458d6fe2836089fb7bd955fdf5daeb": "2a508a7b6cfc1220d8306be33b56a3f3",
".git/objects/f6/4144efa057c411cba9c3893668d99a689d68b4": "ea0ca1bee76325987a617945b279531f",
".git/objects/f6/414c92b04dd49341d27e33c1e245458bb16492": "c9d548be1dd5c1401c3366408ab71141",
".git/objects/fa/bb6789b656232f5544208ea8ecd3f7aff4b0c8": "5d97f04ec3f0a3339affa4f0708787e3",
".git/objects/fe/7b607ca55481355e772eb7cd97bbbaa9d6c358": "2ea8129eda15534a11a2b585a7576d59",
".git/objects/ff/f42cae8e67ae63ab230c1ccb0146ffc3cd746c": "0176683ad65d7ad5fd6ef821ece31d39",
".git/refs/heads/main": "df6d1df9ac3e214a32fb725d344898a0",
".git/refs/remotes/origin/main": "df6d1df9ac3e214a32fb725d344898a0",
"assets/AssetManifest.bin": "45c008651702c2354e645a029e8a8347",
"assets/AssetManifest.bin.json": "af2edbe1c33c22ff89373b643e4769ce",
"assets/AssetManifest.json": "cbb45cdf412c84376f39ba9d0ff8b74b",
"assets/assets/logos/adidas.jpg": "ed4712796fb4cd938a3504dadf425bde",
"assets/assets/logos/amazon.jpg": "30fa86fa0350f216684628d90b61f988",
"assets/assets/logos/apple.jpg": "149b1c07451195104f137b265b594a05",
"assets/assets/logos/audi.jpg": "b9a995d0ee4fa1df08033b647f23cfbb",
"assets/assets/logos/bently.jpg": "a2192e86d17aad3d87ab21c6f95930cc",
"assets/assets/logos/benz.jpg": "11bf945a7b241edebb543a5371e1c1ba",
"assets/assets/logos/bmw.jpg": "c94061d4c72a7bbde843fbeef09e1d57",
"assets/assets/logos/chanel.jpg": "7e51c6917121e00aab7cccb9c038c204",
"assets/assets/logos/cisco.jpg": "4b4246a80747ab0c96dc1668dbdb4c01",
"assets/assets/logos/cocacola.jpg": "06c91e4e91e52c7d0f40e8bcae115d3c",
"assets/assets/logos/dell.jpg": "c4be9b6b3faf593f435248c2125aa432",
"assets/assets/logos/disney.jpg": "4e9762db0360f2ccbdbbf9e3e9b9a860",
"assets/assets/logos/dominos.jpg": "8c2335b60d503f8df4691efb8d6a8188",
"assets/assets/logos/facebook.jpg": "55ca6d5e3e6c04ced629a1cafd6fee3e",
"assets/assets/logos/ferrari.jpg": "9319490ad6743051917e3e7064e45594",
"assets/assets/logos/google.jpg": "f03c4b867516b9a4f6b746703c9a0611",
"assets/assets/logos/gucci.jpg": "6cbf80ea64031ea7b8492ec9470dece7",
"assets/assets/logos/h&m.jpg": "89d721c46769876f617e150f37d2effd",
"assets/assets/logos/hp.jpg": "286817c971ae085bb523dfdfb18c64dc",
"assets/assets/logos/huawei.jpg": "e3de72c589ac644b1b2f24ac9fa072c5",
"assets/assets/logos/hyundai.jpg": "13e68b183fee35d58e057c0bcc966354",
"assets/assets/logos/ibm.jpg": "fa4016b260d321f8b41c2ec89d8dbec3",
"assets/assets/logos/instagram.jpg": "e4c6e6496c85b5c1396f28ed52a74b0c",
"assets/assets/logos/intel.jpg": "24973b29ed0e888b68e00f92c104cc70",
"assets/assets/logos/kfc.jpg": "d4169b9e0d38c63af49447682db0e671",
"assets/assets/logos/lacoste.jpg": "42d25d0106d419e85514f5e5e54ff428",
"assets/assets/logos/levis.jpg": "a3295cb6cf4bf0381eca5c17dbc391de",
"assets/assets/logos/lg.jpg": "d4f89083df6d578fd5fd171c163ba04f",
"assets/assets/logos/linkedin.jpg": "12fc6eb2fe7ecaed593dd963322738fb",
"assets/assets/logos/louisvuition.jpg": "af1b8904bdf41252afaf8707c3e0ff42",
"assets/assets/logos/mastercard.jpg": "a61ccc7a1812ee249fff89dfce90c3b8",
"assets/assets/logos/meesho.jpg": "eea52156cc2320bfbe67eefff3d2ef66",
"assets/assets/logos/microsoft.jpg": "7cbe4eb03d50a4a1b578d2d9cf3251f0",
"assets/assets/logos/myntra.jpg": "06932cc1b83b928216b90622572650b7",
"assets/assets/logos/nasa.jpg": "f4567bd88c7c2f5baef7281f2627396d",
"assets/assets/logos/netflix.jpg": "462ad2e5e1672891849849b386da89a5",
"assets/assets/logos/nike.jpg": "2f039888a343fd4c0809d0326bca055a",
"assets/assets/logos/nivea.jpg": "6b3d65ccd0064bc231b7f5232724b958",
"assets/assets/logos/oppo.jpg": "3255762f9cf94905d2bacd9bb1db3c15",
"assets/assets/logos/oracle.jpg": "bed79901fe149f9b8be7a3043f1ac617",
"assets/assets/logos/paypal.jpg": "4ee6e2260c1c8ff202951aaacad9cd62",
"assets/assets/logos/pepsi.jpg": "940383bb37874fb117c7222270d77e82",
"assets/assets/logos/puma.jpg": "7ca7cbdc80dad910432f88a1ee87c9ac",
"assets/assets/logos/rolex.jpg": "63966eabf5b133c19cd6e04808a37888",
"assets/assets/logos/salesforce.jpg": "0c266eb2fa22204c0420ecb6100236b3",
"assets/assets/logos/samsung.jpg": "d524f36d81d3d04f6f7e0fc0796ac05a",
"assets/assets/logos/sony.jpg": "f9aaa19437486bd85ffc026419125a32",
"assets/assets/logos/spotify.jpg": "4971feed02dd6dc3fcbf93524fcb843a",
"assets/assets/logos/starbucks.jpg": "6d7f3e4a10dce2f10e0d2bc18db9fbe8",
"assets/assets/logos/subway.jpg": "cff7abb9a0bd0b7e70727c3a84e3d1c7",
"assets/assets/logos/tesla.jpg": "cb95638c8f58adc02071ea1d58b325f2",
"assets/assets/logos/toyota.jpg": "ef53e91c2231edf57cd1132d25b9dd93",
"assets/assets/logos/uber.jpg": "644ec4f604ed597d074b99a3627a2c01",
"assets/assets/logos/uniqlo.jpg": "92f2020176db40d51337760269b109e7",
"assets/assets/logos/visa.jpg": "fb41a78ee1c9cff9ad605638faccf0e9",
"assets/assets/logos/vivo.jpg": "1dcc22fdcda5f5ef5c1a53f0141cb452",
"assets/assets/logos/warnerbros.jpg": "fcfb6b97f470f9669567c385ddf6d300",
"assets/assets/logos/whatsapp.jpg": "3f50ff81c606d56877d7c9d8175be1c8",
"assets/assets/logos/youtube.jpg": "23c798801b59ea6edea834a423498f39",
"assets/assets/logos/zara.jpg": "3c191de9bcf4fa7886de8861cea31aa2",
"assets/assets/logos/zoom.jpg": "86967febcfdbf6b5973c5fc6bb3d1ca0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "767fb983fd5e46cc78d7934884401680",
"assets/NOTICES": "1ec592aa1a5aa25c4a090f026c71403e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "4efdb04bc225117bab1fae79f226fe8d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "409a4847da5e89fa881f7fd33e4458b7",
"/": "409a4847da5e89fa881f7fd33e4458b7",
"main.dart.js": "5cfffda5986db3cdf41be6c01be5e05f",
"manifest.json": "fd53aa9bcd392361c18aa41d7dd7ed90",
"version.json": "770b179ddcce5075d02cc632b6ad7e6c",
"vision_helper.js": "75cc13bc6b0489c67f756a004ebe164d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
