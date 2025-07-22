<template>
  <div class="relative overflow-hidden bg-[#A10501]">
    <div class="flex">
      <div 
        ref="scroller"
        class="flex whitespace-nowrap text-white text-2xl font-bold font-glancyr-extralight items-center h-full tracking-wider py-5"
        :style="{ transform: `translateX(${scrollPosition}px)` }"
      >
        <!-- Content remains the same -->
        <template v-for="(item, index) in items" :key="`content-${index}`">
          <span class="phrase">{{ item }}</span>
          <span class="dot mx-4">•</span>
        </template>
        
        <template v-for="(item, index) in items" :key="`dup-content-${index}`">
          <span class="phrase">{{ item }}</span>
          <span class="dot mx-4">•</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: 0,
      animationFrameId: null,
      speed: -1.5, // slightly faster speed
      items: [
        "DISCOVER THE ULTIMATE EXPERIENCE",
        "DISCOVER THE ULTIMATE EXPERIENCE",
        "DISCOVER THE ULTIMATE EXPERIENCE"
      ]
    };
  },
  mounted() {
    this.startScrolling();
  },
  beforeUnmount() {
    this.stopScrolling();
  },
  methods: {
    startScrolling() {
      const animate = () => {
        this.scrollPosition += this.speed;
        
        // Reset position when scrolled one full width
        const scrollerWidth = this.$refs.scroller?.scrollWidth / 2 || 0;
        if (Math.abs(this.scrollPosition) >= scrollerWidth) {
          this.scrollPosition = 0;
        }
        
        this.animationFrameId = requestAnimationFrame(animate);
      };
      
      animate();
    },
    stopScrolling() {
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
      }
    }
  }
};
</script>

<style scoped>
/* Smooth scrolling effect */
[ref="scroller"] {
  will-change: transform;
}

.phrase {
  display: inline-block;
}

.dot {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 8px;
  height: 8px;
  font-size: 24px;
  line-height: 1;
  vertical-align: middle;
  color: #ffffff;
}
</style>