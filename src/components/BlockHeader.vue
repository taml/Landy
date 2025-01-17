<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useBuilderStore } from '@/stores/builder'

  defineProps<{
    blockIndex: number
  }>()

  const builderStore = useBuilderStore()
  const { contentBlockList } = storeToRefs(builderStore)
</script>

<template>
  <header>
    <div>
      <button v-if="blockIndex > 0" aria-label="Move block up."><font-awesome-icon :icon="['fas', 'chevron-up']" aria-label="An icon depicting an up arrow." /></button>
      <button v-if="blockIndex < (contentBlockList.length - 1)" aria-label="Move block down."><font-awesome-icon :icon="['fas', 'chevron-down']"aria-label="An icon depicting a down arrow." /></button>
      <button><font-awesome-icon :icon="['fas', 'clone']" aria-label="An icon depicting two squares representing cloning." /> Duplicate</button>
      <button><font-awesome-icon :icon="['fas', 'trash-can']" aria-label="An icon depicting a trash can." /> Remove</button>
    </div>
  </header>
</template>