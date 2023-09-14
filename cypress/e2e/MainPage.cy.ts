import { SEARCH_TERM } from "./constants"

describe('Main Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should render the search input', () => {
    cy.get('input').should('be.visible')
  })

  it('should render the search button', () => {
    cy.get('button').should('be.visible')
  })

  it('should search for products and redirect', () => {
    cy.get('input').type(`${SEARCH_TERM}`)
    cy.get('button').click()
    cy.url().should('include', `/items?search=${SEARCH_TERM}`)
  })
})
