<template>
  <div class="relative">
    <img :class="`scale${index + 1}`" :src="imageSrc" />
    <p
      style="line-height: 150%;  letter-spacing: 3.36px;"
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl"
    >
      {{ data.title }}
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    props: {
      data: Object,
      index: Number,
    },
    mounted() {},

    methods: {},
    computed: {
      imageSrc() {
        return new URL(`../../assets/animation/${this.data.img}.svg`, import.meta.url)
          .href;
      },
    },
  };
</script>
<style scoped>
  @keyframes scaleInOut {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(0);
    }
  }

  .scale1 {
    animation: scaleInOut 5s ease-in infinite;
    animation-delay: 2s;
  }

  .scale2 {
    animation: scaleInOut 5s ease-in infinite;
    animation-delay: 3s;
  }

  .scale3 {
    animation: scaleInOut 5s ease-in infinite;
    animation-delay: 4s;
  }
</style>
