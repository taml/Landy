<script setup lang="ts">
  const handleSavePage = () => {
    console.log('Save Page')
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