'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "62ae411c74f9f0eb6a3082679ce71765",
"icons/Icon-512.png": "7a5f4629a0ad3503db40cacdb2a0099a",
"icons/Icon-maskable-192.png": "5073b5d2d70209f71f42ae3e1b27b3e5",
"icons/Icon-192.png": "92394a87f9ab5511473fc0a4f856651f",
"icons/Icon-maskable-512.png": "30a5427e9636dff9c61fdc1be9170f30",
"icons/Icon-maskable-512.png_": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png_": "c457ef57daa1d16f64b27b786ec2ea3c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/manifest.arkb": "8ce754dd547b192ce152ecccbabd5f8c",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"favicon.ico": "4b34807ffb50e5c0cc189afff4e7979e",
"index.html": "8e50e5b5ec7ed25201f70bf013bab3b4",
"/": "8e50e5b5ec7ed25201f70bf013bab3b4",
"favicon.png": "a14cbe71560c59584d000a332672a5e9",
"version.json": "41a142b19cdfcefdca7600f8fa4fc08a",
"manifest.arkb": "4d588ef178ea7285649d26413ec598bc",
"assets/AssetManifest.bin.json": "f75f5007ed9df79ef6d8d980a60a3e2a",
"assets/NOTICES": "6aea3db0086d4b0e8485538ae83cbb79",
"assets/FontManifest.json": "6a84e6c28a318c1ef29352d8cf66d39c",
"assets/AssetManifest.json": "9537b6ffb116f9c5fad5e44053bfd83c",
"assets/lib/blockchain/accounts/hardhat.json": "105297103579bfd386d787933a2f28c2",
"assets/lib/blockchain/abi/addresses.json": "1f9e5f6dc783a4f44a475480bc0f7b08",
"assets/lib/blockchain/abi/wormhole-addresses.json": "6a6b69af26a619c3a46d874245820bcf",
"assets/lib/blockchain/abi/axelar-addresses.json": "a764b392e0a42dec066dad1dfc61381b",
"assets/lib/blockchain/abi/Diamond.json": "2c102c1b8abe8e70327653d6aabaa1f6",
"assets/lib/blockchain/abi/hyperlane-addresses.json": "0e52c4a423a35c1da26277cff8c18a63",
"assets/lib/blockchain/abi/TasksFacet.json": "67bceb4b422eea1b75c09bfe0a702892",
"assets/lib/blockchain/abi/layerzero-addresses.json": "5165f6d24451ed4d8ea439ca1c08d025",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "d10ac4ee5ebe8c8fff90505150ba2a76",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/packages/flutter_rating_stars/assets/star_off.png": "510ce4aac7c14568132bdda920c8a76e",
"assets/packages/web3modal_flutter/assets/account_copy.svg": "3dfb381b033f975d32608f523561479a",
"assets/packages/web3modal_flutter/assets/help/system.svg": "5653685e83efb0b3d45a38db575de9c8",
"assets/packages/web3modal_flutter/assets/help/dao.svg": "37bc884bb4c25c668e857a7b7c5b6adc",
"assets/packages/web3modal_flutter/assets/help/key.svg": "3a19cb388cfc0747b9517c424aaecfe9",
"assets/packages/web3modal_flutter/assets/help/compass.svg": "73f5b5773495c7b38034917e1108e310",
"assets/packages/web3modal_flutter/assets/help/network.svg": "3f8bd92c1e4b1d766c361c113273faaa",
"assets/packages/web3modal_flutter/assets/help/defi.svg": "82f1e28b6c5abe77773fef9aaf21e55a",
"assets/packages/web3modal_flutter/assets/help/chart.svg": "7ac5fd4b1fa05e6853229070fd380c89",
"assets/packages/web3modal_flutter/assets/help/eth.svg": "baf5ae21f167b4512c2f12be3dc032b0",
"assets/packages/web3modal_flutter/assets/help/user.svg": "ecb763fd28aa204a17594803b9313bf1",
"assets/packages/web3modal_flutter/assets/help/layers.svg": "e29d83814272f8b17db2e84eb62938a7",
"assets/packages/web3modal_flutter/assets/help/painting.svg": "bc1f3af0e6e5c57f2e82ac74468fa31f",
"assets/packages/web3modal_flutter/assets/help/noun.svg": "45ac2041d4e172746cefcb304c577bfc",
"assets/packages/web3modal_flutter/assets/help/lock.svg": "3084e9137bc93199a6a9010f63757442",
"assets/packages/web3modal_flutter/assets/icons/disconnect.svg": "fe22360a30e0f2dfcc0166af27093bb0",
"assets/packages/web3modal_flutter/assets/icons/code.svg": "a9bf8c3d9d90058fd0854ef5324bf1f7",
"assets/packages/web3modal_flutter/assets/icons/checkmark.svg": "7c4ee5c9050caf592728a3fd650872ba",
"assets/packages/web3modal_flutter/assets/icons/search.svg": "bbdea538979fc2e7a8a8538f67b0541a",
"assets/packages/web3modal_flutter/assets/icons/warning.svg": "2a11047bfb7f2ef43cd4535aa8511461",
"assets/packages/web3modal_flutter/assets/icons/refresh_back.svg": "c856132e8c52d9c6dd35eb9d43cbd389",
"assets/packages/web3modal_flutter/assets/icons/info.svg": "8327eb5fda28136ea6bb96e2f9c28ca1",
"assets/packages/web3modal_flutter/assets/icons/close.svg": "54241b625497b2a264df8fccb7a8a649",
"assets/packages/web3modal_flutter/assets/icons/refresh.svg": "65e23c2043fc03c67660d4b846236624",
"assets/packages/web3modal_flutter/assets/icons/compass.svg": "96a71c0b2e8136482957120cc16f28fe",
"assets/packages/web3modal_flutter/assets/icons/swap_horizontal.svg": "2becbdedd89ffaaa2111daa290956d5b",
"assets/packages/web3modal_flutter/assets/icons/network.svg": "26be13d1280d5b1f9a11324a78ca8afa",
"assets/packages/web3modal_flutter/assets/icons/chevron_left.svg": "e258aa34911cfae14743343f7fa9f58b",
"assets/packages/web3modal_flutter/assets/icons/help.svg": "3c03bdbbd073a7556a837abf21c52fab",
"assets/packages/web3modal_flutter/assets/icons/arrow_top_right.svg": "f6ae3a7fcb83aa44bac69608b18cf500",
"assets/packages/web3modal_flutter/assets/icons/wallet.svg": "bac0bd06bc142c95b1b68ed306b1187c",
"assets/packages/web3modal_flutter/assets/icons/chevron_right.svg": "6d73c4dc08c1b29868670f285f90dc47",
"assets/packages/web3modal_flutter/assets/icons/copy_14.svg": "09ce7e33c714abc2bea05eef458d19a8",
"assets/packages/web3modal_flutter/assets/icons/extension.svg": "0f4fcd6cbe352c09eb9e151a2e0f6b06",
"assets/packages/web3modal_flutter/assets/icons/copy.svg": "0b2aef8f77993bf3ef6ff979ec1dedf5",
"assets/packages/web3modal_flutter/assets/icons/coin.svg": "75eb1709228de3ba415b11b7d31c3c1f",
"assets/packages/web3modal_flutter/assets/icons/mobile.svg": "52e74ac4af896a985dfda155f7bb14f3",
"assets/packages/web3modal_flutter/assets/icons/dots.svg": "3879401fea6299cf604529f79c46c07b",
"assets/packages/web3modal_flutter/assets/dark/qr_code.svg": "851d45bb010e5dfaa2f34f9cb62c5e7f",
"assets/packages/web3modal_flutter/assets/dark/code_button.svg": "50639a4921acf72c11feb41c0dadb773",
"assets/packages/web3modal_flutter/assets/dark/logo_walletconnect.svg": "1062455cf06aba4ef160f906514a28ef",
"assets/packages/web3modal_flutter/assets/dark/extension_button.svg": "a1ebc16d3f6760e119bd0c436e724288",
"assets/packages/web3modal_flutter/assets/dark/web_button.svg": "61af2a36faadee5f62018fc59201cb11",
"assets/packages/web3modal_flutter/assets/dark/all_wallets.svg": "4ece03ffb6d614fd85a4d6df5b108d44",
"assets/packages/web3modal_flutter/assets/dark/input_cancel.svg": "66ea9f88351527973b7d22f22bcb86f7",
"assets/packages/web3modal_flutter/assets/dark/qr_code_button.svg": "87923d03176199d48b9cd2f46568844a",
"assets/packages/web3modal_flutter/assets/dark/mobile_button.svg": "3062507bbc0b5d2a29c104f6dbd61629",
"assets/packages/web3modal_flutter/assets/dark/desktop_button.svg": "2b42d2f08591c8176ee81299c2010009",
"assets/packages/web3modal_flutter/assets/dark/all_wallets_button.svg": "ade430bbada2c25a67ada7ad3fcc9443",
"assets/packages/web3modal_flutter/assets/png/2.0x/google_play.png": "6d9be20a67d8b99d04bbf688973b6c6e",
"assets/packages/web3modal_flutter/assets/png/2.0x/app_store.png": "9a63bdbc92a38638edeaedc32fe093d8",
"assets/packages/web3modal_flutter/assets/png/2.0x/logo_wc.png": "e4859e16523d9041a1647cea194df2b6",
"assets/packages/web3modal_flutter/assets/png/google_play.png": "cdbe574f3e9b36cf8ee5be25a630ecf0",
"assets/packages/web3modal_flutter/assets/png/app_store.png": "dd9fdf8975a6f9cf988d0871d5411f60",
"assets/packages/web3modal_flutter/assets/png/logo_wc.png": "c74d8be3ee19e7c6ecdf262b6fa21b4b",
"assets/packages/web3modal_flutter/assets/png/3.0x/google_play.png": "6d8da1b598c096f5a81e3d911c8ca4dd",
"assets/packages/web3modal_flutter/assets/png/3.0x/app_store.png": "aed9e5fcb620e705831ccda22a853031",
"assets/packages/web3modal_flutter/assets/png/3.0x/logo_wc.png": "394432e5d6edebe9077e6c67e41c6d39",
"assets/packages/web3modal_flutter/assets/network_placeholder.svg": "68f2b0a1756952f2f1dd75558b98a1de",
"assets/packages/web3modal_flutter/assets/token_placeholder.svg": "3a5862d4c9d5079be33d55691e730ae2",
"assets/packages/web3modal_flutter/assets/wallet_placeholder.svg": "1a9b45ad3b851a6cc7193ee61808aa7e",
"assets/packages/web3modal_flutter/assets/account_disconnect.svg": "1e962e3b5c49f1066d059ee7607ca0fe",
"assets/packages/web3modal_flutter/assets/light/qr_code.svg": "86e507bc2c166ffaa096de2a0f3dbe67",
"assets/packages/web3modal_flutter/assets/light/code_button.svg": "c39b1088176e162b5879bb9bcb3a49f1",
"assets/packages/web3modal_flutter/assets/light/logo_walletconnect.svg": "b7f6821ccd5d4b805b5dc6cc98a802f1",
"assets/packages/web3modal_flutter/assets/light/extension_button.svg": "c9d917766350916bd48e7dac6ea255dc",
"assets/packages/web3modal_flutter/assets/light/web_button.svg": "063a5bb2f31eba3e1291a5dbbb4b4e88",
"assets/packages/web3modal_flutter/assets/light/all_wallets.svg": "c1df4d56d2564aa3ccf28931ac51e916",
"assets/packages/web3modal_flutter/assets/light/input_cancel.svg": "f0a69929f42f8bce6b80ca38f0c723b8",
"assets/packages/web3modal_flutter/assets/light/qr_code_button.svg": "3f46784373248b623cbb9d569044f291",
"assets/packages/web3modal_flutter/assets/light/mobile_button.svg": "1a6d5978f470e5e56c93cd2602e86a2c",
"assets/packages/web3modal_flutter/assets/light/desktop_button.svg": "6cb02d5b2d4fe40c173337d8183dd5ea",
"assets/packages/web3modal_flutter/assets/light/all_wallets_button.svg": "34bd234b88d68986952d7f4e0cf65444",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/images/Axelar-Logo-Update.png": "a039ac24d9c908b954c0569c9ee04882",
"assets/assets/images/background_cat_blue.png": "87ac49b97904fe92f2d6781503ac062e",
"assets/assets/images/background_cat_pink.png": "bbb641bde1aadb422c4d88c6141ffc0a",
"assets/assets/images/net_icon_mumbai_polygon.png": "52d9ebf9a6a8a8a9ff2ae5b29e8c5406",
"assets/assets/images/logo_mini.png": "3239a6ea799db46c4d8c363eef21d44d",
"assets/assets/images/logo_old.png": "f74f4d5151c9df73656a3aac9ad2dd21",
"assets/assets/images/logo_half.png": "5bcb1445920b82b9591ecb5746d96e96",
"assets/assets/images/background-from-png-small.svg": "1297aa458ea27cfda81b83a6ceff0ba1",
"assets/assets/images/hyperlane.png": "abea9a0975b6b2b0b1b15ff105097882",
"assets/assets/images/wn_mascot.png": "ebc154d211def55ec7caa1926bee2faf",
"assets/assets/images/net_icon_fantom.png": "869148f05e1db05e432de4a71328f0c8",
"assets/assets/images/background_cat_orange_big.png": "b31f41276c09a404b5e3561215b921f6",
"assets/assets/images/witnet_logo_dark.png": "0a4844501a16eea564265550e72b12e1",
"assets/assets/images/hyperlane-name.svg": "036053a0cf24d19fae780ec018a5d928",
"assets/assets/images/red_cat_logo.svg": "41e096fd4108546c14ec0124df8e478d",
"assets/assets/images/logo.png": "9a1edbda6553bb7931fc951abec6ad7d",
"assets/assets/images/wn_dodao_mascot.png": "8b5a8872b60bded98697e3100a8456be",
"assets/assets/images/net_icon_zkevm.png": "364a65798232ec4ca329dca99004c774",
"assets/assets/images/logo_pyramid.png": "87492931186a69c775dc3d4d8b3f86e9",
"assets/assets/images/flutter_logo.svg": "fdb46fc7657324f79bd97928651e8274",
"assets/assets/images/zksync.png": "6626efbba160c4969af7e21ccf30c4e2",
"assets/assets/images/net_icon_satoshivm.png": "8f689b6011c9291e335ed60c2ccfaa24",
"assets/assets/images/LColor.svg": "3c0870b6cf77c0aff35cf81766a53145",
"assets/assets/images/niceshape.png": "1696f32fdc0dca2ef0e9c22da3880482",
"assets/assets/images/background.svg": "19e16a6424cac6765a19e581d1d05371",
"assets/assets/images/launcher-icon.png": "9e29cc12c647e7b45cead7d80c7ef570",
"assets/assets/images/favicon.ico": "26333565c90a6e430a61352d29a4939e",
"assets/assets/images/metamask-fox.svg": "c879a582a94e772b8ed27295ae83145d",
"assets/assets/images/LColor_optimized.svg": "6cd6e9f10a73ee672bb1d6c84d800863",
"assets/assets/images/LColor-from-png2.svg": "b97a5dd5a3bded44f0d5c9bcf12bdf24",
"assets/assets/images/net_icon_blast.png": "c2befc18faba7fb9a30f2655a24c80e5",
"assets/assets/images/logo_small.png": "cd9aacde1c2b83102aa4f4afaa001d46",
"assets/assets/images/LColor.png": "539d33d49e6e307ed23a0ccc259f8fb0",
"assets/assets/images/background.png": "985e35121c608ef9d858cee90ac022a5",
"assets/assets/images/metamask-icon-small.png": "12c20dc064ae5e0c9925dbb88938a8f8",
"assets/assets/images/cross.png": "7e22b210f61b4a400c337379b90c7647",
"assets/assets/images/background_part_bottom_big.png": "3d6fbf3cd1392bf0840a2326c6c2622f",
"assets/assets/images/MetaMask_Fox.svg": "d206794f79a670efe19d23659fe7ccec",
"assets/assets/images/wc_logo.svg": "d96272718d89ca0a3dd528cb0ca5123f",
"assets/assets/images/hyperlane-logo.svg": "e270edb699e89639a2d6d2cc6aac5f69",
"assets/assets/images/background_cat_orange.png": "946cf146c6968b3e33982065a8efdf83",
"assets/assets/images/background_cat_blue_big.png": "39c344ce0f230f123c77d2eee7cb3b3d",
"assets/assets/images/metamask-icon.svg": "ec2ff2d5353772bfe1506dc6202a6906",
"assets/assets/images/net_icon_scroll.png": "932b14be344753ffbe5e48214bf8f48c",
"assets/assets/images/metamask-icon2.svg": "ae920ed94ad315809a97d655918887e1",
"assets/assets/images/LayerZero.png": "727b2370686fc5babd89dc2782d2fe22",
"assets/assets/images/metamask-icon.png": "3253a86a8654cf51b16ab2d07b3b2345",
"assets/assets/images/metamask-icon-small40.png": "4fdecf25574bb93188f6fd8a4b3abb2c",
"assets/assets/images/cyrcle.png": "8259e93f2f24c352c69f5be2c8bbdff2",
"assets/assets/images/net_icon_sepolia.png": "bb99167bca6680bca542050bfca1d0eb",
"assets/assets/images/net_icon_manta.png": "070f16de8275e1ca89ee70ce927847ab",
"assets/assets/images/worm.png": "334b60448c7743a273a52cf2fd4a98ac",
"assets/assets/images/net_icon_eth.png": "3b0163178250bf08c48b184a242b80a7",
"assets/assets/images/wallpaper.svg": "4530f9fc9714603dab6909748002a308",
"assets/assets/images/background_part_top.png": "8ac9393212687ceee89b9623d4077da8",
"assets/assets/images/witnet_logo_light.png": "a8219bf6f56605687db4f419b065e9a7",
"assets/assets/images/background_part_bottom.png": "0e116654fdb2cea126fc7fbe7e14ff94",
"assets/assets/images/background_part_top_big.png": "db9bf9251d104344c0ed4839eace0208",
"assets/assets/images/background_cat_pink_big.png": "0eda8edb898c1ccdbab7439f6c783a9e",
"assets/assets/images/net_icon_fantom_sonic.png": "a3c472f838557322728415d7512b933f",
"assets/assets/images/net_icon_moonbeam.png": "3a8efbd09d9a144d90cdd5e8f596eaa7",
"assets/assets/images/background2.png": "7c143d273b1d18e684762feec88c2714",
"assets/assets/images/LColor-from-png.svg": "187c173336ea099bbcf52acd6466c5c5",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/messages.json": "8c9e669dbe7a40671a82613232b5e937",
"assets/assets/rive_animations/rating_animation_.riv": "94a77f796b050662f3df7e130affec67",
"assets/assets/rive_animations/paw.riv": "a88deb1f9c1d4e78f3e0dc529b88d83a",
"assets/assets/rive_animations/cat-blinking.riv": "72a57ac109a12fad93a5f93e12b24784",
"assets/assets/rive_animations/clew_with_cat.riv": "1ba267993484364567e3db617694e3af",
"assets/assets/rive_animations/clew.riv": "e18539d0640c6ba078d007bb6d650e0b",
"assets/assets/rive_animations/clew2.riv": "7b6673faae2cf2dfe8a24d18dd97e981",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/rating_animation.riv": "beae624dcc97a0d0161210f81153b854",
"assets/fonts/MaterialIcons-Regular.otf": "73257a29c8136bd872d8992b7a4893b4",
"assets/AssetManifest.bin": "0678c7a9e436358fc153bcd83c7564e1",
"flutter_bootstrap.js": "9f27e602dcbe6d30514e44fe92e6b0f3",
"manifest.json": "2731637b498379b744cc3b91f7c7ef23"};
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
