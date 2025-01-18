<script setup lang="ts">
  import { computed } from 'vue'

  const props = defineProps<{
    blockType: string,
    name: string
  }>()

  // Determine which block type icon to display
  const iconType = computed(() => {
    return props.blockType === 'text' ? 'font' : 'image'
  })

  // Determine which aria text description to use for aceessibility
  const ariaLabel = computed(() => {
    return props.blockType === 'text' ? 'An icon depicting text.' : 'An icon depicting an image.'
  })
</script>

<template>
  <div class="simple-block" role="listitem">
    <font-awesome-icon :icon="['fas', iconType]" :aria-label="ariaLabel" /> <p class="simple-block-text">{{ name }}</p>
  </div>
</template>

<style scoped>
  .simple-block {
    display: flex;
    background: #f3f6f8;
    border-radius: 6px;
    padding: 15px;
    margin-top: 10px;
    cursor: grab;
    box-shadow: 0px 4px 6px #ced1d5;
  }

  .fa-font, .fa-image {
    color: #846EFF;
    padding: 5px;
    margin-top: -1.5px;
  }

  .simple-block-text {
    color: #5b6875;
    margin-left: 5px;
  }

  @media screen and (max-width: 750px) {
    .simple-block-text {
      display: none;
    }
  }
</style>