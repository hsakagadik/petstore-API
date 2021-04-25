# Petstore

E2E test with Cypress and Cucumber

See API definition on https://petstore.swagger.io/#/

## Installation

Needed [Node.js](https://nodejs.dev/) installed.

Run the following command before running the tests
```bash
npm install cypress
npm install cypress-cucumber-preprocessor
```

## Usage

Run the following command for running the tests

```bash
npx cypress open
```

## Cucumber steps definitions
Common steps for API testing: 
 - Given that we use the file {string} as the request  (Files needs to be located on fixtures folder)
 - When we do a {string} call to {string} (endpoint relative to API baseUrl. See cypress.json for environment variable)
 - Then the status code is {int}
 - Then the response body should have the property {string} with the value {string}
 - Then the response should have the property {string}

These steps are located in "/cypress/integration/common"

### Author
Nayla Taguada
