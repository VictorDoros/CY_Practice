import {
  checkURL,
  clickSimpleOnNthElement,
  checkElementState,
  checkElementStateAndHasText,
  typeTextSimple,
} from "../support/reusableFunctions"

import url from "../urls/urls.json"
import data from "../fixtures/contactList_testData.json"
import signUp from "../selectors/signUp.sel"
import basicData from "../support/basic_data.json"
import { faker } from "@faker-js/faker"

//Generate random credentials
const firstName = faker.person.firstName()
const lastName = faker.person.lastName()
const email = faker.internet.email()
const invalidPassword = faker.internet.password({ length: 6 })
const validPassword = faker.internet.password({ length: 7 })

describe("Sign up page ", { tags: ["@functional"] }, () => {
  beforeEach(() => {
    cy.visit(url.loginPage)
  })

  /**
   * Basic test for Sign up
   */
  it("Check the 'Log In' URL", () => {
    //Click on [Sign up] button
    clickSimpleOnNthElement(signUp.signInButton)
    //Check the 'Sign Up' URL
    checkURL(url.baseURL + url.signInPage)
  })

  /**
   * Basic test for Sign up
   */
  it("Cancel the 'Sign up' process", () => {
    //Click on [Sign up] button
    clickSimpleOnNthElement(signUp.signInButton)
    //Check the 'Sign Up' URL
    checkURL(url.baseURL + url.signInPage)
    //Click on [Cancel] button
    clickSimpleOnNthElement(signUp.cancelButton)
    //Check that the URL has changed (you shoukld be on 'Log in' page)
    checkURL(url.baseURL + url.loginPage)
  })

  /**
   * Basic test for Sign up
   */
  it("Submit the form with no data", () => {
    //Click on [Sign up] button
    clickSimpleOnNthElement(signUp.signInButton)
    //Check the 'Sign Up' URL
    checkURL(url.baseURL + url.signInPage)
    //Click on [Cancel] button
    clickSimpleOnNthElement(signUp.cancelButton)
    //Check that the URL has changed (you shoukld be on 'Log in' page)
    checkURL(url.baseURL + url.loginPage)
  })

  /**
   * Basic test for Sign up
   */
  it("Click on [Submit] button with no filled in field", () => {
    //Click on [Sign up] button
    clickSimpleOnNthElement(signUp.signInButton)
    //Check that no error message displayed
    checkElementState(signUp.errorMessage, basicData.stateData.notBeVisible)
    //Click on [Submit] button
    clickSimpleOnNthElement(signUp.submitButton)
    //Check the presence of the error when there is no filled in field
    checkElementStateAndHasText(
      signUp.errorMessage,
      basicData.stateData.beVisible,
      data.signUp.noFilledInFieldErrorMessage
    )
  })

  /**
   * Basic test for Sign up
   */
  it("Fill in the 'First name' field and click on [Submit] button", () => {
    //Click on [Sign up] button
    clickSimpleOnNthElement(signUp.signInButton)
    //Check that no error message displayed
    checkElementState(signUp.errorMessage, basicData.stateData.notBeVisible)
    //Fill in the 'First name' field e.g. "Carol"
    typeTextSimple(signUp.firstNameField, firstName)
    //Click on [Submit] button
    clickSimpleOnNthElement(signUp.submitButton)
    //Check the presence of the error when only the 'First name' field is filled in
    checkElementStateAndHasText(
      signUp.errorMessage,
      basicData.stateData.beVisible,
      data.signUp.errorMessageWithoutFirstName
    )
  })

  /**
   * Basic test for Sign up
   */
  it("Fill in the 'First name' and 'Last name' fields and click on [Submit] button", () => {
    //Click on [Sign up] button
    clickSimpleOnNthElement(signUp.signInButton)
    //Check that no error message displayed
    checkElementState(signUp.errorMessage, basicData.stateData.notBeVisible)
    //Fill in the 'First name' field
    typeTextSimple(signUp.firstNameField, firstName)
    //Fill in the 'Last name' field e.g. "Marks"
    typeTextSimple(signUp.lastNameField, lastName)
    //Click on [Submit] button
    clickSimpleOnNthElement(signUp.submitButton)
    //Check the presence of the error when only the 'First name' field is filled in
    checkElementStateAndHasText(
      signUp.errorMessage,
      basicData.stateData.beVisible,
      data.signUp.errorMessageWithoutFirstNameLastName
    )
  })

  /**
   * Basic test for Sign up
   */
  it("Fill in the 'First name', 'Last name' and 'Email' fields and click on [Submit] button", () => {
    //Click on [Sign up] button
    clickSimpleOnNthElement(signUp.signInButton)
    //Check that no error message displayed
    checkElementState(signUp.errorMessage, basicData.stateData.notBeVisible)
    //Fill in the 'First name' field e.g. "Carol"
    typeTextSimple(signUp.firstNameField, firstName)
    //Fill in the 'Last name' field e.g. "Marks"
    typeTextSimple(signUp.lastNameField, lastName)
    //Fill in the 'Email' field e.g. "carolmarks@email.com"
    typeTextSimple(signUp.emailField, email)
    //Click on [Submit] button
    clickSimpleOnNthElement(signUp.submitButton)
    //Check the presence of the error when only the 'First name' field is filled in
    checkElementStateAndHasText(
      signUp.errorMessage,
      basicData.stateData.beVisible,
      data.signUp.errorMessageWithoutFirstNameLastNameEmail
    )
  })

  /**
   * Basic test for Sign up
   */
  it("Fill in all the fields with an invalid password and click on [Submit] button", () => {
    //Click on [Sign up] button
    clickSimpleOnNthElement(signUp.signInButton)
    //Check that no error message displayed
    checkElementState(signUp.errorMessage, basicData.stateData.notBeVisible)
    //Fill in the 'First name' field e.g. "Carol"
    typeTextSimple(signUp.firstNameField, firstName)
    //Fill in the 'Last name' field e.g. "Marks"
    typeTextSimple(signUp.lastNameField, lastName)
    //Fill in the 'Email' field e.g. "carolmarks@email.com"
    typeTextSimple(signUp.emailField, email)
    //Fill in the 'Password' field e.g. "123456"
    typeTextSimple(signUp.passwordField, invalidPassword)
    //Click on [Submit] button
    clickSimpleOnNthElement(signUp.submitButton)
    //Check the presence of the error when only the 'First name' field is filled in
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
   */
  it("Fill in all the fields with a valid password and click on [Submit] button", () => {
    //Click on [Sign up] button
    clickSimpleOnNthElement(signUp.signInButton)
    //Check that no error message displayed
    checkElementState(signUp.errorMessage, basicData.stateData.notBeVisible)
    //Fill in the 'First name' field e.g. "Carol"
    typeTextSimple(signUp.firstNameField, firstName)
    //Fill in the 'Last name' field e.g. "Marks"
    typeTextSimple(signUp.lastNameField, lastName)
    //Fill in the 'Email' field e.g. "carolmarks@email.com"
    typeTextSimple(signUp.emailField, email)
    //Fill in the 'Password' field e.g. "123456"
    typeTextSimple(signUp.passwordField, validPassword)
    //Click on [Submit] button
    clickSimpleOnNthElement(signUp.submitButton)
    //Check that the page was switched to 'Contact list'
    checkURL(url.baseURL + url.contactList)
  })

  after(() => {
    Cypress.session.clearAllSavedSessions()
  })
})
