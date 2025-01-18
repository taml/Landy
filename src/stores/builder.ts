import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { BlockElement, TextBlock, ImageBlock } from '@/types'

export const useBuilderStore = defineStore('builder', () => {
  // Initialise an empty list of content blocks
  const contentBlockList = ref<Array<BlockElement>>([])
  // Initialise a block variable for a single block item
  const block = ref<BlockElement | null>(null)
  // Initialise a selected block index variable 
  const blockIndex = ref(-1)
  // Initialise a colour for the template background
  const backgroundColor = ref('#FFFFFF')
  // Initialise a variable to control the toggle of a save modal
  const showSaveModal = ref(false)


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

  // Delete a block at the provided index from the block list and reset single block item
  const deleteBlock = (index: number) => {
    if(index === blockIndex.value) {
      block.value = null
      blockIndex.value = -1
    }
    contentBlockList.value.splice(index, 1)
  }

  // Set the contents of a single block item found at the provided index of the block list
  const setSingleBlock = (index: number) => {
    blockIndex.value = index
    block.value = contentBlockList.value[index]
  }

  // Update a block at the provided index and content 
  const updateBlock = (index: number, content: TextBlock | ImageBlock) => {
    contentBlockList.value[index].content = content
  }

  // Set a colour for the background of the landing page template
  const setBackgroundColor = (color: string) => {
    backgroundColor.value = color
  }

  const toggleSaveModal = (showModal: boolean) => {
    showSaveModal.value = showModal
  }


  return { 
    contentBlockList, block, blockIndex, backgroundColor, showSaveModal,
    moveBlockUp, moveBlockDown, duplicateBlock, deleteBlock, setSingleBlock, updateBlock, setBackgroundColor, toggleSaveModal 
  }
})
