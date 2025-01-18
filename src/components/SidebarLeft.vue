<script setup lang="ts">
  import draggable from 'vuedraggable'
  import SimpleBlock from '@/components/SimpleBlock.vue'
  import type { BlockElement }  from '@/types'

  // Construct a default template for the two different block types, text block and image block
  const blockList = [
    { 
      type: 'text', 
      name: 'Text Block',
      content: {
        text: '',
      }
    },
    { 
      type: 'image', 
      name: 'Image Block', 
      content: {
        src: '../assets/images/image-1.webp',
        alt: 'An image depicting a neon hello sign.',
        caption: '',
        width: 100,
        align: 'left',
        padding: 0
      } 
    }
  ]

</script>

<template>
  <aside aria-label="Block menu.">
    <h6 class="heading">Block Picker</h6>
    <draggable :list="blockList" :element="'div'" :group="{ name: 'blocks', pull: 'clone', put: false }" :clone="(item: BlockElement) => ({ ...item })" :sort="false" item-key="index" role="list">
      <template #item="{element}">
        <SimpleBlock :blockType="element.type" :name="element.name" />
      </template>
    </draggable>
  </aside>
</template>

<style scoped>
  aside {
    flex: 1;
    background-color: #D9E5F3;
    padding: 15px;
    max-width: 220px;
  }

  @media screen and (max-width: 750px) {
    aside {
      max-width: 90px;
      height: calc(100% - 62px);
      position: absolute;
      left: 0;
      background: transparent;
      z-index: 1;
    }

    .heading {
      display: none;
    }
  }

  .heading {
    color: #394452;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 15px;
  }

  @media screen and (max-width: 750px) {
    .heading {
      display: none;
    }
  }
</style>