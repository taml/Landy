<script setup lang="ts">
  import draggable from 'vuedraggable'
  import TextElement from '@/components/TextBlock.vue'
  import ImageElement from '@/components/ImageBlock.vue'
  import { storeToRefs } from 'pinia'
  import { useBuilderStore } from '@/stores/builder'

  const builderStore = useBuilderStore()
  const { contentBlockList } = storeToRefs(builderStore)

</script>

<template>
  <div class="builder-container">
    <div class="builder-content">
      <p v-if="contentBlockList.length === 0">Builder Content</p>
      <draggable class="drop-area" :list="contentBlockList" :element="'div'" :group="{ name: 'blocks', pull: false, put: true }" item-key="index">
        <template #item="{element}">
          <component :is="element?.type === 'text' ? TextElement : ImageElement" />
        </template>
      </draggable>
    </div>
  </div>
</template>

<style scoped>
  .builder-container {
    display: flex;
    flex-direction: column;
    flex: 2;
    background-color: #f0f0f0;
    padding: 40px;
    height: 92vh;
    overflow-y: auto
  }

  .builder-content {
    background: #ffffff;
    border-radius: 10px;
    flex: 1 1;
  }

  .drop-area {
    height: 100%;
  }
</style>