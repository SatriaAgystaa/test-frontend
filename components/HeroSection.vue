<template>
  <main class="relative overflow-hidden">
    <!-- Background Images -->
    <img
      src="/public/assets/icons/HeroIcons/effect.svg"
      alt="Aura Background"
      class="absolute bottom-0 left-0 w-[800px] opacity-80 mix-blend-lighten pointer-events-none z-0"
    />
    <img
      src="/public/assets/icons/HeroIcons/line.svg"
      alt="Vinyl"
      class="absolute bottom-0 right-0 w-[1400px] pointer-events-none z-0"
    />
    <img
      src="/public/assets/icons/HeroIcons/vinyl.svg"
      alt="Vinyl"
      class="absolute bottom-[-40px] right-0 w-[650px] pointer-events-none z-0"
    />

    <!-- Main Content -->
    <div class="container mx-auto px-10 py-8 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center pb-0">
        <!-- Left Content -->
        <div class="space-y-12 font-glancyr-light">
          <!-- Main Heading -->
          <div class="space-y-6">
            <h1 class="text-5xl lg:text-7xl text-gray-900 leading-tight tracking-wider">
              <span class="block">DISCOVER THE</span>
              <span class="block mt-3">ULTIMATE</span>
              <span class="block mt-3">DJ MARKETPLACE</span>
              <span class="block mt-3">EXPERIENCE!</span>
            </h1>
          </div>

          <!-- Statistics -->
          <div class="grid grid-cols-3 pt-4 font-geist-medium">
            <div class="text-center lg:text-left">
              <div class="text-4xl lg:text-5xl text-gray-900 tracking-wide font-glancyr-light">70</div>
              <div class="text-lg text-black tracking-wide">Best Artist</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="text-4xl lg:text-5xl text-gray-900 tracking-wide font-glancyr-light">2413</div>
              <div class="text-lg text-black tracking-wide">Mix Tapes</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="text-4xl lg:text-5xl text-gray-900 tracking-wide font-glancyr-light">4412</div>
              <div class="text-lg text-black tracking-wide">Albums</div>
            </div>
          </div>

          <!-- Scroll Down Indicator -->
          <div class="flex items-center gap-2 pt-4 font-glancyr-light">
            <span class="text-xl text-black tracking-wider">
              SCROLL DOWN
            </span>
            <img 
              src="/public/assets/icons/BaseIcons/mouse_line.svg" 
              alt="Scroll Down Icon" 
              class="w-5 h-5"
            >
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
// No reactive logic needed
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.float-animation {
  animation: float 3s ease-in-out infinite;
}

@media (max-width: 640px) {
  h1 {
    font-size: 2.5rem;
    line-height: 1.1;
    letter-spacing: 0.025em;
  }
}
</style>
