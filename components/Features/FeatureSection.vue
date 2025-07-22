<template>
  <section class="w-full">
    <div class="container mx-auto py-8 sm:py-10 lg:py-14 px-4 sm:px-6 md:px-10 lg:px-12 relative z-10">
      <div class="flex flex-col lg:flex-row lg:items-start gap-12">
        <!-- Left side - Title -->
        <div class="lg:w-1/4 lg:sticky lg:top-8">
          <div class="space-y-8">
            <h2 class="text-2xl lg:text-4xl font-glancyr-regular text-black leading-tight">
              AFTER<br />PURCHASE,<br />YOU WILL GET
            </h2>
            <!-- Removed navigation arrows as they ar not in the feature section image -->
          </div>
        </div>

        <!-- Right side - Feature cards -->
        <div class="lg:w-3/4 relative">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              v-for="feature in features"
              :key="feature.id"
              :feature="feature"
              class="font-geist-regular"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import FeatureCard from './FeatureCard.vue'
import { features } from '~/data/features'
// Removed scroll logic as there are no navigation arrows for features
</script>
