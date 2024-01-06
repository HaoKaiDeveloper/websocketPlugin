<template>
  <div>
    <p>連線狀態 :{{ isConnected ? "連線中" : "斷線" }}</p>
    <p>socket Data :{{ socketData }}</p>
    <button @click="closeWebsocket" v-if="isConnected">切斷連線</button>
    <button @click="reconnect" v-else>重新連線</button>
  </div>
</template>

<script setup>
import { useMainStore } from "./store/index";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const mainStore = useMainStore();
const { isConnected, socketData } = storeToRefs(mainStore);

function closeWebsocket() {
  mainStore.closeWebsocket();
}

function reconnect() {
  mainStore.initializaWebsocket();
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
