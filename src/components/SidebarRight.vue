<script setup lang="ts">
  import { ref } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useBuilderStore } from '@/stores/builder'
  import TextBlockEditor from '@/components/TextBlockEditor.vue'
  import ImageBlockEditor from '@/components/ImageBlockEditor.vue'

  defineProps({
    toggleEditor: Boolean
  })

  const builderStore = useBuilderStore()
  const { block, backgroundColor } = storeToRefs(builderStore)
  const { setBackgroundColor } = builderStore

  const customColor = ref(backgroundColor.value)

</script>

<template>
  <aside :class="toggleEditor && 'hide-editor'">
    <p>Page Background Colour</p>
    <div class="color-option">
      <span class="color-circle"><input type="color" v-model="customColor" @change="setBackgroundColor(customColor)"/></span>
      <p>{{ backgroundColor }}</p>
    </div>
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

  .color-option {
    width: 80px;
    text-align: center;
  }

  .color-option input {
    border-radius: 50%;
    height: 40px;
    width: 40px;
    border: none;
    outline: none;
    padding: 0;
    cursor: pointer;
  }

  .color-circle {
    display: block;
    height: 40px;
    width: 40px;
    border-radius: 50px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #e9eff4;
    box-shadow: 0px 0px 14px rgba(33, 48, 79, 0.10);
  }

  input::-webkit-color-swatch-wrapper {
    padding: 0; 
  }

  input[type="color"]::-webkit-color-swatch {
    border: none;
    border-radius: 100%;
  }

</style>