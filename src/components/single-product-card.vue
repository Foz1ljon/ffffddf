<template>
  <div
    class="bg-white flex relative flex-col justify-between rounded-lg h-[860px] w-[615px]"
  >
    <div class="flex justify-center items-center flex-col gap-5 p-10">
      <h1 class="text-[#014FDF] bold text-[22px] tracking-wide">{{ data.title }}</h1>

      <p
        class="text-black text-[22px] w-full tracking-[1.54px] font-normal leading-[150%]"
      >
        {{ data.about }}
      </p>
    </div>
    <img class="absolute bottom-0" :src="imgSrc" alt="iotics-details" />
  </div>
</template>

<script>
  export default {
    props: {
      data: Object,
    },
    data() {
      return {};
    },

    mounted() {},

    methods: {},
    computed: {
      imgSrc() {
        return new URL(`../assets/images/${this.data.photo}.png`, import.meta.url).href;
      },
    },
  };
</script>
