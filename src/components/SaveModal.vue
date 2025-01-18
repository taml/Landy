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

  const closeModal = () => {
    toggleSaveModal(false)
  }

  const logPage = () => {
    const pageData = {
      pageName: pageName.value,
      pageBackgroundColor: backgroundColor.value,
      pageBlocks: contentBlockList.value
    }
    console.log(JSON.parse(JSON.stringify(pageData)))
  }

  onMounted(() => {
    onClickOutside(modalContainer, () => closeModal())
  })

</script>

<template>
  <div class="custom-modal-mask">
    <div ref="modalContainer" class="custom-modal-container">
      <header>
        <h2>Save Your Landing Page!</h2>
        <span class="modal-close" @click="toggleSaveModal(false)"><font-awesome-icon icon="fa-solid fa-xmark" /></span>
      </header>
      <div>
          <input type="text" v-model="pageName" />
          <button :disabled="pageName.length === 0" @click="logPage">Save Landing Page</button>     
      </div>
    </div>
  </div>
</template>

<style scoped>
  .custom-modal-mask {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0, .4);
    display: grid;
    place-items: center;
    z-index: 2;
  }

  .custom-modal-container {
    background: #FFFFFF;
    border-radius: 15px;
    width: 75vw;
    max-width: 800px;
  }

  .custom-modal-container header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    border-radius: 15px 15px 0 0;
    padding: 30px 40px 15px 40px;
  }

  .modal-close {
    padding: 10px 0 10px 20px;
    cursor: pointer;
  }
</style>