import { Utility } from "../support/utility.js"

import {
  checkURL,
  clickSimpleOnNthElement,
  typeTextSimple,
  checkElementState,
  checkElementStateAndHasText,
  stepDescription,
} from "../support/reusableFunctions"

import urls from "../fixtures/urls.json"
import data from "../fixtures/contactList_testData.json"
import basicData from "../support/basic_data.json"
import logIn from "../selectors/logIn.sel"

//Call getBaseUrl() to get environment specific url value
const url = new Utility().getBaseUrl()

describe("Log in page ", { tags: ["@functional", "@login"] }, () => {
  beforeEach(() => {
    stepDescription("Reach the page")
    cy.visit(url)
  })

  /**
   * Basic test for 'Log in'
   * #001
   */
  it("Check the 'Log In' URL", () => {
    clickSimpleOnNthElement(logIn.signupButton)
    clickSimpleOnNthElement(logIn.cancelButton)
    stepDescription("Check the 'Log in' URL")
    checkURL(url + urls.loginPage)
  })

  /**
   * Basic test for 'Log in'
   * #002
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
    checkURL(urls.baseURL + urls.contactList)
  })

  /**
   * Basic test for 'Log in'
   * #003
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
   * #004
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
