<script setup lang="ts">
import { ref } from "~/.nuxt/imports";

  var isRightSide = ref(false)
  
const emit = defineEmits(['switch'])
function emitToParent(event:Event){
  emit("switch",[isRightSide.value])
}
</script>

<template>
  <label class="switch-button">
    <input class="is-hidden" type="checkbox" @change="(event) => emitToParent(event)" v-model="isRightSide" />
    <div class="circle" :class="{ 'right-side': isRightSide }"></div>
  </label>
</template>

<style scoped>
.switch-button {
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  margin: 0 1rem;
  background-color: cornsilk;
  border-radius: 0.6rem;
  height: 1.5rem;
  width: 3rem;
  border: 1px solid grey;
  font-size: 0.8em;
}
.circle {
  position: absolute;
  height: 1.2rem;
  width: 1.2rem;
  top: 0.1rem;
  left: 0.1rem;

  background-color: darkslategrey;
  border-radius: 0.6rem;
  transition-duration: 200ms;
  transition-property: left;
  transition-timing-function: ease-in;
}
.right-side {
  left: calc(100% - 1.3rem);
}
</style>
