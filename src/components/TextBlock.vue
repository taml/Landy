<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useBuilderStore } from '@/stores/builder'
  import type { TextBlock } from '@/types'
  import BlockHeader from '@/components/BlockHeader.vue'

  defineProps<{
    content: TextBlock
    index: number
  }>()

  const builderStore = useBuilderStore()
  const { blockIndex } = storeToRefs(builderStore)
  const { setSingleBlock } = builderStore

</script>

<template>
  <section :class="index === blockIndex && 'highlight'" @click="setSingleBlock(index)">
    <BlockHeader :block-index="index" />
    <div class="text-block">
      <p v-if="content.text.length === 0 || content.text === '<p><br></p>'">Add your text content in the editor and it will be inserted here!</p>
      <div v-html="content.text"></div>
    </div>
  </section>
</template>
  
<style scoped>
  section {
    position: relative;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    border-radius: 8px;
  }

  .highlight {
    border: 2px solid #4832D7;
  }

  .text-block {
    padding: 20px;
    margin-top: 32px;
  }

  .text-block p {
    color: #394452;
  }

</style>