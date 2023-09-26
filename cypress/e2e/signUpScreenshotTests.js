import { Utility } from "../support/utility.ts"

import {
  clickSimpleOnNthElement,
  typeTextSimple,
  compareSnapshot,
} from "../support/reusableFunctions"

import data from "../fixtures/contactList_testData.json"
import signUp from "../selectors/signUp.sel"

//Call getBaseUrl() to get environment specific url value
const url = new Utility().getBaseUrl();

describe("Sign up - Screenshot tests ", { tags: ["@visual"] }, () => {
  beforeEach(() => {
    cy.visit(url)
  })

  /**
   * Basic screenshot test for Sign up
   */
  it("Click on [Submit] button with no filled in field", () => {
    //Click on [Sign up] button
    clickSimpleOnNthElement(signUp.signInButton)
    //Click on [Submit] button
    clickSimpleOnNthElement(signUp.submitButton)
    //Take a screenshot with the displayed error
    compareSnapshot(data.screenshotTest.firstSignUpError)
  })

  /**
   * Basic screenshot test for Sign up
   */
  it("Fill in the 'First name' field and click on [Submit] button", () => {
    //Click on [Sign up] button
    clickSimpleOnNthElement(signUp.signInButton)
    //Fill in the 'First name' field e.g. "Carol"
    typeTextSimple(signUp.firstNameField, data.signUp.firstName)
    //Click on [Submit] button
    clickSimpleOnNthElement(signUp.submitButton)
    //Take a screenshot with the displayed error
    compareSnapshot(data.screenshotTest.secondSignUpError)
  })

  /**
   * Basic screenshot test for Sign up
   */
  it("Fill in the 'First name' and 'Last name' fiels and click on [Submit] button", () => {
    //Click on [Sign up] button
    clickSimpleOnNthElement(signUp.signInButton)
    //Fill in the 'First name' field
    typeTextSimple(signUp.firstNameField, data.signUp.firstName)
    //Fill in the 'Last name' field e.g. "Marks"
    typeTextSimple(signUp.lastNameField, data.signUp.lastName)
    //Click on [Submit] button
    clickSimpleOnNthElement(signUp.submitButton)
    //Take a screenshot with the displayed error
    compareSnapshot(data.screenshotTest.thirdSignUpError)
  })

  /**
   * Basic screenshot test for Sign up
   */
  it("Fill in the 'First name', 'Last name' and 'Email' fiels and click on [Submit] button", () => {
    //Click on [Sign up] button
    clickSimpleOnNthElement(signUp.signInButton)
    //Fill in the 'First name' field e.g. "Carol"
    typeTextSimple(signUp.firstNameField, data.signUp.firstName)
    //Fill in the 'Last name' field e.g. "Marks"
    typeTextSimple(signUp.lastNameField, data.signUp.lastName)
    //Fill in the 'Email' field e.g. "carolmarks@email.com"
    typeTextSimple(signUp.emailField, data.signUp.email)
    //Click on [Submit] button
    clickSimpleOnNthElement(signUp.submitButton)
    //Take a screenshot with the displayed error
    compareSnapshot(data.screenshotTest.forthSignUpError)
  })

  /**
   * Basic screenshot test for Sign up
   */
  it("Fill in all the fiels with a invalid password and click on [Submit] button", () => {
    //Click on [Sign up] button
    clickSimpleOnNthElement(signUp.signInButton)
    //Fill in the 'First name' field e.g. "Carol"
    typeTextSimple(signUp.firstNameField, data.signUp.firstName)
    //Fill in the 'Last name' field e.g. "Marks"
    typeTextSimple(signUp.lastNameField, data.signUp.lastName)
    //Fill in the 'Email' field e.g. "carolmarks@email.com"
    typeTextSimple(signUp.emailField, data.signUp.email)
    //Fill in the 'Password' field e.g. "123456"
    typeTextSimple(signUp.passwordField, data.signUp.invalidPassword)
    //Click on [Submit] button
    clickSimpleOnNthElement(signUp.submitButton)
    //Take a screenshot with the displayed error

    compareSnapshot(data.screenshotTest.fifthSignUpError)
  })

  after(() => {
    Cypress.session.clearAllSavedSessions()
  })
})
