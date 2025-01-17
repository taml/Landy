<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useBuilderStore } from '@/stores/builder'
  import  Quill from 'quill'
  import 'quill/dist/quill.snow.css'

  const builderStore = useBuilderStore()
  const { block, blockIndex } = storeToRefs(builderStore)
  const { updateBlock } = builderStore

  const editorContainer = ref(null)
  let editor: Quill

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

      const content = block.value?.content
      if (content && 'text' in content) {
        const text = content.text
        if (text.length > 0) editor.root.innerHTML = text
      }

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
  <div ref="editorContainer"></div>
</template>