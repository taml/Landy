import TopNav from '@/components/TopNav.vue'

describe('TopNav', () => {
  it('mounts', () => {
    cy.mount(TopNav)
  })

  // it('renders properly', () => {
  //   cy.mount(HelloWorld, { props: { msg: 'Hello Cypress' } })
  //   cy.get('h1').should('contain', 'Hello Cypress')
  // })
})
