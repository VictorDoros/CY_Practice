// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';
import 'cypress-real-events/support'
import compareSnapshotCommand from 'cypress-image-diff-js/dist/command'
import registerCypressGrep from '@cypress/grep/src/support'
compareSnapshotCommand()
registerCypressGrep()

// Alternatively you can use CommonJS syntax:
// require('./commands')

