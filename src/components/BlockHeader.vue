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
      <button class="btn-action" v-if="blockIndex > 0" @click.stop="moveBlockUp(blockIndex)" aria-label="Move block up."><font-awesome-icon :icon="['fas', 'chevron-up']" aria-label="An icon depicting an up arrow." /></button>
      <button class="btn-action" v-if="blockIndex < (contentBlockList.length - 1)" @click.stop="moveBlockDown(blockIndex)" aria-label="Move block down."><font-awesome-icon :icon="['fas', 'chevron-down']"aria-label="An icon depicting a down arrow." /></button>
      <button class="btn-action" @click.stop="duplicateBlock(blockIndex)"><font-awesome-icon :icon="['fas', 'clone']" aria-label="An icon depicting two squares representing cloning." /> Duplicate</button>
      <button class="btn-action" @click.stop="deleteBlock(blockIndex)"><font-awesome-icon :icon="['fas', 'trash-can']" aria-label="An icon depicting a trash can." /> Remove</button>
    </div>
  </header>
</template>

<style scoped>
  header {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    z-index: 1;
  }

  header div {
    display: flex;
    gap: 4px;
  }

  .btn-action {
    background: #4832D7;
    color: #FFFFFF;
    font-size: 12px;
    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid #846EFF;
    cursor: pointer;
    transition-timing-function: ease-in;
    transition: 1s;
  }

  .btn-action:hover {
    background: #3b29b0;
  }

  .fa-chevron-up, .fa-chevron-down, .fa-clone, .fa-trash-can {
    color: #FFFFFF;
  }

  .fa-clone, .fa-trash-can {
    margin-right: 5px;
  }
</style>