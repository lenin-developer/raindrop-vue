import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTheme = defineStore('theme', () => {
  const color = ref('#00dc82') 
  const colorIcon = computed(() => color.value )

  return { colorIcon }
})
