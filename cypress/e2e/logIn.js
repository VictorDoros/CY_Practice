import {
  checkURL,
  clickSimpleOnNthElement,
  typeTextSimple,
  checkElementState,
  checkElementStateAndHasText,
  stepDescription,
} from "../support/reusableFunctions"

import url from "../urls/urls.json"
import data from "../fixtures/contactList_testData.json"
import basicData from "../support/basic_data.json"
import logIn from "../selectors/logIn.sel"

describe("Log in page ", { tags: ["@functional", "@login"] }, () => {
  beforeEach(() => {
    stepDescription("Reach the page")
    cy.visit(url.loginPage)
  })

  /**
   * Basic test for 'Log in'
   */
  it("Check the 'Log In' URL", () => {
    stepDescription("Check the 'Log in' URL")
    checkURL(url.baseURL + url.loginPage)
  })

  /**
   * Basic test for 'Log in'
   */
  it("Log in to app", () => {
    stepDescription("Type an existent email")
    typeTextSimple(logIn.emailField, data.logIn.email)

    stepDescription("Insert the password")
    typeTextSimple(logIn.passwordField, data.logIn.correctPassword)

    stepDescription("Click on [Submit] button")
    clickSimpleOnNthElement(logIn.submitButton)

    stepDescription(
      "Confirm that the URL has been changed and you were logged in"
    )
    checkURL(url.baseURL + url.contactList)
  })

  /**
   * Basic test for 'Log in'
   */
  it("Hit the [Submit] button without filling in the fields", () => {
    stepDescription("Check that no error is displayed")
    checkElementState(logIn.errorMessage, basicData.stateData.notBeVisible)

    stepDescription("Click on [Submit] button")
    clickSimpleOnNthElement(logIn.submitButton)

    stepDescription("Check the presence of the error and it's message")
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
    stepDescription("Check that no error is displayed")
    checkElementState(logIn.errorMessage, basicData.stateData.notBeVisible)

    stepDescription("Type an existent email")
    typeTextSimple(logIn.emailField, data.logIn.email)

    stepDescription("Insert the incorrect password")
    typeTextSimple(logIn.passwordField, data.logIn.incorrectPassword)

    stepDescription("Click on [Submit] button")
    clickSimpleOnNthElement(logIn.submitButton)

    stepDescription("Check the presence of the error and it's message")
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
