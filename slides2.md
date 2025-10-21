---
layout: cover
class: text-gray-900
background: white
---

<div class="h-full flex flex-col items-start justify-center px-16">
  <!-- Logo on the left -->
  <div class="mb-2">
    <img src="/assests/shoplyst.png" class="h-38 w-38 rounded-lg object-cover">
  </div>

  <!-- Main Title -->
  <h1 class="text-4xl md:text-5xl font-semibold mb-6 tracking-wide max-w-2xl">
    Brand Guidelines
  </h1>
  
  <!-- Company Name -->
  <div class="mb-8">
    <h2 class="text-2xl md:text-3xl font-medium opacity-90">
      SHOPLYST
    </h2>
  </div>

  <!-- Subtitle -->
  <p class="text-base md:text-lg max-w-md leading-relaxed opacity-80 font-normal mb-8">
    Elevating E-commerce Experiences
  </p>

  <!-- Year -->
  <p class="text-base opacity-70 border-t border-gray-300 pt-4">
    2024
  </p>
</div>

<style>
.cover {
  background: white !important;
}

h1, h2,p{
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  letter-spacing: -0.01em;
  color: #1f2937;
}
</style>

---
layout: default
class: text-white
background: 'linear-gradient(135deg, #000000 0%, #1f2937 100%)'
---

<div class="h-full flex flex-col justify-center px-12 py-8">
  <div class="max-w-6xl mx-auto">
    <h1 class="section-title mb-12 text-left">Our Commerce Journey</h1>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Left Column: Mission & Vision -->
      <div class="space-y-6">
        <div class="commerce-card p-5 flex flex-col">
          <div class="flex items-center mb-3">
            <div class="commerce-icon mission-icon mr-4 bg-black">🛒</div>
            <h2 class="text-xl font-semibold">Our Mission</h2>
          </div>
          <p class="text-sm opacity-90">To revolutionize online shopping by creating seamless, personalized e-commerce experiences that connect customers with their perfect products.</p>
        </div>
        <div class="commerce-card p-5 flex flex-col">
          <div class="flex items-center mb-3">
            <div class="commerce-icon vision-icon mr-4">🚀</div>
            <h2 class="text-xl font-semibold">Our Vision</h2>
          </div>
          <p class="text-sm opacity-90">To become the most trusted and innovative e-commerce platform, transforming how people discover and shop online across the globe.</p>
        </div>
      </div>
      <div>
        <div class="story-panel p-6">
          <div class="flex flex-col items-center mb-6">
            <div class="story-image-container mb-4">
              <img 
                src="/assests/profile.png" 
                alt="Our Story" 
                class="w-28 h-28 rounded-full object-cover border-4 border-white/20 shadow-lg"
              >
            </div>
            <h3 class="text-lg font-semibold mb-4 text-center">Our Story</h3>
          </div>
          <p class="text-sm opacity-90">SHOPLYST started with a simple observation: online shopping should be effortless and delightful. We built our platform from the ground up to eliminate friction, personalize experiences, and build lasting relationships between brands and customers in the digital marketplace.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.section-title {
  font-size: 2rem;
  font-weight: 700;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.commerce-card {
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  border: 1px solid rgba(255,255,255,0.15);
}

.story-panel {
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  border: 1px solid rgba(255,255,255,0.12);
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
  background: linear-gradient(135deg, #8df162ff 0%, #00751dff 100%);
  border-radius: 50%;
  z-index: -1;
  opacity: 0.7;
}

.commerce-icon {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  backdrop-filter: blur(6px);
  
}

.mission-icon {
  background: linear-gradient(135deg, #8df162ff 0%, #00751dff 100%);
  border: 1px solid rgba(255,255,255,0.2);
}

.vision-icon {
  background: linear-gradient(135deg, #8df162ff 0%, #00751dff 100%);
  border: 1px solid rgba(255,255,255,0.2);
}
</style>


---
layout: default
class: text-white
background: 'linear-gradient(135deg, #059669 0%, #047857 100%)'
---

<div class="h-full flex flex-col justify-center px-12">
  <div class="max-w-6xl mx-auto">
    <h1 class="section-title mb-4">Our Commerce Values</h1>
    <p class="text-center text-base mb-12 max-w-2xl mx-auto">The principles that drive our e-commerce excellence</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="value-panel">
        <div class="value-badge mb-5">
          <span class="value-symbol">❤️</span>
        </div>
        <h3 class="text-lg font-semibold mb-3 text-left">Customer First</h3>
        <p class="text-sm leading-relaxed opacity-85 text-left">
          Every decision starts with our customers needs and experiences at the forefront.
        </p>
      </div>
      <div class="value-panel">
        <div class="value-badge mb-5">
          <span class="value-symbol">💡</span>
        </div>
        <h3 class="text-lg font-semibold mb-3 text-left">Continuous Innovation</h3>
        <p class="text-sm leading-relaxed opacity-85 text-left">
          We constantly evolve our platform to stay ahead in the dynamic e-commerce landscape.
        </p>
      </div>
      <div class="value-panel">
        <div class="value-badge mb-5">
          <span class="value-symbol">🛡️</span>
        </div>
        <h3 class="text-lg font-semibold mb-3 text-left">Trust & Security</h3>
        <p class="text-sm leading-relaxed opacity-85 text-left">
          Building reliable and secure shopping experiences that customers can depend on.
        </p>
      </div>
    </div>
  </div>
</div>

<style>
.default {
  background: linear-gradient(5deg, #4ec37fff 0%, #005823ff 100%) !important;
}
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
</style>

---
layout: default
class: text-gray-900
background: white
---

<div class="h-full flex flex-col justify-center px-5 py-10">
  <div class="max-w-6xl mx-auto w-full">
    <h1 class="section-title mb-16 text-center">Brand Colors</h1>
    <!-- Primary Colors Section -->
    <div class="mb-16 flex flex-col md:flex-row items-start mt-10">
      <div class="w-full md:w-1/4 mb-6 md:mb-0">
        <h2 class="sub-title mt-10">Primary Colors</h2>
      </div>
      <div class="w-full md:w-3/4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="color-card-simple">
            <div class="color-sample-simple" style="background-color: #8b5cf6">
              <span class="color-hex-display">#8b5cf6</span>
            </div>
            <p class="color-name" style="color: #8b5cf6">Brand Purple</p>
          </div>
          <div class="color-card-simple">
            <div class="color-sample-simple" style="background-color: #3b82f6">
              <span class="color-hex-display">#3b82f6</span>
            </div>
            <p class="color-name" style="color: #3b82f6">Brand Blue</p>
          </div>
          <div class="color-card-simple">
            <div class="color-sample-simple" style="background-color: #10b981">
              <span class="color-hex-display">#10b981</span>
            </div>
            <p class="color-name" style="color: #10b981">Brand Green</p>
          </div>
          <div class="color-card-simple">
            <div class="color-sample-simple" style="background-color: #7c3aed">
              <span class="color-hex-display">#7c3aed</span>
            </div>
            <p class="color-name" style="color: #7c3aed">Deep Purple</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Secondary Colors Section -->
    <div class="flex flex-col md:flex-row items-start">
      <div class="w-full md:w-1/4 mb-6 md:mb-0">
        <h2 class="sub-title mt-10">Secondary Colors</h2>
      </div>
      <div class="w-full md:w-3/4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="color-card-simple">
            <div class="color-sample-simple" style="background-color: #86efac">
              <span class="color-hex-display">#86efac</span>
            </div>
            <p class="color-name" style="color: #86efac">Light Green</p>
          </div>
          <div class="color-card-simple">
            <div class="color-sample-simple" style="background-color: #60a5fa">
              <span class="color-hex-display">#60a5fa</span>
            </div>
            <p class="color-name" style="color: #60a5fa">Sky Blue</p>
          </div>
          <div class="color-card-simple">
            <div class="color-sample-simple" style="background-color: #a78bfa">
              <span class="color-hex-display">#a78bfa</span>
            </div>
            <p class="color-name" style="color: #a78bfa">Lavender</p>
          </div>
          <div class="color-card-simple">
            <div class="color-sample-simple" style="background-color: #6ee7b7">
              <span class="color-hex-display">#6ee7b7</span>
            </div>
            <p class="color-name" style="color: #6ee7b7">Mint</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.default {
  background: white !important;
}

.section-title {
  font-size: 2.4rem;
  font-weight: 700;
  color: #1f2937;
  letter-spacing: -0.5px;
}

.sub-title {
  font-size: 15px;
  font-weight: 600;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.color-card-simple {
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.color-sample-simple {
  width: 100%;
  height: 120px;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: 600;
}

.color-name {
  margin-top: 12px;
  font-size: 13px;
  font-weight: 600;
}

.color-hex-display {
  opacity: 0.95;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
}
</style>

---
layout: default
class: text-white
background: 'linear-gradient(135deg, #059669 0%, #047857 100%)'
---

# Typography

<div class="grid grid-cols-2 gap-8">
<div>

## Primary Typeface
**Inter**  
*Headings & Navigation*

**Regular**  
ShopLyst - Premium Products

**Medium**  
ShopLyst - Premium Products

**Bold**  
ShopLyst - Premium Products

</div>
<div>

## Secondary Typeface  
**Lora**  
*Product Descriptions*

**Regular**  
ShopLyst - Premium Products

**Medium**  
ShopLyst - Premium Products

**Bold**  
ShopLyst - Premium Products

</div>
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Lora:wght@400;500;700&display=swap');

.slidev-layout.default {
  font-family: 'Inter', sans-serif;
}
.default {
  background: linear-gradient(5deg, #4ec37fff 0%, #005823ff 100%) !important;
}
h1 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-top: 0;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 0.25rem;
}

strong {
  font-size: 1.2rem;
  color: white;
  display: block;
  margin-top: 0.5rem;
}

em {
  color: rgba(255, 255, 255, 0.8);
  font-style: italic;
  display: block;
  margin-bottom: 1rem;
}

p {
  margin: 0.5rem 0;
  color: white;
}

/* Left column uses Inter */
.grid > div:first-child,
.grid > div:first-child strong,
.grid > div:first-child em,
.grid > div:first-child p {
  font-family: 'Inter', sans-serif;
}

/* Right column uses Lora */
.grid > div:last-child,
.grid > div:last-child strong,
.grid > div:last-child em,
.grid > div:last-child p {
  font-family: 'Lora', serif;
}

/* Style the weight examples */
strong + p {
  font-size: 1.1rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  margin: 0.25rem 0 1rem 0;
}

/* Specific font weights */
strong + p:nth-of-type(1) { font-weight: 400; }
strong + p:nth-of-type(2) { font-weight: 500; }
strong + p:nth-of-type(3) { font-weight: 700; }
</style>


---
layout: default
class: text-white
background: 'linear-gradient(135deg, #059669 0%, #047857 100%)'
---

# Visual Style Guide

<div class="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
  <div class="imagery-card">
    <div class="image-preview">
      <div class="image-overlay">
        <img src="/assests/v1.jpeg" class="image-icon-img" alt="Product Showcase" />
      </div>
    </div>
    <div class="image-info">
      <h3 class="image-title">Product Showcase</h3>
      <p class="image-description">Clean, high-quality product photography with natural lighting</p>
      <div class="image-tags">
        <span class="tag">Products</span>
        <span class="tag">Clean</span>
        <span class="tag">Professional</span>
      </div>
    </div>
  </div>

  <div class="imagery-card">
    <div class="image-preview">
      <div class="image-overlay">
        <img src="/assests/v3.jpeg" class="image-icon-img" alt="Lifestyle Context" />
      </div>
    </div>
    <div class="image-info">
      <h3 class="image-title">Lifestyle Context</h3>
      <p class="image-description">Products in real-life situations showing practical use</p>
      <div class="image-tags">
        <span class="tag">Lifestyle</span>
        <span class="tag">Context</span>
        <span class="tag">Real</span>
      </div>
    </div>
  </div>

  <div class="imagery-card">
    <div class="image-preview">
      <div class="image-overlay">
        <img src="/assests/v2.jpeg" class="image-icon-img" alt="E-commerce Ready" />
      </div>
    </div>
    <div class="image-info">
      <h3 class="image-title">E-commerce Ready</h3>
      <p class="image-description">Optimized for online shopping with multiple angles</p>
      <div class="image-tags">
        <span class="tag">E-commerce</span>
        <span class="tag">Angles</span>
        <span class="tag">Detailed</span>
      </div>
    </div>
  </div>
</div>

<div class="guidelines-footer">
  <div class="guideline-item">
    <span class="guideline-dot">•</span>
    <span>High resolution: minimum 2000px width for web</span>
  </div>
  <div class="guideline-item">
    <span class="guideline-dot">•</span>
    <span>Consistent white or neutral backgrounds</span>
  </div>
  <div class="guideline-item">
    <span class="guideline-dot">•</span>
    <span>Multiple angles and close-up shots for products</span>
  </div>
</div>

<style>
.page-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
 
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 72rem;
  margin: 0 auto;
  margin-top:40px;
}

.imagery-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
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
  background: rgba(0, 0, 0, 0.1);
}

.image-icon-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-info {
  padding: 1.15rem;
}

.image-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 3px;
  color: white;
}

.image-description {
  font-size: 10px;
  opacity: 0.85;
  margin-bottom: 0.75rem;
  line-height: 1.4;
  margin-top: 10px;
  color: white;
}

.image-tags {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.tag {
  font-size: 9px;
  padding: 8px 13px;
  background:  linear-gradient(135deg, #8df162ff 0%, #00751dff 100%);
  border-radius: 9999px;
  backdrop-filter: blur(10px);
  color: white;
  margin-top:7px;
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
  color: white;
}

.guideline-dot {
  color: #86efac;
  font-size: 1.25rem;
}
</style>

---
layout: default
class: text-white
background: 'linear-gradient(135deg, #059669 0%, #047857 100%)'
---

# Product Image Guidelines

<div class="grid grid-cols-2 gap-5 max-w-5xl mx-auto">
  <div class="usage-card correct">
    <div class="card-header">
      <span class="card-icon">✅</span>
      <h3 class="card-title">High Quality & Professional</h3>
    </div>
    <div class="card-content">
      <div class="image-preview bg-white">
        <div class="image-container">
          <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop" alt="High quality product photography" class="example-image" />
        </div>
      </div>
    </div>
  </div>

  <div class="usage-card correct">
    <div class="card-header">
      <span class="card-icon">✅</span>
      <h3 class="card-title">Multiple Angles</h3>
    </div>
    <div class="card-content">
      <div class="image-preview bg-gray-50">
        <div class="image-container">
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop" alt="Product shown from multiple angles" class="example-image" />
        </div>
      </div>
    </div>
  </div>

  <div class="usage-card correct">
    <div class="card-header">
      <span class="card-icon">✅</span>
      <h3 class="card-title">Lifestyle Context</h3>
    </div>
    <div class="card-content">
      <div class="image-preview bg-white">
        <div class="image-container">
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop" alt="Product in real-life usage context" class="example-image" />
        </div>
      </div>
    </div>
  </div>

  <div class="usage-card correct">
    <div class="card-header">
      <span class="card-icon">✅</span>
      <h3 class="card-title">Clean Background</h3>
    </div>
    <div class="card-content">
      <div class="image-preview bg-gray-50">
        <div class="image-container">
          <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=300&fit=crop" alt="Product on clean white background" class="example-image" />
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.page-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  max-width: 700px;
  margin: 0 auto;
  margin-top:40px;
}

.usage-card {
  background: rgba(139, 133, 133, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 0.75rem;
  padding: 20px;
  border: 1px solid rgba(6, 1, 1, 0.4);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
  padding-bottom: 0.0625rem;
}

.card-icon {
  font-size: 0.625rem;
}

.card-title {
  font-size: 1.03125rem;
  font-weight: 700;
  color: white;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.image-preview {
  height: 122px;
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

.bg-white {
  background-color: white;
}

.bg-gray-50 {
  background-color: #f9fafb;
}
</style>


---
layout: center
class: text-white
background: 'linear-gradient(135deg, #059669 0%, #047857 100%)'
---

<div class="flex flex-col items-center justify-center">
  <img src="/assests/web.png" alt="Shoplyst Logo" class="h-130 w-200 w-auto rounded-xl shadow-lg">
</div>

---
layout: default
class: text-white
background: 'linear-gradient(135deg, #059669 0%, #047857 100%)'
---
# Brand Logos
<div class="mb-16">
  <div class="flex items-start gap-12 max-w-5xl mx-auto">
    <div class="w-48 flex-shrink-0 mt-10">
      <h2 class="section-subtitle text-left">Primary Logo</h2>
    </div>
    <div class="flex-1 flex justify-center gap-8">
      <div class="logo-display-card">
        <div class="logo-preview bg-white rounded-xl p-2 shadow-lg border border-gray-200">
          <img src="/assests/shoplyst.png" alt="SHOPLYST Primary Logo" class="w-48 h-28 object-contain">
        </div>
        <p class="logo-label mt-4 text-center">Light Background</p>
      </div>
      <div class="logo-display-card">
        <div class="logo-preview bg-gray-900 rounded-xl p-2 shadow-lg border border-gray-700">
          <img src="/assests/shoplyst.png" alt="SHOPLYST Primary Logo" class="w-48 h-28 object-contain">
        </div>
        <p class="logo-label mt-4 text-center">Dark Background</p>
      </div>
    </div>
  </div>
</div>
<div>
  <div class="flex items-start gap-12 max-w-5xl mx-auto">
    <div class="w-48 flex-shrink-0 mt-10">
      <h2 class="section-subtitle text-left">Secondary Logo</h2>
    </div>
    <div class="flex-1 flex justify-center gap-8">
      <div class="logo-display-card">
        <div class="logo-preview bg-white rounded-xl p-2 shadow-lg border border-gray-200">
          <img src="/assests/sec.png" alt="SHOPLYST Secondary Logo" class="w-48 h-28 object-contain">
        </div>
        <p class="logo-label mt-4 text-center">Light Background</p>
      </div>
      <div class="logo-display-card">
        <div class="logo-preview bg-gray-900 rounded-xl p-2 shadow-lg border border-gray-700">
          <img src="/assests/sec.png" alt="SHOPLYST Secondary Logo" class="w-48 h-28 object-contain">
        </div>
        <p class="logo-label mt-4 text-center">Dark Background</p>
      </div>
    </div>
  </div>
</div>

<style>
h1 {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 50px;
}
.default {
  /* background: linear-gradient(5deg, #4ec37fff 0%, #005823ff 100%) !important; */
  background: #001509ff;
}

.flex {
  display: flex;
}

.items-start {
  align-items: flex-start;
}

.gap-12 {
  gap: 3rem;
}

.max-w-5xl {
  max-width: 64rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.w-48 {
  width: 12rem;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.mt-10 {
  margin-top: 2.5rem;
}

.section-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  opacity: 0.9;
  margin-bottom: 0;
  color: white;
}

.text-left {
  text-align: left;
}

.flex-1 {
  flex: 1 1 0%;
}

.justify-center {
  justify-content: center;
}

.gap-8 {
  gap: 2rem;
}

.logo-display-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  padding: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.bg-white {
  background-color: white;
}

.border-gray-200 {
  border-color: #e5e7eb;
  border-width: 1px;
}

.bg-gray-900 {
  background-color: #111827;
}

.border-gray-700 {
  border-color: #374151;
  border-width: 1px;
}

.w-48 {
  width: 12rem;
}

.h-28 {
  height: 7rem;
}

.object-contain {
  object-fit: contain;
}

.logo-label {
  font-size: 0.9rem;
  font-weight: 500;
  opacity: 0.8;
  color: white;
  margin-top: 1rem;
  text-align: center;
}

.mt-4 {
  margin-top: 1rem;
}

.text-center {
  text-align: center;
}

.mb-16 {
  margin-bottom: 4rem;
}
</style>

---
layout: default
class: text-gray-900
background: white
---

# Logo Clear Space Guidelines

<div class="clearspace-section">
  <h3 class="section-title">Clear Space Requirements</h3>
  <div class="clearspace-demo">
    <div class="clearspace-container">
      <div class="clearspace-boundary">
        <img src="/assests/shoplyst.png" alt="SHOPLYST Logo" class="logo-image" />
        <div class="clearspace-text">Minimum Clear Space = 20px 7px</div>
      </div>
    </div>
    <div class="clearspace-info">
      <p>Maintain minimum clear space equal to the height of the letter "S" around all sides of the logo</p>
      <div class="space-specs">
        <div class="spec-item">
          <span>Minimum Clear Space:</span>
          <span class="spec-value">100% of logo height</span>
        </div>
        <div class="spec-item">
          <span>Absolute Minimum:</span>
          <span class="spec-value">24px</span>
        </div>
        <div class="spec-item">
          <span>Measurement:</span>
          <span class="spec-value">Height of letter "S"</span>
        </div>
        <div class="spec-item">
          <span>All Directions:</span>
          <span class="spec-value">Top, Bottom, Left, Right</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
h1 { text-align: center; font-size: 2.5rem; font-weight: 700; color: #1f2937; margin-bottom: 2rem; }

.clearspace-section { 
  margin: 2rem auto; padding: 1.5rem; background: #f6f5f5ff; 
  border-radius: 1rem; border: 1px solid #ffffffff; max-width: 800px;
}

.section-title { text-align: center; font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: #1f2937; }

.clearspace-demo { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center; }

.clearspace-boundary { 
  position: relative; width: 200px; height: 200px; border: 2px dashed #000000ff; 
  border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; 
  background: white; margin: 0 auto;
}

.logo-image { max-width: 240px; max-height: 190px; object-fit: contain; }

.clearspace-text { position: absolute; bottom: -25px; font-size: 0.75rem; color: #6b7280; }

.clearspace-info p { color: #4b5563; margin-bottom: 1rem; line-height: 1.4; font-size:16px }

.space-specs { display: flex; flex-direction: column; gap: 0.5rem;font-size:14px; margin-top:19px }

.spec-item { display: flex; justify-content: space-between; padding: 0.25rem 0; border-bottom: 1px solid #e5e7eb;font-size:14px }

.spec-item span:first-child { color: #6b7280; }
.spec-value { font-weight: 600; color: #059669; }
.default{
    background:white;
}
</style>


---
layout: default
class: text-white
background: 'linear-gradient(135deg, #059669 0%, #047857 100%)'
---

# Logo Usage - Do's
<div class="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
  <div class="usage-card">
    <div class="card-header">
      <span class="card-icon">✅</span>
      <h3 class="card-title">Product Packaging</h3>
    </div>
    <div class="card-content">
      <div class="logo-example bg-white">
        <img src="/assests/shoplyst.png" alt="SHOPLYST Logo - Packaging" class="logo-image" />
      </div>
      <p class="card-description">Use logo consistently on all packaging</p>
    </div>
  </div>
  <div class="usage-card">
    <div class="card-header">
      <span class="card-icon">✅</span>
      <h3 class="card-title">Digital Advertising</h3>
    </div>
    <div class="card-content">
      <div class="logo-example bg-gradient">
        <img src="/assests/shoplyst.png" alt="SHOPLYST Logo - Digital Ads" class="logo-image" />
      </div>
      <p class="card-description">Maintain visibility in online ads</p>
    </div>
  </div>
  <div class="usage-card">
    <div class="card-header">
      <span class="card-icon">✅</span>
      <h3 class="card-title">Physical Store Signage</h3>
    </div>
    <div class="card-content">
      <div class="logo-example bg-gray-800">
        <img src="/assests/sec.png" alt="SHOPLYST Logo - Store Signage" class="logo-image" />
      </div>
      <p class="card-description">Ensure clear visibility in retail spaces</p>
    </div>
  </div>

  <div class="usage-card">
    <div class="card-header">
      <span class="card-icon">✅</span>
      <h3 class="card-title">Business Documents</h3>
    </div>
    <div class="card-content">
      <div class="logo-example bg-white">
        <img src="/assests/shoplyst.png" alt="SHOPLYST Logo - Business Docs" class="logo-image" />
      </div>
      <p class="card-description">Include logo on all official documents</p>
    </div>
  </div>
</div>

<style>
h1 { text-align: center; font-size: 2.5rem; font-weight: 700; color: white; text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3); margin-bottom: 2rem; }

.grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; max-width: 60rem; margin: 0 auto; }

.usage-card { 
  background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border-radius: 0.75rem; 
  padding: 1rem; border: 1px solid rgba(255, 255, 255, 0.1); 
}

.card-header { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem; padding-bottom: 0.5rem; border-bottom: 1px solid rgba(255, 255, 255, 0.2); }

.card-icon { font-size: 13px; }
.card-title { font-size: 1rem; font-weight: 700; color: white; }

.card-content { display: flex; flex-direction: column; gap: 10px; margin-top: -5px; }

.logo-example { 
  height: 95px; display: flex; align-items: center; justify-content: center; 
  border-radius: 0.5rem; border: 2px solid rgba(255, 255, 255, 0.2); padding: 0.5rem; 
}

.bg-white { background: white; }
.bg-gradient { background: linear-gradient(to right, #515e5a, #e6f7f2); }
.bg-gray-800 { background: #1f2937; }

.logo-image { max-height: 100%; max-width: 100%; object-fit: contain; }

.card-description { font-size: 12px; opacity: 0.9; line-height: 1.; text-align: center; margin-top: -5px; color: white;margin-bottom:-10px }

</style>

---
layout: default
class: text-gray-900
background: white
---

# E-commerce Brand in Action

<div class="grid">
  <div class="card">
    <div class="header">
      <span class="icon">🛍️</span>
      <h3>Product Pages</h3>
    </div>
    <div class="preview">
      <img src="/assests/pr1.jpg" alt="E-commerce Product Page" class="preview-img">
    </div>
    <div class="card-footer">
      <p>Featured Products & Collections</p>
    </div>
  </div>

  <div class="card">
    <div class="header">
      <span class="icon">📱</span>
      <h3>Social Media</h3>
    </div>
    <div class="preview">
      <img src="/assests/pr3.jpg" alt="Social Media Marketing" class="preview-img">
    </div>
    <div class="card-footer">
      <p>Instagram & Facebook Campaigns</p>
    </div>
  </div>

  <div class="card">
    <div class="header">
      <span class="icon">📧</span>
      <h3>Newsletter</h3>
    </div>
    <div class="preview">
      <img src="/assests/pr2.png" alt="Email Newsletter" class="preview-img">
    </div>
    <div class="card-footer">
      <p>Weekly Product Updates & Offers</p>
    </div>
  </div>
</div>

<style>
    .default{background:white}
h1 { 
  text-align: center; 
  font-size: 2.25rem; 
  font-weight: 700; 
  color: #020202ff; 
  margin-bottom: 1.5rem; 
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 80rem;
  margin: 0 auto;
  margin-top: 50px;
}

.card {
  background: #f8fafc;
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  height: 320px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
}

.icon {
  font-size: 1.5rem;
}

.header h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

.preview {
  height: 180px;
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  margin-bottom: 1rem;
  flex: 1;
}

.preview-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.preview-img:hover {
  transform: scale(1.05);
}

.card-footer {
  text-align: center;
  padding-top: 0.75rem;
  border-top: 1px solid #e5e7eb;
}

.card-footer p {
  font-size: 0.85rem;
  color: #6b7280;
  font-weight: 500;
  margin: 0;
}
</style>

---
layout: default
class: text-gray-900
background: white
---

# Iconography & Graphics

<div class="grid grid-cols-4 gap-6 max-w-5xl mx-auto">
  <div class="icon-card">
    <div class="icon-display">
      <div class="icon-circle bg-green-100">
        <span class="icon">🛒</span>
      </div>
    </div>
    <h3 class="icon-title">Shopping</h3>
    <p class="icon-desc">E-commerce & cart icons</p>
  </div>

  <div class="icon-card">
    <div class="icon-display">
      <div class="icon-circle bg-blue-100">
        <span class="icon">🚚</span>
      </div>
    </div>
    <h3 class="icon-title">Delivery</h3>
    <p class="icon-desc">Shipping & logistics</p>
  </div>

  <div class="icon-card">
    <div class="icon-display">
      <div class="icon-circle bg-purple-100">
        <span class="icon">💬</span>
      </div>
    </div>
    <h3 class="icon-title">Support</h3>
    <p class="icon-desc">Customer service</p>
  </div>

  <div class="icon-card">
    <div class="icon-display">
      <div class="icon-circle bg-yellow-100">
        <span class="icon">🛡️</span>
      </div>
    </div>
    <h3 class="icon-title">Security</h3>
    <p class="icon-desc">Trust & safety</p>
  </div>
</div>

<div class="graphics-section mt-8">
  <h3 class="section-title">Graphic Elements</h3>
  <div class="graphics-grid">
    <div class="graphic-item">
      <div class="graphic-preview pattern-1"></div>
      <p>Geometric Patterns</p>
    </div>
    <div class="graphic-item">
      <div class="graphic-preview pattern-2"></div>
      <p>Gradient Overlays</p>
    </div>
    <div class="graphic-item">
      <div class="graphic-preview pattern-3"></div>
      <p>Clean Lines</p>
    </div>
  </div>
</div>

<style>
h1 { text-align: center; font-size: 2.5rem; font-weight: 700; color: #1f2937; margin-bottom: 2rem; }

.grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; max-width: 64rem; margin: 0 auto; }

.icon-card { text-align: center; }
.icon-display { margin-bottom: 1rem; }
.icon-circle { width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto; }
.icon { font-size: 2rem; }
.icon-title { font-size: 1rem; font-weight: 700; color: #1f2937; margin-bottom: 0.25rem; }
.icon-desc { font-size: 0.8rem; color: #6b7280; }

.bg-green-100 { background: #dcfce7; }
.bg-blue-100 { background: #dbeafe; }
.bg-purple-100 { background: #f3e8ff; }
.bg-yellow-100 { background: #fef9c3; }

.graphics-section { max-width: 64rem; margin: 0 auto; }
.section-title { font-size: 1.5rem; font-weight: 700; color: #1f2937; text-align: center; margin-bottom: 1.5rem;margin-top:35px }
.graphics-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
.graphic-item { text-align: center; }
.graphic-preview { height: 60px; border-radius: 0.5rem; margin-bottom: 0.5rem; }
.pattern-1 { background: linear-gradient(45deg, #10b981 25%, transparent 25%), linear-gradient(-45deg, #10b981 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #10b981 75%), linear-gradient(-45deg, transparent 75%, #10b981 75%); background-size: 20px 20px; }
.pattern-2 { background: linear-gradient(135deg, #10b981, #3b82f6); }
.pattern-3 { background: repeating-linear-gradient(45deg, #e5e7eb, #e5e7eb 2px, white 2px, white 10px); }
.graphic-item p { font-size: 0.8rem; color: #4b5563; font-weight: 600; }
.default{
    background:white;
}
</style>
---
layout: default
class: text-white
background: 'linear-gradient(135deg, #059669 0%, #047857 100%)'
---

# Brand in the Wild

<div class="showcase-grid">
  <div class="showcase-item mobile-app">
    <div class="showcase-overlay">
      <h3>Mobile App</h3>
      <p>Seamless shopping experience</p>
    </div>
  </div>
  <div class="showcase-item packaging">
    <div class="showcase-overlay">
      <h3>Product Packaging</h3>
      <p>Premium unboxing experience</p>
    </div>
  </div>
  <div class="showcase-item storefront">
    <div class="showcase-overlay">
      <h3>Physical Store</h3>
      <p>Immersive retail environment</p>
    </div>
  </div>
  <div class="showcase-item events">
    <div class="showcase-overlay">
      <h3>Brand Events</h3>
      <p>Community engagement</p>
    </div>
  </div>
</div>

<div class="impact-stats">
  <div class="stat">
    <div class="stat-number">89%</div>
    <div class="stat-label">Brand Recall</div>
  </div>
  <div class="stat">
    <div class="stat-number">4.8★</div>
    <div class="stat-label">Customer Rating</div>
  </div>
  <div class="stat">
    <div class="stat-number">2.3M</div>
    <div class="stat-label">Social Reach</div>
  </div>
</div>

<style>
.showcase-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; max-width: 800px; margin: 0 auto 3rem; }
.showcase-item { height: 150px; border-radius: 1rem; position: relative; overflow: hidden; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; }
.mobile-app { background: linear-gradient(45deg, #1e40af, #679aedff); }
.packaging { background: linear-gradient(45deg, #b56e05ff, #fbff00ff); }
.storefront { background: linear-gradient(45deg, #7c3aed, #9e7cedff); }
.events { background: linear-gradient(45deg, #dc2626, #f67373ff); }
.showcase-overlay { text-align: center; color: white; }
.showcase-overlay h3 { font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem; }
.showcase-overlay p { font-size: 0.8rem; opacity: 0.9; margin: 0; }

.impact-stats { display: flex; justify-content: center; gap: 3rem; max-width: 600px; margin: 0 auto; }
.stat { text-align: center;margin-top:-10px}
.stat-number { font-size: 2.5rem; font-weight: 700; color: #000000ff; margin-bottom: 0.5rem; }
.stat-label { font-size: 0.9rem; opacity: 0.9; }
.default {
  background: linear-gradient(5deg, #4ec37fff 0%, #005823ff 100%) !important;
}
</style>
---
layout: default
class: text-white
background: 'linear-gradient(135deg, #059669 0%, #047857 100%)'
---

# Future Innovations

<div class="grid">
  <div class="card">
    <div class="icon">🤖</div>
    <h3>AI Personalization</h3>
    <p>Smart product recommendations and customized shopping experiences</p>
    <div class="features">
      <span>Predictive Analytics</span>
      <span>Voice Shopping</span>
      <span>Smart Bundles</span>
    </div>
  </div>

  <div class="card">
    <div class="icon">🕶️</div>
    <h3>AR Shopping</h3>
    <p>Virtual try-ons and product visualization in your space</p>
    <div class="features">
      <span>Virtual Fitting</span>
      <span>Room Preview</span>
      <span>3D Product Views</span>
    </div>
  </div>

  <div class="card">
    <div class="icon">🌱</div>
    <h3>Sustainability Tech</h3>
    <p>Carbon-neutral shipping and eco-friendly packaging solutions</p>
    <div class="features">
      <span>Carbon Tracking</span>
      <span>Eco Packaging</span>
      <span>Green Delivery</span>
    </div>
  </div>

  <div class="card">
    <div class="icon">🔗</div>
    <h3>Blockchain Integration</h3>
    <p>Transparent supply chain and authentic product verification</p>
    <div class="features">
      <span>Product Provenance</span>
      <span>Smart Contracts</span>
      <span>Authenticity Proof</span>
    </div>
  </div>
</div>

<style>
h1 { 
  text-align: center; 
  font-size: 2.5rem; 
  font-weight: 700; 
  color: white; 
  margin-bottom: 2rem; 
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.75rem;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
}

.card p {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.3;
  margin-bottom: 0.75rem;
}

.features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.5rem;
}

.features span {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  color: #ffffffff;
  padding: 0.2rem 0.5rem;
  border-radius: 0.75rem;
  font-size: 0.65rem;
  font-weight: 600;
}
</style>