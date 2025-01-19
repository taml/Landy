<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useBuilderStore } from '@/stores/builder'
  import { onClickOutside } from '@vueuse/core'

  const builderStore = useBuilderStore()
  const { contentBlockList, backgroundColor } = storeToRefs(builderStore)
  const { toggleSaveModal } = builderStore

  const modalContainer = ref(null)
  const pageName = ref('')

  // Toggle modal closed
  const closeModal = () => {
    toggleSaveModal(false)
  }

  // Create object of page data including page name, colour and block items 
  const logPage = () => {
    const pageData = {
      pageName: pageName.value,
      pageBackgroundColor: backgroundColor.value,
      pageBlocks: contentBlockList.value
    }
    // Convert page object to JSON and log out contents
    console.log(JSON.parse(JSON.stringify(pageData)))
  }

  onMounted(() => {
    // Call close modal when clicking outside modal container
    onClickOutside(modalContainer, () => closeModal())
  })

</script>

<template>
  <div class="modal-mask">
    <div ref="modalContainer" class="modal-container">
      <header>
        <h2 class="heading">Save Your Landing Page!</h2>
        <span class="modal-close" @click="toggleSaveModal(false)"><font-awesome-icon icon="fa-solid fa-xmark" aria-label="An icon depicting an X/cross." /></span>
      </header>
      <div class="modal-body">
        <label aria-labelledby="pageName">Landing Page Name (Required)</label>
        <input id="pageName" type="text" v-model="pageName" placeholder="E.g. My Awesome Landing Page" />    
      </div>
      <footer>
        <button class="btn" :disabled="pageName.length === 0" @click="logPage">Save Landing Page</button> 
      </footer>
    </div>
  </div>
</template>

<style scoped>
  .modal-mask {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0, .4);
    display: grid;
    place-items: center;
    z-index: 2;
  }

  .modal-container {
    background: #FFFFFF;
    border-radius: 8px;
    width: 75vw;
    max-width: 500px;
  }

  .modal-container header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    border-radius: 15px 15px 0 0;
    padding: 20px;
  }

  .heading {
    color: #010101;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 10px;
  }

  .modal-close {
    font-size: 20px;
    padding: 10px 0 10px 20px;
    margin-top: -5px;
    cursor: pointer;
  }

  .modal-body {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
  }

  .modal-body label {
    color: #394452;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .modal-body input {
    background: #f3f6f8;
    border: 2px solid #846EFF;
    border-radius: 8px;
    color: #394452;
    font-size: 14px;
    padding: 10px;
  }

  .modal-body input:focus {
    border: 2px solid #4832D7;
  }

  .modal-container footer {
    text-align: center;
    border-radius: 0 0 15px 15px;
    padding: 20px 20px 30px 20px;
  }

  .btn {
    background: #4832D7;
    color: #FFFFFF;
    font-size: 16px;
    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid #846EFF;
    cursor: pointer;
    transition-timing-function: ease-in;
    transition: 1s;
  }

  .btn:hover {
    background: #3b29b0;
  }

  .btn:disabled {
    background: #846EFF;
    cursor: not-allowed;
  }
</style>