import {
  checkURL,
  clickSimpleOnNthElement,
  typeTextSimple,
  checkElementState,
  checkElementStateAndHasText,
} from "../functions/functions.js"

import url from "../urls/urls.json"
import data from "../testData/contactList_testData.json"
import locators from "../fixtures/contactList_selectors.json"
import basicData from "../basicData/basic_data.json"

describe("Log in page ", { tags: ["@functional"] }, () => {
  beforeEach(() => {
    cy.visit(url.loginPage)
  })

  /**
   * Basic test for 'Log in'
   */
  it("Check the 'Log In' URL", () => {
    //Check the 'Log in' URL
    checkURL(url.baseURL + url.loginPage)
  })

  /**
   * Basic test for 'Log in'
   */
  it("Log in to app", () => {
    //Type an existent email
    typeTextSimple(locators.logIn.emailField, data.logIn.email)
    //Insert the password
    typeTextSimple(locators.logIn.passwordField, data.logIn.correctPassword)
    //Click on [Submit] button
    clickSimpleOnNthElement(locators.logIn.submitButton)
    //Confirm that the URL has been changed and you were logged in
    checkURL(url.baseURL + url.contactList)
  })

  /**
   * Basic test for 'Log in'
   */
  it("Hit the [Submit] button without filling in the fields", () => {
    //Check that no error is displayed
    checkElementState(
      locators.logIn.errorMessage,
      basicData.stateData.notBeVisible
    )
    //Click on [Submit] button
    clickSimpleOnNthElement(locators.logIn.submitButton)
    //Check the presence of the error and it's message
    checkElementStateAndHasText(
      locators.logIn.errorMessage,
      basicData.stateData.beVisible,
      data.logIn.loginError
    )
  })

  /**
   * Basic test for 'Log in'
   */
  it("Fill in the fields with a wrong password and click on [Submit] button", () => {
    //Check that no error is displayed
    checkElementState(
      locators.logIn.errorMessage,
      basicData.stateData.notBeVisible
    )
    //Type an existent email
    typeTextSimple(locators.logIn.emailField, data.logIn.email)
    //Insert the incorrect password
    typeTextSimple(locators.logIn.passwordField, data.logIn.incorrectPassword)
    //Click on [Submit] button
    clickSimpleOnNthElement(locators.logIn.submitButton)
    //Check the presence of the error and it's message
    checkElementStateAndHasText(
      locators.logIn.errorMessage,
      basicData.stateData.beVisible,
      data.logIn.loginError
    )
  })

  after(() => {
    Cypress.session.clearAllSavedSessions()
  })
})
