/**
 * Check the current URL is equal to expected URL
 *
 * @param {string} url The URL that should be opened
 *
 */
export const checkURL = (url) => {
  cy.url().should("eq", url)
}

/**
 * Check the current URL is equal to expected URL
 *
 * @param {string} text The description of the step
 *
 */
export const stepDescription = (text) => {
  cy.step(text)
}

/**
 * Click simple on element
 *
 * @param {string} elementLocator Locator of element id, class...
 *
 */
export const clickSimpleOnNthElement = (elementLocator) => {
  cy.get(elementLocator).click()
}

/**
 * Check the state of the element
 *
 * @param {string} elementLocator Locator of element id, class...
 * @param {string} state The state checkbox
 *
 */
export const checkElementState = (elementLocator, state) => {
  cy.get(elementLocator).should(state)
}

/**
 * Check the state of the element
 *
 * @param {string} elementLocator Locator of element id, class...
 * @param {string} state The state checkbox
 * @param {string} text Text that should be displayed from the found element
 *
 */
export const checkElementStateAndHasText = (elementLocator, state, text) => {
  cy.get(elementLocator)
    .should(state)
    .invoke("text")
    .then((elementText) => {
      expect(elementText).to.eq(text)
    })
}

/**
 * Type text with no click() method
 *
 * @param {string} elementLocator Locator of element id, class...
 * @param {string} textValue text to type into input field
 *
 */
export const typeTextSimple = (elementLocator, textValue) => {
  cy.get(elementLocator).type(textValue)
}

/**
 * Get a snapshopt and compare it with the initial one
 *
 * @param {string} numeOfFile The name of the file
 *
 */
export const compareSnapshot = (numeOfFile) => {
  cy.compareSnapshot(numeOfFile)
}

/**
 * Wait until element is displayed or hidden
 *
 * @param {string} elementLocator The element found on the page
 * @param {string} state The state of the found element
 *
 */
export const waitUntilElementIsDisplayedOrHidden = (elementLocator, state) => {
  cy.get(elementLocator, { timeout: 10000 }).should(state)
}

/**
 * Wait until element with a specific text is displayed or hidden
 *
 * @param {string} elementLocator The element found on the page
 * @param {string} text Text containing the found element
 * @param {string} state The state of the found element
 *
 */
export const waitUntilElementWithTextIsDisplayedOrHidden = (elementLocator, text, state) => {
  cy.get(elementLocator).contains(text, { timeout: 10000 }).should(state)
}

/**
 * Wait until an element has a specific property value
 *
 * @param {string} elementLocator The element found on the page
 * @param {string} cssProperty The property of css e.g. border, background-color
 * @param {string} value The value of CSS property
 *
 */
export const waitUntilElementHasPropertyValue = (elementLocator, cssProperty, value) => {
  cy.get(elementLocator, { timeout: 10000 }).should('have.css', cssProperty, value)
}
