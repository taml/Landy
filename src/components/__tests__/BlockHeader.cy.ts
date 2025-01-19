import BlockHeader from '@/components/BlockHeader.vue'


describe('BlockHeader', () => {
  it('mounts', () => {
    cy.mount(BlockHeader, {
      props: {
        blockIndex: 0
      }
    })
  })
})