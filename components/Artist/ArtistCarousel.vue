<template>
  <div class="artist-section bg-white text-gray-900">
    <div class="container mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-14 relative">
      <!-- Header Section -->
      <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 sm:mb-10 lg:mb-12 pt-8 sm:pt-10 lg:pt-12">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 lg:mb-0 font-glancyr-medium">THE ARTIST</h2>
        <div class="lg:max-w-md">
          <p class="text-black leading-relaxed font-geist-regular text-sm sm:text-base">
            Meet the talented artists featured on Kuping DJ! Discover their latest mixtapes and albums, and immerse yourself in their creative journeys.
          </p>
        </div>
      </div>

      <!-- Carousel Section -->
      <div class="relative">
        <!-- Navigation Arrows -->
        <button 
          @click="slideLeft" 
          class="absolute left-0 top-1/2 -translate-y-1/2 z-10 
                 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center 
                 bg-gray-500/20 backdrop-blur-md text-white 
                 transition-all duration-300 hover:bg-gray-500/30 hover:scale-105"
          :disabled="currentIndex === 0"
          :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
        >
          <img src="/icons/baseicons/arrow_right_line.svg" alt="Previous" class="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 transition-transform duration-300" />
        </button>
        
        <button 
          @click="slideRight" 
          class="absolute right-0 top-1/2 -translate-y-1/2 z-10 
                 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center 
                 bg-gray-500/20 backdrop-blur-md text-white 
                 transition-all duration-300 hover:bg-gray-500/30 hover:scale-105"
          :disabled="currentIndex >= artists.length - visibleCards"
          :class="{ 'opacity-50 cursor-not-allowed': currentIndex >= artists.length - visibleCards }"
        >
          <img src="/icons/baseicons/arrow_left_line.svg" alt="Next" class="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 transition-transform duration-300" />
        </button>

        <!-- Cards Container -->
        <div class="overflow-hidden">
          <div 
            class="flex transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            :style="{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }"
          >
            <ArtistCard
              v-for="(artist, index) in artists"
              :key="index"
              :artist="artist"
              :index="index"
              :visible-cards="visibleCards"
              :is-hovered="hoveredIndex === index"
              @hover-change="handleHoverChange"
            />
          </div>
        </div>
      </div>

      <!-- Explore Button Section -->
      <div class="flex justify-center mt-8 sm:mt-10 lg:mt-12 pb-8 sm:pb-10 lg:pb-12">
        <div class="flex group font-glancyr-light hover:scale-105 transition-all duration-300">
          <!-- Red Button -->
          <button 
            class="bg-red-800 text-white px-3 py-1.5 sm:px-4 sm:py-2 font-semibold tracking-wide text-xs sm:text-sm 
                   transition-all duration-300 group-hover:bg-red-700"
          >
            EXPLORE ALL ARTIST
          </button>

          <!-- Black Icon Section -->
          <div 
            class="bg-black px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-center 
                   transition-all duration-300 group-hover:bg-gray-900"
          >
            <img 
              src="/icons/baseicons/arrow_white.svg" 
              alt="arrow" 
              class="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" 
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import ArtistCard from './ArtistCard.vue'
import { artists } from '~/data/artists'

const currentIndex = ref(0)
const hoveredIndex = ref(null)
const windowWidth = ref(0)

// Responsive visible cards
const visibleCards = computed(() => {
  if (windowWidth.value >= 1280) return 5 // xl
  if (windowWidth.value >= 1024) return 4 // lg
  if (windowWidth.value >= 768) return 3  // md
  if (windowWidth.value >= 640) return 2  // sm
  return 1 // mobile
})

const slideLeft = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const slideRight = () => {
  if (currentIndex.value < artists.length - visibleCards.value) {
    currentIndex.value++
  }
}

const handleHoverChange = (index) => {
  hoveredIndex.value = index
}

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth
  // Reset index when cards per view changes
  if (currentIndex.value > artists.length - visibleCards.value) {
    currentIndex.value = Math.max(0, artists.length - visibleCards.value)
  }
}

onMounted(() => {
  updateWindowWidth()
  window.addEventListener('resize', updateWindowWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth)
})
</script>

<style scoped>
/* Custom scrollbar for better UX */
::-webkit-scrollbar {
  display: none;
}

/* Navigation arrows hover effect */
button:not(:disabled):hover img {
  transform: scale(1.1);
}

/* Disabled state for navigation buttons */
button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

button:disabled:hover {
  background-color: rgba(229, 231, 235, 0.1);
  transform: none !important;
}

/* Smoother carousel movement */
.flex.transition-transform {
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}

/* Responsive adjustments for very small screens */
@media (max-width: 400px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  button[class*="bg-red-800"] {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    font-size: 0.65rem;
  }
  
  div[class*="bg-black"] {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
}
</style>