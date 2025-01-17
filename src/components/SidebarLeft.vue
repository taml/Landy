<script setup lang="ts">
  import draggable from 'vuedraggable'
  import SimpleBlock from '@/components/SimpleBlock.vue'
  import type { BlockElement }  from '@/types'

  const blockList = [
    { 
      type: 'text', 
      name: 'Text Block',
      content: {
        text: '',
        textSize: 16,
      }
    },
    { 
      type: 'image', 
      name: 'Image Block', 
      content: {
        src: '../assets/images/image-1.webp',
        alt: 'An image depicting a neon hello sign.',
        caption: 'Testing the alignment of a long caption. Testing the alignment of a long caption.',
        width: 50,
        align: 'left',
        padding: 50
      } 
    }
  ]

</script>

<template>
  <aside>
    <draggable :list="blockList" :element="'div'" :group="{ name: 'blocks', pull: 'clone', put: false }" :clone="(item: BlockElement) => ({ ...item })" :sort="false" item-key="index" role="list">
      <template #item="{element}">
        <SimpleBlock :blockType="element.type" :name="element.name" />
      </template>
    </draggable>
  </aside>
</template>

<style scoped>
  aside {
    background-color: #ffffff;
    flex: 1;
    max-width: 220px;
  }

  @media screen and (max-width: 700px) {
    aside {
      max-width: 60px;
      height: 100%;
      position: absolute;
      left: 0;
      background: transparent;
      z-index: 1;
    }
  }
</style>