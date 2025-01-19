import ImageBlock from '@/components/ImageBlock.vue'
import type { ImageBlock as IB } from '@/types'


describe('ImageBlock', () => {
  it('mounts', () => {
    cy.mount(ImageBlock, {
      props: {
        content: {
          src: '/images/image-1.webp',
          alt: 'An image depicting a neon hello sign.',
          caption: '',
          width: 100,
          align: 'left',
          padding: 0
        } as IB,
        index: 0
      }
    })
  })
})