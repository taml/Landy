<script setup lang="ts">
  import { useBuilderStore } from '@/stores/builder'

  const builderStore = useBuilderStore()
  const { toggleSaveModal } = builderStore

  const handleSavePage = () => {
    toggleSaveModal(true)
  }
</script>

<template>
  <nav>
    <p>Landy</p>
    <button @click="handleSavePage">Save Page</button>
  </nav>
</template>

<style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
</style>