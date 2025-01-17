import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { BlockElement, TextBlock, ImageBlock } from '@/types'

export const useBuilderStore = defineStore('builder', () => {
  // Initialise an empty list of content blocks
  const contentBlockList = ref<Array<BlockElement>>([])
  const blockId = ref(-1)

  // Get a single block at the provided index from the list
  const getBlock = computed(() => {
    return (index: number) => contentBlockList.value[index]
  })

  // Move a block at the provided index up by one position in the list
  const moveBlockUp = (index: number) => {
    if (index === 0) return
    const block = contentBlockList.value[index]
    contentBlockList.value.splice(index, 1)
    contentBlockList.value.splice(index - 1, 0, block)
  }

  // Move a block at the provided index down by one position in the list
  const moveBlockDown = (index: number) => {
    if (index === contentBlockList.value.length - 1) return
    const block = contentBlockList.value[index]
    contentBlockList.value.splice(index, 1)
    contentBlockList.value.splice(index + 1, 0, block)
  }

  // Duplicate a selected block at the provided index and reinsert it straight after the original block
  const duplicateBlock = (index: number) => {
    const block = contentBlockList.value[index]
    contentBlockList.value.splice(index, 0, block)
  }

  // Delete a block at the provided index
  const deleteBlock = (index: number) => {
    contentBlockList.value.splice(index, 1)
  }

  // Update a block at the provided index and content 
  const updateBlock = (index: number, content: TextBlock | ImageBlock) => {
    contentBlockList.value[index].content = content
  }


  return { contentBlockList, blockId, getBlock, moveBlockUp, moveBlockDown, duplicateBlock, deleteBlock, updateBlock }
})
