<script setup lang="ts">
  import { ref, computed, watch } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useBuilderStore } from '@/stores/builder'

  const builderStore = useBuilderStore()
  const { block, blockIndex } = storeToRefs(builderStore)
  const { updateBlock } = builderStore

  const isImageBlock = computed(() => 
    block.value?.content && 'src' in block.value.content
  )

  const imageCaption = computed({
    get: () => isImageBlock.value ? (block.value!.content as any).caption : '',
    set: (newValue) => {
      if (isImageBlock.value) {
        updateBlock(blockIndex.value, { ...block.value!.content, caption: newValue })
      }
    }
  })

  const imageWidth = computed({
    get: () => isImageBlock.value ? (block.value!.content as any).width : 100,
    set: (newValue) => {
      if (isImageBlock.value) {
        updateBlock(blockIndex.value, { ...block.value!.content, width: newValue })
      }
    }
  })

  const imagePadding = computed({
    get: () => isImageBlock.value ? (block.value!.content as any).padding : 0,
    set: (newValue) => {
      if (isImageBlock.value) {
        updateBlock(blockIndex.value, { ...block.value!.content, padding: newValue })
      }
    }
  })

  const images = [
    {
      src: '../assets/images/image-1.webp',
      alt: 'An image depicting a neon hello sign.',
    },
    {
      src: '../assets/images/image-2.webp',
      alt: 'A colourful abstract image.',
    },
    {
      src: '../assets/images/image-3.webp',
      alt: 'An image depicting an atmospheric mountain range.',
    },
    {
      src: '../assets/images/image-4.webp',
      alt: 'An image depicting a set of shapes which could be loosely interpreted as a product.',
    }
  ]

  const imageSrc = (src: string) => new URL(src, import.meta.url).href

  const selectImg = (imageScr: string, imageAlt: string) => {
    if(block.value) updateBlock(blockIndex.value, {...block.value?.content, src: imageScr, alt: imageAlt})
  }

  const updateAlignment = (imageAlign: string) => {
    if(block.value) updateBlock(blockIndex.value, {...block.value?.content, align: imageAlign})
  }

</script>

<template>
  <p>Edit this Image Block</p>
  <p>Select Image</p>
  <div class="image-thumbnails">
    <div v-for="image in images" @click="selectImg(image.src, image.alt)">
      <img :src="imageSrc(image.src)" :alt="image.alt"/>
    </div>
  </div>
  <p>Image Caption</p>
  <input type="text" v-model="imageCaption" />
  <p>Align Image</p>
  <div>
    <button @click="updateAlignment('left')"><font-awesome-icon :icon="['fas', 'align-left']" /></button>
    <button @click="updateAlignment('center')"><font-awesome-icon :icon="['fas', 'align-center']" /></button>
    <button @click="updateAlignment('right')"><font-awesome-icon :icon="['fas', 'align-right']" /></button>
  </div>
  <div>
    <label>Image Width</label>
    <input type="range" min="25" max="100" v-model="imageWidth">
  </div>
  <div>
    <label>Image Padding</label>
    <input type="range" min="0" max="100" v-model="imagePadding">
  </div>
</template>

<style scoped>
  .image-thumbnails {
    display: grid;
    grid-template-columns: 2fr 2fr;
    column-gap: 10px;
  }

  .image-thumbnails div img {
    width: 100%;
  }
</style>