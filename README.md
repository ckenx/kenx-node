# Kenx for JS
Development frameworks built for speed setup and delivery of any kind of javascript applications.

## Usage
Check the [full documentation][].

Feedback
-------

Feedbacks are all welcome. Kindly report any encounted [Issues here][] and we'll be glad to work on it right away. Thank you.


Contribution
-------

For those who would like to contribute, please do not esitate at all. Create a fork of the project, do your thing, send a PR and we'll get along from there.

Kindly check our [guidelines](./CONTRIBUTING.md) and [Code of Conduct](./CODE_OF_CONDUCT.md) for CONTRIBUTORS.

### Development roadmap

- [ ] Project
  - [ ] Architecture & Components
  - [ ] Command line Interface
  - [ ] Generate project commands
- [ ] Environment
  - [x] `.env` file strategy
  - [ ] `package.json` addon fields
  - [ ] Linting configuration
  - [x] Runtime dependencies
  - [x] Programming language support
    - [x] Typescript support
      - [x] `tsconfig.json` configuration
      - [x] Alias directory path & import support
      - [x] Kenx namespace
      - [x] Kenx @types
  - [ ] Debugger
- [x] Setup Configuration
  - [x] `.config` directory structure & file spliting strategy
  - [x] `yaml` & `json` extension file format
  - [x] Cross-file configuration block referencing
- [x] Setup Manager
  - [x] Configuration loader
  - [x] Cross-file configuration reference resolver
  - [x] Project's root directory specs
    - [x] Singleton - Single entrypoint
    - [x] Model View Controller (MVC) pattern
  - [x] Import plugin handler
- [ ] Core
  - [ ] Boilerplate creator
    - [ ] Runtime based dependencies loader
    - [x] Services autoloader
    - [x] Services dispatcher
- [ ] Adapters
  - [ ] SRIB - Singular Runtime Interface Bridge
    - [ ] Global properties
    - [ ] Features
  - [ ] Wrappers
    - [ ] Uniform interfaces for Services & Resource
    - [ ] Application Request & Response handlers
- [ ] Services & Resources
  - [x] Plugin support
  - [x] Servers
    - [x] Plugin support
    - [x] Configure & create a server
    - [x] Server-to-Server Binding
    - [x] Server management interface object: Deploy, Control, Drop
    - [x] Exceptions & Errors handler
  - [ ] Applications
    - [x] Plugin support
    - [x] Configure & create an application
    - [x] Application management interface object
    - [ ] Application Context Inspector (ACI) - Build into wrappers
      - [ ] Endpoint composites mirror function
      - [ ] Request & response flow monitor - hot trackers
      - [ ] Control & Events interface to
        - [ ] UI profiler
        - [ ] Unit test generator
        - [ ] SDK generator
    - [x] Exceptions & Errors handler
    - [x] Security features
      - [x] Request data parsers
      - [x] Trust proxy
      - [x] CORS
      - [x] Frame guard
      - [x] XXS guard
      - [x] Content Security Policy
    - [x] Trafic Logger
    - [x] User Session Manager
      - [x] Use Local session
      - [x] Use Session Store
      - [x] Cookie management
    - [ ] Assets & Storage Manager
      - [x] Static file server
      - [ ] CORS asset proxy
      - [x] Local & Cloud storage handler
      - [x] Multipart Upload handler
      - [ ] Download asset controls
    - [ ] API Compliance
      - [x] API Profile
      - [ ] Rate Limit
      - [ ] Maintenance Stage Mounting
    - [ ] API Authentication Proxy
  - [x] Databases
    - [x] Plugin support
    - [x] Configuer & mount database
    - [x] Database management interface object: Connect & Disconnect
    - [x] Exceptions & Errors handler
  - [ ] Service Workers
  - [ ] User Interface
    - [ ] Configuer & mount UI asset bundlers
    - [ ] Design framework integration
    - [ ] UI component & flow Testor
- [ ] Plugins
  - [x] In-build directory structure, grouping rules & guidelines - From `./src/plugins` folder
  - [ ] External installation from NPM - from `./node_modules` folder
  - [x] Import strategy
  - [ ] In-Build
    - [x] HTTP Server
    - [x] Socket.io Server
    - [ ] WebSocket Server
    - [ ] Proxy Server
    - [x] Express framework & extensions
    - [x] Fastify framework & extensions
    - [x] MySQL database client
    - [x] Mongo database client
    - [x] Redis database client
    - [ ] Webpack Bundler & extensions
    - [ ] Vite Bundler & extensions
    - [ ] EJS UI Engine
    - [ ] React UI Engine
    - [ ] MarkoJS UI Engine
    - [ ] Tailwind CSS Engine
    - [ ] UI Framework integration schema & handler
    - [ ] SEO Meta generator
    - [ ] Fake data generator
    - [ ] Jest Testor
    - [ ] Mocha Testor
    - [ ] Selenium Test Kit
    - [ ] OAuth2.0 - OpenID provider
    - [ ] Wilcard SSO strategies support
- [ ] UI Development Kit
  - [ ] Plugin support
  - [ ] Error Profiler
  - [ ] UI Builder Sandbox
    - [ ] Custom styles, Fonts & theme generator
    - [ ] UI components & pages designer
    - [ ] Reusable widgets/view & templates
    - [ ] Accessibility tools
    - [ ] Live collaboration tools
    - [ ] UI components marketplate
  - [ ] Easy Documentation access
    - [ ] Search engine (Online contents)
    - [ ] Errors & Features linkage
  - [ ] Collaboration forum (Online only)
    - [ ] Find & Post issues & comments
    - [ ] Direct sync with Github
- [ ] Test kit
  - [ ] Plugin support
  - [ ] Linting test & fix
  - [ ] Unit test auto-generator
    - [ ] Connection to ACI
    - [ ] Snippet bank base on selected test library
    - [ ] Test code & files generator
  - [ ] Run Test commands
- [ ] Deployment kit
  - [x] `.env` runtime configurations
  - [ ] Linting configuration & tools
  - [x] Development & Production deployment commands
  - [x] Prepack/Linting/Compile/Build project configuration & run commands
  - [x] Containerization configuration & run commands
  - [ ] CI/CD deployment pipeline configuration & run commands
- [ ] SDK generator
  - [ ] Plugin support
  - [ ] Connection to ACI
  - [ ] Code & files generator


It's not a fully completed roadmap. More features will be added as implementation goes on. Also, some aspects will be much more elaborated on, if the requirements or the needs change. The team will also share updates in case any major features overtaken by contributors must face some sort of change.


License
-------

This software is free to use under the MIT license. See the [LICENSE file][] for license text and copyright information.

[LICENSE file]: https://github.com/ckenx/kenx-js/blob/master/LICENSE
[Issues here]: https://github.com/ckenx/kenx-js/issues
[full documentation]: https://kenx.webmicros.com/kenx-js
