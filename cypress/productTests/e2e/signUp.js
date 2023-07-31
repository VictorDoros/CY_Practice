import {
  checkURL,
  clickSimpleOnNthElement,
  checkElementState,
  checkElementStateAndHasText,
  typeTextSimple,
} from "../functions/functions.js"

import url from "../urls/urls.json"
import data from "../testData/contactList_testData.json"
import locators from "../fixtures/contactList_selectors.json"
import basicData from "../basicData/basic_data.json"
import { faker } from "@faker-js/faker"

//Generate random credentials
const firstName = faker.person.firstName()
const lastName = faker.person.lastName()
const email = faker.internet.email()
const invalidPassword = faker.internet.password({ length: 6 })
const validPassword = faker.internet.password({ length: 7 })

describe("Sign up page ", { tags: ['@functional']}, () => {
  beforeEach(() => {
    cy.visit(url.loginPage)
  })

  /**
   * Basic test for Sign up
   */
  it("Check the 'Log In' URL", () => {
    //Click on [Sign up] button
    clickSimpleOnNthElement(locators.signUp.signInButton)
    //Check the 'Sign Up' URL
    checkURL(url.baseURL + url.signInPage)
  })

  /**
   * Basic test for Sign up
   */
  it("Cancel the 'Sign up' process", () => {
    //Click on [Sign up] button
    clickSimpleOnNthElement(locators.signUp.signInButton)
    //Check the 'Sign Up' URL
    checkURL(url.baseURL + url.signInPage)
    //Click on [Cancel] button
    clickSimpleOnNthElement(locators.signUp.cancelButton)
    //Check that the URL has changed (you shoukld be on 'Log in' page)
    checkURL(url.baseURL + url.loginPage)
  })

  /**
   * Basic test for Sign up
   */
  it("Submit the form with no data", () => {
    //Click on [Sign up] button
    clickSimpleOnNthElement(locators.signUp.signInButton)
    //Check the 'Sign Up' URL
    checkURL(url.baseURL + url.signInPage)
    //Click on [Cancel] button
    clickSimpleOnNthElement(locators.signUp.cancelButton)
    //Check that the URL has changed (you shoukld be on 'Log in' page)
    checkURL(url.baseURL + url.loginPage)
  })

  /**
   * Basic test for Sign up
   */
  it("Click on [Submit] button with no filled in field", () => {
    //Click on [Sign up] button
    clickSimpleOnNthElement(locators.signUp.signInButton)
    //Check that no error message displayed
    checkElementState(
      locators.signUp.errorMessage,
      basicData.stateData.notBeVisible
    )
    //Click on [Submit] button
    clickSimpleOnNthElement(locators.signUp.submitButton)
    //Check the presence of the error when there is no filled in field
    checkElementStateAndHasText(
      locators.signUp.errorMessage,
      basicData.stateData.beVisible,
      data.signUp.noFilledInFieldErrorMessage
    )
  })

  /**
   * Basic test for Sign up
   */
  it("Fill in the 'First name' field and click on [Submit] button", () => {
    //Click on [Sign up] button
    clickSimpleOnNthElement(locators.signUp.signInButton)
    //Check that no error message displayed
    checkElementState(
      locators.signUp.errorMessage,
      basicData.stateData.notBeVisible
    )
    //Fill in the 'First name' field e.g. "Carol"
    typeTextSimple(locators.signUp.firstNameField, firstName)
    //Click on [Submit] button
    clickSimpleOnNthElement(locators.signUp.submitButton)
    //Check the presence of the error when only the 'First name' field is filled in
    checkElementStateAndHasText(
      locators.signUp.errorMessage,
      basicData.stateData.beVisible,
      data.signUp.errorMessageWithoutFirstName
    )
  })

  /**
   * Basic test for Sign up
   */
  it("Fill in the 'First name' and 'Last name' fiels and click on [Submit] button", () => {
    //Click on [Sign up] button
    clickSimpleOnNthElement(locators.signUp.signInButton)
    //Check that no error message displayed
    checkElementState(
      locators.signUp.errorMessage,
      basicData.stateData.notBeVisible
    )
    //Fill in the 'First name' field
    typeTextSimple(locators.signUp.firstNameField, firstName)
    //Fill in the 'Last name' field e.g. "Marks"
    typeTextSimple(locators.signUp.lastNameField, lastName)
    //Click on [Submit] button
    clickSimpleOnNthElement(locators.signUp.submitButton)
    //Check the presence of the error when only the 'First name' field is filled in
    checkElementStateAndHasText(
      locators.signUp.errorMessage,
      basicData.stateData.beVisible,
      data.signUp.errorMessageWithoutFirstNameLastName
    )
  })

  /**
   * Basic test for Sign up
   */
  it("Fill in the 'First name', 'Last name' and 'Email' fiels and click on [Submit] button", () => {
    //Click on [Sign up] button
    clickSimpleOnNthElement(locators.signUp.signInButton)
    //Check that no error message displayed
    checkElementState(
      locators.signUp.errorMessage,
      basicData.stateData.notBeVisible
    )
    //Fill in the 'First name' field e.g. "Carol"
    typeTextSimple(locators.signUp.firstNameField, firstName)
    //Fill in the 'Last name' field e.g. "Marks"
    typeTextSimple(locators.signUp.lastNameField, lastName)
    //Fill in the 'Email' field e.g. "carolmarks@email.com"
    typeTextSimple(locators.signUp.emailField, email)
    //Click on [Submit] button
    clickSimpleOnNthElement(locators.signUp.submitButton)
    //Check the presence of the error when only the 'First name' field is filled in
    checkElementStateAndHasText(
      locators.signUp.errorMessage,
      basicData.stateData.beVisible,
      data.signUp.errorMessageWithoutFirstNameLastNameEmail
    )
  })

  /**
   * Basic test for Sign up
   */
  it("Fill in all the fiels with an invalid password and click on [Submit] button", () => {
    //Click on [Sign up] button
    clickSimpleOnNthElement(locators.signUp.signInButton)
    //Check that no error message displayed
    checkElementState(
      locators.signUp.errorMessage,
      basicData.stateData.notBeVisible
    )
    //Fill in the 'First name' field e.g. "Carol"
    typeTextSimple(locators.signUp.firstNameField, firstName)
    //Fill in the 'Last name' field e.g. "Marks"
    typeTextSimple(locators.signUp.lastNameField, lastName)
    //Fill in the 'Email' field e.g. "carolmarks@email.com"
    typeTextSimple(locators.signUp.emailField, email)
    //Fill in the 'Password' field e.g. "123456"
    typeTextSimple(locators.signUp.passwordField, invalidPassword)
    //Click on [Submit] button
    clickSimpleOnNthElement(locators.signUp.submitButton)
    //Check the presence of the error when only the 'First name' field is filled in
    checkElementStateAndHasText(
      locators.signUp.errorMessage,
      basicData.stateData.beVisible,
      data.signUp.errorMessageInvalidPassowrd_firstPart +
        invalidPassword +
        data.signUp.errorMessageInvalidPassowrd_secondPart
    )
  })

  /**
   * Basic test for Sign up
   */
  it("Fill in all the fiels with a valid password and click on [Submit] button", () => {
    //Click on [Sign up] button
    clickSimpleOnNthElement(locators.signUp.signInButton)
    //Check that no error message displayed
    checkElementState(
      locators.signUp.errorMessage,
      basicData.stateData.notBeVisible
    )
    //Fill in the 'First name' field e.g. "Carol"
    typeTextSimple(locators.signUp.firstNameField, firstName)
    //Fill in the 'Last name' field e.g. "Marks"
    typeTextSimple(locators.signUp.lastNameField, lastName)
    //Fill in the 'Email' field e.g. "carolmarks@email.com"
    typeTextSimple(locators.signUp.emailField, email)
    //Fill in the 'Password' field e.g. "123456"
    typeTextSimple(locators.signUp.passwordField, validPassword)
    //Click on [Submit] button
    clickSimpleOnNthElement(locators.signUp.submitButton)
    //Check that the page was switched to 'Contact list'
    checkURL(url.baseURL + url.contactList)
  })

  after(() => {
    Cypress.session.clearAllSavedSessions()
  })
})
