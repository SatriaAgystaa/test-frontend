<template>
  <div class="mixtape-section">
    <div class="container mx-auto px-12 py-14 relative bg-white">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
        <h2 class="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-0 font-glancyr-medium">{{ title }}</h2>
        <div class="flex gap-2 md:gap-4 self-end md:self-auto">
          <button 
            @click="slideLeft" 
            class="w-10 h-10 md:w-14 md:h-14 rounded-full bg-black flex items-center justify-center hover:bg-black/90 transition-all duration-300 group"
            :disabled="currentIndex === 0"
            :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
          >
            <img src="/icons/baseicons/arrow_right_line.svg" alt="Previous" 
                 class="w-5 h-5 md:w-7 md:h-7 transition-all duration-300 group-hover:-translate-x-1" />
          </button>
          <button 
            @click="slideRight" 
            class="w-10 h-10 md:w-14 md:h-14 rounded-full bg-black flex items-center justify-center hover:bg-black/90 transition-all duration-300 group"
            :disabled="currentIndex >= mixtapes.length - visibleCards"
            :class="{ 'opacity-50 cursor-not-allowed': currentIndex >= mixtapes.length - visibleCards }"
          >
            <img src="/icons/baseicons/arrow_left_line.svg" alt="Next" 
                 class="w-5 h-5 md:w-7 md:h-7 transition-all duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <!-- Mixtape Cards -->
      <div class="relative overflow-hidden">
        <div 
          class="flex transition-transform duration-300 ease-out gap-4 md:gap-7"
          :style="{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }"
        >
          <MixtapeCard
            v-for="mixtape in mixtapes"
            :key="mixtape.id"
            :artist="mixtape.artist"
            :artistImage="mixtape.artistImage"
            :title="mixtape.title"
            :price="mixtape.price"
            :image="mixtape.image"
            :likes="mixtape.likes"
            :downloads="mixtape.downloads"
            :rating="mixtape.rating"
            :bpm="mixtape.bpm"
            :date="mixtape.date"
            :visibleCards="visibleCards"
            :isCarousel="true" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { mixtapes } from '@/data/mixtapes'
import MixtapeCard from './MixtapeCard.vue'

const props = defineProps({
  title: {
    type: String,
    default: 'NEW ARRIVAL MIXTAPE'
  }
})

const currentIndex = ref(0)
const windowWidth = ref(0)
const isClient = typeof window !== 'undefined'

const visibleCards = computed(() => {
  if (!isClient) return 1
  if (windowWidth.value >= 1280) return 4
  if (windowWidth.value >= 1024) return 3
  if (windowWidth.value >= 768) return 2
  return 1
})

const slideLeft = () => {
  if (currentIndex.value > 0) currentIndex.value--
}

const slideRight = () => {
  if (currentIndex.value < mixtapes.length - visibleCards.value) currentIndex.value++
}

const handleResize = () => {
  if (isClient) {
    windowWidth.value = window.innerWidth
    // Reset index if it becomes invalid after resize
    if (currentIndex.value > mixtapes.length - visibleCards.value) {
      currentIndex.value = Math.max(0, mixtapes.length - visibleCards.value)
    }
  }
}

onMounted(() => {
  if (isClient) {
    windowWidth.value = window.innerWidth
    window.addEventListener('resize', handleResize)
  }
})

onUnmounted(() => {
  if (isClient) {
    window.removeEventListener('resize', handleResize)
  }
})
</script>

<style scoped>
.flex.transition-transform {
  will-change: transform;
}

button:not(:disabled):hover {
  transform: scale(1.05);
}

@media (max-width: 640px) {
  .mixtape-section {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .flex.gap-4 {
    gap: 1rem;
  }
}
</style>