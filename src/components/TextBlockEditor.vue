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

  const editorContainer = ref(null)
  let editor: Quill

  const isTextBlock = computed(() => 
    block.value?.content && 'text' in block.value.content
  )

  const textContent = computed(() => 
    isTextBlock.value ? (block.value!.content as TextBlock).text : ''
  )

  watch(block, () => {
    editor.root.innerHTML = textContent.value
  })

  onMounted(() => {
    if(editorContainer.value) {
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

      if (isTextBlock.value && textContent.value.length > 0) editor.root.innerHTML = textContent.value

      editor.on('text-change', () => {
        if (block.value) {
          updateBlock(blockIndex.value, {...block.value.content, text: editor.root.innerHTML})
        }
      })
    }
  })
</script>

<template>
  <p>Edit this Text Block</p>
  <div ref="editorContainer" aria-label="Text block input area."></div>
</template>