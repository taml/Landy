<script setup lang="ts">
  import { ref } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useBuilderStore } from '@/stores/builder'

  const builderStore = useBuilderStore()
  const { backgroundColor } = storeToRefs(builderStore)
  const { setBackgroundColor } = builderStore

  // Use reactive state variable to get the initial color chosen
  const customColor = ref(backgroundColor.value)
</script>

<template>
  <h2 class="heading">Page Background Colour</h2>
  <div class="color-option">
    <span class="color-circle"><input type="color" v-model="customColor" @change="setBackgroundColor(customColor)"/></span>
    <p class="color-selection" aria-label="Colour selected.">{{ backgroundColor }}</p>
  </div>
</template>

<style scoped>
  .heading {
    color: #010101;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  .color-option {
    width: 80px;
    text-align: center;
  }

  .color-option input {
    border-radius: 50%;
    height: 40px;
    width: 40px;
    border: none;
    outline: none;
    padding: 0;
    cursor: pointer;
  }

  .color-circle {
    display: block;
    height: 40px;
    width: 40px;
    border-radius: 50px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #e9eff4;
    box-shadow: 0px 4px 6px #ced1d5;
  }

  .color-selection {
    color: #394452;
    font-size: 14px;
    font-weight: 500;
    margin-top: 5px;
  }

  input::-webkit-color-swatch-wrapper {
    padding: 0; 
  }

  input[type="color"]::-webkit-color-swatch {
    border: none;
    border-radius: 100%;
  }
</style>