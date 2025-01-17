<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useBuilderStore } from '@/stores/builder'
  import TextBlockEditor from '@/components/TextBlockEditor.vue'
  import ImageBlockEditor from '@/components/ImageBlockEditor.vue'

  defineProps({
    toggleEditor: Boolean
  })

  const builderStore = useBuilderStore()
  const { block } = storeToRefs(builderStore)

</script>

<template>
  <aside :class="toggleEditor && 'hide-editor'">
    <TextBlockEditor v-if="block?.type === 'text'" />
    <ImageBlockEditor v-else-if="block?.type === 'image'" />
  </aside>
</template>

<style scoped>
  aside {
    background-color: #ffffff;
    flex: 1;
  }

  @media screen and (max-width: 700px) {
    aside {
      width: 70%;
      height: 100%;
      position: absolute;
      right: 0;
      z-index: 2;
    }
  }

  .hide-editor {
    max-width: 0;
  }
</style>