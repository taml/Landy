<script setup lang="ts">
  import TextElement from '@/components/TextElement.vue'
  import ImageElement from '@/components/ImageElement.vue'
</script>

<template>
  <aside>
    <TextElement />
    <ImageElement />
  </aside>
</template>

<style scoped>
  aside {
    background-color: #ffffff;
    flex: 1;
    max-width: 220px;
  }

  @media screen and (max-width: 700px) {
    aside {
      max-width: 60px;
      height: 100%;
      position: absolute;
      left: 0;
      background: transparent;
      z-index: 1;
    }
  }
</style>