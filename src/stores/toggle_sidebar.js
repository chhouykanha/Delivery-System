import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useToggleSidebar = defineStore('toggleSidebar', () => {
  let activeSidebar = ref(true);
  let toggleSidebar = () => {
        activeSidebar.value = !activeSidebar.value;
  }
  return { toggleSidebar, activeSidebar }
})
