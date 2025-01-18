<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useBuilderStore } from '@/stores/builder'
  import TopNav from '@/components/TopNav.vue'
  import SidebarLeft from '@/components/SidebarLeft.vue'
  import SidebarRight from '@/components/SidebarRight.vue'
  import BuilderContent from '@/components/BuilderContent.vue'
  import SaveModal from '@/components/SaveModal.vue'

  const builderStore = useBuilderStore()
  const { showSaveModal } = storeToRefs(builderStore)
</script>

<template>
  <div class="page-wrapper">
    <TopNav />
    <main>
      <SidebarLeft />
      <BuilderContent />
      <SidebarRight />
    </main>
    <SaveModal v-if="showSaveModal" />
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
