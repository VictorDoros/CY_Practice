
describe('Test Suite ', () => {
    /**
     * Test Suite
     */
    it('Access Goolge and check the URL', () => {
        //Reach the page https://www.google.com/
        cy.visit('https://www.google.com/')
        //Check the URL
        cy.url().should('eq', 'https://www.google.com/')
    })

    after(() => {
        Cypress.session.clearAllSavedSessions()
    })
})
