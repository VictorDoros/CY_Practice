import { checkURL, clickSimpleOnNthElement } from "../functions/functions.js"

import url from "../urls/urls.json"
import data from "../testData/contactList_testData.json"
import locators from "../fixtures/contactList_selectors.json"

describe("Log in page ", () => {
  beforeEach(() => {
    cy.visit(url.loginPage)
  })

  /**
   * Check that you reached the 'Log In' page
   */
  it("Check the 'Log In' URL", () => {
    //Check the 'Log in' URL
    checkURL(url.baseURL + url.loginPage)
  })

  after(() => {
    Cypress.session.clearAllSavedSessions()
  })
})
