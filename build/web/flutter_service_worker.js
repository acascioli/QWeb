'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7d05990090d76152ece6136cc47b53af",
".git/config": "c91fad095e9cb671c7f493c8383aa187",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4a9a3590a8edd7be58c237f59dbd6a3b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0326a693cec8bf9ab851510b3471a6a2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fd7bbd84af6d7b68908b5edb32b74932",
".git/logs/refs/heads/main": "ce2e222a4ad7c3ef9af702bd636d62b6",
".git/logs/refs/heads/master": "ff3a38f2df202c4dc955c625c136e6d9",
".git/logs/refs/heads/testWeb": "dfd6032b505b07d42d9de21c91130118",
".git/logs/refs/heads/testWeb1": "6939b9030d3044e971989c4e958ad389",
".git/logs/refs/remotes/origin/main": "2588e52e5049d51cb6e1462f78d56555",
".git/objects/7b/ba20cef25b58569aa4deb53a1db931b1dbd448": "71b98644a0215de3c24fa9f8d9a1a4cf",
".git/objects/c2/ef1909608fcf2c39d8bdfa2206d9b9e0c017b2": "523aaf801d38b3d6ceb7ff7d0e4ec64c",
".git/objects/02/1b6f58caa8134b71e65f8bd7484e423adf358a": "6ed87b8f7ecdf3a42e44612f197a0aec",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/09/f36645e73efa66b3fac644d1a5b45113d135eb": "48ece492ea0ed9dddf38672d2074b795",
".git/objects/0b/1e4dd993e2d41282a677634f77b1399154356f": "255bcff5aee7b673d792ad19736de4a4",
".git/objects/0b/9be924085fed404d36aae21c5075c395fbe911": "88113ce8f2d654fdb3544be188885ec3",
".git/objects/0d/8e8aa7038381fee0f435a52e3e677e44611801": "4903af31024d261dae6a81554012a9a8",
".git/objects/0e/3b5287be30c4ec8ab5154f4736766c06a4f30d": "c38961a40d9e3a755f398058fd83d821",
".git/objects/10/e46a3b84071858bc909860bb4bda4aa21c434f": "8fffe10061a20859e71eaefbf33730a9",
".git/objects/14/2cfbe27338aa5fa68bb6d8ee734a6bdbfd3487": "d6a5393e24f4f48fcfb04d6a5af057a1",
".git/objects/16/7d16ea6d3fb3179f843b7d7bc877b7b89c827a": "36b5245b462ecaf050e9ef18c95c932f",
".git/objects/17/83722478436405f1f5c53b0569fdccd80e6647": "9585b5036e8a82f81142ed85fd7aa730",
".git/objects/19/5135c92bbcb9e87699018399e5403dab2bacf8": "d0713e380af4c4f0e5a8b537e3ee1ef3",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/1c/c81a58ebcc3ee3208261fbd0326f1909be1b81": "20374e1da2b5ed77231ba1517bcc25ce",
".git/objects/20/2f10ed5f659177a38e92997412ca5a6e9dd54b": "c5073f531c4975cc3611dc53c2a1dd74",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/cfc469696ed44108a2796738a19ffa9b63d3dd": "75f212f2f926ae3fad235a5c8a462492",
".git/objects/28/2485d5d04f4c1ef83516a40a5af4ab3f5de9a7": "d6c0559a653255ed1fa4e87767230e9b",
".git/objects/28/70f15e53ae209eb0d9d4f52355462a9dab2d1d": "b661e9a1a2bf786e7f1456f610e15e84",
".git/objects/29/dff7c2b5cf2615f634f0e5597fa652cd60d636": "3c41db162090cf4e7a97b53dfc19dc26",
".git/objects/2e/54caccaea7b99683648bc6edf710b136344a94": "299aab2110374e1250fb7aacbb1d8f99",
".git/objects/30/fb9f5e31da15cfc5e072c3a34d14564659bcf4": "6ec2f87411464995d455e877916f1dd0",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/36e9e28c83dbe8475057d77f28cdf5f4ba6f40": "651ef1a76c9ac13a88d085aef0c923b6",
".git/objects/40/96020cad5932c34d323c61d76b12d5c39ab429": "c73cf22dfec359a08bce7fc4993d73ca",
".git/objects/45/7de3fed1ea6e9a43549ff125ee374266c0172c": "31ff06dbc723763322795e4049eb1d25",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/2b6fb4d18a0261920840dc546348743ef097db": "11948a92de4e381b95ecb021ecdb2960",
".git/objects/4d/19bc2613e1da4bf31ad538b21a61d6d387b513": "56b49b2ba0c2da87e2d15d783e15d5e7",
".git/objects/4e/e6f4187e203e41dab0e3cfe577abfa8739c33b": "181b04eb6a6afb063871f5dc1df784f6",
".git/objects/52/3c9ba88f34dad7e978eb2e8159c1235f4b70af": "47259018fbcfd3b65fcb7d27c6704e68",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/57/e1fc6a9bf56bed2b7979f5df3a1567c78315f6": "1c5f81a3266455284e27ee8b4f744e12",
".git/objects/5c/61aaba3cc3bd3670a7b5e160865db2ad7bd118": "1342122d127c3cb2d5cfb129e11cb366",
".git/objects/5f/81edb8a492a54fe987a64526a89a2bb8179d22": "82306b4ae6d8be6022c0c95dab249d5f",
".git/objects/61/a6922061d7322efb876b52cc99098b1571d94a": "e5edfbaba7d090a0af28178454c3ed3a",
".git/objects/61/e73e907e3c43a112e5a2cda7fb8fca9341655a": "1ff8672e5e9d7e1f02c07dee4ffc6e6d",
".git/objects/62/f5f22f31dd1ffce0c98cc5c082e3cb5d9f98c9": "3e4eb85770d5124977806fb84de55b64",
".git/objects/65/6bc30ee3902281827e8bea5f2cc362c04306ee": "5fb5a1a720c1cd83b6aa08df9510e3bf",
".git/objects/68/f6b8971f154fbbafd6bde054cfb3417720897f": "f0b54224a32a525a23edfa40ae39c521",
".git/objects/6a/80e375152480326544cbb24be56a662b721c06": "6bf6ba06c76443771cb3057cf7393cef",
".git/objects/6b/0fdf91e22ce561a4e50dc0dd6c565d05263cab": "23815a6109683feccb422fc3f4661023",
".git/objects/6d/3943600d8e5d7e990b5ba06a834ee3e589fa01": "f5ec9701de6e200cc3dbe58166453f99",
".git/objects/71/6357442be7b8b1ab6ef13961134875e8302bec": "c6ca2059d111995609733f1652deb3dd",
".git/objects/72/130a6241a7f4cc46bb0f3da90e60ea04e2995a": "51c31f64377463893132f0247ca68d00",
".git/objects/74/27394724457529611446d38d27be5eb95b3bad": "291ac00ff0c237db97c1a1add0551ba8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/e149b328837b23c09daaf6db6992bc54d9f094": "a863b7a8f7d42ff58cd2be445422386a",
".git/objects/83/b020dda87769b5adbc7da2bccb64bf1657b3c8": "57c5175fd587c8870790354a033c3cfc",
".git/objects/86/ffdd271356d68a0c56727a2d6aa9919364cfa1": "78cf9696db3e0379f146537d5f12486b",
".git/objects/87/501853a42b539526bd6214d388713929f7a9ec": "7d822ca827288c410dc0c9cbfc2f48a7",
".git/objects/87/a75f4401e311b5684b1a0b44406a9ae8005a64": "38b35aee284d62b48020c6c737da9be1",
".git/objects/88/18b23546a59c72a6c47b2a86a63283630b5c5f": "a54aedf9bd289c54fd74c817efc28365",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/5c1ac504a0896523e59157ae91d1ad3d0c566d": "7b9aee1b0da781f3703f05f747419fc5",
".git/objects/8b/a6115c61fa64c76b454c6554a1f49d73f24578": "20d977a7a224dbf6f6508b32b7169308",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8e/0a39086232b1ff7effafd0f869e03438d988db": "5924a56042cd582501f472057ac7a27b",
".git/objects/90/cc74fd60c187048041f63c668de1099b7b4c2f": "1588a8113b8883b1cf6390aae428ea7a",
".git/objects/9c/c8ece211a8c12ea8269929c6f5c55c0eb30927": "bc77203d97ce80b7fbdf492ae3d89136",
".git/objects/9e/f73987574de8f5b4157f3eb50bf7d286d27c0d": "d3b3581a404f99dbffb6c8f7df300f10",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/5830abd24eeda3e94c8e2f3776bc13542b0b93": "4bcfd1f7076ea752529e3332af915001",
".git/objects/a5/d2901a0572d8e8658ffacbe1aa63c1fda3d7b3": "2dc536caaa2daf911268097747e0f97f",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/39e746ab681938c55d19b8ac56f3ad5aa907f5": "f79ec6640a6c2e60ecb0799988bf0d53",
".git/objects/ae/05cbd15a019b18cce75a6cc05bf022019e5794": "77088728c61a5277337149b70ce24b2d",
".git/objects/b0/01e257e0cacdff3e405955f5175693ad451777": "5988c44d91d20fdb56c841de749259c6",
".git/objects/b3/9a432fa2c723557f702748d43756a45f0d3981": "99dccca73b685156138bcbd196b764bc",
".git/objects/b3/f81f87ce2e5912648a03f4f40c2b6bc695c5ee": "828def239fd305be9fd4dcb83b4c5e0d",
".git/objects/b5/ab36a979f1217f500c60776a93dac977d86cfd": "eac621e118bf970016fe794f3ae0a97b",
".git/objects/b5/af92c3843d8a52624c7cdeed06bb20973a99f9": "86bdf95698c2ebe316fa7d68916dd83e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/1c9d8d84496fa6cf12edcd7a773a69a5e7ef23": "a477de3c166e59a2fa62b24687ce1e7c",
".git/objects/c1/3c4046617e4741aa9966cbc8dbdcfafc093900": "816794e475bcbf8a8b58b830ff4bab36",
".git/objects/c6/5910389581a3201d6dfa43562ecce4cfa8f634": "fa9585898ee68d424bf77d7343cd5c0d",
".git/objects/c8/1a8944865614dabb6cb6cfac548a136acde471": "6d52036d4909e52679568cd5935dbe4e",
".git/objects/c8/28b74175214c0dc71ac71a385d6261d2012c2c": "5b8300ef1ff0bb87202a552c442b000b",
".git/objects/c8/7fd14630458879238c58ce7c1ca4c646179e2f": "fc454267b9c6740d254cf01c624c0051",
".git/objects/c8/f502b373b7848dc2fb92e5e247aa2de39c92ca": "223564e3e89e6a5fe2aed5d98a0562f4",
".git/objects/c9/543458560f3095039fbd6a92726c0faf0dc438": "75474261660675106c81a9141d1e277b",
".git/objects/cb/c62b9e305a2f8d941a5d841c4b77e12d749909": "53b871a2b3f8398c55b8ba05395d5320",
".git/objects/d2/9c694e9a749928769c557fa09491f1167358b9": "39f8c9c0d621ff54f05e7ab4399ff467",
".git/objects/d2/d96bbe0ebf840e5806e1b297d19679b5e15691": "f4cba27f0036d25db054f749182f1d53",
".git/objects/d3/a765a0b43331a6c88f8b24df0cfea22c8d3ec9": "73fc0311ad536cf030585eaef5009c5c",
".git/objects/d4/32145d94566d2c7a2040f9a82ea19fe9db13a2": "fe9bc6f2c1cdd6024e5ae77ccc5bfc91",
".git/objects/d6/44ee5772805c62c1e4887ca7325d85d9b86eb7": "ed6cfe25567e0e6b84cfd5ae77fb2110",
".git/objects/d7/5aece88d2d63a8b8b999c349a14df9a3099c3a": "753828343629218655ed5d0f1268daae",
".git/objects/d8/1258c500916d08e7fad78cf72661a2061adaf7": "06f8c86dccf2cdb3e0c22c4575380042",
".git/objects/d9/0b3c0cb088bce8c93ed9de73f9983c3901fb8b": "d20259402886b3038e52f8a22dfa9fbe",
".git/objects/dd/bd1ef43500bd4512b98823c4e58d208e4185b7": "2be56abc04500e6cae2cd8d5585581d3",
".git/objects/de/a86a836e40dc66897635c084b51160ac6a6b21": "a5e7d4fbb11f287f67b5d6b15de83130",
".git/objects/e1/a8244f308133c16f67a3113b396f2ba84873dc": "8f2dec63fa7fad905b84b3c56bc2ccf9",
".git/objects/e4/75ed337931c52c439fc9c78c473f5cb53223ee": "31a8a12c6eee4fc4b934fbb92e012cac",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/4ff7937035bc3ae9d36ae1825cb94e63375444": "e6c8b4fb8a20d4306bf672afa3125e90",
".git/objects/e9/77e9befb4e45dcfb1ed4a18368568b4f31ea93": "1ca997386a77cb9380e063ec2d68a99f",
".git/objects/f2/8e6e7e6d14abcc5649cc4de0117933e3c8cca9": "52046d929678d72dbcf44b1b084b9a9b",
".git/objects/f3/77b353a7b5615436533c5d8928c923a050c37a": "474c89579b21dd7a6f955439dca6e439",
".git/objects/f5/6c08db028b223700f5b0c1d7ca9dc255de31de": "7d4cff983f706156f04b2b0a00627281",
".git/objects/fd/703d1f36b3ab7ec34deeb0dcf04e867db75265": "2bf9e456605aa1d76e5f42ef8aadcdae",
".git/objects/ff/76644e0f4e66cbfbcb5c384dfa2f75fd4041fd": "e68d46ffd32a1065381419e423251ccb",
".git/ORIG_HEAD": "35f79fed77bc93754b25533113c57fae",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "f6d3a70232cb81e5d90deb7669e506c0",
".git/refs/heads/master": "232eae6e3ba40729429ba1eddf49b71d",
".git/refs/heads/testWeb": "232eae6e3ba40729429ba1eddf49b71d",
".git/refs/heads/testWeb1": "f906057bc11f7c9dcc4fd77e34ad5ae8",
".git/refs/remotes/origin/main": "f6d3a70232cb81e5d90deb7669e506c0",
"assets/AssetManifest.json": "bab5b2758ea54369f48d3783569e0a70",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/icons/excle_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/assets/icons/Figma_file.svg": "0ae328b79325e7615054aed3147c81f9",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/google_drive.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"assets/assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"assets/assets/icons/menu_dashbord.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/menu_doc.svg": "6a0aa450e00f5643e1648ed0d8f69c3a",
"assets/assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/one_drive.svg": "aa908c0a29eb795606799385cdfc8592",
"assets/assets/icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/icons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/assets/images/africa.jpg": "27fc2c6667bd5bd7bba8117fafe28d86",
"assets/assets/images/animals.jpg": "2e218a94e7842a946d772082ac8c5590",
"assets/assets/images/antarctica.jpg": "71e86242fca831839833d1caa23f107e",
"assets/assets/images/asia.jpg": "bbcf97c1be29e77360e8407b7e2eaa05",
"assets/assets/images/australia.jpg": "6170e8a703652c6b814dca7020050086",
"assets/assets/images/cover.jpg": "e1e4b2e46b8d6eabb7330afb0c0d30ff",
"assets/assets/images/cover1.jpg": "302bb2cce0d8da449963bc7aaaebcf68",
"assets/assets/images/europe.jpg": "29a721b78efc7f928faf042c88806468",
"assets/assets/images/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/assets/images/logo.png": "5315be9d0a7602fb12a0ad4c2e3006e9",
"assets/assets/images/north_america.jpg": "867d729d34a03bf38136bd45954ec218",
"assets/assets/images/photography.jpeg": "b0d14d6d4a94d33404a7df1344e7533b",
"assets/assets/images/Q_logo.png": "edf45b17fc27598c7cd3dda92ab91c9f",
"assets/assets/images/Q_logo_1.png": "edf45b17fc27598c7cd3dda92ab91c9f",
"assets/assets/images/Q_logo_2.png": "823864c38a7b1bd15c02d206f7a72097",
"assets/assets/images/south_america.jpg": "1920c86e11a06921b339f00ff1d0ddea",
"assets/assets/images/trekking.jpg": "283eae13ae9587874b93fed5c9b4a118",
"assets/FontManifest.json": "daf1f817658c2d4328a27ae7e3af9150",
"assets/fonts/Electrolize-Regular.ttf": "1be3e0aaeb2bbd1985615a49da7f2eaf",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/NOTICES": "41ce17332e5d2782ba8264928b31cba8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "a1902e9f83c12ea82abda74e331afd0d",
"/": "a1902e9f83c12ea82abda74e331afd0d",
"main.dart.js": "cd128d407f9ab6627b0393bd4cc111a6",
"manifest.json": "9ec484e0bcc537495e91384ee7e4004f",
"README.md": "8b7e6e54a31c7307558d31936ec2d723",
"version.json": "af3178228a7b55c7d8c926f2fa70a857"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
