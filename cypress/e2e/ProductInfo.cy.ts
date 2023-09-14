import { PRODUCT_ID, SEARCH_TERM } from "./constants"

describe('product details page', () => {
  beforeEach(() => {
    cy.visit(`http://localhost:3000/items/${PRODUCT_ID}`)
  })

  it('should render the product details', () => {
    cy.get('main section').first().find('picture img').should('be.visible')
    cy.get('main section').first().find('aside img').should('length', 3)

    cy.get('.gap-3 > .text-2xl').should('be.visible')
    cy.get('.gap-3 > .text-2xl').should('be.visible')

    cy.get(':nth-child(3) > p').should('be.visible')

    cy.get('.h-full').should('be.visible').should('have.text', 'Comprar')
  })

  it('should redirect to the main page', () => {
    cy.get('nav a').click()
    cy.url().should('include', '/')
  })
})