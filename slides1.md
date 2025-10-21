---
layout: cover
---

<div class="absolute inset-0" :style="backgroundStyle"></div>
<div class="absolute inset-0" :class="overlayClass"></div>

<div class="relative h-full flex flex-col items-start justify-center px-16" :class="textClass">
  <!-- Logo on the left -->
  <div class="mb-2">
    <img :src="content.logoUrl" class="h-38 w-38 rounded-lg object-cover" @error="handleImageError">
  </div>

  <!-- Main Title -->
  <h1 class="text-4xl md:text-5xl font-semibold mb-6 tracking-wide max-w-2xl">
    {{ content.mainTitle }}
  </h1>
  
  <!-- Company Name -->
  <div class="mb-8">
    <h2 class="text-2xl md:text-3xl font-medium opacity-90">
      {{ content.companyName }}
    </h2>
  </div>

  <!-- Subtitle -->
  <p class="text-base md:text-lg max-w-md leading-relaxed opacity-80 font-normal mb-8">
    {{ content.subtitle }}
  </p>

  <!-- Year -->
  <p class="text-base opacity-70 border-t border-current/20 pt-4">
    {{ content.currentYear }}
  </p>
</div>

<script setup>
import { ref, onMounted } from 'vue'

const brandData = {
  cover: {
    logoUrl: '/assests/etula.png',
    fallbackLogo: '/assests/ethula.png',
    mainTitle: 'Brand Guidelines',
    companyName: 'ETULA',
    subtitle: 'Redefining Digital Experiences',
    currentYear: 2024
  }
}

const colorSchemes = [
  {
    name: 'purple',
    background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    overlay: 'bg-black/10',
    textClass: 'text-white'
  },
  {
    name: 'blue',
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    overlay: 'bg-black/15',
    textClass: 'text-white'
  },
  {
    name: 'light-green',
    background: 'linear-gradient(135deg, #86efac 0%, #4ade80 100%)',
    overlay: 'bg-black/10',
    textClass: 'text-gray-900'
  }
]

const backgroundStyle = ref('')
const overlayClass = ref('')
const textClass = ref('text-white')
const content = ref(brandData.cover)

const handleImageError = () => {
  console.log('Logo failed to load, using fallback')
  content.value.logoUrl = content.value.fallbackLogo
}

const getGlobalTheme = () => {
  if (window.__SLIDEV_BRAND_THEME__) {
    console.log('🎨 Using existing theme:', window.__SLIDEV_BRAND_THEME__.name)
    return window.__SLIDEV_BRAND_THEME__
  }
  
  const theme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)]
  window.__SLIDEV_BRAND_THEME__ = theme
  console.log('🎨 New theme selected:', theme.name)
  
  return theme
}

onMounted(() => {
  try {
    const theme = getGlobalTheme()
    backgroundStyle.value = `background: ${theme.background}`
    overlayClass.value = theme.overlay
    textClass.value = theme.textClass
  } catch (error) {
    console.error('Error initializing cover:', error)
    backgroundStyle.value = 'background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
    overlayClass.value = 'bg-black/10'
    textClass.value = 'text-white'
  }
})
</script>

<style>
h1, h2 {
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  letter-spacing: -0.01em;
}

.text-white {
  color: white;
}

.text-gray-900 {
  color: #1f2937;
}
</style>

---

<div class="absolute inset-0" :style="backgroundStyle"></div>
<div class="absolute inset-0" :class="overlayClass"></div>

<div class="relative h-full flex flex-col justify-center px-12 py-8" :class="textClass">

<div class="max-w-6xl mx-auto">
  <h1 class="section-title mb-12 text-left">{{ content.title }}</h1>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
    <!-- Left Column: Mission & Vision -->
    <div class="space-y-8">
      <div class="commerce-card p-6 flex flex-col">
        <div class="flex items-center mb-3">
          <div class="commerce-icon mission-icon mr-4">{{ content.mission.icon }}</div>
          <h2 class="text-xl font-semibold">{{ content.mission.title }}</h2>
        </div>
        <p class="text-sm opacity-90">{{ content.mission.description }}</p>
      </div>
      <div class="commerce-card p-6 flex flex-col">
        <div class="flex items-center mb-3">
          <div class="commerce-icon vision-icon mr-4">{{ content.vision.icon }}</div>
          <h2 class="text-xl font-semibold">{{ content.vision.title }}</h2>
        </div>
        <p class="text-sm opacity-90">{{ content.vision.description }}</p>
      </div>
    </div>
    <!-- Right Column: Story with Image -->
    <div>
      <div class="story-panel p-8">
        <div class="flex flex-col items-center mb-6">
          <div class="story-image-container mb-4">
            <img 
              src="https://www.monitask.com/wp-content/uploads/2023/07/6.-how-to-become-more-confident-at-work.png" 
              alt="Our Story" 
              class="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-lg"
              @error="handleImageError"
            >
          </div>
          <h3 class="text-lg font-semibold mb-4 text-center">{{ content.story.title }}</h3>
        </div>
        <p class="text-sm opacity-90">{{ content.story.description }}</p>
      </div>
    </div>
  </div>
</div>
</div>

<script setup>
import { ref, onMounted } from 'vue'

const brandData = {
  brandStory: {
    title: 'Our Digital Journey',
    mission: {
      icon: '🎯',
      title: 'Our Mission',
      description: 'To create innovative digital solutions that transform how people interact with technology and enhance everyday experiences.'
    },
    vision: {
      icon: '🚀',
      title: 'Our Vision',
      description: 'To be the leading force in digital innovation, shaping the future of technology and creating meaningful impact worldwide.'
    },
    story: {
      title: 'Our Story',
      description: 'ETULA emerged from a passion for innovation and a vision to bridge the gap between technology and human experience. We started with a simple belief: technology should empower, not complicate. Today, we continue to push boundaries and create solutions that matter.'
    }
  }
}

const colorSchemes = [
  {
    name: 'purple',
    background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    overlay: 'bg-black/10',
    textClass: 'text-white'
  },
  {
    name: 'blue',
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    overlay: 'bg-black/15',
    textClass: 'text-white'
  },
  {
    name: 'light-green',
    background: 'linear-gradient(135deg, #86efac 0%, #4ade80 100%)',
    overlay: 'bg-black/10',
    textClass: 'text-gray-900'
  }
]

const backgroundStyle = ref('')
const overlayClass = ref('')
const textClass = ref('text-white')
const content = ref(brandData.brandStory)

const handleImageError = (event) => {
  console.log('Story image failed to load, using placeholder')
  event.target.src = '/default-story-image.jpg'
  event.target.alt = 'Our company story'
}

const getGlobalTheme = () => {
  if (window.__SLIDEV_BRAND_THEME__) {
    console.log('🎨 Using existing theme:', window.__SLIDEV_BRAND_THEME__.name)
    return window.__SLIDEV_BRAND_THEME__
  }
  
  const theme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)]
  window.__SLIDEV_BRAND_THEME__ = theme
  console.log('🎨 New theme selected:', theme.name)
  
  return theme
}

onMounted(() => {
  try {
    const theme = getGlobalTheme()
    backgroundStyle.value = `background: ${theme.background}`
    overlayClass.value = theme.overlay
    textClass.value = theme.textClass
  } catch (error) {
    console.error('Error initializing brand story:', error)
    backgroundStyle.value = 'background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
    overlayClass.value = 'bg-black/10'
    textClass.value = 'text-white'
  }
})
</script>

<style>
.section-title {
  font-size: 2rem;
  font-weight: 700;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.commerce-card {
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(255,255,255,0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.commerce-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.2);
}

.story-panel {
  background: rgba(0,0,0,0.25);
  border-radius: 1rem;
  border: 1px solid rgba(255,255,255,0.15);
  position: relative;
}

.story-image-container {
  position: relative;
}

.story-image-container::before {
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  background: linear-gradient(45deg, #8b5cf6, #3b82f6, #86efac);
  border-radius: 50%;
  z-index: -1;
  opacity: 0.7;
}

.commerce-icon {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  font-size: 1.25rem;
}

.mission-icon {
  background: rgba(139, 92, 246, 0.25);
}

.vision-icon {
  background: rgba(59, 130, 246, 0.25);
}

.text-white {
  color: white;
}

.text-gray-900 {
  color: #1f2937;
}
</style>

---

<div class="absolute inset-0" :style="backgroundStyle"></div>
<div class="absolute inset-0" :class="overlayClass"></div>

<div class="relative h-full flex flex-col justify-center px-12" :class="textClass">

<div class="max-w-6xl mx-auto">
  <h1 class="section-title mb-4">{{ content.title }}</h1>

  <p class="text-center text-base mb-12 max-w-2xl mx-auto">{{ content.description }}</p>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="value-panel" v-for="(value, key) in content.values" :key="key">
      <div class="value-badge mb-5">
        <span class="value-symbol">{{ value.icon }}</span>
      </div>
      <h3 class="text-lg font-semibold mb-3 text-left">{{ value.title }}</h3>
      <p class="text-sm leading-relaxed opacity-85 text-left">
        {{ value.description }}
      </p>
    </div>
  </div>
</div>

</div>

<script setup>
import { ref, onMounted } from 'vue'

const brandData = {
  brandValues: {
    title: 'Our Core Values',
    description: 'The principles that guide our innovation and growth',
    values: {
      innovation: {
        icon: '💡',
        title: 'Innovation First',
        description: 'We constantly push boundaries and embrace new technologies to create groundbreaking solutions.'
      },
      excellence: {
        icon: '⭐',
        title: 'Excellence in Execution',
        description: 'We deliver high-quality solutions with attention to detail and commitment to perfection.'
      },
      collaboration: {
        icon: '🤝',
        title: 'Collaborative Spirit',
        description: 'We believe in the power of teamwork and diverse perspectives to achieve extraordinary results.'
      }
    }
  }
}

const colorSchemes = [
  {
    name: 'purple',
    background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    overlay: 'bg-black/10',
    textClass: 'text-white'
  },
  {
    name: 'blue',
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    overlay: 'bg-black/15',
    textClass: 'text-white'
  },
  {
    name: 'light-green',
    background: 'linear-gradient(135deg, #86efac 0%, #4ade80 100%)',
    overlay: 'bg-black/10',
    textClass: 'text-gray-900'
  }
]

const backgroundStyle = ref('')
const overlayClass = ref('')
const textClass = ref('text-white')
const content = ref(brandData.brandValues)

const getGlobalTheme = () => {
  if (window.__SLIDEV_BRAND_THEME__) {
    return window.__SLIDEV_BRAND_THEME__
  }
  
  const theme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)]
  window.__SLIDEV_BRAND_THEME__ = theme
  return theme
}

onMounted(() => {
  try {
    const theme = getGlobalTheme()
    backgroundStyle.value = `background: ${theme.background}`
    overlayClass.value = theme.overlay
    textClass.value = theme.textClass
  } catch (error) {
    console.error('Error:', error)
    backgroundStyle.value = 'background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
    overlayClass.value = 'bg-black/10'
    textClass.value = 'text-white'
  }
})
</script>

<style>
.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: inherit;
}

.value-panel {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  text-align: left;
}

.value-panel:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.value-badge {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.value-symbol {
  font-size: 1.5rem;
  margin-left: 0.5rem;
}

.text-white {
  color: white;
}

.text-gray-900 {
  color: #1f2937;
}
</style>

---
layout: default
---

<div class="absolute inset-0" :style="backgroundStyle"></div>
<div class="absolute inset-0" :class="overlayClass"></div>

<div class="relative h-full flex flex-col justify-center px-12" :class="textClass">

  <div class="max-w-6xl mx-auto">
    <h1 class="section-title mb-12 text-left">{{ content.title }}</h1>
    <div class="mb-16">
      <h2 class="text-xl font-semibold mb-8 text-left">Primary Colors</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div v-for="color in content.primaryColors" :key="color.name" class="color-card-simple">
          <div 
            class="color-sample-simple flex items-center justify-center text-xs font-medium"
            :style="{ backgroundColor: color.hex }"
            @click="copyToClipboard(color.hex)"
          >
            <span class="color-hex-display">{{ color.hex }}</span>
            <div class="color-action-simple">
              <span class="action-text-simple">Copy</span>
            </div>
          </div>
          <div class="color-info-simple text-center mt-3">
            <p class="text-sm font-semibold">{{ color.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h2 class="text-xl font-semibold mb-8 text-left">Secondary Colors</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div v-for="color in content.secondaryColors" :key="color.name" class="color-card-simple">
          <div 
            class="color-sample-simple flex items-center justify-center text-xs font-medium"
            :style="{ backgroundColor: color.hex }"
            @click="copyToClipboard(color.hex)"
          >
            <span class="color-hex-display">{{ color.hex }}</span>
            <div class="color-action-simple">
              <span class="action-text-simple">Copy</span>
            </div>
          </div>
          <div class="color-info-simple text-center mt-3">
            <p class="text-sm font-semibold">{{ color.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

<script setup>
import { ref, onMounted } from 'vue'

const brandData = {
  brandColors: {
    title: 'Brand Colors',
    primaryColors: [
      { name: 'ETULA Purple', hex: '#8b5cf6' },
      { name: 'ETULA Blue', hex: '#3b82f6' },
      { name: 'ETULA Green', hex: '#10b981' },
      { name: 'Deep Purple', hex: '#7c3aed' }
    ],
    secondaryColors: [
      { name: 'Light Green', hex: '#86efac' },
      { name: 'Sky Blue', hex: '#60a5fa' },
      { name: 'Lavender', hex: '#a78bfa' },
      { name: 'Mint', hex: '#6ee7b7' }
    ]
  }
}

const colorSchemes = [
  {
    name: 'purple',
    background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    overlay: 'bg-black/10',
    textClass: 'text-white'
  },
  {
    name: 'blue',
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    overlay: 'bg-black/15',
    textClass: 'text-white'
  },
  {
    name: 'light-green',
    background: 'linear-gradient(135deg, #86efac 0%, #4ade80 100%)',
    overlay: 'bg-black/10',
    textClass: 'text-gray-900'
  }
]

const backgroundStyle = ref('')
const overlayClass = ref('')
const textClass = ref('text-white')
const content = ref(brandData.brandColors)

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    console.log('Color copied:', text)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

const getGlobalTheme = () => {
  if (window.__SLIDEV_BRAND_THEME__) return window.__SLIDEV_BRAND_THEME__
  const theme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)]
  window.__SLIDEV_BRAND_THEME__ = theme
  return theme
}

onMounted(() => {
  const theme = getGlobalTheme()
  backgroundStyle.value = `background: ${theme.background}`
  overlayClass.value = theme.overlay
  textClass.value = theme.textClass
})
</script>

<style>
.section-title {
  font-size: 2rem;
  font-weight: 600;
}

.color-card-simple {
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}
.color-card-simple:hover {
  transform: translateY(-4px);
}

.color-sample-simple {
  position: relative;
  width: 100%;
  height: 90px;
  border-radius: 0.75rem;
  border: 3px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  color: white;
  transition: all 0.3s ease;
}

.color-card-simple:hover .color-sample-simple {
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.color-action-simple {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.color-card-simple:hover .color-action-simple {
  opacity: 1;
}

.color-hex-display {
  opacity: 0.8;
  font-weight: 600;
}

.action-text-simple {
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.text-white {
  color: white;
}

.text-gray-900 {
  color: #1f2937;
}
</style>

---
layout: default
---

<div class="absolute inset-0" :style="backgroundStyle"></div>
<div class="absolute inset-0" :class="overlayClass"></div>

<div class="relative h-full flex flex-col justify-center px-16" :class="textClass">

<h1 class="page-title mb-10">{{ content.title }}</h1>

<div class="grid grid-cols-2 gap-8">
  <div class="typography-section">
    <h2 class="section-subtitle mb-2">Primary Typeface</h2>
    <div class="font-showcase primary-font">
      <div class="font-display mb-2">
        <h3 class="font-name">{{ content.primaryFont.name }}</h3>
        <p class="font-usage">{{ content.primaryFont.usage }}</p>
      </div>
      <div class="font-weights">
        <div class="weight-example" v-for="weight in content.primaryFont.weights" :key="weight.name">
          <span class="weight-label">{{ weight.name }}</span>
          <p :style="{ fontWeight: weight.value }" class="weight-sample">
            {{ content.sampleText }}
          </p>
        </div>
      </div>
    </div>
  </div>

 <div class="typography-section">
    <h2 class="section-subtitle mb-2">Secondary Typeface</h2>
    <div class="font-showcase secondary-font">
      <div class="font-display mb-2">
        <h3 class="font-name">{{ content.secondaryFont.name }}</h3>
        <p class="font-usage">{{ content.secondaryFont.usage }}</p>
      </div>
      <div class="font-weights">
        <div class="weight-example" v-for="weight in content.secondaryFont.weights" :key="weight.name">
          <span class="weight-label">{{ weight.name }}</span>
          <p :style="{ fontWeight: weight.value }" class="weight-sample">
            {{ content.sampleText }}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

<script setup>
import { ref, onMounted } from 'vue'

const brandData = {
  typography: {
    title: 'Typography',
    sampleText: 'ETULA - Digital Innovation',
    primaryFont: {
      name: 'Inter',
      usage: 'Headings & Interface',
      weights: [
        { name: 'Regular', value: '400' },
        { name: 'Medium', value: '500' },
        { name: 'Bold', value: '700' }
      ]
    },
    secondaryFont: {
      name: 'Lora',
      usage: 'Content & Descriptions',
      weights: [
        { name: 'Regular', value: '400' },
        { name: 'Medium', value: '500' },
        { name: 'Bold', value: '700' }
      ]
    }
  }
}

const colorSchemes = [
  {
    name: 'purple',
    background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    overlay: 'bg-black/10',
    textClass: 'text-white'
  },
  {
    name: 'blue',
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    overlay: 'bg-black/15',
    textClass: 'text-white'
  },
  {
    name: 'light-green',
    background: 'linear-gradient(135deg, #86efac 0%, #4ade80 100%)',
    overlay: 'bg-black/10',
    textClass: 'text-gray-900'
  }
]

const backgroundStyle = ref('')
const overlayClass = ref('')
const textClass = ref('text-white')
const content = ref(brandData.typography)

const getGlobalTheme = () => {
  if (window.__SLIDEV_BRAND_THEME__) {
    return window.__SLIDEV_BRAND_THEME__
  }
  
  const theme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)]
  window.__SLIDEV_BRAND_THEME__ = theme
  return theme
}

onMounted(() => {
  try {
    const theme = getGlobalTheme()
    backgroundStyle.value = `background: ${theme.background}`
    overlayClass.value = theme.overlay
    textClass.value = theme.textClass
  } catch (error) {
    console.error('Error:', error)
    backgroundStyle.value = 'background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
    overlayClass.value = 'bg-black/10'
    textClass.value = 'text-white'
  }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Lora:wght@400;500;700&display=swap');

.page-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
}

.text-white .page-title {
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.text-gray-900 .page-title {
  color: #1f2937;
}

.section-subtitle {
  font-size: 1.2rem;
  font-weight: 600;
  opacity: 0.9;
}

.typography-section {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.font-showcase {
  transition: transform 0.3s ease;
}

.typography-section:hover .font-showcase {
  transform: scale(1.02);
}

.primary-font {
  font-family: 'Inter', sans-serif;
}

.secondary-font {
  font-family: 'Lora', serif;
}

.font-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.font-usage {
  font-size: 0.875rem;
  opacity: 0.7;
}

.weight-example {
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.weight-example:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateX(8px);
}

.weight-label {
  font-size: 0.75rem;
  opacity: 0.6;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.weight-sample {
  font-size: 1.125rem;
  margin-top: 0.25rem;
}

.text-white {
  color: white;
}

.text-gray-900 {
  color: #1f2937;
}
</style>

---
layout: default
---

<div class="absolute inset-0" :style="backgroundStyle"></div>
<div class="absolute inset-0" :class="overlayClass"></div>

<div class="relative h-full flex flex-col justify-center px-16 py-8" :class="textClass">

<h1 class="page-title mb-8">{{ content.title }}</h1>

<div class="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
  <div class="imagery-card" v-for="style in content.imageStyles" :key="style.name">
    <div class="image-preview">
      <div class="image-overlay">
        <img :src="style.image" class="image-icon-img" :alt="style.name" />
      </div>
    </div>
    <div class="image-info">
      <h3 class="image-title">{{ style.name }}</h3>
      <p class="image-description">{{ style.description }}</p>
      <div class="image-tags">
        <span class="tag" v-for="tag in style.tags" :key="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</div>

<div class="guidelines-footer">
  <div class="guideline-item" v-for="guideline in content.guidelines" :key="guideline">
    <span class="guideline-dot">•</span>
    <span>{{ guideline }}</span>
  </div>
</div>

</div>

<script setup>
import { ref, onMounted } from 'vue'

const brandData = {
  imageryStyle: {
    title: 'Visual Style Guide',
    imageStyles: [
      {
        name: 'Technology Focus',
        image: 'https://globalfocusmagazine.com/wp-content/uploads/2020/02/Engaging_with_technology-1536x1024.jpg',
        description: 'Clean, modern technology imagery with professional lighting',
        tags: ['Tech', 'Modern', 'Professional']
      },
      {
        name: 'Innovation Context',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
        description: 'Technology in real-world applications and innovative settings',
        tags: ['Innovation', 'Context', 'Real']
      },
      {
        name: 'Digital Ready',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop',
        description: 'Optimized for digital platforms with clear visual hierarchy',
        tags: ['Digital', 'Platform', 'Clear']
      }
    ],
    guidelines: [
      'High resolution: minimum 2000px width for digital',
      'Consistent professional lighting and composition',
      'Focus on innovation and technology themes'
    ]
  }
}

const colorSchemes = [
  {
    name: 'purple',
    background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    overlay: 'bg-black/10',
    textClass: 'text-white'
  },
  {
    name: 'blue',
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    overlay: 'bg-black/15',
    textClass: 'text-white'
  },
  {
    name: 'light-green',
    background: 'linear-gradient(135deg, #86efac 0%, #4ade80 100%)',
    overlay: 'bg-black/10',
    textClass: 'text-gray-900'
  }
]

const backgroundStyle = ref('')
const overlayClass = ref('')
const textClass = ref('text-white')
const content = ref(brandData.imageryStyle)

const getGlobalTheme = () => {
  if (window.__SLIDEV_BRAND_THEME__) {
    return window.__SLIDEV_BRAND_THEME__
  }
  
  const theme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)]
  window.__SLIDEV_BRAND_THEME__ = theme
  return theme
}

onMounted(() => {
  try {
    const theme = getGlobalTheme()
    backgroundStyle.value = `background: ${theme.background}`
    overlayClass.value = theme.overlay
    textClass.value = theme.textClass
  } catch (error) {
    console.error('Error:', error)
    backgroundStyle.value = 'background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
    overlayClass.value = 'bg-black/10'
    textClass.value = 'text-white'
  }
})
</script>

<style>
.page-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
}

.text-white .page-title {
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.text-gray-900 .page-title {
  color: #1f2937;
}

.imagery-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.imagery-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.3);
}

.image-preview {
  position: relative;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.image-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.imagery-card:hover .image-overlay {
  background: rgba(0, 0, 0, 0.25);
}

.image-icon-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.imagery-card:hover .image-icon-img {
  transform: scale(1.1);
}

.image-info {
  padding: 1.15rem;
}

.image-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 3px;
}

.image-description {
  font-size: 10px;
  opacity: 0.85;
  margin-bottom: 0.75rem;
  line-height: 1.4;
  margin-top: 10px;
}

.image-tags {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.tag {
  font-size: 7px;
  padding:7px 9px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 9999px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.imagery-card:hover .tag {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

.guidelines-footer {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}

.guideline-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 9px;
  opacity: 0.9;
}

.guideline-dot {
  color: #8b5cf6;
  font-size: 1.25rem;
}

.text-white {
  color: white;
}

.text-gray-900 {
  color: #1f2937;
}
</style>


---
layout: default
---

<div class="absolute inset-0" :style="backgroundStyle"></div>
<div class="absolute inset-0" :class="overlayClass"></div>

<div class="relative h-full flex flex-col justify-center px-16 py-8" :class="textClass">

<h1 class="page-title mb-8">{{ content.title }}</h1>

<div class="grid grid-cols-2 gap-5 max-w-5xl mx-auto">
  <div class="usage-card correct" v-for="example in content.correctExamples" :key="example.id">
    <div class="card-header">
      <span class="card-icon">✅</span>
      <h3 class="card-title">{{ example.title }}</h3>
    </div>
    <div class="card-content">
      <div class="image-preview" :class="example.bgClass">
        <div class="image-container">
          <img :src="example.imagePath" :alt="example.altText" class="example-image" />
        </div>
      </div>
    </div>
  </div>
</div>

</div>

<script setup>
import { ref, onMounted } from 'vue'

const brandData = {
  correctImageUsage: {
    title: 'Visual Content Guidelines',
    correctExamples: [
      {
        id: 1,
        title: 'High Quality & Professional',
        imagePath: 'https://globalfocusmagazine.com/wp-content/uploads/2020/02/Engaging_with_technology-1536x1024.jpg',
        altText: 'High quality technology imagery',
        bgClass: 'bg-white',
      },
      {
        id: 2,
        title: 'Multiple Perspectives',
        imagePath: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
        altText: 'Technology from multiple angles',
        bgClass: 'bg-gray-50',
      },
      {
        id: 3,
        title: 'Innovation Context',
        imagePath: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop',
        altText: 'Technology in innovative context',
        bgClass: 'bg-white',
      },
      {
        id: 4,
        title: 'Clean Composition',
        imagePath: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop',
        altText: 'Clean professional composition',
        bgClass: 'bg-gray-50',
      }
    ]
  }
}

const colorSchemes = [
  {
    name: 'purple',
    background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    overlay: 'bg-black/10',
    textClass: 'text-white'
  },
  {
    name: 'blue',
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    overlay: 'bg-black/15',
    textClass: 'text-white'
  },
  {
    name: 'light-green',
    background: 'linear-gradient(135deg, #86efac 0%, #4ade80 100%)',
    overlay: 'bg-black/10',
    textClass: 'text-gray-900'
  }
]

const backgroundStyle = ref('')
const overlayClass = ref('')
const textClass = ref('text-white')
const content = ref(brandData.correctImageUsage)

const getGlobalTheme = () => {
  if (window.__SLIDEV_BRAND_THEME__) {
    return window.__SLIDEV_BRAND_THEME__
  }
  
  const theme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)]
  window.__SLIDEV_BRAND_THEME__ = theme
  return theme
}

onMounted(() => {
  try {
    const theme = getGlobalTheme()
    backgroundStyle.value = `background: ${theme.background}`
    overlayClass.value = theme.overlay
    textClass.value = theme.textClass
  } catch (error) {
    console.error('Error:', error)
    backgroundStyle.value = 'background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
    overlayClass.value = 'bg-black/10'
    textClass.value = 'text-white'
  }
})
</script>

<style>
.page-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
}

.text-white .page-title {
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.text-gray-900 .page-title {
  color: #1f2937;
}

.usage-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 0.75rem;
  padding: 10px;
  border: 2px solid;
  transition: all 0.3s ease;
}

.usage-card.correct {
  border-color: rgba(244, 244, 244, 0.4);
}

.usage-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 4px;
  padding-bottom: 0.1rem;
}

.card-icon {
  font-size: 10px;
}

.card-title {
  font-size: 16.5px;
  font-weight: 700;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.image-preview {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
}

.image-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.example-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-white {
  color: white;
}

.text-gray-900 {
  color: #1f2937;
}
</style>

---
layout: center
---

<div class="absolute inset-0" :style="backgroundStyle"></div>
<div class="absolute inset-0" :class="overlayClass"></div>

<!-- Main Content -->
<div class="relative z-10 flex flex-col items-center justify-center gap-8">
  <h1 class="page-title mb-2">Website Example</h1>
  <div class="w-[840px] h-[390px] rounded-2xl overflow-hidden shadow-2xl relative transition-all duration-500 hover:scale-105 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop" alt="Technology Hero Background"
         class="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-500 hover:opacity-90" />
    <div class="absolute inset-0 bg-black/40 transition-all duration-500 hover:bg-black/30"></div>
    <div class="relative z-10 flex flex-col justify-center items-center h-full text-center px-8">
      <h1 class="text-5xl font-bold text-white mb-4 drop-shadow-lg">ETULA</h1>
      <p class="text-base text-gray-200 mb-6 leading-relaxed max-w-[320px] mt-2">
        Innovating the future of digital experiences and technology solutions.
      </p>
      <button class="bg-[#10b981] hover:bg-[#059669] text-white px-4 py-2 rounded-lg font-semibold shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg mt-3">
        Explore Solutions
      </button>
      <div class="flex gap-3 mt-10 ml-150">
        <div class="w-7 h-7 rounded-md bg-[#10b981] transition-transform duration-300 hover:scale-125 cursor-pointer" title="ETULA Green #10b981"></div>
        <div class="w-7 h-7 rounded-md bg-[#3b82f6] transition-transform duration-300 hover:scale-125 cursor-pointer" title="Action Blue #3b82f6"></div>
        <div class="w-7 h-7 rounded-md bg-[#8b5cf6] transition-transform duration-300 hover:scale-125 cursor-pointer" title="Innovation Purple #8b5cf6"></div>
        <div class="w-7 h-7 rounded-md bg-[#f59e0b] transition-transform duration-300 hover:scale-125 cursor-pointer" title="Trust Orange #f59e0b"></div>
        <div class="w-7 h-7 rounded-md bg-[#ffffff] transition-transform duration-300 hover:scale-125 cursor-pointer" title="White #ffffff"></div>
        <div class="w-7 h-7 rounded-md bg-[#6b7280] transition-transform duration-300 hover:scale-125 cursor-pointer" title="Neutral Gray #6b7280"></div>
      </div>
    </div>
  </div>
</div>

<script setup>
import { ref, onMounted } from 'vue'

const colorSchemes = [
  {
    name: 'purple',
    background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    overlay: 'bg-black/10',
    textClass: 'text-white'
  },
  {
    name: 'blue',
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    overlay: 'bg-black/15',
    textClass: 'text-white'
  },
  {
    name: 'light-green',
    background: 'linear-gradient(135deg, #86efac 0%, #4ade80 100%)',
    overlay: 'bg-black/10',
    textClass: 'text-gray-900'
  }
]

const backgroundStyle = ref('')
const overlayClass = ref('')
const textClass = ref('text-white')

const getGlobalTheme = () => {
  if (window.__SLIDEV_BRAND_THEME__) {
    return window.__SLIDEV_BRAND_THEME__
  }
  
  const theme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)]
  window.__SLIDEV_BRAND_THEME__ = theme
  return theme
}

onMounted(() => {
  try {
    const theme = getGlobalTheme()
    backgroundStyle.value = `background: ${theme.background}`
    overlayClass.value = theme.overlay
    textClass.value = theme.textClass
  } catch (error) {
    console.error('Error:', error)
    backgroundStyle.value = 'background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
    overlayClass.value = 'bg-black/10'
    textClass.value = 'text-white'
  }
})
</script>

<style>

.page-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
}

.text-white .page-title {
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.text-gray-900 .page-title {
  color: #1f2937;
}
</style>



---
layout: default
---

<div class="absolute inset-0" :style="backgroundStyle"></div>
<div class="absolute inset-0" :class="overlayClass"></div>

<div class="relative h-full flex flex-col justify-center px-16 py-8" :class="textClass">

<h1 class="page-title mb-10">{{ content.title }}</h1>

<!-- Primary Logo Section -->
<div class="mb-16">
  <div class="flex items-start gap-12 max-w-5xl mx-auto">
    <!-- Title on the left -->
    <div class="w-48 flex-shrink-0 mt-10">
      <h2 class="section-subtitle text-left">Primary Logo</h2>
    </div>
    <div class="flex-1 flex justify-center gap-8">
      <div class="logo-display-card">
        <div class="logo-preview bg-white rounded-xl p-2 shadow-lg border border-gray-200">
          <img :src="content.primaryLogo.light" alt="ETULA Primary Logo" class="w-48 h-28 object-contain">
        </div>
        <p class="logo-label mt-4 text-center">Light Background</p>
      </div>
      <div class="logo-display-card">
        <div class="logo-preview bg-gray-900 rounded-xl p-2 shadow-lg border border-gray-700">
          <img :src="content.primaryLogo.dark" alt="ETULA Primary Logo" class="w-48 h-28 object-contain">
        </div>
        <p class="logo-label mt-4 text-center">Dark Background</p>
      </div>
    </div>
  </div>
</div>
<div>
  <div class="flex items-start gap-12 max-w-5xl mx-auto">
    <!-- Title on the left -->
    <div class="w-48 flex-shrink-0 mt-10">
      <h2 class="section-subtitle text-left">Secondary Logo</h2>
    </div>
    <div class="flex-1 flex justify-center gap-8">
      <div class="logo-display-card">
        <div class="logo-preview bg-white rounded-xl p-2 shadow-lg border border-gray-200">
          <img :src="content.secondaryLogo.light" alt="ETULA Secondary Logo" class="w-48 h-28 object-contain">
        </div>
        <p class="logo-label mt-4 text-center">Light Background</p>
      </div>
      <div class="logo-display-card">
        <div class="logo-preview bg-gray-900 rounded-xl p-2 shadow-lg border border-gray-700">
          <img :src="content.secondaryLogo.dark" alt="ETULA Secondary Logo" class="w-48 h-28 object-contain">
        </div>
        <p class="logo-label mt-4 text-center">Dark Background</p>
      </div>
    </div>
  </div>
</div>

</div>

<script setup>
import { ref, onMounted } from 'vue'

const brandData = {
  logos: {
    title: 'Brand Logos',
    primaryLogo: {
      light: '/assests/ethulano.png',
      dark: '/assests/ethula.png'
    },
    secondaryLogo: {
      light: '/assests/ethula2no.png',
      dark: '/assests/ethula2.png'
    }
  }
}

const colorSchemes = [
  {
    name: 'purple',
    background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    overlay: 'bg-black/10',
    textClass: 'text-white'
  },
  {
    name: 'blue',
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    overlay: 'bg-black/15',
    textClass: 'text-white'
  },
  {
    name: 'light-green',
    background: 'linear-gradient(135deg, #86efac 0%, #4ade80 100%)',
    overlay: 'bg-black/10',
    textClass: 'text-gray-900'
  }
]

const backgroundStyle = ref('')
const overlayClass = ref('')
const textClass = ref('text-white')
const content = ref(brandData.logos)

const getGlobalTheme = () => {
  if (window.__SLIDEV_BRAND_THEME__) {
    return window.__SLIDEV_BRAND_THEME__
  }
  
  const theme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)]
  window.__SLIDEV_BRAND_THEME__ = theme
  return theme
}

onMounted(() => {
  try {
    const theme = getGlobalTheme()
    backgroundStyle.value = `background: ${theme.background}`
    overlayClass.value = theme.overlay
    textClass.value = theme.textClass
  } catch (error) {
    console.error('Error:', error)
    backgroundStyle.value = 'background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
    overlayClass.value = 'bg-black/10'
    textClass.value = 'text-white'
  }
})
</script>

<style>
.page-title {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 50px;
}

.text-white .page-title {
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.text-gray-900 .page-title {
  color: #1f2937;
}

.section-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  opacity: 0.9;
  margin-bottom: 0;
}

.logo-display-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-preview {
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-preview:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.logo-label {
  font-size: 0.9rem;
  font-weight: 500;
  opacity: 0.8;
}

.text-white {
  color: white;
}

.text-gray-900 {
  color: #1f2937;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .flex.items-start {
    flex-direction: column;
    gap: 1rem;
  }
  
  .w-48 {
    width: 100%;
    text-align: center;
  }
  
  .section-subtitle {
    text-align: center !important;
  }
}

@media (max-width: 768px) {
  .flex.justify-center {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .logo-preview {
    padding: 1rem;
  }
  
  .logo-preview img {
    width: 100px;
    height: 100px;
  }
  
  .page-title {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
  
  .section-subtitle {
    font-size: 1.3rem;
  }
}
</style>



---
layout: default
---

<div class="absolute inset-0" :style="backgroundStyle"></div>
<div class="absolute inset-0" :class="overlayClass"></div>

<div class="relative h-full flex flex-col justify-center px-16 py-8" :class="textClass">

<h1 class="page-title mb-8">{{ content.title }}</h1>

<!-- Clear Space Guidelines -->
<div class="clearspace-section">
  <h3 class="section-title mb-4">Clear Space Requirements</h3>
  <div class="clearspace-demo">
    <div class="clearspace-container">
      <div class="clearspace-boundary">
        <div class="logo-center">
          <div class="actual-logo">
            <img src="/assests/ethula.png" alt="ETULA Logo" class="logo-image-clearspace" />
          </div>
        </div>
        <div class="clearspace-indicator">
          <span class="clearspace-text">Minimum Clear Space = 20px 7px</span>
        </div>
      </div>
    </div>
    <div class="clearspace-info">
      <p class="info-text">Maintain minimum clear space equal to the height of the letter "E" around all sides of the logo</p>
      <div class="space-specs">
        <div class="spec-item">
          <span class="spec-label">Minimum Clear Space:</span>
          <span class="spec-value">100% of logo height</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">Absolute Minimum:</span>
          <span class="spec-value">24px</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">Measurement:</span>
          <span class="spec-value">Height of letter "E"</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">All Directions:</span>
          <span class="spec-value">Top, Bottom, Left, Right</span>
        </div>
      </div>
    </div>
  </div>
</div>



</div>

<script setup>
import { ref, onMounted } from 'vue'

const brandData = {
  logoUsage: {
    title: 'Logo Clear Space Guidelines'
  }
}

const backgroundStyle = ref('')
const overlayClass = ref('')
const textClass = ref('text-white')
const content = ref(brandData.logoUsage)

const getExistingTheme = () => {
  if (window.__SLIDEV_BRAND_THEME__) {
    return window.__SLIDEV_BRAND_THEME__
  }
  
  return {
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    overlay: 'bg-black/20',
    textClass: 'text-white'
  }
}

onMounted(() => {
  try {
    const theme = getExistingTheme()
    backgroundStyle.value = `background: ${theme.background}`
    overlayClass.value = theme.overlay
    textClass.value = theme.textClass
  } catch (error) {
    console.error('Error:', error)
    backgroundStyle.value = 'background: linear-gradient(135deg, #10b981 0%, #059669 100%)'
    overlayClass.value = 'bg-black/20'
    textClass.value = 'text-white'
  }
})
</script>

<style>
.page-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
}

.text-white .page-title {
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.text-black .page-title {
  color: #1f2937;
}

.clearspace-section {
  margin-top: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.section-title {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.clearspace-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
}

.clearspace-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.clearspace-boundary {
  position: relative;
  width: 200px;
  height: 200px;
  border: 2px dashed rgba(255, 255, 255, 0.4);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
}

.logo-center {
  padding: 1rem;
}

.actual-logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-image-clearspace {
  max-width: 250px;
  max-height: 200px;
  object-fit: contain;
}

.clearspace-indicator {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
}

.clearspace-text {
  font-size: 0.75rem;
  opacity: 0.8;
  white-space: nowrap;
}

.clearspace-info {
  padding: 1rem;
}

.info-text {
  font-size: 0.875rem;
  opacity: 0.9;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.space-specs {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.spec-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  padding: 0.25rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.spec-label {
  opacity: 0.8;
}

.spec-value {
  font-weight: 600;
  color: #10b981;
}

.text-white {
  color: white;
}

.text-black {
  color: #1f2937;
}
</style>


---
layout: default
---

<div class="absolute inset-0" :style="backgroundStyle"></div>
<div class="absolute inset-0" :class="overlayClass"></div>

<div class="relative h-full flex flex-col justify-center px-16 py-8" :class="textClass">

<h1 class="page-title mb-8">{{ content.title }}</h1>

<div class="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
  <div class="usage-card" v-for="rule in content.dos" :key="rule.id">
    <div class="card-header">
      <span class="card-icon">✅</span>
      <h3 class="card-title">{{ rule.title }}</h3>
    </div>
    <div class="card-content">
      <div class="logo-example" :class="rule.bgClass">
        <img :src="rule.logoImage" :alt="rule.altText" class="logo-image" />
      </div>
      <p class="card-description">{{ rule.description }}</p>
      <div class="guidelines-list">
        <div class="guideline-item" v-for="point in rule.guidelines" :key="point">
          <span class="guideline-dot">•</span>
          <span class="guideline-text">{{ point }}</span>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

<script setup>
import { ref, onMounted } from 'vue'

const brandData = {
  logoDos: {
    title: 'Logo Usage - Do\'s',
    dos: [
      {
        id: 1,
        title: 'Product Packaging',
        description: 'Use logo consistently on all packaging',
        logoImage: '/assests/ethulano.png',
        altText: 'ETULA Logo - Packaging',
        bgClass: 'bg-white',
        guidelines: [
          'Top right corner placement',
          'Minimum size: 1.5cm',
          'CMYK color mode for print'
        ]
      },
      {
        id: 2,
        title: 'Digital Advertising',
        description: 'Maintain visibility in online ads',
        logoImage: '/assests/ethula.png',
        altText: 'ETULA Logo - Digital Ads',
        bgClass: 'bg-gradient-to-r from-[#464747ff] to-[#e6f7f2f]',
        guidelines: [
          'Bottom right placement',
          '15% of ad space minimum',
          'High contrast background'
        ]
      },
      {
        id: 3,
        title: 'Physical Store Signage',
        description: 'Ensure clear visibility in retail spaces',
        logoImage: '/assests/ethula2.png',
        altText: 'ETULA Logo - Store Signage',
        bgClass: 'bg-gray-800',
        guidelines: [
          'Eye-level placement',
          'Well-lit areas',
          'Weather-resistant materials'
        ]
      },
      {
        id: 4,
        title: 'Business Documents',
        description: 'Include logo on all official documents',
        logoImage: '/assests/ethula2no.png',
        altText: 'ETULA Logo - Business Docs',
        bgClass: 'bg-white',
        guidelines: [
          'Letterhead top center',
          'Invoices and receipts',
          'Business cards'
        ]
      }
    ]
  }
}

const backgroundStyle = ref('')
const overlayClass = ref('')
const textClass = ref('text-white')
const content = ref(brandData.logoDos)

const getExistingTheme = () => {
  if (window.__SLIDEV_BRAND_THEME__) {
    return window.__SLIDEV_BRAND_THEME__
  }
  
  return {
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    overlay: 'bg-black/20',
    textClass: 'text-white'
  }
}

onMounted(() => {
  try {
    const theme = getExistingTheme()
    backgroundStyle.value = `background: ${theme.background}`
    overlayClass.value = theme.overlay
    textClass.value = theme.textClass
  } catch (error) {
    console.error('Error:', error)
    backgroundStyle.value = 'background: linear-gradient(135deg, #10b981 0%, #059669 100%)'
    overlayClass.value = 'bg-black/20'
    textClass.value = 'text-white'
  }
})
</script>

<style>
.page-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
}

.text-white .page-title {
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.text-black .page-title {
  color: #1f2937;
}

.usage-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 0.75rem;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  height: fit-content;
}

.usage-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  border-color: rgba(255, 255, 255, 0.2);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
 
}

.card-icon {
  font-size: 13px;
}

.card-title {
  font-size: 1rem;
  font-weight: 700;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top:-5px
}

.logo-example {
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: 0.5rem;
}

.logo-image {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

.card-description {
  font-size: 12px;
  opacity: 0.9;
  line-height: 1.3;
  text-align: center;
  margin-top:-5px;
}

.guidelines-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top:-13px
}

.guideline-item {
  display: flex;
  align-items: flex-start;
  gap: 0.4rem;
  font-size: 10px;
  opacity: 0.85;
  line-height: 1.2;
  margin-top:2px;
}

.guideline-dot {
  color: #10b981;
  font-size: 0.8rem;
  line-height: 1;
  margin-top: 0.05rem;
  flex-shrink: 0;
}

.guideline-text {
  line-height: 1.2;
}

.text-white {
  color: white;
}

.text-black {
  color: #1f2937;
}
</style>