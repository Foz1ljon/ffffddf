<template>
  <div class="w-full h-full flex items-center overflow-hidden relative bg-black">
    <div
      class="flex h-full transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(item, i) in data"
        :key="`carousel-${i}`"
        class="flex-shrink-0 w-full h-full justify-center flex items-center"
      >
        <div class="relative w-full max-w-[1280px] h-[720px]">
          <img
            class="w-full h-full object-cover"
            :src="imgSrc(item.image)"
            alt="Slide image"
          />
          <div class="absolute bottom-5 left-1 flex gap-2 items-center text-white p-6">
            <button
              class="bg-white text-[#020C14] text-[19px] tracking-wide py-[8px] px-[30px] rounded-full"
            >
              Посмотреть кейс
            </button>
            <div class="tracking-wide gap-2 flex items-center">
              <p class="text-[22px] bold">{{ item.title }}</p>
              <p class="h-2 w-2 rounded-full bg-white"></p>
              <p class="text-[22px]">{{ item.title2 }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-center py-5 gap-2">
    <span
      v-for="(item, index) in data"
      :key="`dot-${index}`"
      @click="goToSlide(index)"
      :class="[
        'w-3 h-3 rounded-full cursor-pointer transition-colors',
        currentIndex === index ? 'bg-gray-700' : 'bg-gray-400',
      ]"
    ></span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          { image: "slider1", title: "УзМетКомбинат", title2: "Экономия" },
          { image: "slider1", title: "УзМетКомбинат", title2: "Качество" },
          { image: "slider1", title: "УзМетКомбинат", title2: "Прогресс" },
          { image: "slider1", title: "УзМетКомбинат", title2: "Инновации" },
          { image: "slider1", title: "УзМетКомбинат", title2: "Достижения" },
          { image: "slider1", title: "УзМетКомбинат", title2: "Достижения" },
        ],
        currentIndex: 0,
        interval: null,
      };
    },

    computed: {
      totalSlides() {
        return this.data.length;
      },
    },

    methods: {
      imgSrc(img) {
        return new URL(`../assets/images/${img}.png`, import.meta.url).href;
      },
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
      },
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
      },
      goToSlide(index) {
        this.currentIndex = index;
      },
      startAutoSlide() {
        this.interval = setInterval(this.nextSlide, 2000);
      },
    },
    mounted() {
      this.startAutoSlide();
    },
    beforeDestroy() {
      clearInterval(this.interval);
    },
  };
</script>
