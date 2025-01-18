<script setup lang="ts">
  import { ref, computed, watch } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useBuilderStore } from '@/stores/builder'

  const builderStore = useBuilderStore()
  const { block, blockIndex } = storeToRefs(builderStore)
  const { updateBlock } = builderStore

  // Check the block data relates to the Image block element
  const isImageBlock = computed(() => 
    block.value?.content && 'src' in block.value.content
  )

  /** Get the image caption as a reactive computed value and update the relative image
      block when the caption text changes */ 
  const imageCaption = computed({
    get: () => isImageBlock.value ? (block.value!.content as any).caption : '',
    set: (newValue) => {
      if (isImageBlock.value) {
        updateBlock(blockIndex.value, { ...block.value!.content, caption: newValue })
      }
    }
  })

  /** Get the image width as a reactive computed value and update the relative image
      block when the width text changes */ 
  const imageWidth = computed({
    get: () => isImageBlock.value ? (block.value!.content as any).width : 100,
    set: (newValue) => {
      if (isImageBlock.value) {
        updateBlock(blockIndex.value, { ...block.value!.content, width: newValue })
      }
    }
  })

  /** Get the image padding as a reactive computed value and update the relative image
      block when the padding text changes */ 
  const imagePadding = computed({
    get: () => isImageBlock.value ? (block.value!.content as any).padding : 0,
    set: (newValue) => {
      if (isImageBlock.value) {
        updateBlock(blockIndex.value, { ...block.value!.content, padding: newValue })
      }
    }
  })

  // Create a list of Image block pictures and partner them with relative alt descriptions
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

  // Transform the image url so that it can be used dynamically in a component
  const imageSrc = (src: string) => new URL(src, import.meta.url).href

  // Update the block when a new image is selected
  const selectImg = (imageScr: string, imageAlt: string) => {
    if(block.value) updateBlock(blockIndex.value, {...block.value?.content, src: imageScr, alt: imageAlt})
  }

  // Update the block when a new alignment it selected
  const updateAlignment = (imageAlign: string) => {
    if(block.value) updateBlock(blockIndex.value, {...block.value?.content, align: imageAlign})
  }

</script>

<template>
  <h6 class="heading">Edit this Image Block</h6>
  <div class="image-thumbnails-container">
    <p class="label">Select Image</p>
    <div class="image-thumbnails">
      <div v-for="image in images" @click="selectImg(image.src, image.alt)">
        <img :src="imageSrc(image.src)" :alt="image.alt"/>
      </div>
    </div>
  </div>
  <div class="image-input-container">
    <label class="label" aria-labelledby="imageCaption">Image Caption</label>
    <input id="imageCaption" type="text" v-model="imageCaption" placeholder="A great caption to go with your image..." />
  </div>
  <div class="image-input-container">
    <label class="label" aria-labelledby="imageRange">Image Width</label>
    <input id="imageRange" class="slider" type="range" min="25" max="100" v-model="imageWidth">
  </div>
  <div class="image-align-container">
    <p class="label">Align Image</p>
    <div>
      <button class="btn-small" @click="updateAlignment('left')"><font-awesome-icon :icon="['fas', 'align-left']" /></button>
      <button class="btn-small" @click="updateAlignment('center')"><font-awesome-icon :icon="['fas', 'align-center']" /></button>
      <button class="btn-small" @click="updateAlignment('right')"><font-awesome-icon :icon="['fas', 'align-right']" /></button>
    </div>
  </div>
  <div class="image-input-container">
    <label class="label" aria-labelledby="imagePadding">Image Padding</label>
    <input id="imagePadding" class="slider" type="range" min="0" max="100" v-model="imagePadding">
  </div>
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

  .label {
    color: #5b6875;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .image-input-container {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
  }

  .image-input-container:last-child {
    margin-bottom: 80px;
  }

  .image-thumbnails {
    display: grid;
    grid-template-columns: 2fr 2fr;
    column-gap: 10px;
  }

  .image-thumbnails div img {
    border-radius: 6px;
    width: 100%;
    cursor: pointer;
    box-shadow: 0px 4px 6px #ced1d5;
  }

  .image-align-container {
    margin-top: 15px;
  }

  .image-align-container div {
    display: flex;
    gap: 6px;
  }

  .slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 15px;
    background: #f3f6f8;
    border: 2px solid #cdd4db;
    border-radius: 8px;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
  }

  .slider:hover {
    opacity: 1; 
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    background: #4832D7; 
    border-radius: 50px;
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 15px;
    height: 15px;
    background: #4832D7;
    border-radius: 50px;
    cursor: pointer;
  }

  .image-align-container .btn-small {
    background: #f3f6f8;
    border: 0;
    border-radius: 6px;
    padding: 6px 10px;
    cursor: pointer;
    box-shadow: 0px 4px 6px #ced1d5;
  }

  .fa-align-left, .fa-align-center, .fa-align-right {
    color: #846EFF;
    padding: 5px;
  }

  #imageCaption {
    background: #f3f6f8;
    border: 2px solid #cdd4db;
    border-radius: 8px;
    color: #5b6875;
    font-size: 14px;
    padding: 10px;
  }

  #imageCaption:focus {
    border: 2px solid #b4b9bf;
  }
</style>