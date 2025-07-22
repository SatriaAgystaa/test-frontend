<template>
  <section class="bg-white py-14 px-4 md:px-12">
    <!-- Section Title & Filter -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
      <h2 class="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-0 font-glancyr-medium">
        MOST POPULAR MIXTAPE
      </h2>
      <div class="flex mt-4 md:mt-0">
        <button
          v-for="btn in filters"
          :key="btn"
          @click="activeFilter = btn"
          :class="[
            'uppercase border text-sm md:text-base font-glancyr-regular px-4 py-2 transition-all duration-200',
            activeFilter === btn
              ? 'bg-black text-white border-black'
              : 'text-black border-black hover:bg-black hover:text-white'
          ]"
        >
          {{ btn }}
        </button>
      </div>
    </div>

    <!-- Mixtape Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-10">
      <div
        v-for="mixtape in mixtapes"
        :key="mixtape.id"
        class=""
      >
        <MixtapeCard
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
          :isCarousel="false"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { mixtapes } from '@/data/mixtapesPopular'
import MixtapeCard from './MixtapeCard.vue'

const filters = ['Top Purchased', 'Highest Rated', 'Highest Rated']
const activeFilter = ref('Top Purchased')
</script>

<style scoped>
</style>
