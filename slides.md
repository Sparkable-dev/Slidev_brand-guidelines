---
layout: cover
---

<div class="absolute inset-0" :style="backgroundStyle"></div>
<div class="absolute inset-0" :class="overlayClass"></div>

<div class="relative h-full flex flex-col items-center justify-center text-center" :class="textClass">
  <!-- Logo in the center -->
  <div class="mb-8">
    <img :src="content.logoUrl" class="h-32 w-32 rounded-full object-cover mx-auto" @error="handleImageError">
  </div>

  <!-- Main Title -->
  <h1 class="text-5xl md:text-6xl font-bold mb-4 tracking-tight px-8">
    {{ content.mainTitle }}
  </h1>
  
  <!-- Company Name -->
  <div class="mb-6 px-8">
    <h2 class="text-3xl md:text-4xl font-light opacity-95">
      {{ content.companyName }}
    </h2>
  </div>

  <!-- Subtitle -->
  <p class="text-lg md:text-xl max-w-md leading-relaxed opacity-85 font-light mb-4 px-8">
    {{ content.subtitle }}
  </p>

  <!-- Year -->
  <p class="text-lg opacity-70">
    {{ content.currentYear }}
  </p>
</div>

<script setup>
import { ref, onMounted } from 'vue'

const brandData = {
  cover: {
    logoUrl: '/assests/logo.png',
    fallbackLogo: '/default-logo.png',
    mainTitle: 'Brand Guidelines',
    companyName: 'ASHES',
    subtitle: 'The snapshot of our Identity',
    currentYear: 2024
  }
}

const colorSchemes = [
  {
    name: 'purple',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
    backgroundStyle.value = 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    overlayClass.value = 'bg-black/20'
    textClass.value = 'text-white'
  }
})
</script>

<style>
h1, h2 {
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.text-white {
  color: white;
}

.text-black {
  color: #1f2937;
}
</style>

---

<div class="absolute inset-0" :style="backgroundStyle"></div>
<div class="absolute inset-0" :class="overlayClass"></div>

<div class="relative h-full flex flex-col justify-center px-16" :class="textClass">

<h1 class="white">{{ content.title }}</h1>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
  <div class="glass-card">
    <div class="text-center mb-4">
      <div class="icon-circle mission-bg">
        <span class="text-xl">{{ content.mission.icon }}</span>
      </div>
      <h2 class="text-xl font-bold mb-3">{{ content.mission.title }}</h2>
    </div>
    <p class="text-sm leading-relaxed opacity-90 text-center">
      {{ content.mission.description }}
    </p>
  </div>

  <div class="glass-card">
    <div class="text-center mb-4">
      <div class="icon-circle vision-bg">
        <span class="text-xl">{{ content.vision.icon }}</span>
      </div>
      <h2 class="text-xl font-bold mb-3">{{ content.vision.title }}</h2>
    </div>
    <p class="text-sm leading-relaxed opacity-90 text-center">
      {{ content.vision.description }}
    </p>
  </div>
</div>

<div class="mt-8 story-card">
  <h3 class="text-lg font-bold mb-4 text-center">{{ content.story.title }}</h3>
  <p class="text-sm leading-relaxed opacity-90 text-center">
    {{ content.story.description }}
  </p>
</div>

</div>

<script setup>
import { ref, onMounted } from 'vue'

const brandData = {
  brandStory: {
    title: 'Brand Story',
    mission: {
      icon: '🎯',
      title: 'Our Mission',
      description: 'To ignite transformative change through innovative solutions that empower growth and renewal.'
    },
    vision: {
      icon: '🔭',
      title: 'Our Vision',
      description: 'A world where every ending becomes a new beginning, built on resilience and innovation.'
    },
    story: {
      title: 'Our Story',
      description: 'ASHES was born from the understanding that true innovation emerges from remnants. Like a phoenix rising, we believe every challenge holds opportunity for new beginnings.'
    }
  }
}

const colorSchemes = [
  {
    name: 'purple',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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

const backgroundStyle = ref('')
const overlayClass = ref('')
const textClass = ref('text-white')
const content = ref(brandData.brandStory)

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
    backgroundStyle.value = 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    overlayClass.value = 'bg-black/20'
    textClass.value = 'text-white'
  }
})
</script>

<style>
.gradient-title {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 700;
}

.text-black .gradient-title {
  color: #1f2937;
  -webkit-text-fill-color: #1f2937;
  background: none;
}

.glass-card {
  background: rgba(66, 66, 66, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.story-card {
  background: rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.icon-circle {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0.75rem;
}

.mission-bg {
  background: rgba(59, 130, 246, 0.2);
}

.vision-bg {
  background: rgba(168, 85, 247, 0.2);
}

.text-white {
  color: white;
}

.text-black {
  color: #1f2937;
}
</style>

---

<div class="absolute inset-0" :style="backgroundStyle"></div>
<div class="absolute inset-0" :class="overlayClass"></div>

<div class="relative h-full flex flex-col justify-center px-16" :class="textClass">

<h1 class="page-title mb-12">{{ content.title }}</h1>

<p class="text-center text-lg  mb-10">{{ content.description }}</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
  <div class="value-card" v-for="(value, key) in content.values" :key="key">
    <div class="value-icon-container mb-4">
      <span class="value-icon">{{ value.icon }}</span>
    </div>
    <h3 class="text-xl font-bold mb-3 text-center">{{ value.title }}</h3>
    <p class="text-sm leading-relaxed opacity-85 text-center">
      {{ value.description }}
    </p>
  </div>
</div>

</div>

<script setup>
import { ref, onMounted } from 'vue'

const brandData = {
  brandValues: {
    title: 'Brand Values',
    description: 'The core principles that guide everything we do',
    values: {
      innovation: {
        icon: '💡',
        title: 'Innovation',
        description: 'We constantly push boundaries and embrace change to create breakthrough solutions.'
      },
      resilience: {
        icon: '🔥',
        title: 'Resilience',
        description: 'We transform challenges into opportunities, rising stronger from every setback.'
      },
      authenticity: {
        icon: '✨',
        title: 'Authenticity',
        description: 'We stay true to our vision while adapting to the needs of those we serve.'
      }
    }
  }
}

const colorSchemes = [
  {
    name: 'purple',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
    backgroundStyle.value = 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
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
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-black .page-title {
  color: #1f2937;
}

.value-card {
  background: rgba(58, 58, 58, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.value-icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  margin: 0 auto;
}

.value-icon {
  font-size: 2rem;
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

<div class="relative h-full flex flex-col justify-center px-16" :class="textClass">

<h1 class="page-title mb-12">{{ content.title }}</h1>

<div class="grid grid-cols-4 gap-6 mt-8">
  <div v-for="color in content.primaryColors" :key="color.name" class="color-card-primary">
    <div 
      class="color-swatch" 
      :style="{ backgroundColor: color.hex }"
    >
      <div class="color-overlay">
        <span class="copy-text">Click to copy</span>
      </div>
    </div>
    <div class="color-info">
      <h3 class="font-bold mb-1">{{ color.name }}</h3>
      <p class="text-sm opacity-75">{{ color.hex }}</p>
      <p class="text-xs opacity-60">{{ color.rgb }}</p>
      <span class="usage-badge">
        {{ color.usage }}
      </span>
    </div>
  </div>
</div>

</div>

<script setup>
import { ref, onMounted } from 'vue'

const brandData = {
  primaryColors: {
    title: 'Primary Colors',
    primaryColors: [
      {
        name: 'Ember Orange',
        hex: '#FF6B35',
        rgb: 'RGB 255, 107, 53',
        usage: 'Primary Brand'
      },
      {
        name: 'Flame Red',
        hex: '#E63946',
        rgb: 'RGB 230, 57, 70',
        usage: 'Accent'
      },
      {
        name: 'Ash Purple',
        hex: '#764BA2',
        rgb: 'RGB 118, 75, 162',
        usage: 'Secondary'
      },
      {
        name: 'Phoenix Gold',
        hex: '#FFB800',
        rgb: 'RGB 255, 184, 0',
        usage: 'Highlight'
      }
    ]
  }
}

const backgroundStyle = ref('')
const overlayClass = ref('')
const textClass = ref('text-white')
const content = ref(brandData.primaryColors)

const getExistingTheme = () => {
  if (window.__SLIDEV_BRAND_THEME__) {
    console.log('🎨 Using existing theme:', window.__SLIDEV_BRAND_THEME__.name)
    return window.__SLIDEV_BRAND_THEME__
  }
  
  console.warn('⚠️ Theme not initialized, using default')
  return {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
    backgroundStyle.value = 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
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
  margin-bottom: 3rem;
}

.text-white .page-title {
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.text-black .page-title {
  color: #1f2937;
}

.text-white {
  color: white;
}

.text-black {
  color: #1f2937;
}

.color-card-primary {
  text-align: center;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.color-card-primary:hover {
  transform: translateY(-12px) scale(1.05);
}

.color-swatch {
  position: relative;
  width: 100%;
  height: 10rem;
  border-radius: 0.75rem;
  margin-bottom: 0.75rem;
  border: 4px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.color-card-primary:hover .color-swatch {
  border-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 4px rgba(255, 255, 255, 0.1);
  transform: rotate(-2deg);
}

.color-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(4px);
}

.color-card-primary:hover .color-overlay {
  opacity: 1;
}

.copy-text {
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.color-info {
  transition: all 0.3s ease;
}

.color-card-primary:hover .color-info {
  transform: scale(1.05);
}

.usage-badge {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.color-card-primary:hover .usage-badge {
  background: rgba(255, 255, 255, 0.4);
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
</style>

---
layout: default
---

<div class="absolute inset-0" :style="backgroundStyle"></div>
<div class="absolute inset-0" :class="overlayClass"></div>

<div class="relative h-full flex flex-col justify-center px-16" :class="textClass">

<!-- <h1 class="page-title mb-8">{{ content.title }}</h1> -->

<div class="space-y-6">
  <div>
    <h2 class="text-xl font-bold mb-4 text-center">Secondary Colors</h2>
    <div class="grid grid-cols-5 gap-4">
      <div v-for="color in content.secondaryColors" :key="color.name" class="color-card-secondary">
        <div 
          class="secondary-swatch" 
          :style="{ backgroundColor: color.hex }"
        >
          <div class="secondary-overlay">
            <span class="hex-code">{{ color.hex }}</span>
          </div>
        </div>
        <p class="text-sm font-semibold mt-2">{{ color.name }}</p>
        <!-- <p class="text-xs opacity-70">{{ color.hex }}</p> -->
      </div>
    </div>
  </div>

  <div>
    <h2 class="text-xl font-bold mb-4 text-center">Neutral Colors</h2>
    <div class="grid grid-cols-6 gap-3">
      <div v-for="color in content.neutralColors" :key="color.name" class="color-card-neutral">
        <div 
          class="neutral-swatch" 
          :style="{ backgroundColor: color.hex }"
        >
          <div class="neutral-shine"></div>
        </div>
        <p class="text-xs font-semibold mt-2">{{ color.name }}</p>
        <!-- <p class="text-xs opacity-60">{{ color.hex }}</p> -->
      </div>
    </div>
  </div>
</div>

</div>

<script setup>
import { ref, onMounted } from 'vue'

const brandData = {
  secondaryNeutral: {
    title: 'Secondary & Neutral Palette',
    secondaryColors: [
      { name: 'Cool Blue', hex: '#667EEA' },
      { name: 'Sky Blue', hex: '#00D4FF' },
      { name: 'Violet', hex: '#A855F7' },
      { name: 'Pink', hex: '#EC4899' },
      { name: 'Emerald', hex: '#10B981' }
    ],
    neutralColors: [
      { name: 'Charcoal', hex: '#1F2937' },
      { name: 'Slate', hex: '#374151' },
      { name: 'Gray', hex: '#6B7280' },
      { name: 'Silver', hex: '#9CA3AF' },
      { name: 'Light Gray', hex: '#D1D5DB' },
      { name: 'Off White', hex: '#F9FAFB' }
    ]
  }
}

const backgroundStyle = ref('')
const overlayClass = ref('')
const textClass = ref('text-white')
const content = ref(brandData.secondaryNeutral)

const getExistingTheme = () => {
  if (window.__SLIDEV_BRAND_THEME__) {
    console.log('🎨 Using existing theme:', window.__SLIDEV_BRAND_THEME__.name)
    return window.__SLIDEV_BRAND_THEME__
  }
  
  console.warn('⚠️ Theme not initialized, using default')
  return {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
    backgroundStyle.value = 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
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

.text-white {
  color: white;
}

.text-black {
  color: #1f2937;
}

/* Secondary Colors Hover Effects */
.color-card-secondary {
  text-align: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.color-card-secondary:hover {
  transform: translateY(-8px) scale(1.08);
}

.secondary-swatch {
  position: relative;
  width: 100%;
  height: 6rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.color-card-secondary:hover .secondary-swatch {
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35);
  border-radius: 1rem;
}

.secondary-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.color-card-secondary:hover .secondary-overlay {
  opacity: 1;
}

.hex-code {
  color: white;
  font-size: 0.875rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

/* Neutral Colors Hover Effects */
.color-card-neutral {
  text-align: center;
  cursor: pointer;
  transition: all 0.35s ease;
}

.color-card-neutral:hover {
  transform: translateY(-6px) rotate(3deg);
}

.neutral-swatch {
  position: relative;
  width: 100%;
  height: 5rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.35s ease;
}

.color-card-neutral:hover .neutral-swatch {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  transform: scale(1.1);
}

.neutral-shine {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transform: translateX(-100%) translateY(-100%);
  transition: transform 0.6s ease;
}

.color-card-neutral:hover .neutral-shine {
  transform: translateX(100%) translateY(100%);
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

<!-- <div class="type-scale mt-8">
  <h2 class="section-subtitle mb-4 text-center">Type Scale</h2>
  <div class="grid grid-cols-3 gap-4">
    <div class="scale-example" v-for="scale in content.typeScale" :key="scale.name">
      <p class="scale-label">{{ scale.name }}</p>
      <p :style="{ fontSize: scale.size }" class="scale-sample">Aa</p>
      <p class="scale-size">{{ scale.size }}</p>
    </div>
  </div>
</div> -->

</div>

<script setup>
import { ref, onMounted } from 'vue'

const brandData = {
  typography: {
    title: 'Typography',
    sampleText: 'The quick brown fox jumps',
    primaryFont: {
      name: 'Inter',
      usage: 'Headings & UI',
      weights: [
        { name: 'Regular', value: '400' },
        { name: 'Medium', value: '500' },
        { name: 'Bold', value: '700' }
      ]
    },
    secondaryFont: {
      name: 'Lora',
      usage: 'Body & Long-form',
      weights: [
        { name: 'Regular', value: '400' },
        { name: 'Medium', value: '500' },
        { name: 'Bold', value: '700' }
      ]
    },
    typeScale: [
      { name: 'Display', size: '3rem' },
      { name: 'Heading', size: '2rem' },
      { name: 'Subheading', size: '1.5rem' },
      { name: 'Body', size: '1rem' },
      { name: 'Caption', size: '0.875rem' },
      { name: 'Small', size: '0.75rem' }
    ] 
  }
}

const backgroundStyle = ref('')
const overlayClass = ref('')
const textClass = ref('text-white')
const content = ref(brandData.typography)

const getExistingTheme = () => {
  if (window.__SLIDEV_BRAND_THEME__) {
    return window.__SLIDEV_BRAND_THEME__
  }
  
  return {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
    backgroundStyle.value = 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    overlayClass.value = 'bg-black/20'
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

.text-black .page-title {
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

.type-scale {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.scale-example {
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.scale-example:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-4px);
}

.scale-label {
  font-size: 0.75rem;
  opacity: 0.6;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.scale-sample {
  font-weight: 700;
  line-height: 1;
}

.scale-size {
  font-size: 0.75rem;
  opacity: 0.5;
  margin-top: 0.5rem;
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

<div class="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
  <div class="imagery-card" v-for="style in content.imageStyles" :key="style.name">
    <div class="image-preview" :style="{ background: style.gradient }">
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
    title: 'Imagery Style',
    imageStyles: [
      {
        name: 'Dynamic Energy',
        image: 'https://thumbs.dreamstime.com/b/vibrant-light-bulb-against-colorful-abstract-background-symbolizing-creativity-new-ideas-vibrant-light-bulb-against-328073314.jpg', // replace with your actual image
        description: 'Bold, high-contrast imagery with movement and energy',
       
        tags: ['Action', 'Motion', 'Impact']
      },
      {
        name: 'Transformation',
        image: 'https://crosstechcom.com/wp-content/uploads/2020/09/Digital-Transformation-min.png', // replace with your actual image
        description: 'Visual metaphors of change, growth, and renewal',
       
        tags: ['Growth', 'Change', 'Evolution']
      },
      {
        name: 'Human Focus',
        image: 'https://debouge.co.uk/wp-content/uploads/2023/06/AI-Debouge-Tech-scaled.jpeg', // replace with your actual image
        description: 'Authentic people in real moments of innovation',
        
        tags: ['People', 'Authentic', 'Real']
      }
    ],
    guidelines: [
      'High resolution: minimum 300 DPI for print',
      'Vibrant colors aligned with brand palette',
      'Avoid clichéd stock photography'
    ]
  }
}

const backgroundStyle = ref('')
const overlayClass = ref('')
const textClass = ref('text-white')
const content = ref(brandData.imageryStyle)

const getExistingTheme = () => {
  if (window.__SLIDEV_BRAND_THEME__) {
    return window.__SLIDEV_BRAND_THEME__
  }
  return {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
    backgroundStyle.value = 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
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
  height: 9rem;
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
  background: rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
}

.imagery-card:hover .image-overlay {
  background: rgba(0, 0, 0, 0.45);
}

.image-icon-img {
  width: 100%;
  height:100%;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  transition: transform 0.3s ease;
}

.imagery-card:hover .image-icon-img {
  transform: scale(1.1);
}

.image-info {
  padding: 1.25rem;
}

.image-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 3px;
}

.image-description {
  font-size: 13px;
  opacity: 0.85;
  margin-bottom: 0.75rem;
  line-height: 1.4;
  margin-top:10px;
}

.image-tags {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.tag {
  font-size: 9px;
  padding: 0.25rem 0.75rem;
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
  font-size: 11px;
  opacity: 0.9;
}

.guideline-dot {
  color: #FF6B35;
  font-size: 1.25rem;
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
      <!-- <p class="card-description">{{ example.description }}</p>
      <div class="guidelines-list">
        <div class="guideline-item" v-for="point in example.guidelines" :key="point">
          <span class="guideline-dot">•</span>
          <span class="guideline-text">{{ point }}</span>
        </div> -->
      <!-- </div> -->
    </div>
  </div>
</div>

</div>

<script setup>
import { ref, onMounted } from 'vue'

const brandData = {
  correctImageUsage: {
    title: 'Correct Image Usage',
    correctExamples: [
      {
        id: 1,
        title: 'High Quality & Sharp',
        
        imagePath: '/assests/1.webp',
        altText: 'High quality professional image',
        bgClass: 'bg-white',
        
      },
      {
        id: 2,
        title: 'Proper Composition',
      
        imagePath: '/assests/2.jpeg',
        altText: 'Well composed image with rule of thirds',
        bgClass: 'bg-gray-50',
      
      },
      {
        id: 3,
        title: 'Suits the brand',
        
        imagePath: '/assests/3.jpeg',
        altText: 'Image with brand complementary colors',
        bgClass: 'bg-white',
       
      },
      {
        id: 4,
        title: 'Relevant Context',
      
        imagePath: '/assests/4.jpg',
        altText: 'Image with relevant brand context',
        bgClass: 'bg-gray-50',
      
      }
    ]
  }
}

const backgroundStyle = ref('')
const overlayClass = ref('')
const textClass = ref('text-white')
const content = ref(brandData.correctImageUsage)

const getExistingTheme = () => {
  if (window.__SLIDEV_BRAND_THEME__) {
    return window.__SLIDEV_BRAND_THEME__
  }
  
  return {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
    backgroundStyle.value = 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
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
  /* border-bottom: 1px solid rgba(16, 185, 129, 0.3); */
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

.card-description {
  font-size: 0.8rem;
  opacity: 0.9;
  line-height: 1.3;
  text-align: center;
}

.guidelines-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.guideline-item {
  display: flex;
  align-items: flex-start;
  gap: 0.4rem;
  font-size: 0.7rem;
  opacity: 0.85;
  line-height: 1.2;
}

.guideline-dot {
  color: #10B981;
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
      <span class="card-icon">❌</span>
      <h3 class="card-title">{{ example.title }}</h3>
    </div>
    <div class="card-content">
      <div class="image-preview" :class="example.bgClass">
        <div class="image-container">
          <img :src="example.imagePath" :alt="example.altText" class="example-image" />
        </div>
      </div>
      <!-- <p class="card-description">{{ example.description }}</p>
      <div class="guidelines-list">
        <div class="guideline-item" v-for="point in example.guidelines" :key="point">
          <span class="guideline-dot">•</span>
          <span class="guideline-text">{{ point }}</span>
        </div> -->
      <!-- </div> -->
    </div>
  </div>
</div>

</div>

<script setup>
import { ref, onMounted } from 'vue'

const brandData = {
  correctImageUsage: {
    title: 'Incorrect Image Usage',
    correctExamples: [
      {
        id: 1,
        title: 'Low Quality & Blurry',
        
        imagePath: '/assests/5.jpeg',
        altText: 'High quality professional image',
        bgClass: 'bg-white',
        
      },
      {
        id: 2,
        title: 'Poor Composition',
      
        imagePath: '/assests/8.webp',
        altText: 'Well composed image with rule of thirds',
        bgClass: 'bg-gray-50',
      
      },
      {
        id: 3,
        title: 'AI generated',
        
        imagePath: '/assests/6.jpeg',
        altText: 'Image with brand complementary colors',
        bgClass: 'bg-white',
       
      },
      {
        id: 4,
        title: 'Irrelevant Context',
      
        imagePath: '/assests/7.jpg',
        altText: 'Image with relevant brand context',
        bgClass: 'bg-gray-50',
      
      }
    ]
  }
}

const backgroundStyle = ref('')
const overlayClass = ref('')
const textClass = ref('text-white')
const content = ref(brandData.correctImageUsage)

const getExistingTheme = () => {
  if (window.__SLIDEV_BRAND_THEME__) {
    return window.__SLIDEV_BRAND_THEME__
  }
  
  return {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
    backgroundStyle.value = 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
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
  padding: 10px;
  border: 2px solid;
  transition: all 0.3s ease;
}

.usage-card.correct {
  border-color: rgba(247, 247, 247, 0.4);
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
  /* border-bottom: 1px solid rgba(16, 185, 129, 0.3); */
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
  margin-top:4px
}

.example-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-description {
  font-size: 0.8rem;
  opacity: 0.9;
  line-height: 1.3;
  text-align: center;
}

.guidelines-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.guideline-item {
  display: flex;
  align-items: flex-start;
  gap: 0.4rem;
  font-size: 0.7rem;
  opacity: 0.85;
  line-height: 1.2;
}

.guideline-dot {
  color: #10B981;
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





---
layout: center
class: h-full w-full
---


<div class="absolute inset-0" :style="backgroundStyle"></div>
<div class="absolute inset-0" :class="overlayClass"></div>


  <!-- Main Content -->
  <div class="relative z-10 flex flex-col items-center justify-center gap-8">
    <h1 class="page-title mb-2">Example Usage</h1>
  <div class="w-[820px] h-[420px] rounded-2xl overflow-hidden shadow-2xl relative transition-all duration-500 hover:scale-105 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
    <img src="data:image/jpeg;base64,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" alt="Hero Background"
         class="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-500 hover:opacity-90" />
    <div class="absolute inset-0 bg-black/40 transition-all duration-500 hover:bg-black/30"></div>
    <div class="relative z-10 flex flex-col justify-center items-center h-full text-center px-8">
      <h1 class="text-5xl font-bold text-white mb-4 drop-shadow-lg">ASHES</h1>
      <p class="text-base text-gray-200 mb-6 leading-relaxed max-w-[320px] mt-2">
        Rising from the remnants to ignite transformative innovation and growth.
      </p>
      <button class="bg-[#600063ff] hover:bg-[#E63946] text-white px-4 py-2 rounded-lg font-semibold shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg mt-3">
        Join the Movement
      </button>
      <div class="flex gap-3 mt-10 ml-150">
        <!-- <div class="w-7 h-7 rounded-md bg-[#600063ff] transition-transform duration-300 hover:scale-125 cursor-pointer" title="Ember Orange #600063ff"></div>
        <div class="w-7 h-7 rounded-md bg-[#474747ff] transition-transform duration-300 hover:scale-125 cursor-pointer" title="Ash Purple #474747ff"></div> -->
        <div class="w-7 h-7 rounded-md bg-[#013277ff] transition-transform duration-300 hover:scale-125 cursor-pointer" title="Phoenix Gold #FFB800"></div>
        <div class="w-7 h-7 rounded-md bg-[#ffffffff] transition-transform duration-300 hover:scale-125 cursor-pointer" title="Charcoal #c80000ff"></div>
         <div class="w-7 h-7 rounded-md bg-[#c80000ff] transition-transform duration-300 hover:scale-125 cursor-pointer" title="Charcoal #013277ff"></div>
           <div class="w-7 h-7 rounded-md bg-[#600063ff] transition-transform duration-300 hover:scale-125 cursor-pointer" title="Ember Orange #600063ff"></div>
        <div class="w-7 h-7 rounded-md bg-[#474747ff] transition-transform duration-300 hover:scale-125 cursor-pointer" title="Ash Purple #474747ff"></div>
      </div>
    </div>
  </div>
</div>




<script setup>
import { ref, onMounted } from 'vue'

const backgroundStyle = ref('')
const overlayClass = ref('')
const textClass = ref('text-white')

// Get or apply theme
const getExistingTheme = () => {
  if (window.__SLIDEV_BRAND_THEME__) {
    return window.__SLIDEV_BRAND_THEME__
  }
  return {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
    backgroundStyle.value = 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    overlayClass.value = 'bg-black/20'
    textClass.value = 'text-white'
  }
})
</script>

<style>
.hover\:shadow-3xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}
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
</style>





---
layout: default
---

<div class="absolute inset-0" :style="backgroundStyle"></div>
<div class="absolute inset-0" :class="overlayClass"></div>

<div class="relative h-full flex flex-col justify-center px-16" :class="textClass">

<h1 class="page-title mb-12">{{ content.title }}</h1>

<div class="grid grid-cols-2 gap-12 max-w-4xl mx-auto">
  <!-- Light Theme Logo -->
  <div class="theme-section">
    <div class="theme-header light-header">
      <span class="theme-icon">☀️</span>
      <h2 class="theme-title">Light Theme</h2>
    </div>
    <div class="logo-container light-bg">
      <img :src="content.lightLogo" alt="ASHES Logo - Light Theme" class="logo-image" @error="handleImageError">
    </div>
    <div class="theme-info">
      <h3 class="info-title">Usage</h3>
      <p class="info-description">{{ content.lightTheme.usage }}</p>
      <div class="specs-list">
        <div class="spec-item" v-for="spec in content.lightTheme.specs" :key="spec">
          <span class="spec-dot">•</span>
          <span class="spec-text">{{ spec }}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Dark Theme Logo -->
  <div class="theme-section">
    <div class="theme-header dark-header">
      <span class="theme-icon">🌙</span>
      <h2 class="theme-title">Dark Theme</h2>
    </div>
    <div class="logo-container dark-bg">
      <img :src="content.darkLogo" alt="ASHES Logo - Dark Theme" class="logo-image" @error="handleImageError">
    </div>
    <div class="theme-info">
      <h3 class="info-title ">Usage</h3>
      <p class="info-description">{{ content.darkTheme.usage }}</p>
      <div class="specs-list">
        <div class="spec-item" v-for="spec in content.darkTheme.specs" :key="spec">
          <span class="spec-dot">•</span>
          <span class="spec-text">{{ spec }}</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Logo Specifications -->
<!-- <div class="specifications-section">
  <h3 class="specs-title">Logo Specifications</h3>
  <div class="grid grid-cols-3 gap-6 mt-4">
    <div class="spec-card" v-for="spec in content.specifications" :key="spec.name">
      <div class="spec-icon">{{ spec.icon }}</div>
      <h4 class="spec-name">{{ spec.name }}</h4>
      <p class="spec-value">{{ spec.value }}</p>
    </div>
  </div>
</div> -->

</div>

<script setup>
import { ref, onMounted } from 'vue'

const brandData = {
  logoThemes: {
    title: 'Logo Variations',
    lightLogo: '/assests/logo.png', // Replace with your light theme logo
    darkLogo: '/assests/logo.png',   // Replace with your dark theme logo
    lightTheme: {
      usage: 'Use on light backgrounds and in bright environments',
      specs: [
        'Minimum size: 24px',
        'Clear space: 20% of logo height',
        'Color: Full brand colors'
      ]
    },
    darkTheme: {
      usage: 'Use on dark backgrounds and in low-light environments',
      specs: [
        'Minimum size: 24px',
        'Clear space: 20% of logo height',
        'Color: Optimized for contrast'
      ]
    },
   
  }
}

const backgroundStyle = ref('')
const overlayClass = ref('')
const textClass = ref('text-white')
const content = ref(brandData.logoThemes)

const handleImageError = () => {
  console.log('Logo image failed to load')
  // You can set fallback images here
}

const getExistingTheme = () => {
  if (window.__SLIDEV_BRAND_THEME__) {
    return window.__SLIDEV_BRAND_THEME__
  }
  
  return {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
    backgroundStyle.value = 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
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

.theme-section {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.theme-section:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.theme-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 3px;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
}

.light-header {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.dark-header {
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.theme-icon {
  font-size: 1.5rem;
}

.theme-title {
  font-size: 14px;
  font-weight: 700;
   margin-top:2px;
}

.logo-container {
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.light-bg {
  background: white;
  border: 2px solid rgba(0, 0, 0, 0.1);
}

.dark-bg {
  background: #1f2937;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.logo-image {
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
 
}

.logo-container:hover .logo-image {
  transform: scale(1.05);
}

.theme-info {
  text-align: center;
   margin-top:-10px;
 
}

.info-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 2px;
   
}

.info-description {
  font-size: 10px;
  opacity: 0.85;
  margin-bottom: 1rem;
  line-height: 1.4;
   margin-top:1px;
 
}

.specs-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.spec-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  opacity: 0.8;
}

.spec-dot {
  color: #FF6B35;
  font-size: 1rem;
}

.specifications-section {
  margin-top: 3rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.specs-title {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.spec-card {
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.spec-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
}

.spec-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.spec-name {
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.spec-value {
  font-size: 0.75rem;
  opacity: 0.8;
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

<!-- Best Practices Section -->
<!-- <div class="best-practices-section">
  <h3 class="section-title mb-4">Best Practices</h3>
  <div class="grid grid-cols-3 gap-4">
    <div class="practice-card" v-for="practice in content.bestPractices" :key="practice.id">
      <div class="practice-icon">{{ practice.icon }}</div>
      <h4 class="practice-title">{{ practice.title }}</h4>
      <p class="practice-description">{{ practice.description }}</p>
    </div>
  </div>
</div> -->

</div>

<script setup>
import { ref, onMounted } from 'vue'

const brandData = {
  logoDos: {
    title: 'Logo Usage - Do\'s',
    dos: [
      {
        id: 1,
        title: 'Maintain Proportions',
        description: 'Always use correct aspect ratio and scaling',
        logoImage: '/assests/logo-proportions.png',
        altText: 'ASHES Logo - Proper Proportions',
        bgClass: 'bg-white',
        guidelines: [
          'Scale proportionally',
          'Use vector formats',
          'Min size: 24px',
        ]
      },
      {
        id: 2,
        title: 'Use Brand Colors',
        description: 'Apply approved colors consistently',
        logoImage: '/assests/logo.png',
        altText: 'ASHES Logo - Orange Version',
        bgClass: 'bg-gradient-to-r from-[#FF6B35] to-[#764BA2]',
        guidelines: [
          'White on dark backgrounds',
          'Contrast ratio 4.5:1',
          'No unauthorized colors'
        ]
      },
      {
        id: 3,
        title: 'Ensure Clear Space',
        description: 'Maintain breathing space around logo',
        logoImage: '/assests/clear.png',
        altText: 'ASHES Logo - With Clear Space',
        bgClass: 'bg-gray-800',
        guidelines: [
          '100% of logo height',
          'Use grid alignment',
          'Maintain hierarchy'
        ]
      },
      {
        id: 4,
        title: 'Choose Backgrounds',
        description: 'Use backgrounds for maximum visibility',
        logoImage: '/assests/logo.png',
        altText: 'ASHES Logo - White Version',
        bgClass: 'bg-green',
        guidelines: [
          'Solid color backgrounds',
          'Avoid busy patterns',
          'Test readability'
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
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
    backgroundStyle.value = 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
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
  color: #FF6B35;
  font-size: 0.8rem;
  line-height: 1;
  margin-top: 0.05rem;
  flex-shrink: 0;
}

.guideline-text {
  line-height: 1.2;
}

.best-practices-section {
  margin-top: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 4xl;
  margin-left: auto;
  margin-right: auto;
}

.section-title {
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.practice-card {
  text-align: center;
  padding: 1rem 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: fit-content;
}

.practice-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-1px);
}

.practice-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.practice-title {
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.practice-description {
  font-size: 0.7rem;
  opacity: 0.85;
  line-height: 1.2;
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

<!-- Clear Space Guidelines -->
<div class="clearspace-section">
  <h3 class="section-title mb-4">Clear Space Requirements</h3>
  <div class="clearspace-demo">
    <div class="clearspace-container">
      <div class="clearspace-boundary">
        <div class="logo-center">
          <div class="actual-logo">
            <img src="/assests/logo.png" alt="ASHES Logo" class="logo-image-clearspace" />
          </div>
        </div>
        <div class="clearspace-indicator">
          <span class="clearspace-text">Minimum Clear Space = 10px</span>
        </div>
      </div>
    </div>
    <div class="clearspace-info">
      <p class="info-text">Maintain minimum clear space equal to the height of the letter "A" around all sides of the logo</p>
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
          <span class="spec-value">Height of letter "A"</span>
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
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
    backgroundStyle.value = 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
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
  max-width: 80px;
  max-height: 80px;
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
  color: #FF6B35;
}

.examples-section {
  margin-top: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.example-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 0.75rem;
  padding: 1rem;
  border: 2px solid;
  transition: all 0.3s ease;
}

.example-card.correct {
  border-color: rgba(16, 185, 129, 0.4);
}

.example-card.incorrect {
  border-color: rgba(239, 68, 68, 0.4);
}

.example-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.example-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.example-icon {
  font-size: 1.25rem;
}

.example-title {
  font-size: 1rem;
  font-weight: 600;
}

.example-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.example-boundary {
  height: 120px;
  border: 2px dashed rgba(255, 255, 255, 0.3);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  position: relative;
}

.example-boundary.crowded {
  border-color: rgba(239, 68, 68, 0.4);
  justify-content: space-around;
  padding: 0 1rem;
}

.example-logo {
  max-width: 60px;
  max-height: 60px;
  object-fit: contain;
}

.crowded-elements {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
}

.crowded-text {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(239, 68, 68, 0.2);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.crowded-graphic {
  width: 30px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.25rem;
}

.example-description {
  font-size: 0.75rem;
  opacity: 0.85;
  text-align: center;
  line-height: 1.3;
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

<h1 class="page-title mb-6">{{ content.title }}</h1>

<div class="grid grid-cols-2 gap-4 max-w-5xl mx-auto">
  <!-- Marketing Example -->
  <div class="example-card">
    <div class="example-header">
      <span class="example-icon">📱</span>
      <h3 class="example-title">Digital Marketing</h3>
    </div>
    <div class="example-content">
      <div class="example-preview marketing-bg">
        <div class="preview-content">
          <h4 class="preview-title">ASHES Campaign</h4>
          <p class="preview-text">Rise stronger with innovative solutions</p>
          <button class="preview-button">Learn More</button>
        </div>
      </div>
      <!-- <div class="example-details">
        <div class="detail-item" v-for="detail in content.marketing.details" :key="detail">
          <span class="detail-dot">•</span>
          <span class="detail-text">{{ detail }}</span>
        </div>
      </div> -->
    </div>
  </div>

  <!-- Social Media Example -->
  <div class="example-card">
    <div class="example-header">
      <span class="example-icon">💬</span>
      <h3 class="example-title">Social Media</h3>
    </div>
    <div class="example-content">
      <div class="example-preview social-bg">
        <div class="preview-content">
          <div class="social-header">
            <span class="social-handle">@ASHES_Official</span>
          </div>
          <p class="preview-text">Transforming challenges into opportunities 🌟 #Innovation #Growth</p>
          <div class="social-stats">
            <span class="stat">❤️ 245</span>
            <span class="stat">🔄 89</span>
          </div>
        </div>
      </div>
      <!-- <div class="example-details">
        <div class="detail-item" v-for="detail in content.social.details" :key="detail">
          <span class="detail-dot">•</span>
          <span class="detail-text">{{ detail }}</span>
        </div>
      </div> -->
    </div>
  </div>

  <!-- Print Material Example -->
  <div class="example-card">
    <div class="example-header">
      <span class="example-icon">📄</span>
      <h3 class="example-title">Print Materials</h3>
    </div>
    <div class="example-content">
      <div class="example-preview print-bg">
        <div class="preview-content">
          <div class="print-logo">
            <img :src="content.logoUrl" alt="ASHES Logo" class="logo-img" />
          </div>
          <h4 class="preview-title">Business Card</h4>
          <p class="preview-text">Sarah Chen<br>Innovation Director</p>
        </div>
      </div>
      <!-- <div class="example-details">
        <div class="detail-item" v-for="detail in content.print.details" :key="detail">
          <span class="detail-dot">•</span>
          <span class="detail-text">{{ detail }}</span>
        </div>
      </div> -->
    </div>
  </div>

  <!-- Web Design Example -->
  <div class="example-card">
    <div class="example-header">
      <span class="example-icon">🌐</span>
      <h3 class="example-title">Web Design</h3>
    </div>
    <div class="example-content">
      <div class="example-preview web-bg">
        <div class="preview-content">
          <nav class="web-nav">
            <span class="nav-logo">ASHES</span>
            <div class="nav-links">
              <span class="nav-link">Home</span>
              <span class="nav-link">About</span>
              <span class="nav-link">Services</span>
            </div>
          </nav>
          <h4 class="web-hero">Transform Your Vision</h4>
          <button class="web-button">Get Started</button>
        </div>
      </div>
      <!-- <div class="example-details">
        <div class="detail-item" v-for="detail in content.web.details" :key="detail">
          <span class="detail-dot">•</span>
          <span class="detail-text">{{ detail }}</span>
        </div>
      </div> -->
    </div>
  </div>
</div>

</div>

<script setup>
import { ref, onMounted } from 'vue'

const brandData = {
  brandInAction: {
    title: 'Brand in Action',
    logoUrl: '/assests/logo.png',
    marketing: {
      details: [
        'Consistent color palette application',
        'Bold typography hierarchy',
        'Clear brand messaging',
        'Strong visual identity'
      ]
    },
    social: {
      details: [
        'Authentic tone of voice',
        'Engaging visual content',
        'Consistent branding elements',
        'Community-focused approach'
      ]
    },
    print: {
      details: [
        'Premium material quality',
        'Clean, professional layout',
        'Brand colors and typography',
        'Memorable first impression'
      ]
    },
    web: {
      details: [
        'Responsive design principles',
        'Intuitive user experience',
        'Fast loading performance',
        'Accessibility compliance'
      ]
    }
  }
}

const backgroundStyle = ref('')
const overlayClass = ref('')
const textClass = ref('text-white')
const content = ref(brandData.brandInAction)

const getExistingTheme = () => {
  if (window.__SLIDEV_BRAND_THEME__) {
    return window.__SLIDEV_BRAND_THEME__
  }
  
  return {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
    backgroundStyle.value = 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    overlayClass.value = 'bg-black/20'
    textClass.value = 'text-white'
  }
})
</script>

<style>
.page-title {
  text-align: center;
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.text-white .page-title {
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.text-black .page-title {
  color: #1f2937;
}

.example-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 0.75rem;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  height: fit-content;
}

.example-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  border-color: rgba(255, 255, 255, 0.2);
}

.example-header {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.example-icon {
  font-size: 1rem;
}

.example-title {
  font-size: 0.9rem;
  font-weight: 700;
}

.example-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.example-preview {
  height: 110px;
  border-radius: 0.5rem;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.marketing-bg {
  background: linear-gradient(135deg, #FF6B35, #764BA2);
}

.social-bg {
  background: #1f2937;
}

.print-bg {
  background: white;
}

.web-bg {
  background: #0f172a;
}

.preview-content {
  text-align: center;
  width: 100%;
}

.preview-title {
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
}

.marketing-bg .preview-title,
.web-bg .preview-title {
  color: white;
}

.print-bg .preview-title {
  color: #1f2937;
}

.preview-text {
  font-size: 0.65rem;
  opacity: 0.9;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.marketing-bg .preview-text,
.web-bg .preview-text {
  color: rgba(255, 255, 255, 0.9);
}

.print-bg .preview-text {
  color: #374151;
}

.preview-button {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  padding: 0.3rem 0.8rem;
  border-radius: 0.25rem;
  font-size: 0.65rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.preview-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

.social-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.3rem;
}

.social-handle {
  font-size: 0.6rem;
  font-weight: 600;
  color: #60a5fa;
}

.social-stats {
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  margin-top: 0.3rem;
}

.stat {
  font-size: 0.6rem;
  opacity: 0.8;
}

.print-logo {
  margin-bottom: 0.3rem;
}

.logo-img {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.web-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.nav-logo {
  font-size: 0.8rem;
  font-weight: 700;
  color: #FF6B35;
}

.nav-links {
  display: flex;
  gap: 0.6rem;
}

.nav-link {
  font-size: 0.6rem;
  opacity: 0.8;
  cursor: pointer;
}

.nav-link:hover {
  opacity: 1;
}

.web-hero {
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white;
}

.web-button {
  background: #FF6B35;
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 0.25rem;
  font-size: 0.65rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.web-button:hover {
  background: #E63946;
  transform: scale(1.05);
}

.example-details {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 0.3rem;
  font-size: 0.6rem;
  opacity: 0.85;
  line-height: 1.1;
}

.detail-dot {
  color: #FF6B35;
  font-size: 0.7rem;
  line-height: 1;
  margin-top: 0.02rem;
  flex-shrink: 0;
}

.detail-text {
  line-height: 1.1;
}

.text-white {
  color: white;
}

.text-black {
  color: #1f2937;
}
</style>