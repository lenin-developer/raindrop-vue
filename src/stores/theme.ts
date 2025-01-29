import { reactive, readonly } from 'vue'
import { defineStore } from 'pinia'

export const useTheme = defineStore('theme', () => {
  const _colorsIcon = reactive({
    main: '#00dc82',
    secondary: '#FFFFFF'
  })

  const colorsIcon = readonly(_colorsIcon)

  return { colorsIcon }
})
