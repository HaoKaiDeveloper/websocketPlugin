import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useMainStore = defineStore("main", () => {
  const isConnected = ref(false);
  const socketData = ref(null);

  return {
    isConnected,
    socketData,
  };
});
