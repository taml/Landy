<script setup lang="ts">
  import { computed } from 'vue'
  import type { ImageBlock } from '@/types'
  import BlockHeader from '@/components/BlockHeader.vue'

  const props = defineProps<{
    content: ImageBlock
    index: number
  }>()

  const imageSrc = computed(() => new URL(props.content.src, import.meta.url).href)

</script>

<template>
  <section>
    <BlockHeader :block-index="index" />
    <figure :class="`align-${content.align}`" :style="`padding: ${content.padding}px;`">
      <div :style="`width: ${content.width}%;`">
        <img :src="imageSrc" :alt="content.alt" width="100%"/>
        <figcaption>{{ content.caption }}</figcaption>
      </div>
    </figure>
  </section>
</template>

<style scoped>
  figure {
    display: flex;
    flex-direction: column;
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