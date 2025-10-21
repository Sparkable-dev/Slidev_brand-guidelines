import { ref } from 'vue'
import brandData from './brandData.json'

// ========== COLOR SCHEMES ==========
const colorSchemes = [
  {
    name: 'purple',
    background: 'linear-gradient(135deg, #667eea 0%, #4e009cff 100%)',
    overlay: 'bg-black/20',
    textClass: 'text-white'
  },
  {
    name: 'white',
    background: 'white',
    overlay: 'bg-black/15',
    textClass: 'text-black'
  },
  {
    name: 'blue',
    background: '#00aaff',
    overlay: 'bg-black/10',
    textClass: 'text-white'
  }
]

// ========== GLOBAL THEME (Persists across slides) ==========
// This will be set once on first load and persist until page refresh
const globalTheme = ref(null)

// Initialize global theme on first import
if (!globalTheme.value) {
  const randomScheme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)]
  globalTheme.value = randomScheme
  console.log(`🎨 Theme selected: ${randomScheme.name}`)
}

// ========== GET SLIDE CONTENT ==========
/**
 * Retrieves content for a specific slide from JSON data
 * @param {string} slideKey - The key of the slide in brandData.slides
 * @returns {object} - The slide content with all variables
 */
const getSlideContent = (slideKey) => {
  const slideData = brandData.slides[slideKey]
  
  if (!slideData) {
    console.error(`Slide "${slideKey}" not found in brandData.json`)
    return {}
  }
  
  return slideData
}

// ========== GET GLOBAL CONFIG ==========
/**
 * Retrieves global configuration like company info
 * @returns {object} - Global config data
 */
const getGlobalConfig = () => {
  return brandData.global
}

// ========== EXPORTS ==========
export {
  globalTheme,
  colorSchemes,
  getSlideContent,
  getGlobalConfig,
  brandData
}