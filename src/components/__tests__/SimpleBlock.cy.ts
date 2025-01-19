import SimpleBlock from '@/components/SimpleBlock.vue'


describe('SimpleBlock', () => {
  it('mounts', () => {
    cy.mount(SimpleBlock, {
      props: {
        blockType: 'text',
        name: 'Text Block'
      }
    })
  })

  it('mounts', () => {
    cy.mount(SimpleBlock, {
      props: {
        blockType: 'image',
        name: 'Image Block'
      }
    })
  })
})