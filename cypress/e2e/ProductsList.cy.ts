import { AMMOUNT_FOUND, BASE_URL, PRODUCT_ID, SEARCH_TERM } from "./constants"

describe('Products List', () => {
  beforeEach(() => {
    cy.visit(`${BASE_URL}/items?search=${SEARCH_TERM}`)
  })

  it('should render the search input', () => {
    cy.get('input').should('be.visible')
  })

  it('should render the list of products', () => {
    const products = cy.get('section')
    products.should('be.visible')
    products.should('have.length.greaterThan', 0)
  })

  it('should render ammount of products found', () => {
    cy.get('h5').contains(`${AMMOUNT_FOUND}`)
  })

  it('should render the products categories', () => {
    const categories = cy.get('ul li')
    categories.should('have.length.greaterThan', 0)
  })

  it('should render the product details', () => {
    cy.get('section article').first().find('picture img').should('be.visible')
    cy.get('section article').first().find('aside p').should('be.visible')
    cy.get('section article').first().find('aside div h2').should('be.visible')
    cy.get('section article').first().find('aside div div span').should('have.length', 5)
  })

  it('should redirect to the main page', () => {
    cy.get('nav a').click()
    cy.url().should('include', '/')
  })

  it('should redirect to product details page', () => {
    cy.get('section article').first().click()
    cy.url().should('include', `/items/${PRODUCT_ID}`)
  })
})
