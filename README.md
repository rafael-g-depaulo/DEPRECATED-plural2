

# Plural2

This project was generated using [Nx](https://nx.dev).

## Build & Run in production:

To build and run an app in production in heroku, you need to set the START_SCRIPT and BUILD_SCRIPT env variables. Below is a table with the values for each for the appropriate apps:

| App    | BUILD_SCRIPT                      | START_SCRIPT         |
|--------|-----------------------------------|----------------------|
| client | `nx run client:build:production`  | `nx run client:prod` |
| strapi | `nx run strapi:install-and-build` | `nx run strapi:prod` |

Further deploy setup for each can be seen at each app's apps/\[app-name\]/README.md

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@plural2/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
