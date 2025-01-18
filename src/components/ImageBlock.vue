<script setup lang="ts">
  import { useBuilderStore } from '@/stores/builder'
  import type { ImageBlock } from '@/types'
  import BlockHeader from '@/components/BlockHeader.vue'
  import { imageSrc } from '@/utilities/utils'

  defineProps<{
    content: ImageBlock
    index: number
  }>()

  const builderStore = useBuilderStore()
  const { setSingleBlock } = builderStore

</script>

<template>
  <section @click="setSingleBlock(index)">
    <BlockHeader :block-index="index" />
    <div :class="['image-container', `align-${content.align}`]" :style="`padding: ${content.padding}px;`">
      <figure :style="`width: ${content.width}%;`">
        <img :src="imageSrc(content.src)" :alt="content.alt" width="100%"/>
        <figcaption>{{ content.caption }}</figcaption>
      </figure>
    </div>
  </section>
</template>

<style scoped>
  section {
    position: relative;
    cursor: pointer;
  }

  .image-container {
    display: flex;
  }

  .align-left {
    justify-content: flex-start;
  }

  .align-center {
    text-align: center;
    justify-content: center;
  }

  .align-right {
    text-align: right;
    justify-content: flex-end;
  }
</style>