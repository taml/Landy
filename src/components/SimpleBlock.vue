<script setup lang="ts">
  import { computed } from 'vue'

  const props = defineProps({
    blockType: String,
    content: String
  })

  const iconType = computed(() => {
    return props.blockType === 'text' ? 'i-cursor' : 'image'
  })

  const ariaLabel = computed(() => {
    return props.blockType === 'text' ? 'An icon depicting text.' : 'An icon depicting an image.'
  })
</script>

<template>
  <div>
    <font-awesome-icon :icon="['fas', iconType]" :aria-label="ariaLabel" /> <p>{{ content }}</p>
  </div>
</template>

<style scoped>
  div {
    display: flex;
    padding: 20px;
    background: #ffffff;
    border-radius: 10px;
    margin-top: 10px;
  }

  @media screen and (max-width: 700px) {
    p {
      display: none;
    }
  }
</style>