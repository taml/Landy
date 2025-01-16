<script setup lang="ts">
  import TopNav from '@/components/TopNav.vue'
  import SidebarLeft from '@/components/SidebarLeft.vue'
  import SidebarRight from '@/components/SidebarRight.vue'
  import BuilderContent from '@/components/BuilderContent.vue'
</script>

<template>
  <div class="page-wrapper">
    <TopNav />
    <main>
      <SidebarLeft />
      <BuilderContent />
      <SidebarRight :toggle-editor="false" />
    </main>
  </div>
</template>

<style scoped>
  .page-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  main {
    display: flex;
    flex: 1;
  }
</style>
