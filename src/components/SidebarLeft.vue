<script setup lang="ts">
  import draggable from 'vuedraggable'
  import SimpleBlock from '@/components/SimpleBlock.vue'
  import type { BlockSimple }  from '@/types'

  const blockList = [
    { type: 'text', content: 'Text Block' },
    { type: 'image', content: 'Image Block' }
  ]

</script>

<template>
  <aside>
    <draggable :list="blockList" :element="'div'" :group="{ name: 'blocks', pull: 'clone', put: false }" :clone="(item: BlockSimple) => ({ ...item })" :sort="false" item-key="index">
      <template #item="{element}">
        <simple-block :blockType="element.type" :content="element.content" />
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