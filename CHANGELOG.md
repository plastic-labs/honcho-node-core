# Changelog

## 1.3.0 (2025-08-06)

Full Changelog: [v1.2.0...v1.3.0](https://github.com/plastic-labs/honcho-node-core/compare/v1.2.0...v1.3.0)

### Features

* **api:** manual updates ([33d69ad](https://github.com/plastic-labs/honcho-node-core/commit/33d69ad2d9f807dc8a03358c58f9d02b3b616331))
* **api:** manual updates ([8d9ade0](https://github.com/plastic-labs/honcho-node-core/commit/8d9ade036965d3dbbf3fe4f1617b9c64a999d652))
* **api:** pluralize filter*s* everywhere for consistency ([85bba69](https://github.com/plastic-labs/honcho-node-core/commit/85bba69e127ac28c045a81f3410123d982291cc8))
* **mcp:** add logging when environment variable is set ([762a6ed](https://github.com/plastic-labs/honcho-node-core/commit/762a6ed1d16aea80aae5005609d340a8f0b72a40))
* **mcp:** remote server with passthru auth ([863aba7](https://github.com/plastic-labs/honcho-node-core/commit/863aba773f135c468e99bdad1b63f4fcec62825c))


### Bug Fixes

* **mcp:** avoid sending `jq_filter` to base API ([e3facf7](https://github.com/plastic-labs/honcho-node-core/commit/e3facf7eabb7f29b777e8a9b08cba46442248a52))
* **mcp:** fix bug in header handling ([1df946a](https://github.com/plastic-labs/honcho-node-core/commit/1df946a8bc75a3a70c0c07a5e98cb46540df1e6a))
* **mcp:** include required section for top-level properties and support naming transformations ([f84262b](https://github.com/plastic-labs/honcho-node-core/commit/f84262b10c15e9d1c651052a96300606cc00d5ca))
* **mcp:** reverse validJson capability option and limit scope ([a0a223c](https://github.com/plastic-labs/honcho-node-core/commit/a0a223c4fddde4a0ff1b8a0d00f619fa508fe7ea))


### Chores

* **internal:** codegen related update ([15273d8](https://github.com/plastic-labs/honcho-node-core/commit/15273d87960be85a6f1f2e6b8b22adac387d0052))
* **internal:** remove redundant imports config ([994c6fe](https://github.com/plastic-labs/honcho-node-core/commit/994c6fe3cb9d923220f4b021e569600d07e19517))
* **mcp:** formatting ([c43f297](https://github.com/plastic-labs/honcho-node-core/commit/c43f2974e3b51d409d30d4e7ff2b4658dee3bf40))

## 1.2.0 (2025-07-16)

Full Changelog: [v1.1.0...v1.2.0](https://github.com/plastic-labs/honcho-node-core/compare/v1.1.0...v1.2.0)

### Features

* **api:** manual updates ([f0abcce](https://github.com/plastic-labs/honcho-node-core/commit/f0abccef4cce82cfc938d1f2628c1be3133f3257))
* **api:** manual updates ([9058bd2](https://github.com/plastic-labs/honcho-node-core/commit/9058bd223a3c0cc6462741bf6fe69a77a6b25b3a))
* **api:** manual updates -- add file upload endpoints ([97aae16](https://github.com/plastic-labs/honcho-node-core/commit/97aae162ce2f5102bb5fffe699b0cbbee2c49ab6))
* **api:** manual updates: add file uploads ([51e754c](https://github.com/plastic-labs/honcho-node-core/commit/51e754c1ac2a0d452e1319c1f686912b7a7c592a))
* **mcp:** support filtering tool results by a jq expression ([e858c20](https://github.com/plastic-labs/honcho-node-core/commit/e858c209209410dceeb606f95249905a78c517b0))


### Bug Fixes

* **build:** bump node version in CI build to 20 to be compatible with MCP package ([31ec10d](https://github.com/plastic-labs/honcho-node-core/commit/31ec10da06bd4752aed3d0ca36442b5d4a8624ea))
* **ci:** release-doctor — report correct token name ([05c1d65](https://github.com/plastic-labs/honcho-node-core/commit/05c1d654e240b278cff59e2a87f0d8bc668335e2))
* **client:** don't send `Content-Type` for bodyless methods ([b49bd37](https://github.com/plastic-labs/honcho-node-core/commit/b49bd371e76f5421ba8e7534766c7d6599329f71))
* **mcp:** relax input type for asTextContextResult ([2c3728e](https://github.com/plastic-labs/honcho-node-core/commit/2c3728eaad5ffe1f38352144dbfe83ff7d2f7ba6))
* **mcp:** support jq filtering on cloudflare workers ([3d0b7ad](https://github.com/plastic-labs/honcho-node-core/commit/3d0b7adbbd409da90b4e7cfbe5806a95f303927f))


### Chores

* **ci:** only run for pushes and fork pull requests ([c9ea2fe](https://github.com/plastic-labs/honcho-node-core/commit/c9ea2fe665c1fda65afc5120d579e633272a5f17))
* make some internal functions async ([307b2b6](https://github.com/plastic-labs/honcho-node-core/commit/307b2b6a42f15391b55dc0e04a0ea3e46439367a))
* **mcp:** rework imports in tools ([d8d957a](https://github.com/plastic-labs/honcho-node-core/commit/d8d957a5d840ca197ff5a84d7d4f718602ff2d79))
* mention unit type in timeout docs ([0f32e52](https://github.com/plastic-labs/honcho-node-core/commit/0f32e52678ed6f9f353d1eda709865fe2ec7c701))

## 1.1.0 (2025-06-26)

Full Changelog: [v1.0.1...v1.1.0](https://github.com/plastic-labs/honcho-node-core/compare/v1.0.1...v1.1.0)

### Features

* **api:** manual updates ([59190aa](https://github.com/plastic-labs/honcho-node-core/commit/59190aa70374b91ef1a4b0be04dbf425f457ec8f))
* **api:** manual updates ([6e4765d](https://github.com/plastic-labs/honcho-node-core/commit/6e4765d5fd6bfdc1298928b53cc563cefa894661))


### Refactors

* **types:** replace Record with mapped types ([2e4cf99](https://github.com/plastic-labs/honcho-node-core/commit/2e4cf9930af24d2f5108e03839a95142b44d7954))

## 1.0.1 (2025-06-19)

Full Changelog: [v1.0.0...v1.0.1](https://github.com/plastic-labs/honcho-node-core/compare/v1.0.0...v1.0.1)

## 1.0.0 (2025-06-19)

Full Changelog: [v1.0.0...v1.0.0](https://github.com/plastic-labs/honcho-node-core/compare/v1.0.0...v1.0.0)

### Features

* **api:** change mcp package name ([b45f917](https://github.com/plastic-labs/honcho-node-core/commit/b45f917e6b0a03ab2b5f4dead2227d7a476af461))


### Chores

* update SDK settings ([84023c2](https://github.com/plastic-labs/honcho-node-core/commit/84023c2f5abdd4777fc97836240727262a12f233))

## 1.0.0 (2025-06-18)

Full Changelog: [v0.2.0...v1.0.0](https://github.com/plastic-labs/honcho-node-core/compare/v0.2.0...v1.0.0)

### Features

* **api:** manual updates ([6a0f7f0](https://github.com/plastic-labs/honcho-node-core/commit/6a0f7f0ac9eaa62caa05acd2de0b6a9800a506cb))
* **api:** manual updates ([0f08f4f](https://github.com/plastic-labs/honcho-node-core/commit/0f08f4f303dd269c0d978e7f7431dfad3e4a71b3))
* **api:** rewrite to peer paradigm ([9b92067](https://github.com/plastic-labs/honcho-node-core/commit/9b9206791d72157e3a8ec781b9f2629123380f3c))
* **client:** add support for endpoint-specific base URLs ([efbfe3a](https://github.com/plastic-labs/honcho-node-core/commit/efbfe3a67035876bc6835baef0308bb3fb2cd0bd))
* **mcp:** implement support for binary responses ([950efcd](https://github.com/plastic-labs/honcho-node-core/commit/950efcd61330acd2d313f9a0e3173a31e200c08c))
* **mcp:** include http information in tools ([36055c5](https://github.com/plastic-labs/honcho-node-core/commit/36055c5bc1d567e87ff126cafbba903e7cc33830))
* **mcp:** set X-Stainless-MCP header ([51478c1](https://github.com/plastic-labs/honcho-node-core/commit/51478c10423770a5d45ee5ac8fd876705f122d0f))
* **mcp:** support initializing the server with an "environment" ([229ce6f](https://github.com/plastic-labs/honcho-node-core/commit/229ce6fb0c95805673fc35d8735147f644aee2bd))


### Bug Fixes

* **mcp:** fix cursor schema transformation issue with recursive references ([83e67c4](https://github.com/plastic-labs/honcho-node-core/commit/83e67c4b221ed77612b635ccfb84f5f4d23c2215))
* **mcp:** include description in dynamic tool search ([db6193b](https://github.com/plastic-labs/honcho-node-core/commit/db6193bad9cd749734bc5f4e84a6fffee7902f39))
* publish script — handle NPM errors correctly ([fc8a136](https://github.com/plastic-labs/honcho-node-core/commit/fc8a136c55f19406172169b575041ab7875ebfe4))


### Chores

* **ci:** enable for pull requests ([70f9ede](https://github.com/plastic-labs/honcho-node-core/commit/70f9ededd7a83bd7ec9e01b8611f5d37da9950bf))
* **docs:** grammar improvements ([772c0eb](https://github.com/plastic-labs/honcho-node-core/commit/772c0eb1016d2eea2b8907bdec1fdc3b721f7c3a))
* **docs:** use top-level-await in example snippets ([61a2eb5](https://github.com/plastic-labs/honcho-node-core/commit/61a2eb57cebabc15ea8426c74ff2a4e49fd7c14d))
* improve docs for MCP servers ([6d0fe48](https://github.com/plastic-labs/honcho-node-core/commit/6d0fe48aa25c5a81df03e7e6fa13591859a8be4a))
* improve publish-npm script --latest tag logic ([9b6d4e0](https://github.com/plastic-labs/honcho-node-core/commit/9b6d4e0cde9dc18418e827d549cb103e935aad58))
* **internal:** make base APIResource abstract ([814f72a](https://github.com/plastic-labs/honcho-node-core/commit/814f72ae789b4301212c61ff34c96da336e464e2))
* **mcp:** provides high-level initMcpServer function and exports known clients ([a3e3064](https://github.com/plastic-labs/honcho-node-core/commit/a3e30649027b46e9e36b96d6873619797307fcdc))
* **mcp:** remove duplicate assignment ([014b55d](https://github.com/plastic-labs/honcho-node-core/commit/014b55dbec71a0703e3cb69fa3f4a4648db5b09f))


### Documentation

* **pagination:** improve naming ([2db86d4](https://github.com/plastic-labs/honcho-node-core/commit/2db86d4b038badeeeb25c65ce64968594db9c374))

## 0.2.0 (2025-05-15)

Full Changelog: [v0.1.0...v0.2.0](https://github.com/plastic-labs/honcho-node/compare/v0.1.0...v0.2.0)

### Features

* **api:** api update ([e0070f0](https://github.com/plastic-labs/honcho-node/commit/e0070f048f38bb46b2e874fff99cf4626dd19fa8))
* **mcp:** support dynamically discovering and invoking tools for APIs with many endpoints ([a1744e0](https://github.com/plastic-labs/honcho-node/commit/a1744e077c8ae72c33e02666acf9046728f24d3c))
* more gracefully handle $refs and work around schema limitations ([fc2155f](https://github.com/plastic-labs/honcho-node/commit/fc2155f557af5e833dc5409b660321dd1fa62838))


### Bug Fixes

* **mcp:** explicitly include zod and zod-to-json-schema in package.json ([2411040](https://github.com/plastic-labs/honcho-node/commit/2411040f1883b34967a61fc7385ef2e279243d7c))
* **mcp:** remove ajv dependency so MCP servers are more compatible with Cloudflare Workers ([a3aa0d5](https://github.com/plastic-labs/honcho-node/commit/a3aa0d5487e64d17d9b984656a7f4d70a79bd9ea))


### Chores

* **build:** automatically build subpackages if present ([d0e8b72](https://github.com/plastic-labs/honcho-node/commit/d0e8b728cff8f9c06dbcbf83950c3e4271ee02d5))
* **ci:** add timeout thresholds for CI jobs ([66e96d1](https://github.com/plastic-labs/honcho-node/commit/66e96d10224d55ae57498f3c93ce11c10fdad65e))
* **ci:** bump node version for release workflows ([530837d](https://github.com/plastic-labs/honcho-node/commit/530837d932a265feafe3e8cb97e37aebe0cf2332))
* **ci:** only use depot for staging repos ([cfe21eb](https://github.com/plastic-labs/honcho-node/commit/cfe21eb5b9c705b37c2b23094326bbc7a70a3060))
* **client:** minor internal fixes ([2284baf](https://github.com/plastic-labs/honcho-node/commit/2284baf0a3b3a87538ada780b86d89eaf0059e30))
* **internal:** codegen related update ([71c0b81](https://github.com/plastic-labs/honcho-node/commit/71c0b81ec1547244caf3844dc9a860f39665a852))
* **internal:** codegen related update ([5300210](https://github.com/plastic-labs/honcho-node/commit/53002100e5806c1d9bffb14287912503c01ce88f))
* **internal:** update dependency ([2b95042](https://github.com/plastic-labs/honcho-node/commit/2b950429da5fd721fe1b18df6a4fd3180ebde1ad))
* **tests:** use node 22 for CI tests ([609aea1](https://github.com/plastic-labs/honcho-node/commit/609aea130a6fdbced697e9a36e9bcd35a3967e6c))


### Documentation

* **readme:** fix typo ([dff651d](https://github.com/plastic-labs/honcho-node/commit/dff651d38245cca4f39f4e72f91dbb3d249ffef5))

## 0.1.0 (2025-04-10)

Full Changelog: [v0.0.11...v0.1.0](https://github.com/plastic-labs/honcho-node/compare/v0.0.11...v0.1.0)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#83](https://github.com/plastic-labs/honcho-node/issues/83)) ([d9ac028](https://github.com/plastic-labs/honcho-node/commit/d9ac028963482e43105f9ed0e4714279b4488040))
* **api:** api update ([4cee1e2](https://github.com/plastic-labs/honcho-node/commit/4cee1e28b5f23d36fa222e0f37f96b87cf2fdde3))
* **client:** accept RFC6838 JSON content types ([#84](https://github.com/plastic-labs/honcho-node/issues/84)) ([ee43c1e](https://github.com/plastic-labs/honcho-node/commit/ee43c1e9eff4ea37d42595c5d33e07f2729b2008))
* **client:** send `X-Stainless-Timeout` header ([#79](https://github.com/plastic-labs/honcho-node/issues/79)) ([00e5a1b](https://github.com/plastic-labs/honcho-node/commit/00e5a1b1331f7f74a0c50d31845249498e9ee6bb))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#93](https://github.com/plastic-labs/honcho-node/issues/93)) ([09c8810](https://github.com/plastic-labs/honcho-node/commit/09c88106383ae86b5a63712a5dea06e7975bf0c3))
* avoid type error in certain environments ([#89](https://github.com/plastic-labs/honcho-node/issues/89)) ([bc95c28](https://github.com/plastic-labs/honcho-node/commit/bc95c28365af13f8602d8d627f3b63024c7a9ff9))
* **client:** fix export map for index exports ([#80](https://github.com/plastic-labs/honcho-node/issues/80)) ([50907d7](https://github.com/plastic-labs/honcho-node/commit/50907d7b14b30be3a52886a1ab82dbd69b1832a0))
* **client:** normalize method ([#73](https://github.com/plastic-labs/honcho-node/issues/73)) ([f89c690](https://github.com/plastic-labs/honcho-node/commit/f89c69087921faaa2a309e10b24001da094669c1))
* **client:** send `X-Stainless-Timeout` in seconds ([#91](https://github.com/plastic-labs/honcho-node/issues/91)) ([47583ae](https://github.com/plastic-labs/honcho-node/commit/47583ae8b8f5ff081e22673a83314bd12c388c04))
* **exports:** ensure resource imports don't require /index ([#86](https://github.com/plastic-labs/honcho-node/issues/86)) ([3d9947f](https://github.com/plastic-labs/honcho-node/commit/3d9947faf1f88c1f7d0465769406f94288d1893b))
* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#90](https://github.com/plastic-labs/honcho-node/issues/90)) ([12e4048](https://github.com/plastic-labs/honcho-node/commit/12e4048ed490cbc17d1ddb1a665201aa1423b64a))
* **mcp:** fix readEnv type error ([f072743](https://github.com/plastic-labs/honcho-node/commit/f07274316050f6e19d909a9a4ffc8888da993565))
* **mcp:** include all necessary env vars in client instantiation ([338bb06](https://github.com/plastic-labs/honcho-node/commit/338bb061669134d93c56fe4c321f0aa00d8a62c6))
* **mcp:** point homepage and repo for mcp package to the `packages/mcp-server` directory ([#96](https://github.com/plastic-labs/honcho-node/issues/96)) ([82644c2](https://github.com/plastic-labs/honcho-node/commit/82644c2ba9621cfd7064411ebf0c4a40905eaf82))
* **mcp:** remove unused tools.ts ([#94](https://github.com/plastic-labs/honcho-node/issues/94)) ([eeeff4b](https://github.com/plastic-labs/honcho-node/commit/eeeff4b7cebf27c3a6080ef8abcce83fb47cf88e))


### Chores

* configure new SDK language ([#95](https://github.com/plastic-labs/honcho-node/issues/95)) ([25bd245](https://github.com/plastic-labs/honcho-node/commit/25bd245ff1f85a84fb92fc605a5a0b63ae48cb68))
* **exports:** cleaner resource index imports ([#87](https://github.com/plastic-labs/honcho-node/issues/87)) ([274a81f](https://github.com/plastic-labs/honcho-node/commit/274a81f8849164a972536deab341b0dd474e2b6d))
* **exports:** stop using path fallbacks ([#88](https://github.com/plastic-labs/honcho-node/issues/88)) ([8ad8649](https://github.com/plastic-labs/honcho-node/commit/8ad8649dc96a07446b69d61021af4d5781b78467))
* **internal:** add aliases for Record and Array ([#92](https://github.com/plastic-labs/honcho-node/issues/92)) ([2415a12](https://github.com/plastic-labs/honcho-node/commit/2415a121459b6a33ffdd85173ca5816ced46fb77))
* **internal:** codegen related update ([#74](https://github.com/plastic-labs/honcho-node/issues/74)) ([6e6fc48](https://github.com/plastic-labs/honcho-node/commit/6e6fc489de03c68bd34c127b4aaf8b9410fd9660))
* **internal:** codegen related update ([#75](https://github.com/plastic-labs/honcho-node/issues/75)) ([a990584](https://github.com/plastic-labs/honcho-node/commit/a9905846585c804528d9c668c6e35799de317557))
* **internal:** codegen related update ([#76](https://github.com/plastic-labs/honcho-node/issues/76)) ([0295117](https://github.com/plastic-labs/honcho-node/commit/0295117eb4af398dcbea2b9c06a633612b25eeec))
* **internal:** codegen related update ([#77](https://github.com/plastic-labs/honcho-node/issues/77)) ([3805b01](https://github.com/plastic-labs/honcho-node/commit/3805b015a510610d95a18b21a272c2fe022574ba))
* **internal:** codegen related update ([#78](https://github.com/plastic-labs/honcho-node/issues/78)) ([e81efbd](https://github.com/plastic-labs/honcho-node/commit/e81efbdd710e9077b0e34d75999edbab0e50cdfe))
* **internal:** fix devcontainers setup ([#81](https://github.com/plastic-labs/honcho-node/issues/81)) ([df524fb](https://github.com/plastic-labs/honcho-node/commit/df524fbe0ecbf91ce66cab1833d426499753b01c))
* **internal:** fix some typos ([#71](https://github.com/plastic-labs/honcho-node/issues/71)) ([819389e](https://github.com/plastic-labs/honcho-node/commit/819389ed8fedb1c9116d5bfdd180adc9a7d5cf7b))
* **internal:** reduce CI branch coverage ([2de3294](https://github.com/plastic-labs/honcho-node/commit/2de3294240ac1accd271954cc6fdf92e2ee3dc85))
* **internal:** remove extra empty newlines ([#85](https://github.com/plastic-labs/honcho-node/issues/85)) ([60d7b49](https://github.com/plastic-labs/honcho-node/commit/60d7b4970e4b912c955481016c80448f1ab320a3))
* **internal:** upload builds and expand CI branch coverage ([0fa4b4d](https://github.com/plastic-labs/honcho-node/commit/0fa4b4d3a77b3cbbe20484f1c703d99198174af0))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#82](https://github.com/plastic-labs/honcho-node/issues/82)) ([2cbe007](https://github.com/plastic-labs/honcho-node/commit/2cbe007f5e7fa8246e4b115dbefee3169dbe2cbc))

## 0.0.11 (2024-12-16)

Full Changelog: [v0.0.10...v0.0.11](https://github.com/plastic-labs/honcho-node/compare/v0.0.10...v0.0.11)

### Features

* **api:** api update ([#69](https://github.com/plastic-labs/honcho-node/issues/69)) ([e935432](https://github.com/plastic-labs/honcho-node/commit/e935432f477a0db8c40f0938a7189e84095c7270))
* **internal:** make git install file structure match npm ([#64](https://github.com/plastic-labs/honcho-node/issues/64)) ([c2a3286](https://github.com/plastic-labs/honcho-node/commit/c2a3286747f151076c5df328b1d15a395f698ca4))


### Chores

* **internal:** bump cross-spawn to v7.0.6 ([#66](https://github.com/plastic-labs/honcho-node/issues/66)) ([6abb709](https://github.com/plastic-labs/honcho-node/commit/6abb709d0c7ffac23c4c011f5923827576e68664))
* **internal:** remove unnecessary getRequestClient function ([#65](https://github.com/plastic-labs/honcho-node/issues/65)) ([cd1b27d](https://github.com/plastic-labs/honcho-node/commit/cd1b27d490ce16f14354a89086335a563f2df397))
* **internal:** update isAbsoluteURL ([#68](https://github.com/plastic-labs/honcho-node/issues/68)) ([0f35089](https://github.com/plastic-labs/honcho-node/commit/0f35089c96f38becbedfef37d51287a797d21cfe))
* remove redundant word in comment ([#63](https://github.com/plastic-labs/honcho-node/issues/63)) ([aa824a1](https://github.com/plastic-labs/honcho-node/commit/aa824a1e3ad5463452d4077d7473b1525bf238ce))
* **types:** nicer error class types + jsdocs ([#67](https://github.com/plastic-labs/honcho-node/issues/67)) ([3a5c429](https://github.com/plastic-labs/honcho-node/commit/3a5c429e2e632e07558fd077da614c5bc4fb145b))


### Documentation

* remove suggestion to use `npm` call out ([#61](https://github.com/plastic-labs/honcho-node/issues/61)) ([a269625](https://github.com/plastic-labs/honcho-node/commit/a269625dda4700b9878aa2a55ab1834664c19f91))

## 0.0.10 (2024-11-15)

Full Changelog: [v0.0.9...v0.0.10](https://github.com/plastic-labs/honcho-node/compare/v0.0.9...v0.0.10)

### Features

* **api:** api update ([#59](https://github.com/plastic-labs/honcho-node/issues/59)) ([aeac0e4](https://github.com/plastic-labs/honcho-node/commit/aeac0e4110048c0860c984b92a2401eb34a13b8a))


### Chores

* rebuild project due to codegen change ([#56](https://github.com/plastic-labs/honcho-node/issues/56)) ([126da8f](https://github.com/plastic-labs/honcho-node/commit/126da8f6c1b627b19a7b4900ad8a84c19da6799d))
* rebuild project due to codegen change ([#58](https://github.com/plastic-labs/honcho-node/issues/58)) ([3e76822](https://github.com/plastic-labs/honcho-node/commit/3e768223717585f365825ced6c88bb33f7cd8ddb))

## 0.0.9 (2024-11-08)

Full Changelog: [v0.0.8...v0.0.9](https://github.com/plastic-labs/honcho-node/compare/v0.0.8...v0.0.9)

### Bug Fixes

* **api:** swap package name back ([982e6e4](https://github.com/plastic-labs/honcho-node/commit/982e6e45c32d24ae98054b4a2ae0a65652c0a812))

## 0.0.8 (2024-11-07)

Full Changelog: [v0.1.0...v0.0.8](https://github.com/plastic-labs/honcho-node/compare/v0.1.0...v0.0.8)

### Features

* **api:** Add cloning feature ([#48](https://github.com/plastic-labs/honcho-node/issues/48)) ([e1c2a1a](https://github.com/plastic-labs/honcho-node/commit/e1c2a1a94e7c1123c25ce36e71ecf3fe26e15185))
* **api:** update via SDK Studio ([477affd](https://github.com/plastic-labs/honcho-node/commit/477affdce431e0a3cfab0a89ed82d0a4d671cea5))
* **api:** update via SDK Studio ([f89689e](https://github.com/plastic-labs/honcho-node/commit/f89689ebdb4911691307b94b568fb6198526c479))
* **api:** update via SDK Studio ([048f079](https://github.com/plastic-labs/honcho-node/commit/048f0795a97dd4cef5c38cd1c806451ef9deec34))
* **api:** update via SDK Studio ([751cfec](https://github.com/plastic-labs/honcho-node/commit/751cfec21f9c88b3155bda870feef0d80672749d))
* **api:** update via SDK Studio ([39b1bdf](https://github.com/plastic-labs/honcho-node/commit/39b1bdfc363bedc97cf525a51c5d6217456f15fe))
* **api:** update via SDK Studio ([a11e02e](https://github.com/plastic-labs/honcho-node/commit/a11e02ee566310082ea0aea49ba89de7cf58e27e))
* **api:** update via SDK Studio ([0d0f698](https://github.com/plastic-labs/honcho-node/commit/0d0f69874484513a253134924e429da30d7c1bb5))
* **api:** update via SDK Studio ([0e24b7a](https://github.com/plastic-labs/honcho-node/commit/0e24b7a6e9a67c894da3f5ae9061216e60e5d9b0))
* **api:** update via SDK Studio ([6f4ae87](https://github.com/plastic-labs/honcho-node/commit/6f4ae87cffe7a3634516a131d96827991228579d))
* **api:** update via SDK Studio ([1a2fb6f](https://github.com/plastic-labs/honcho-node/commit/1a2fb6fcf78cbfe14a7919c7d32816a12ab4e4f9))
* **api:** update via SDK Studio ([34ea231](https://github.com/plastic-labs/honcho-node/commit/34ea231a852f513b536fbf9068147f301bfe9180))
* **api:** update via SDK Studio ([351afe1](https://github.com/plastic-labs/honcho-node/commit/351afe16e68ddc044057358a2dcd55fbd79cb151))
* **api:** update via SDK Studio ([85b3685](https://github.com/plastic-labs/honcho-node/commit/85b368508e3c201197db5dd3fc45f018f8f2e512))


### Chores

* **internal:** version bump ([#51](https://github.com/plastic-labs/honcho-node/issues/51)) ([ad985a4](https://github.com/plastic-labs/honcho-node/commit/ad985a422a3c44b72cd60d85c11dd824f139d0fb))
* rebuild project due to codegen change ([#46](https://github.com/plastic-labs/honcho-node/issues/46)) ([7ffa4fd](https://github.com/plastic-labs/honcho-node/commit/7ffa4fdc087e8d1dfdca475905c1cd081331d66e))
* update SDK settings ([0a7f648](https://github.com/plastic-labs/honcho-node/commit/0a7f648b3ec320898b8a8e60d6129ec4312b0d5f))

## 0.1.0 (2024-11-07)

Full Changelog: [v0.0.7...v0.1.0](https://github.com/plastic-labs/honcho-node/compare/v0.0.7...v0.1.0)

### Features

* **api:** Add cloning feature ([#48](https://github.com/plastic-labs/honcho-node/issues/48)) ([54d640b](https://github.com/plastic-labs/honcho-node/commit/54d640b19ca9609d80eb2061e7bb0d62eacee395))


### Chores

* rebuild project due to codegen change ([#46](https://github.com/plastic-labs/honcho-node/issues/46)) ([d4f3332](https://github.com/plastic-labs/honcho-node/commit/d4f3332230439cf63e6b4b90602c63c94f04820d))

## 0.0.7 (2024-10-21)

Full Changelog: [v0.0.6...v0.0.7](https://github.com/plastic-labs/honcho-node/compare/v0.0.6...v0.0.7)

### Features

* **api:** api update ([#40](https://github.com/plastic-labs/honcho-node/issues/40)) ([404f89c](https://github.com/plastic-labs/honcho-node/commit/404f89cd152afcdd9a482ff9487c852298ff3ab9))
* **api:** api update ([#42](https://github.com/plastic-labs/honcho-node/issues/42)) ([d937f2d](https://github.com/plastic-labs/honcho-node/commit/d937f2dc21350a2f04f4385fc0e42b93c2f9acc2))
* **api:** api update ([#43](https://github.com/plastic-labs/honcho-node/issues/43)) ([4094526](https://github.com/plastic-labs/honcho-node/commit/4094526e55badf52050a5d486d7583ca2f489753))
* **api:** api update ([#44](https://github.com/plastic-labs/honcho-node/issues/44)) ([f36f035](https://github.com/plastic-labs/honcho-node/commit/f36f035b23769442fc8cb9102654d6494e1119a1))
* **api:** update via SDK Studio ([#35](https://github.com/plastic-labs/honcho-node/issues/35)) ([0fe4e34](https://github.com/plastic-labs/honcho-node/commit/0fe4e34b9adb0c6aefb97a7f86255f17ef07a605))


### Bug Fixes

* **errors:** pass message through to APIConnectionError ([#37](https://github.com/plastic-labs/honcho-node/issues/37)) ([099c25b](https://github.com/plastic-labs/honcho-node/commit/099c25b0a9bdfde9404f2760027c868f99565e3c))


### Chores

* better object fallback behaviour for casting errors ([#38](https://github.com/plastic-labs/honcho-node/issues/38)) ([3e16bc1](https://github.com/plastic-labs/honcho-node/commit/3e16bc162793c14e925f40868f85ec89bfda9c8f))
* **internal:** codegen related update ([#33](https://github.com/plastic-labs/honcho-node/issues/33)) ([9d50dfc](https://github.com/plastic-labs/honcho-node/commit/9d50dfc7b638295f9af0a11869fd47f4f319c4e5))
* **internal:** codegen related update ([#36](https://github.com/plastic-labs/honcho-node/issues/36)) ([dbade17](https://github.com/plastic-labs/honcho-node/commit/dbade177ef333f740138ff026a346a6e25bec229))


### Documentation

* update CONTRIBUTING.md ([#39](https://github.com/plastic-labs/honcho-node/issues/39)) ([0b370d5](https://github.com/plastic-labs/honcho-node/commit/0b370d587c6a73a78563f2faf807e2844fe9dc8f))

## 0.0.6 (2024-08-07)

Full Changelog: [v0.0.5...v0.0.6](https://github.com/plastic-labs/honcho-node/compare/v0.0.5...v0.0.6)

### Chores

* **internal:** codegen related update ([#30](https://github.com/plastic-labs/honcho-node/issues/30)) ([42b6a61](https://github.com/plastic-labs/honcho-node/commit/42b6a616180b26771390f681c2c3d68c8c60ac50))

## 0.0.5 (2024-08-01)

Full Changelog: [v0.0.4...v0.0.5](https://github.com/plastic-labs/honcho-node/compare/v0.0.4...v0.0.5)

### Features

* **api:** OpenAPI spec update via Stainless API ([#24](https://github.com/plastic-labs/honcho-node/issues/24)) ([f1760b0](https://github.com/plastic-labs/honcho-node/commit/f1760b014808b25acacea1dbe58d0e67e78b0709))
* **api:** update via SDK Studio ([#19](https://github.com/plastic-labs/honcho-node/issues/19)) ([d58ce64](https://github.com/plastic-labs/honcho-node/commit/d58ce641232a10967d41d45be9ff159f3c6f1583))
* **api:** update via SDK Studio ([#25](https://github.com/plastic-labs/honcho-node/issues/25)) ([d2b2c76](https://github.com/plastic-labs/honcho-node/commit/d2b2c76c4a28c3f2452492aedb240d563f33238c))


### Bug Fixes

* **compat:** remove ReadableStream polyfill redundant since node v16 ([#21](https://github.com/plastic-labs/honcho-node/issues/21)) ([697784b](https://github.com/plastic-labs/honcho-node/commit/697784bdd6d64b700cdc6ab1572a4ad130725d6b))


### Chores

* **ci:** correctly tag pre-release npm packages ([#27](https://github.com/plastic-labs/honcho-node/issues/27)) ([1f718ec](https://github.com/plastic-labs/honcho-node/commit/1f718eccfe135dc2bad1f9c31a43d1014e3831be))
* **docs:** fix incorrect client var names ([#22](https://github.com/plastic-labs/honcho-node/issues/22)) ([b19d486](https://github.com/plastic-labs/honcho-node/commit/b19d4865708dee7c6f5ac0af9ad74487709554e7))
* **internal:** add constant for default timeout ([#23](https://github.com/plastic-labs/honcho-node/issues/23)) ([67519e0](https://github.com/plastic-labs/honcho-node/commit/67519e0ebfbf52350f0dcbfd4b699285d5b765ec))
* **internal:** codegen related update ([#16](https://github.com/plastic-labs/honcho-node/issues/16)) ([8fd8961](https://github.com/plastic-labs/honcho-node/commit/8fd89613e59d87ecd9bf6822d69dc01e17cba411))
* **internal:** codegen related update ([#26](https://github.com/plastic-labs/honcho-node/issues/26)) ([5f40103](https://github.com/plastic-labs/honcho-node/commit/5f40103250bd1c732e9cd0e99c8f06e41f088a08))
* **internal:** codegen related update ([#28](https://github.com/plastic-labs/honcho-node/issues/28)) ([a87faf6](https://github.com/plastic-labs/honcho-node/commit/a87faf690c13f796027a92a18e8759846997aa8d))
* **tests:** update prism version ([#18](https://github.com/plastic-labs/honcho-node/issues/18)) ([09748fe](https://github.com/plastic-labs/honcho-node/commit/09748fe2cec34eb7c7d7ed1f839212e4c65642ea))

## 0.0.4 (2024-05-23)

Full Changelog: [v0.0.3...v0.0.4](https://github.com/plastic-labs/honcho-node/compare/v0.0.3...v0.0.4)

### Features

* **api:** update via SDK Studio ([#13](https://github.com/plastic-labs/honcho-node/issues/13)) ([40a8a98](https://github.com/plastic-labs/honcho-node/commit/40a8a98bfca8d9603d37109c98868ddacdace65b))

## 0.0.3 (2024-05-23)

Full Changelog: [v0.0.2...v0.0.3](https://github.com/plastic-labs/honcho-node/compare/v0.0.2...v0.0.3)

### Features

* **api:** OpenAPI spec update via Stainless API ([#10](https://github.com/plastic-labs/honcho-node/issues/10)) ([b523d40](https://github.com/plastic-labs/honcho-node/commit/b523d4033e9aa50a20ba2beb3de697a6caa91ad3))
* **api:** update via SDK Studio ([#11](https://github.com/plastic-labs/honcho-node/issues/11)) ([5ac8ff6](https://github.com/plastic-labs/honcho-node/commit/5ac8ff630c010182ab7a69e24f57ccd0b345b270))
* **api:** update via SDK Studio ([#9](https://github.com/plastic-labs/honcho-node/issues/9)) ([3f05b53](https://github.com/plastic-labs/honcho-node/commit/3f05b53412e8fee6e9ac993369c14dcb6a59146d))


### Chores

* **internal:** version bump ([#7](https://github.com/plastic-labs/honcho-node/issues/7)) ([917efc4](https://github.com/plastic-labs/honcho-node/commit/917efc407618b3fda49db2b0e429d461b1cca964))

## 0.0.2 (2024-05-16)

Full Changelog: [v0.0.2-alpha.1...v0.0.2](https://github.com/plastic-labs/honcho-node/compare/v0.0.2-alpha.1...v0.0.2)

### Features

* **api:** update via SDK Studio ([#4](https://github.com/plastic-labs/honcho-node/issues/4)) ([b9223aa](https://github.com/plastic-labs/honcho-node/commit/b9223aad8c83294ee36e3f4ef94bb7e2f28195a6))
* **api:** update via SDK Studio ([#6](https://github.com/plastic-labs/honcho-node/issues/6)) ([ed38967](https://github.com/plastic-labs/honcho-node/commit/ed3896777309256f7387c2e19471a6b81567fd9a))

## 0.0.2-alpha.1 (2024-05-09)

Full Changelog: [v0.0.1-alpha.0...v0.0.2-alpha.1](https://github.com/plastic-labs/honcho-node/compare/v0.0.1-alpha.0...v0.0.2-alpha.1)

### Features

* **api:** OpenAPI spec update via Stainless API ([#3](https://github.com/plastic-labs/honcho-node/issues/3)) ([92d65ac](https://github.com/plastic-labs/honcho-node/commit/92d65acee1b967d4a559ab2b4a5e9372f3637b91))
* **api:** update via SDK Studio ([477affd](https://github.com/plastic-labs/honcho-node/commit/477affdce431e0a3cfab0a89ed82d0a4d671cea5))
* **api:** update via SDK Studio ([f89689e](https://github.com/plastic-labs/honcho-node/commit/f89689ebdb4911691307b94b568fb6198526c479))
* **api:** update via SDK Studio ([048f079](https://github.com/plastic-labs/honcho-node/commit/048f0795a97dd4cef5c38cd1c806451ef9deec34))
* **api:** update via SDK Studio ([751cfec](https://github.com/plastic-labs/honcho-node/commit/751cfec21f9c88b3155bda870feef0d80672749d))
* **api:** update via SDK Studio ([39b1bdf](https://github.com/plastic-labs/honcho-node/commit/39b1bdfc363bedc97cf525a51c5d6217456f15fe))
* **api:** update via SDK Studio ([a11e02e](https://github.com/plastic-labs/honcho-node/commit/a11e02ee566310082ea0aea49ba89de7cf58e27e))
* **api:** update via SDK Studio ([0d0f698](https://github.com/plastic-labs/honcho-node/commit/0d0f69874484513a253134924e429da30d7c1bb5))
* **api:** update via SDK Studio ([0e24b7a](https://github.com/plastic-labs/honcho-node/commit/0e24b7a6e9a67c894da3f5ae9061216e60e5d9b0))
* **api:** update via SDK Studio ([6f4ae87](https://github.com/plastic-labs/honcho-node/commit/6f4ae87cffe7a3634516a131d96827991228579d))
* **api:** update via SDK Studio ([1a2fb6f](https://github.com/plastic-labs/honcho-node/commit/1a2fb6fcf78cbfe14a7919c7d32816a12ab4e4f9))
* **api:** update via SDK Studio ([34ea231](https://github.com/plastic-labs/honcho-node/commit/34ea231a852f513b536fbf9068147f301bfe9180))
* **api:** update via SDK Studio ([351afe1](https://github.com/plastic-labs/honcho-node/commit/351afe16e68ddc044057358a2dcd55fbd79cb151))
* **api:** update via SDK Studio ([85b3685](https://github.com/plastic-labs/honcho-node/commit/85b368508e3c201197db5dd3fc45f018f8f2e512))
* **api:** update via SDK Studio ([#1](https://github.com/plastic-labs/honcho-node/issues/1)) ([9531c0e](https://github.com/plastic-labs/honcho-node/commit/9531c0ea806202b70bc7a96752cd6e74a05b161b))


### Chores

* update SDK settings ([0a7f648](https://github.com/plastic-labs/honcho-node/commit/0a7f648b3ec320898b8a8e60d6129ec4312b0d5f))
