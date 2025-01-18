<script setup lang="ts">
  import { useBuilderStore } from '@/stores/builder'

  const builderStore = useBuilderStore()
  const { toggleSaveModal } = builderStore

  // Trigger showing the save page modal
  const handleSavePage = () => {
    toggleSaveModal(true)
  }
</script>

<template>
  <nav>
    <img class="logo" src="../assets/LandyLogo.svg" alt="Landy Logo" />
    <button class="btn" @click="handleSavePage">Save Page</button>
  </nav>
</template>

<style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    background: #7c8ea2;
    padding: 10px 20px;
  }

  .logo {
    max-width: 100px;
  }

  .btn {
    background: #4832D7;
    color: #FFFFFF;
    font-size: 16px;
    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid #846EFF;
    cursor: pointer;
    transition-timing-function: ease-in;
    transition: 1s;
  }

  .btn:hover {
    background: #3b29b0;
  }
</style>