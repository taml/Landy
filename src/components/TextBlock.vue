<script setup lang="ts">
  import type { ImageBlock } from '@/types'
  import BlockHeader from '@/components/BlockHeader.vue'

  const props = defineProps<{
    content: ImageBlock
    index: number
  }>()
</script>

<template>
  <section>
    <BlockHeader :block-index="index" />
  </section>
</template>
  
<style scoped>
  section {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  
</style>