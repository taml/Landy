<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useBuilderStore } from '@/stores/builder'
  import PageColorPicker from '@/components/PageColorPicker.vue'
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
    <h5 class="heading">Page Settings</h5>
    <PageColorPicker />
    <TextBlockEditor v-if="block?.type === 'text'" />
    <ImageBlockEditor v-else-if="block?.type === 'image'" />
  </aside>
</template>

<style scoped>
  aside {
    flex: 1;
    background-color: #D9E5F3;
    padding: 15px;
    max-width: 400px;
    height: 100vh;
    overflow-y: auto;
  }

  @media screen and (max-width: 750px) {
    aside {
      width: 70%;
      height: calc(100% - 58px);
      position: absolute;
      right: 0;
      z-index: 2;
    }
  }

  .hide-editor {
    max-width: 0;
  }

  .heading {
    color: #394452;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 15px;
    padding-bottom: 20px;
    border-bottom: 2px solid #cdd4db;
  }

</style>