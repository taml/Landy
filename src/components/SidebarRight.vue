<script setup lang="ts">
  import { ref, watch, onMounted, onUnmounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useBuilderStore } from '@/stores/builder'
  import PageColorPicker from '@/components/PageColorPicker.vue'
  import TextBlockEditor from '@/components/TextBlockEditor.vue'
  import ImageBlockEditor from '@/components/ImageBlockEditor.vue'

  const builderStore = useBuilderStore()
  const { block } = storeToRefs(builderStore)

  const toggleEditor = ref(false)
  const windowSizeWidth = ref(window.innerWidth)

  // Toggle the editor panel on or off
  const handleToggle = () => {
    toggleEditor.value = !toggleEditor.value
  }

  // Set the width to conditionally show the editor or not
  const hideEditorOnSmallScreens = (width: number) => {
    if (width <= 750) {
      toggleEditor.value = true
    } else {
      toggleEditor.value = false
    }
  }

  watch(windowSizeWidth, (newWidth) => {
    // Watch for changes to the screen width and hide the editor panel if a smaller screen
    hideEditorOnSmallScreens(newWidth)
  })

  onMounted(() => {
    // Listen for screen resizes
    window.addEventListener('resize', () => {windowSizeWidth.value = window.innerWidth})
    hideEditorOnSmallScreens(windowSizeWidth.value)
  })

  onUnmounted(() => {
    // Clean up listener
    window.removeEventListener('resize', () => {windowSizeWidth.value = window.innerWidth})
  })

</script>

<template>
  <aside :class="toggleEditor && 'hide-editor'">
    <button class="btn-toggle" @click="handleToggle"><font-awesome-icon :icon="['fas', `${toggleEditor ? 'chevron-left' : 'chevron-right'}`]" /></button>
    <div class="editor-content">
      <h5 class="heading">Page Settings</h5>
      <PageColorPicker />
      <TextBlockEditor v-if="block?.type === 'text'" />
      <ImageBlockEditor v-else-if="block?.type === 'image'" />
    </div>
  </aside>
</template>

<style scoped>
  aside {
    position: relative;
    flex: 1;
    background-color: #D9E5F3;
    max-width: 400px;
    height: 100vh;
  }

  @media screen and (max-width: 750px) {
    aside {
      width: 70%;
      height: calc(100% - 62px);
      position: absolute;
      right: 0;
      z-index: 2;
    }
  }

  .editor-content {
    height: 100%;
    padding: 15px;
    overflow-y: auto;
  }

  .hide-editor {
    max-width: 0;
  }

  .hide-editor .editor-content {
    padding: 0;
  }

  .btn-toggle {
    position: absolute;
    top: 10px;
    left: -50px;
    background: #4832D7;
    color: #FFFFFF;
    font-size: 14px;
    padding: 10px 14px;
    border-radius: 6px;
    border: 1px solid #846EFF;
    cursor: pointer;
    transition-timing-function: ease-in;
    transition: 1s;
    z-index: 10;
  }

  .btn-toggle:hover {
    background: #3b29b0;
  }

  .fa-chevron-left, .fa-chevron-right {
    color: #FFFFFF;
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