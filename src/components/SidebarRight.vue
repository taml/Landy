<script setup lang="ts">
  defineProps({
    toggleEditor: Boolean
  })
</script>

<template>
  <aside :class="toggleEditor && 'hide-editor'">
    <p>Right Sidebar</p>
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
</style>