import { Utility } from "../support/utility.ts"

import {
  checkURL,
  clickSimpleOnNthElement,
  checkElementState,
  checkElementStateAndHasText,
  typeTextSimple,
  stepDescription,
} from "../support/reusableFunctions"

import urls from "../fixtures/urls.json"
import data from "../fixtures/contactList_testData.json"
import signUp from "../selectors/signUp.sel"
import basicData from "../support/basic_data.json"
import { faker } from "@faker-js/faker"

//Call getBaseUrl() to get environment specific url value
const url = new Utility().getBaseUrl()

//Generate random credentials
const firstName = faker.person.firstName()
const lastName = faker.person.lastName()
const email = faker.internet.email()
const invalidPassword = faker.internet.password({ length: 6 })
const validPassword = faker.internet.password({ length: 7 })

describe("Sign up page ", { tags: ["@webApp", "@functional", "@signUp"] }, () => {
  beforeEach(() => {
    stepDescription("Reach the page")
    cy.visit(url)
  })

  /**
   * Basic test for Sign up
   * #001
   */
  it("Check the 'Log In' URL", () => {
    stepDescription("Click on [Sign up] button")
    clickSimpleOnNthElement(signUp.signInButton)

    stepDescription("Check the 'Sign Up' URL")
    checkURL(url + urls.signInPage)
  })

  /**
   * Basic test for Sign up
   * #002
   */
  it("Cancel the 'Sign up' process", () => {
    stepDescription("Click on [Sign up] button")
    clickSimpleOnNthElement(signUp.signInButton)

    stepDescription("Check the 'Sign Up' URL")
    checkURL(url + urls.signInPage)

    stepDescription("Click on [Cancel] button")
    clickSimpleOnNthElement(signUp.cancelButton)

    stepDescription(
      "Check that the URL has changed (you shoukld be on 'Log in' page)"
    )
    checkURL(url + urls.loginPage)
  })

  /**
   * Basic test for Sign up
   * #003
   */
  it("Submit the form with no data", () => {
    stepDescription("Click on [Sign up] button")
    clickSimpleOnNthElement(signUp.signInButton)

    stepDescription("Check the 'Sign Up' URL")
    checkURL(url + urls.signInPage)

    stepDescription("Click on [Cancel] button")
    clickSimpleOnNthElement(signUp.cancelButton)

    stepDescription(
      "Check that the URL has changed (you shoukld be on 'Log in' page)"
    )
    checkURL(url + urls.loginPage)
  })

  /**
   * Basic test for Sign up
   * #004
   */
  it("Click on [Submit] button with no filled in field", () => {
    stepDescription("Click on [Sign up] button")
    clickSimpleOnNthElement(signUp.signInButton)

    stepDescription("Check that no error message displayed")
    checkElementState(signUp.errorMessage, basicData.stateData.notBeVisible)

    stepDescription("Click on [Submit] button")
    clickSimpleOnNthElement(signUp.submitButton)

    stepDescription(
      "Check the presence of the error when there is no filled in field"
    )
    checkElementStateAndHasText(
      signUp.errorMessage,
      basicData.stateData.beVisible,
      data.signUp.noFilledInFieldErrorMessage
    )
  })

  /**
   * Basic test for Sign up
   * #005
   */
  it("Fill in the 'First name' field and click on [Submit] button", () => {
    stepDescription("Click on [Sign up] button")
    clickSimpleOnNthElement(signUp.signInButton)

    stepDescription("Check that no error message displayed")
    checkElementState(signUp.errorMessage, basicData.stateData.notBeVisible)

    stepDescription("Fill in the 'First name' field")
    typeTextSimple(signUp.firstNameField, firstName)

    stepDescription("Click on [Submit] button")
    clickSimpleOnNthElement(signUp.submitButton)

    stepDescription(
      "Check the presence of the error when only the 'First name' field is filled in"
    )
    checkElementStateAndHasText(
      signUp.errorMessage,
      basicData.stateData.beVisible,
      data.signUp.errorMessageWithoutFirstName
    )
  })

  /**
   * Basic test for Sign
   * #006
   */
  it("Fill in the 'First name' and 'Last name' fields and click on [Submit] button", () => {
    stepDescription("Click on [Sign up] button")
    clickSimpleOnNthElement(signUp.signInButton)

    stepDescription("Check that no error message displayed")
    checkElementState(signUp.errorMessage, basicData.stateData.notBeVisible)

    stepDescription("Fill in the 'First name' field")
    typeTextSimple(signUp.firstNameField, firstName)

    stepDescription("Fill in the 'Last name' field")
    typeTextSimple(signUp.lastNameField, lastName)

    stepDescription("Click on [Submit] button")
    clickSimpleOnNthElement(signUp.submitButton)

    stepDescription(
      "Check the presence of the error when only the 'First name' field is filled in"
    )
    checkElementStateAndHasText(
      signUp.errorMessage,
      basicData.stateData.beVisible,
      data.signUp.errorMessageWithoutFirstNameLastName
    )
  })

  /**
   * Basic test for Sign up
   * #007
   */
  it("Fill in the 'First name', 'Last name' and 'Email' fields and click on [Submit] button", () => {
    stepDescription("Click on [Sign up] button")
    clickSimpleOnNthElement(signUp.signInButton)

    stepDescription("Check that no error message displayed")
    checkElementState(signUp.errorMessage, basicData.stateData.notBeVisible)

    stepDescription("Fill in the 'First name' field")
    typeTextSimple(signUp.firstNameField, firstName)

    stepDescription("Fill in the 'Last name' field")
    typeTextSimple(signUp.lastNameField, lastName)

    stepDescription("Fill in the 'Email' field")
    typeTextSimple(signUp.emailField, email)

    stepDescription("Click on [Submit] button")
    clickSimpleOnNthElement(signUp.submitButton)

    stepDescription(
      "Check the presence of the error when only the 'First name' field is filled in"
    )
    checkElementStateAndHasText(
      signUp.errorMessage,
      basicData.stateData.beVisible,
      data.signUp.errorMessageWithoutFirstNameLastNameEmail
    )
  })

  /**
   * Basic test for Sign up
   * #008
   */
  it("Fill in all the fields with an invalid password and click on [Submit] button", () => {
    stepDescription("Click on [Sign up] button")
    clickSimpleOnNthElement(signUp.signInButton)

    stepDescription("Check that no error message displayed")
    checkElementState(signUp.errorMessage, basicData.stateData.notBeVisible)

    stepDescription("Fill in the 'First name' field")
    typeTextSimple(signUp.firstNameField, firstName)

    stepDescription("Fill in the 'Last name' field")
    typeTextSimple(signUp.lastNameField, lastName)

    stepDescription("Fill in the 'Email' field")
    typeTextSimple(signUp.emailField, email)

    stepDescription("Fill in the 'Password' field")
    typeTextSimple(signUp.passwordField, invalidPassword)

    stepDescription("Click on [Submit] button")
    clickSimpleOnNthElement(signUp.submitButton)

    stepDescription(
      "Check the presence of the error when only the 'First name' field is filled in"
    )
    checkElementStateAndHasText(
      signUp.errorMessage,
      basicData.stateData.beVisible,
      data.signUp.errorMessageInvalidPassowrd_firstPart +
        invalidPassword +
        data.signUp.errorMessageInvalidPassowrd_secondPart
    )
  })

  /**
   * Basic test for Sign up
   * #009
   */
  it("Fill in all the fields with a valid password and click on [Submit] button", () => {
    stepDescription("Click on [Sign up] button")
    clickSimpleOnNthElement(signUp.signInButton)

    stepDescription("Check that no error message displayed")
    checkElementState(signUp.errorMessage, basicData.stateData.notBeVisible)

    stepDescription("Fill in the 'First name' field")
    typeTextSimple(signUp.firstNameField, firstName)

    stepDescription("Fill in the 'Last name' field")
    typeTextSimple(signUp.lastNameField, lastName)

    stepDescription("Fill in the 'Email' field")
    typeTextSimple(signUp.emailField, email)

    stepDescription("Fill in the 'Password' field")
    typeTextSimple(signUp.passwordField, validPassword)

    stepDescription("Click on [Submit] button")
    clickSimpleOnNthElement(signUp.submitButton)

    stepDescription("Check that the page was switched to 'Contact list'")
    checkURL(url + urls.contactList)
  })

  after(() => {
    Cypress.session.clearAllSavedSessions()
  })
})
