import { Utility } from "../support/utility.ts"

import {
  clickSimpleOnNthElement,
  typeTextSimple,
  compareSnapshot,
  stepDescription,
  waitUntilElementIsDisplayedOrHidden,
} from "../support/reusableFunctions"

import data from "../fixtures/contactList_testData.json"
import signUp from "../selectors/signUp.sel"
import basicData from "../support/basic_data.json"

//Call getBaseUrl() to get environment specific url value
const url = new Utility().getBaseUrl()

describe("Sign up - Screenshot tests ", { tags: ["@visual"] }, () => {
  beforeEach(() => {
    //stepDescription("Reach the page")
    cy.visit(url)
  })

  /**
   * Basic screenshot test for Sign up
   * #001
   */
  it("Click on [Submit] button with no filled in field", () => {
    //stepDescription("Click on [Sign up] button")
    clickSimpleOnNthElement(signUp.signInButton)

    //stepDescription("Click on [Submit] button")
    clickSimpleOnNthElement(signUp.submitButton)

    //stepDescription("Wait until the error message is displayed")
    waitUntilElementIsDisplayedOrHidden(
      signUp.errorMessage,
      basicData.stateData.beVisible
    )

    //stepDescription("Take a screenshot with the displayed error")
    compareSnapshot(data.screenshotTest.firstSignUpError)
  })

  // /**
  //  * Basic screenshot test for Sign up
  //  * #002
  //  */
  // it("Fill in the 'First name' field and click on [Submit] button", () => {
  //   stepDescription("Click on [Sign up] button")
  //   clickSimpleOnNthElement(signUp.signInButton)

  //   stepDescription("Fill in the 'First name' field e.g. 'Carol'")
  //   typeTextSimple(signUp.firstNameField, data.signUp.firstName)

  //   stepDescription("Click on [Submit] button")
  //   clickSimpleOnNthElement(signUp.submitButton)

  //   stepDescription("Wait until the error message is displayed")
  //   waitUntilElementIsDisplayedOrHidden(
  //     signUp.errorMessage,
  //     basicData.stateData.beVisible
  //   )

  //   stepDescription("Take a screenshot with the displayed error")
  //   compareSnapshot(data.screenshotTest.secondSignUpError)
  // })

  // /**
  //  * Basic screenshot test for Sign up
  //  * #003
  //  */
  // it("Fill in the 'First name' and 'Last name' fiels and click on [Submit] button", () => {
  //   stepDescription("Click on [Sign up] button")
  //   clickSimpleOnNthElement(signUp.signInButton)

  //   stepDescription("Fill in the 'First name' field")
  //   typeTextSimple(signUp.firstNameField, data.signUp.firstName)

  //   stepDescription("Fill in the 'Last name' field e.g. 'Marks'")
  //   typeTextSimple(signUp.lastNameField, data.signUp.lastName)

  //   stepDescription("Click on [Submit] button")
  //   clickSimpleOnNthElement(signUp.submitButton)

  //   stepDescription("Wait until the error message is displayed")
  //   waitUntilElementIsDisplayedOrHidden(
  //     signUp.errorMessage,
  //     basicData.stateData.beVisible
  //   )

  //   stepDescription("Take a screenshot with the displayed error")
  //   compareSnapshot(data.screenshotTest.thirdSignUpError)
  // })

  // /**
  //  * Basic screenshot test for Sign
  //  * #004
  //  */
  // it("Fill in the 'First name', 'Last name' and 'Email' fiels and click on [Submit] button", () => {
  //   stepDescription("Click on [Sign up] button")
  //   clickSimpleOnNthElement(signUp.signInButton)

  //   stepDescription("Fill in the 'First name' field e.g. 'Carol'")
  //   typeTextSimple(signUp.firstNameField, data.signUp.firstName)

  //   stepDescription("Fill in the 'Last name' field e.g. 'Marks'")
  //   typeTextSimple(signUp.lastNameField, data.signUp.lastName)

  //   stepDescription("Fill in the 'Email' field e.g. 'carolmarks@email.com'")
  //   typeTextSimple(signUp.emailField, data.signUp.email)

  //   stepDescription("Click on [Submit] button")
  //   clickSimpleOnNthElement(signUp.submitButton)

  //   stepDescription("Wait until the error message is displayed")
  //   waitUntilElementIsDisplayedOrHidden(
  //     signUp.errorMessage,
  //     basicData.stateData.beVisible
  //   )

  //   stepDescription("Take a screenshot with the displayed error")
  //   compareSnapshot(data.screenshotTest.forthSignUpError)
  // })

  // /**
  //  * Basic screenshot test for Sign up
  //  * #005
  //  */
  // it("Fill in all the fiels with a invalid password and click on [Submit] button", () => {
  //   stepDescription("Click on [Sign up] button")
  //   clickSimpleOnNthElement(signUp.signInButton)

  //   stepDescription("Fill in the 'First name' field e.g. 'Carol'")
  //   typeTextSimple(signUp.firstNameField, data.signUp.firstName)

  //   stepDescription("Fill in the 'Last name' field e.g. 'Marks'")
  //   typeTextSimple(signUp.lastNameField, data.signUp.lastName)

  //   stepDescription("Fill in the 'Email' field e.g. 'carolmarks@email.com'")
  //   typeTextSimple(signUp.emailField, data.signUp.email)

  //   stepDescription("Fill in the 'Password' field e.g. '123456'")
  //   typeTextSimple(signUp.passwordField, data.signUp.invalidPassword)

  //   stepDescription("Click on [Submit] button")
  //   clickSimpleOnNthElement(signUp.submitButton)

  //   stepDescription("Wait until the error message is displayed")
  //   waitUntilElementIsDisplayedOrHidden(
  //     signUp.errorMessage,
  //     basicData.stateData.beVisible
  //   )

  //   stepDescription("Take a screenshot with the displayed error")
  //   compareSnapshot(data.screenshotTest.fifthSignUpError)
  // })

  after(() => {
    Cypress.session.clearAllSavedSessions()
  })
})
