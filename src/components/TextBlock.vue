<script setup lang="ts">
  import { useBuilderStore } from '@/stores/builder'
  import type { TextBlock } from '@/types'
  import BlockHeader from '@/components/BlockHeader.vue'

  defineProps<{
    content: TextBlock
    index: number
  }>()

  const builderStore = useBuilderStore()
  const { setBlock } = builderStore

</script>

<template>
  <section @click="setBlock(index)">
    <BlockHeader :block-index="index" />
    <p v-if="content.text.length === 0 || content.text === '<p><br></p>'">Your text content will be inserted here!</p>
    <div v-html="content.text"></div>
  </section>
</template>
  
<style scoped>
  section {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

</style>