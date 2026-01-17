# Changelog

## 2.2.1 (2026-01-17)

Full Changelog: [v2.2.0...v2.2.1](https://github.com/plastic-labs/honcho-node-core/compare/v2.2.0...v2.2.1)

### Chores

* fix typo in descriptions ([dcef5ba](https://github.com/plastic-labs/honcho-node-core/commit/dcef5ba2f85e6405d696cfc3d097aa8218eb781d))
* **internal:** update `actions/checkout` version ([1f2bebf](https://github.com/plastic-labs/honcho-node-core/commit/1f2bebf98cd71622c439fc591648c0f7aff7ec32))
* **internal:** upgrade babel, qs, js-yaml ([c1ecab8](https://github.com/plastic-labs/honcho-node-core/commit/c1ecab8fe00d0423cad3399c571676d6aac112d3))
* **mcp:** add intent param to execute tool ([192d76d](https://github.com/plastic-labs/honcho-node-core/commit/192d76d901467b891874ed72b7f0ac2d1bff18a4))
* **mcp:** pass intent param to execute handler ([f645dc6](https://github.com/plastic-labs/honcho-node-core/commit/f645dc600ddb02a46262c7f2910441c083036906))
* **mcp:** upgrade dependencies ([2a751d5](https://github.com/plastic-labs/honcho-node-core/commit/2a751d5f4588180967d9d2720400e12e6205ddde))

## 2.2.0 (2026-01-13)

Full Changelog: [v2.1.0...v2.2.0](https://github.com/plastic-labs/honcho-node-core/compare/v2.1.0...v2.2.0)

### Features

* **api:** extra-high to max ([aed2573](https://github.com/plastic-labs/honcho-node-core/commit/aed2573de66acc6278149968f62ea2e40e2ae318))


### Chores

* **internal:** codegen related update ([ed7fb27](https://github.com/plastic-labs/honcho-node-core/commit/ed7fb273a7b2d5956821c894e59ff3bc133dcd1b))
* **internal:** codegen related update ([248314d](https://github.com/plastic-labs/honcho-node-core/commit/248314decafa9b7e4fc6ecd8169c1e3593973cc4))

## 2.1.0 (2026-01-12)

Full Changelog: [v2.0.0...v2.1.0](https://github.com/plastic-labs/honcho-node-core/compare/v2.0.0...v2.1.0)

### Features

* **api:** manual updates ([8829460](https://github.com/plastic-labs/honcho-node-core/commit/88294601b09d78160829423ff62474cf761732c5))

## 2.0.0 (2026-01-12)

Full Changelog: [v1.8.0...v2.0.0](https://github.com/plastic-labs/honcho-node-core/compare/v1.8.0...v2.0.0)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.

### Features

* **api:** add PeerGetRepresentationResponse ([8cc64d7](https://github.com/plastic-labs/honcho-node-core/commit/8cc64d7a5f2b5560939f769e2f68925e11fa25b9))
* **api:** honcho 2.6.0 interface ([0a8bff5](https://github.com/plastic-labs/honcho-node-core/commit/0a8bff5419c949180d39e9bc9d5d8750867d2240))
* **api:** manual updates ([7cd684c](https://github.com/plastic-labs/honcho-node-core/commit/7cd684ce61594b777aa9e6bdf9d7831a2af229ab))
* **api:** manual updates ([dc4ac0f](https://github.com/plastic-labs/honcho-node-core/commit/dc4ac0ffd48642608da2f99f306f77f7ee5a9d1d))
* **api:** manual updates -- `consolidate` dream_type to `omni` ([844cbb4](https://github.com/plastic-labs/honcho-node-core/commit/844cbb4ce01babf84633b2e9bc850c93b11a2f29))
* **api:** remove last 'observation' references ([eb114aa](https://github.com/plastic-labs/honcho-node-core/commit/eb114aa91328fa9cbc81a38b629a47cfe8f7e9fb))


### Bug Fixes

* **mcp:** correct code tool api output types ([c7987b7](https://github.com/plastic-labs/honcho-node-core/commit/c7987b7cab57067524da636b85d1363e94b50395))
* **mcp:** fix options parsing ([d80be1d](https://github.com/plastic-labs/honcho-node-core/commit/d80be1db7ce82cfbd290e95659c43ce83311c0e6))
* **mcp:** pass base url to code tool ([2442bcb](https://github.com/plastic-labs/honcho-node-core/commit/2442bcbf0d188dfb71d3b01ffc3e8b639d94420b))
* **mcp:** update code tool prompt ([79288fa](https://github.com/plastic-labs/honcho-node-core/commit/79288fa69be7a18c7017d1a2ce7ba27ba96b8b83))


### Chores

* break long lines in snippets into multiline ([5f1245b](https://github.com/plastic-labs/honcho-node-core/commit/5f1245b78d474a1e8f6f7e31a2ce934cc26458ce))
* **internal:** codegen related update ([8e00aef](https://github.com/plastic-labs/honcho-node-core/commit/8e00aeff9dd7fff301f037664f32c16ace55943c))
* **internal:** codegen related update ([d1f5880](https://github.com/plastic-labs/honcho-node-core/commit/d1f5880757921a677b7c6f9966964ccf92b178dc))
* **internal:** codegen related update ([732d07d](https://github.com/plastic-labs/honcho-node-core/commit/732d07dd64b51b498f0601cad9ed67e991e90586))
* **mcp:** remove deprecated tool schemes ([0b85e67](https://github.com/plastic-labs/honcho-node-core/commit/0b85e67d8d1a978088cab37f212a3c4f5b96c254))


### Documentation

* prominently feature MCP server setup in root SDK readmes ([d6fcd0d](https://github.com/plastic-labs/honcho-node-core/commit/d6fcd0d635b032675ceb2c2dfc7f6d88aadabb12))

## 1.8.0 (2025-12-15)

Full Changelog: [v1.7.0...v1.8.0](https://github.com/plastic-labs/honcho-node-core/compare/v1.7.0...v1.8.0)

### Features

* **api:** remove accidental "conclusions" and "QueueStatus" from main ([e8fdbd5](https://github.com/plastic-labs/honcho-node-core/commit/e8fdbd5600b70283d88461cdb5f7860a212d05dc))


### Bug Fixes

* **mcp:** add client instantiation options to code tool ([9a75f57](https://github.com/plastic-labs/honcho-node-core/commit/9a75f57280e2ee27cbf7fc983cd847751b27a671))


### Chores

* **mcp:** update lockfile ([0267d53](https://github.com/plastic-labs/honcho-node-core/commit/0267d53ffee27ea4bb06f93b9e57069ac46b1536))

## 1.7.0 (2025-12-08)

Full Changelog: [v1.6.1...v1.7.0](https://github.com/plastic-labs/honcho-node-core/compare/v1.6.1...v1.7.0)

### Features

* **api:** Backwards compatible changes ([e49197a](https://github.com/plastic-labs/honcho-node-core/commit/e49197a92c36c981677906b0dd976512cda99470))
* **mcp:** add typescript check to code execution tool ([31051a6](https://github.com/plastic-labs/honcho-node-core/commit/31051a66e40df4f8f6edc9c6805ee975cdc083d7))
* **mcp:** handle code mode calls in the Stainless API ([fddafb6](https://github.com/plastic-labs/honcho-node-core/commit/fddafb66d75b5f01ec67b752036d9371e7e62cbc))


### Bug Fixes

* **mcp:** correct code tool API endpoint ([4540d45](https://github.com/plastic-labs/honcho-node-core/commit/4540d45ea4af22fb5c227cee0e20b5ab6904e1ce))
* **mcp:** return correct lines on typescript errors ([0a71490](https://github.com/plastic-labs/honcho-node-core/commit/0a714908f0c1510b29aa9d0546ae05d6a7008fb6))


### Chores

* **internal:** codegen related update ([f718e5d](https://github.com/plastic-labs/honcho-node-core/commit/f718e5d9c983596b5bd6982e89b92823039f3e3d))
* **internal:** codegen related update ([9789e2b](https://github.com/plastic-labs/honcho-node-core/commit/9789e2b21990a21483e7ae1bf4c2c7f6b70eca29))
* use latest @modelcontextprotocol/sdk ([22a5ace](https://github.com/plastic-labs/honcho-node-core/commit/22a5aceb3583baff3528a0adf97949a528393059))

## 1.6.1 (2025-12-04)

Full Changelog: [v1.6.0...v1.6.1](https://github.com/plastic-labs/honcho-node-core/compare/v1.6.0...v1.6.1)

### Features

* **api:** Add Manual Observation Creation ([99000b7](https://github.com/plastic-labs/honcho-node-core/commit/99000b70b612db3d56851febb5af240929ce3174))

## 1.6.0 (2025-12-03)

Full Changelog: [v1.5.1...v1.6.0](https://github.com/plastic-labs/honcho-node-core/compare/v1.5.1...v1.6.0)

### Features

* **api:** manual updates ([d6d07b8](https://github.com/plastic-labs/honcho-node-core/commit/d6d07b85ccd3ee516e8f0c6014c0f78b9d14c954))
* **api:** manual updates ([76b5c15](https://github.com/plastic-labs/honcho-node-core/commit/76b5c156cf73204677d9e0bf327732e5fa89c7ec))
* **api:** manual updates ([c0badaf](https://github.com/plastic-labs/honcho-node-core/commit/c0badafadda7d0742850b01d048304bedc8738a7))
* **api:** manual updates ([dc56409](https://github.com/plastic-labs/honcho-node-core/commit/dc564090ecc34a215b70d85de9ba753157faa68e))
* **mcp:** add detail field to docs search tool ([7b10104](https://github.com/plastic-labs/honcho-node-core/commit/7b10104ce3763230d01aede98b9cf754570503ac))
* **mcp:** enable optional code execution tool on http mcp servers ([78f0623](https://github.com/plastic-labs/honcho-node-core/commit/78f0623e279c424ddd227f5475d950d03bd6d538))
* **mcp:** return logs on code tool errors ([76e9711](https://github.com/plastic-labs/honcho-node-core/commit/76e9711a5b82273a42120a14962dab8414f10054))


### Bug Fixes

* **mcpb:** pin @anthropic-ai/mcpb version ([4d9466d](https://github.com/plastic-labs/honcho-node-core/commit/4d9466dcf33c734e7ac7858ab1e81021a3085157))
* **mcp:** return tool execution error on api error ([91cd2b1](https://github.com/plastic-labs/honcho-node-core/commit/91cd2b1955d55063fbe73c22a4b73167b99b4131))
* **mcp:** return tool execution error on jq failure ([463177f](https://github.com/plastic-labs/honcho-node-core/commit/463177ff56ab702fb8d53876ff515f288e7b00c5))


### Chores

* **internal:** codegen related update ([525c6c6](https://github.com/plastic-labs/honcho-node-core/commit/525c6c6783ba3d673e62fd50e90b68cf44c681ce))
* **internal:** codegen related update ([801f693](https://github.com/plastic-labs/honcho-node-core/commit/801f6930f63669d397a65355c1e3257782a5405b))
* **internal:** grammar fix (it's -&gt; its) ([e7812a8](https://github.com/plastic-labs/honcho-node-core/commit/e7812a85bdcd83e1242251d29b48b9a3d15fbc60))
* mcp code tool explicit error message when missing a run function ([e5179b9](https://github.com/plastic-labs/honcho-node-core/commit/e5179b968fc0d1d1855a2aef4d6586fdf7f9c9da))
* **mcp:** add friendlier MCP code tool errors on incorrect method invocations ([962c884](https://github.com/plastic-labs/honcho-node-core/commit/962c88431a059dd62ae5631be9ca79713427fae2))
* **mcp:** add line numbers to code tool errors ([5f2b8f0](https://github.com/plastic-labs/honcho-node-core/commit/5f2b8f0e9b297e0dfbc96599b72505c3eba1611f))
* **mcp:** clarify http auth error ([bff3b0a](https://github.com/plastic-labs/honcho-node-core/commit/bff3b0a8d9ab8723ff98bdfe9f9932c3b937f8f2))
* **mcp:** upgrade jq-web ([e3589d7](https://github.com/plastic-labs/honcho-node-core/commit/e3589d791f0169042c55a0819cac301ce3c5b121))
* use structured error when code execution tool errors ([2497e67](https://github.com/plastic-labs/honcho-node-core/commit/2497e67e58d8b88c636304768d134bbedbce6359))


### Documentation

* **mcp:** add a README button for one-click add to Cursor ([b37f39c](https://github.com/plastic-labs/honcho-node-core/commit/b37f39cf39851458ebee7b448c31d803a356c71f))
* **mcp:** add a README link to add server to VS Code or Claude Code ([5a302e0](https://github.com/plastic-labs/honcho-node-core/commit/5a302e00898f8bc6d88ed7a86af6e817a01bd56d))

## 1.5.1 (2025-10-09)

Full Changelog: [v1.5.0...v1.5.1](https://github.com/plastic-labs/honcho-node-core/compare/v1.5.0...v1.5.1)

### Features

* **api:** manual updates ([990c67a](https://github.com/plastic-labs/honcho-node-core/commit/990c67a925d3cdf24ff2e3877215c0320bbc5e34))


### Chores

* extract some types in mcp docs ([0306d4d](https://github.com/plastic-labs/honcho-node-core/commit/0306d4de16645ac4a7583035cae5590e8b37afc2))

## 1.5.0 (2025-10-08)

Full Changelog: [v1.4.1-alpha.0...v1.5.0](https://github.com/plastic-labs/honcho-node-core/compare/v1.4.1-alpha.0...v1.5.0)

### Features

* **api:** api update ([4056d13](https://github.com/plastic-labs/honcho-node-core/commit/4056d13f5afac0ace75a3ff528d96c12fb37a5d5))
* **api:** manual updates ([3f7b87f](https://github.com/plastic-labs/honcho-node-core/commit/3f7b87fc554b86114f017841087eef45af5b566b))


### Chores

* **internal:** use npm pack for build uploads ([9bea0ab](https://github.com/plastic-labs/honcho-node-core/commit/9bea0abc73a4e4576ce3c74d63e04d576bdef626))

## 1.4.1-alpha.0 (2025-10-01)

Full Changelog: [v1.4.0...v1.4.1-alpha.0](https://github.com/plastic-labs/honcho-node-core/compare/v1.4.0...v1.4.1-alpha.0)

### Features

* **api:** Peer Card ([0973006](https://github.com/plastic-labs/honcho-node-core/commit/09730063bbf51415242b0383ddb92f535da90500))
* **mcp:** add code execution tool ([75e0089](https://github.com/plastic-labs/honcho-node-core/commit/75e00892ec170c8b94453b56a19c940dadc2daac))
* **mcp:** add docs search tool ([4b42c52](https://github.com/plastic-labs/honcho-node-core/commit/4b42c528692ad12030f05223d12884e95735672e))
* **mcp:** add mcp bundles to build script ([eee6848](https://github.com/plastic-labs/honcho-node-core/commit/eee68486d73b10f91d83a39daca8f86b65b10cbf))
* **mcp:** add option for including docs tools ([72cad62](https://github.com/plastic-labs/honcho-node-core/commit/72cad62a518e3cd922afd33b6fe04d7c38b94906))
* **mcp:** add option to infer mcp client ([535e557](https://github.com/plastic-labs/honcho-node-core/commit/535e5579855686d7df8f31848756b010230df43c))
* **mcp:** allow setting logging level ([2504386](https://github.com/plastic-labs/honcho-node-core/commit/25043861fb95e861cc637b8287bf4358d862da80))
* **mcp:** enable experimental docs search tool ([01b93d8](https://github.com/plastic-labs/honcho-node-core/commit/01b93d84e1b5d761368746c5f6991a49b7a40a73))
* **mcp:** expose client options in `streamableHTTPApp` ([23cf51d](https://github.com/plastic-labs/honcho-node-core/commit/23cf51d109b7873c2287bbe5bef3ed1b43acc97c))
* **mcp:** parse query string as mcp client options in mcp server ([7201567](https://github.com/plastic-labs/honcho-node-core/commit/7201567dee2ba96c97f7ae719c6d4ca9801fed35))


### Bug Fixes

* **ci:** set permissions for DXT publish action ([42e973f](https://github.com/plastic-labs/honcho-node-core/commit/42e973f13a264dc5fdbe5d6b039e23f023481d52))
* coerce nullable values to undefined ([24e0125](https://github.com/plastic-labs/honcho-node-core/commit/24e01254ba6318535d9b3e76384c07789066b0e8))
* **mcp:** fix cli argument parsing logic ([d139d09](https://github.com/plastic-labs/honcho-node-core/commit/d139d09daacc3fe6f8aba88210c975a40a4556c0))
* **mcp:** fix query options parsing ([3ab8fac](https://github.com/plastic-labs/honcho-node-core/commit/3ab8fac11a518b28f29f56046852bf18aa90dfb1))
* **mcp:** fix uploading dxt release assets ([9b7ff80](https://github.com/plastic-labs/honcho-node-core/commit/9b7ff80a7a94d13d3f7f196530044e4626018021))
* **mcp:** generate additionalProperties=true for map schemas to avoid validation issues ([332a655](https://github.com/plastic-labs/honcho-node-core/commit/332a65522e9e5c860eacf348b9c4fb9a6faaa78d))
* **mcp:** resolve a linting issue in server code ([3865b7f](https://github.com/plastic-labs/honcho-node-core/commit/3865b7fca5bab8081cb995089f6bd36b900fbd12))


### Performance Improvements

* faster formatting ([fa3f27b](https://github.com/plastic-labs/honcho-node-core/commit/fa3f27b11bc24d3669aacd2d500637a45d5361e3))


### Chores

* ci build action ([e73e4ab](https://github.com/plastic-labs/honcho-node-core/commit/e73e4abd34f2b0d1bd34d3fb10bf134a71580de3))
* **codegen:** internal codegen update ([a6798d2](https://github.com/plastic-labs/honcho-node-core/commit/a6798d21777c99a564207de886aa44bc19f97487))
* **deps:** update dependency node-fetch to v2.6.13 ([bd7e8d7](https://github.com/plastic-labs/honcho-node-core/commit/bd7e8d7c889dbd97b7312ec623df3f2039671491))
* do not install brew dependencies in ./scripts/bootstrap by default ([cb4667b](https://github.com/plastic-labs/honcho-node-core/commit/cb4667b63fd54cf2945239d26d0258af76d2ca0f))
* **internal:** codegen related update ([836751c](https://github.com/plastic-labs/honcho-node-core/commit/836751c33658ac14b874d4d756a5c241564e3c0d))
* **internal:** codegen related update ([b546888](https://github.com/plastic-labs/honcho-node-core/commit/b546888b56591d3db991fbeebc7dcc24bf9c1c31))
* **internal:** codegen related update ([7e814eb](https://github.com/plastic-labs/honcho-node-core/commit/7e814ebfa37d23b50d9da331814bbfaaab3c39b0))
* **internal:** codegen related update ([4106bc6](https://github.com/plastic-labs/honcho-node-core/commit/4106bc63a223a47ead5227ce338d8287c4a34277))
* **internal:** fix incremental formatting in some cases ([f073902](https://github.com/plastic-labs/honcho-node-core/commit/f073902157135fdf5201fd9384ecce48f49da665))
* **internal:** formatting change ([ee1396e](https://github.com/plastic-labs/honcho-node-core/commit/ee1396e908a43202d90832744e879688b0762626))
* **internal:** gitignore .mcpb files ([2ddfa5e](https://github.com/plastic-labs/honcho-node-core/commit/2ddfa5e780676e1a04615ff0617ebad0264492e6))
* **internal:** ignore .eslintcache ([0a6feca](https://github.com/plastic-labs/honcho-node-core/commit/0a6feca4d3dbbed204cc9244d02557a077166d3d))
* **internal:** make mcp-server publishing public by defaut ([96d4fd1](https://github.com/plastic-labs/honcho-node-core/commit/96d4fd1edcbcf3aa718de75138dea6cfa790581b))
* **internal:** refactor array check ([df42cdc](https://github.com/plastic-labs/honcho-node-core/commit/df42cdcc65e496c683434a7a18cec493eae284f1))
* **internal:** remove .eslintcache ([8f0ca8e](https://github.com/plastic-labs/honcho-node-core/commit/8f0ca8e41969c0091ac6232110d3b2e3370e2f17))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([9277ed9](https://github.com/plastic-labs/honcho-node-core/commit/9277ed938851df474c7692ed57261e9bc5359781))
* **mcp:** add cors to oauth metadata route ([21599d6](https://github.com/plastic-labs/honcho-node-core/commit/21599d683a2cbf1bef91f2e7241d0e2418b16fdf))
* **mcp:** allow pointing `docs_search` tool at other URLs ([2af7d83](https://github.com/plastic-labs/honcho-node-core/commit/2af7d839c5ba0e29036b13f12ce3aa203b97c038))
* **mcp:** document remote server in README.md ([b3974b5](https://github.com/plastic-labs/honcho-node-core/commit/b3974b511cd6ac931e108118fc04c18155c324ba))
* **mcp:** minor cleanup of types and package.json ([0fb3a44](https://github.com/plastic-labs/honcho-node-core/commit/0fb3a44ab102ca07da5b82ef7fbb9bb34cb395ac))
* **mcp:** rename dxt to mcpb ([35fe49b](https://github.com/plastic-labs/honcho-node-core/commit/35fe49b55e764fcdd6402ea472e5e0c47080aa33))
* **mcp:** update package.json ([f86749f](https://github.com/plastic-labs/honcho-node-core/commit/f86749fc9cac30e8a5b0d1f54132d8713ab8de08))
* **mcp:** update README ([2949c5f](https://github.com/plastic-labs/honcho-node-core/commit/2949c5f32cc6f95498f5541c103c024949f22fc5))
* **mcp:** update types ([73a4ccb](https://github.com/plastic-labs/honcho-node-core/commit/73a4ccb00b5ca74db990e653645a4c448ccd30d1))
* **mcp:** upload dxt as release asset ([98bbf5b](https://github.com/plastic-labs/honcho-node-core/commit/98bbf5b6878675e19f3e29983286e7f59e3dbefb))
* update CI script ([c90a2bd](https://github.com/plastic-labs/honcho-node-core/commit/c90a2bdfa9ada46ac81ad63d76b9450c5948146f))
* update lockfile ([5c55d42](https://github.com/plastic-labs/honcho-node-core/commit/5c55d42671813a7d0035099217a568b8a131b700))

## 1.4.0 (2025-08-12)

Full Changelog: [v1.3.0...v1.4.0](https://github.com/plastic-labs/honcho-node-core/compare/v1.3.0...v1.4.0)

### Features

* **api:** manual updates ([27ac0a1](https://github.com/plastic-labs/honcho-node-core/commit/27ac0a14c928268ee7aa8a8c98bcb3274757c2e9))
* **api:** manual updates ([83e70cf](https://github.com/plastic-labs/honcho-node-core/commit/83e70cf3585c0733857a4c1c1f634c6e38617efd))
* **api:** manual updates ([56d3b6b](https://github.com/plastic-labs/honcho-node-core/commit/56d3b6b02646e70f3ae1e6a3a4c6ef90bb570e5c))
* **api:** Update Session Context ([91f3903](https://github.com/plastic-labs/honcho-node-core/commit/91f3903591d6246820db99331f205156d8c0214d))
* **mcp:** add unix socket option for remote MCP ([02104cc](https://github.com/plastic-labs/honcho-node-core/commit/02104ccf5fd8752f8bf2303206f248831ef2770c))


### Chores

* **internal:** codegen related update ([299c3e5](https://github.com/plastic-labs/honcho-node-core/commit/299c3e515111098962c4f8d62fb511db131a0486))
* **internal:** move publish config ([6125fed](https://github.com/plastic-labs/honcho-node-core/commit/6125fed8158c89fc15376be82fc7b2d1d7fe6130))
* **internal:** update comment in script ([95fcf02](https://github.com/plastic-labs/honcho-node-core/commit/95fcf0233b7b31882c93041b08887b428db68d2c))
* **mcp:** refactor streamable http transport ([10efbf3](https://github.com/plastic-labs/honcho-node-core/commit/10efbf3cacec5c3fed2d14b21761b8c327a93230))
* update @stainless-api/prism-cli to v5.15.0 ([9b52813](https://github.com/plastic-labs/honcho-node-core/commit/9b528138b13bfc29a4d0d703c6822390e0034f92))

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
