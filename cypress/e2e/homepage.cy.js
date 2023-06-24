/// <reference types="cypress" />

describe('Homepage Related Tests', () =>  {
    beforeEach('Navigate to homepage', () => {
        cy.clearCookies();
        cy.visit('');
    })
    it('Go homepage and see 6 cards about modules', () => {
        cy.get('.card.mt-4.top-card').each((item, index, list) => {
            expect(list).to.have.length(6);
            cy.wrap(list[0]).within(() => {
                cy.get('h5')
                .should('exist')
                .should('contain.text', 'Elements');
            })
        })
    })
})