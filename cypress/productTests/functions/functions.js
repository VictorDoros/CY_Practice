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
