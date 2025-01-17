<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useBuilderStore } from '@/stores/builder'

  defineProps<{
    blockIndex: number
  }>()

  const builderStore = useBuilderStore()
  const { contentBlockList } = storeToRefs(builderStore)
  const { moveBlockUp, moveBlockDown, duplicateBlock, deleteBlock } = builderStore
</script>

<template>
  <header>
    <div>
      <button v-if="blockIndex > 0" @click="moveBlockUp(blockIndex)" aria-label="Move block up."><font-awesome-icon :icon="['fas', 'chevron-up']" aria-label="An icon depicting an up arrow." /></button>
      <button v-if="blockIndex < (contentBlockList.length - 1)" @click="moveBlockDown(blockIndex)" aria-label="Move block down."><font-awesome-icon :icon="['fas', 'chevron-down']"aria-label="An icon depicting a down arrow." /></button>
      <button @click="duplicateBlock(blockIndex)"><font-awesome-icon :icon="['fas', 'clone']" aria-label="An icon depicting two squares representing cloning." /> Duplicate</button>
      <button @click="deleteBlock(blockIndex)"><font-awesome-icon :icon="['fas', 'trash-can']" aria-label="An icon depicting a trash can." /> Remove</button>
    </div>
  </header>
</template>

<style scoped>
  header {
    display: flex;
    justify-content: flex-end;
  }
</style>