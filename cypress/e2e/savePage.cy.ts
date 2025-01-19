// https://on.cypress.io/api

describe('Save Page Modal Interaction', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should drag a text block from the sidebar and drop it into the builder content area', () => {
    cy.get('.simple-block').contains('Text Block').as('textBlock')
    cy.get('.drop-area').as('dropArea')
    cy.get('@textBlock').trigger('mousedown', { which: 1 }) 
    cy.get('@dropArea').trigger('mousemove', { force: true }).trigger('mouseup', { force: true }) 
    cy.get('.builder-content').children().should('have.length', 1)
  })

  it('should show the "Save Page" button in the top navigation', () => {
    cy.get('button').contains('Save Page').should('be.visible')
  })

  it('should open the modal when the "Save Page" button is clicked', () => {
    cy.get('button').contains('Save Page').click()
    cy.get('.modal-mask').should('be.visible')
    cy.get('.modal-mask').contains('Save Your Landing Page!')
  })

  it('should call logPage when the "Save Landing Page" button is clicked', () => {
    // Spy on the console.log method to check if logPage is called
    cy.window().then((window) => {
      cy.stub(window.console, 'log').as('consoleLog')
      cy.get('button').contains('Save Page').click()
      cy.get('#pageName').type('My Page')
      cy.get('.modal-container').find('button').contains('Save Landing Page').click()
      cy.get('@consoleLog').should('have.been.called')
    })
  })
})

