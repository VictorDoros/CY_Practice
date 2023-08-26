import "cypress-map"
import spok from "cy-spok"
import { recurse } from "cypress-recurse" //repeat an action until the condition is true

import {
  checkURL,
  clickSimpleOnNthElement,
  typeTextSimple,
  checkElementState,
  checkElementStateAndHasText,
} from "../support/reusableFunctions"

import url from "../urls/urls.json"
import data from "../fixtures/contactList_testData.json"
import locators from "../selectors/contactList_selectors.json"
import basicData from "../support/basic_data.json"

describe("Practice", { tags: ["@practice"] }, () => {
  it("Email validation with RegEx ", () => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/")

    cy.get("[name='email']").type("example@example.com")

    const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let isMatched = false

    cy.get("[name='email']")
      .invoke("val")
      .then((emailInput) => {
        if (emailInput.match(regExp)) {
          cy.log(`The element \"${emailInput}\" matched`)
          isMatched = true
        }
        expect(isMatched).to.be.true
      })

    //OR ANOTHER WAY
    const isMatching = (value) => {
      return value.match(regExp)
    }

    cy.get("[name='email']")
      .invoke("val")
      .should(
        "satisfy",
        isMatching,
        "The inserted email should match with RegEx"
      )
  })

  it("Show the number of projects ", { tags:"showNumberProjects"}, () => {
    cy.visit("https://glebbahmutov.com/")

    cy.get("#projects-count")
      .invoke("text")
      .then((text) => {
        let number = Number(text.replace(/\D/g, ""))
        expect(number).to.be.within(350, 400)
      })

    //OR MUCH SIMPLER
    cy.get("#projects-count")
      .invoke("text")
      .invoke("replace", /\D/g, "")
      .then(parseInt)
      .should("be.within", 350, 400)
      .then((number) => expect(number).to.be.within(350, 400))
  })

  it("Validate a row in a table", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    chai.config.truncateThreshold = 300 // To display the expected result in console instead of "Object [object]" when asserting

    const props = ["name", "position", "city", "amount"]
    const person = {
      name: "Jack",
      position: "Engineer",
      city: "Pune",
      amount: 32,
    }
    cy.contains(".tableFixHead tbody tr", "Jack")
      .find("td")
      .map("innerText")
      .apply((values) => Cypress._.zipObject(props, values))
      .update("amount", Number)
      .should(
        spok({
          name: person.name,
          position: person.position,
          city: person.city,
          amount: person.amount,
        })
      )
  })

  it("Compare a list when the order of elements is not known", () => {
    cy.visit(
      "https://www.google.com/search?q=list+of+elements+example&sca_esv=555879084&biw=1310&bih=961&sxsrf=AB5stBhUdS1_9W4c_RiaUPwuS1osxaEOug%3A1691753487995&ei=DxzWZPejPKG1i-gPmJGbgA4&oq=list+of+element+example&gs_lp=Egxnd3Mtd2l6LXNlcnAiF2xpc3Qgb2YgZWxlbWVudCBleGFtcGxlKgIIADIIEAAYBxgeGA8yCBAAGAgYBxgeMggQABgIGAcYHjIIEAAYCBgHGB4yCBAAGAUYBxgeMggQABgFGAcYHjIGEAAYCBgeMgYQABgIGB5IzhpQkgVY7hBwAXgBkAEAmAHiAaABtAmqAQU5LjEuMbgBA8gBAPgBAcICChAAGEcY1gQYsAPCAgoQABiKBRiwAxhDwgIHECMYigUYJ8ICBhAAGAcYHsICBhAAGB4YDcICCBAAGAgYHhgN4gMEGAAgQYgGAZAGCg&sclient=gws-wiz-serp"
    )

    const elements = [
      "N - Nitrogen.",
      "C - Carbon.",
      "H - Hydrogen.",
      "Li - Lithium.",
      "O - Oxygen.",
      "B - Boron.",
      "He - Helium.",
      "Be - Beryllium.",
    ].sort()

    chai.config.truncateThreshold = 300 // To display the expected result instead of "Object [object]" when asserting

    cy.get(".i8Z77e")
      .eq(0)
      .find("li")
      .map("innerText")
      .invoke("sort")
      .should("deep.equal", elements)
  })

  it("Remove numbers/text from strings", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    const listText = ["Radio", "Radio", "Radio"]
    const listNumbers = [3, 1, 2].sort()
    let newNumberList = []

    //REMOVE NUMBERS FROM STRING
    cy.get("[for*='radio']")
      .map("innerText")
      .mapInvoke("replace", /\d/g, "")
      .mapInvoke("trim")
      .should("deep.equal", listText)

    //REMOVE TEXT FROM STRING
    cy.get("[for*='radio']")
      .map("innerText")
      .mapInvoke("replace", /\D/g, "")
      .each(($el) => {
        newNumberList.push(parseInt($el))
      })
      .then(() => {
        expect(newNumberList.sort()).to.deep.eq(listNumbers)
      })
  })

  it("Satisfy a function condition", () => {
    cy.visit(
      "https://www.google.com/search?q=list+of+elements+example&sca_esv=555879084&biw=1310&bih=961&sxsrf=AB5stBhUdS1_9W4c_RiaUPwuS1osxaEOug%3A1691753487995&ei=DxzWZPejPKG1i-gPmJGbgA4&oq=list+of+element+example&gs_lp=Egxnd3Mtd2l6LXNlcnAiF2xpc3Qgb2YgZWxlbWVudCBleGFtcGxlKgIIADIIEAAYBxgeGA8yCBAAGAgYBxgeMggQABgIGAcYHjIIEAAYCBgHGB4yCBAAGAUYBxgeMggQABgFGAcYHjIGEAAYCBgeMgYQABgIGB5IzhpQkgVY7hBwAXgBkAEAmAHiAaABtAmqAQU5LjEuMbgBA8gBAPgBAcICChAAGEcY1gQYsAPCAgoQABiKBRiwAxhDwgIHECMYigUYJ8ICBhAAGAcYHsICBhAAGB4YDcICCBAAGAgYHhgN4gMEGAAgQYgGAZAGCg&sclient=gws-wiz-serp"
    )

    const isEven = (number) => {
      return number % 2 == 0
    }

    cy.get(".i8Z77e")
      .eq(0)
      .find("li")
      .its("length")
      .should("satisfy", isEven, "Number of elements should be even")
  })

  it("Filter And Parse Table Cells To Confirm The Sum Of Prices", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.get(".totalAmount")
      .invoke("text")
      .invoke("replace", /\D/g, "")
      .then(parseInt)
      .then((number) => {
        cy.get(".tableFixHead tbody tr td:nth-child(4)")
          .map("innerText")
          .map(Number)
          .print()
          .reduce((sum, current) => sum + current, 0)
          .should("eq", number)
      })
  })

  it("Confirm Text In Multiple Page Elements Using cy-spok", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

    cy.get(".greenLogo, .cart-header-navlink")
      .map("innerText")
      .should(
        spok(["GREENKART", spok.string, spok.test(/^Top/), "Flight Booking"])
      )
  })

  it("Show the number of filtered projects", () => {
    cy.visit("https://glebbahmutov.com/")

    cy.get("#projects-count")
      .invoke("text")
      .apply(parseInt)
      .should("be.above", 350)
      .then((n) => cy.get("#projects li").should("have.length", n))

    cy.get("#project-search-text").type("testing")

    cy.get("#projects-count")
      .invoke("text")
      .apply(parseInt)
      .should("be.below", 350)
      .then((newN) => cy.get("#projects li").should("have.length", newN))
  })

  it("cy.wrap() practice", () => {
    const getName = () => {
      return "Mark Johns"
    }

    cy.wrap({ name: getName }).invoke("name").should("eq", "Mark Johns")
  })

  after(() => {
    Cypress.session.clearAllSavedSessions()
  })
})
