<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useBuilderStore } from '@/stores/builder'
  import type { ImageBlock } from '@/types'
  import BlockHeader from '@/components/BlockHeader.vue'
  import { imageSrc } from '@/utilities/utils'

  defineProps<{
    content: ImageBlock
    index: number
  }>()

  const builderStore = useBuilderStore()
  const { blockIndex } = storeToRefs(builderStore)
  const { setSingleBlock } = builderStore

</script>

<template>
  <section :class="[index === blockIndex && 'highlight', content.caption.length > 0 && 'caption-spacing']" @click="setSingleBlock(index)">
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
    border-radius: 10px;
  }

  .highlight {
    border: 2px solid #4832D7;
  }

  .caption-spacing {
    margin-bottom: 30px;
  }

  .image-container {
    display: flex;
  }

  .image-container figcaption {
    padding: 0 5px;
  }

  .image-container img {
    height: 100%;
    border-radius: 8px;
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