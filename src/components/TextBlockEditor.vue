<script setup lang="ts">
  import { ref, computed, onMounted, watch } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useBuilderStore } from '@/stores/builder'
  import  Quill from 'quill'
  import 'quill/dist/quill.snow.css'
  import type { TextBlock } from '@/types'

  const builderStore = useBuilderStore()
  const { block, blockIndex } = storeToRefs(builderStore)
  const { updateBlock } = builderStore

  // Declare/intialise some variables ready to mount Quill editor
  const editorContainer = ref(null)
  let editor: Quill

  // Check the block data relates to the Text block element
  const isTextBlock = computed(() => 
    block.value?.content && 'text' in block.value.content
  )

  // Get the text block as a reactive computed value
  const textContent = computed(() => 
    isTextBlock.value ? (block.value!.content as TextBlock).text : ''
  )

  watch(block, () => {
    // Update the editor content if a different block is selected
    editor.root.innerHTML = textContent.value
  })

  onMounted(() => {
    if(editorContainer.value) {
      // Initialise a new Quill editor and configure it
      editor = new Quill(editorContainer.value!, {
        theme: 'snow',
        placeholder: 'Write your best landing page content!',
        modules: {
          toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'link']
          ]
        }
      })

      // If the block has text content assign it to the editor
      if (isTextBlock.value && textContent.value.length > 0) editor.root.innerHTML = textContent.value

      editor.on('text-change', () => {
        if (block.value) {
          // When text input changes in the editor, update the relevant Text block 
          updateBlock(blockIndex.value, {...block.value.content, text: editor.root.innerHTML})
        }
      })
    }
  })
</script>

<template>
  <h6 class="heading">Edit this Text Block</h6>
  <div class="editor-container" ref="editorContainer" aria-label="Text block input area."></div>
</template>

<style scoped>
  .heading {
    color: #394452;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    padding-top: 20px;
    border-top: 2px solid #cdd4db;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  .ql-container {
    font-size: 16px;
    background: #f3f6f8;
    max-height: 300px;
    border-radius: 0 0 8px 8px;
    box-shadow: 0px 4px 6px #ced1d5;
  }
</style>