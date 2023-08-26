import {
  checkURL,
  clickSimpleOnNthElement,
  typeTextSimple,
  checkElementState,
  checkElementStateAndHasText,
} from "../support/reusableFunctions"

import url from "../urls/urls.json"
import data from "../fixtures/contactList_testData.json"
import basicData from "../support/basic_data.json"
import logIn from "../selectors/logIn.sel"

describe("Log in page ", { tags: ["@functional", "@login"] }, () => {
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
    typeTextSimple(logIn.emailField, data.logIn.email)
    //Insert the password
    typeTextSimple(logIn.passwordField, data.logIn.correctPassword)
    //Click on [Submit] button
    clickSimpleOnNthElement(logIn.submitButton)
    //Confirm that the URL has been changed and you were logged in
    checkURL(url.baseURL + url.contactList)
  })

  /**
   * Basic test for 'Log in'
   */
  it("Hit the [Submit] button without filling in the fields", () => {
    //Check that no error is displayed
    checkElementState(logIn.errorMessage, basicData.stateData.notBeVisible)
    //Click on [Submit] button
    clickSimpleOnNthElement(logIn.submitButton)
    //Check the presence of the error and it's message
    checkElementStateAndHasText(
      logIn.errorMessage,
      basicData.stateData.beVisible,
      data.logIn.loginError
    )
  })

  /**
   * Basic test for 'Log in'
   */
  it("Fill in the fields with a wrong password and click on [Submit] button", () => {
    //Check that no error is displayed
    checkElementState(logIn.errorMessage, basicData.stateData.notBeVisible)
    //Type an existent email
    typeTextSimple(logIn.emailField, data.logIn.email)
    //Insert the incorrect password
    typeTextSimple(logIn.passwordField, data.logIn.incorrectPassword)
    //Click on [Submit] button
    clickSimpleOnNthElement(logIn.submitButton)
    //Check the presence of the error and it's message
    checkElementStateAndHasText(
      logIn.errorMessage,
      basicData.stateData.beVisible,
      data.logIn.loginError
    )
  })

  after(() => {
    Cypress.session.clearAllSavedSessions()
  })
})
