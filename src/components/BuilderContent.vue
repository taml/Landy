<script setup lang="ts">
  import draggable from 'vuedraggable'
  import TextElement from '@/components/TextBlock.vue'
  import ImageElement from '@/components/ImageBlock.vue'
  import { storeToRefs } from 'pinia'
  import { useBuilderStore } from '@/stores/builder'

  const builderStore = useBuilderStore()
  const { contentBlockList, backgroundColor } = storeToRefs(builderStore)
  const { setSingleBlock } = builderStore

  // Update the selected block to display in the editor panel
  const updateEditor = (event: any) => {
    if(event.added) {
      setSingleBlock(event.added.newIndex)
    }
  }

</script>

<template>
  <div class="builder-container">
    <div :class="['builder-content', `${contentBlockList.length === 0 && 'empty-content'}`]" :style="`background: ${backgroundColor};`">
      <draggable class="drop-area" :list="contentBlockList" :element="'div'" :group="{ name: 'blocks', pull: false, put: true }" @change="updateEditor" item-key="index">
        <template #item="{element, index}">
          <component :is="element?.type === 'text' ? TextElement : ImageElement" v-bind="element" :index="index" />
        </template>
      </draggable>
    </div>
  </div>
</template>

<style scoped>
  .builder-container {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 2;
    background: #fafafa;
    padding: 40px;
    height: 92vh;
    overflow-y: auto;
  }

  .builder-content {
    flex: 1 1;
    box-shadow: 0px 4px 6px #e1e2e4;
  }

  .empty-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('../assets/images/LandyEmpty.svg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    width: 50%;
    max-width: 350px;
    margin: 0 auto;
    z-index: 1;
  }

  .drop-area {
    height: 100%;
    margin: 15px;
  }
</style>