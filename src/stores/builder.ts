import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBuilderStore = defineStore('builder', () => {
  const contentBlockList = ref([])
  const blockId = ref(0)

  return { contentBlockList, blockId }
})
