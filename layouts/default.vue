<!-- layouts/default.vue -->
<template>
  <div class="flex min-h-screen flex-col">
    <Header />

    <main class="flex-1 z-10">
      <slot />
    </main>
     
    <div class="z-0">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>
