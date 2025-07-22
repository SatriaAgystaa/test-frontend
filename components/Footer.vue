<template>
  <footer class="bg-white text-black z-10">
    <div class="container mx-auto py-8 sm:py-10 lg:py-14 px-4 sm:px-6 md:px-10 lg:px-12 relative z-10">
      <div class="flex flex-col md:flex-row justify-between gap-8 mt-6">
        <!-- Left section - Main heading -->
        <div class="space-y-6 md:w-1/2 z-10">
          <h1 class="text-4xl md:text-5xl mb-8 font-glancyr-regular">
            <span class="block">EXPERIENCE THE RHYTHM</span>
            <span class="block mt-3">OF YOUR LIFE WITH</span>
            <span class="block mt-3">KUPING DJ!</span>
          </h1>
        </div>

        <img
          src="/icons/footer/aura.svg"
          alt="Aura Background"
          class="absolute top-0 left-0 w-100 opacity-80 mix-blend-lighten pointer-events-none z-0"
        />

        <!-- Right section - Navigation columns pushed to far right -->
        <div class="flex gap-16 font-geist-regular z-10">
          <!-- About us links -->
          <div class="mb-8">
            <h2 class="text-2xl mb-4 font-geist-medium">About us</h2>
            <div class="flex flex-col gap-2">
              <a href="#" class="block hover:text-gray-600 transition">The Artist</a>
              <a href="#" class="block hover:text-gray-600 transition">About Kuping DJ</a>
              <a href="#" class="block hover:text-gray-600 transition">Contact Us</a>
              <a href="#" class="block hover:text-gray-600 transition">FAQ</a>
              <a href="#" class="block hover:text-gray-600 transition">Terms & Conditions</a>
            </div>
          </div>

          <!-- Marketplace links -->
          <div class="mb-8">
            <h2 class="text-2xl mb-4 font-geist-medium">Marketplace</h2>
            <div class="flex flex-col gap-2">
              <a href="#" class="block hover:text-gray-600 transition">Shop</a>
              <a href="#" class="block hover:text-gray-600 transition">Music</a>
              <a href="#" class="block hover:text-gray-600 transition">Merchandise</a>
              <a href="#" class="block hover:text-gray-600 transition">Tickets</a>
              <a href="#" class="block hover:text-gray-600 transition">Downloads</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom section with perfect centered copyright -->
      <div class="flex items-center justify-between font-geist-regular z-10 mt-10">
        <!-- Left logo -->
        <div class="flex-1 flex justify-start">
          <img src="/icons/baseicons/logo.svg" alt="Kuping DJ Logo" class="h-12">
        </div>
        
        <!-- Centered copyright -->
        <div class="flex-shrink-0 text-black px-4">
          © 2025 Copyright by Kuping DJ. All rights reserved
        </div>
        
        <!-- Right social icons -->
        <div class="flex-1 flex justify-end space-x-10">
          <a href="#">
            <img src="/icons/footer/facebook_line.svg" alt="Facebook" class="h-8">
          </a>
          <a href="#">
            <img src="/icons/footer/instagram_line.svg" alt="Instagram" class="h-8">
          </a>
          <a href="#">
            <img src="/icons/footer/linkedin_line.svg" alt="LinkedIn" class="h-8">
          </a>
          <a href="#">
            <img src="/icons/footer/youtube_line.svg" alt="YouTube" class="h-8">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
</style>