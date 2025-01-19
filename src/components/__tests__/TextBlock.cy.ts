import TextBlock from '@/components/TextBlock.vue'
import type { TextBlock as TB } from '@/types'


describe('TextBlock', () => {
  it('mounts', () => {
    cy.mount(TextBlock, {
      props: {
        content: { text: 'Some Text' } as TB,
        index: 0
      }
    })
  })
})