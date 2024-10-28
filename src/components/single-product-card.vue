<template>
  <div class="bg-white flex flex-col justify-between rounded-lg">
    <div class="flex flex-col gap-5 p-8">
      <h1 class="text-[#014FDF] bold text-[22px] tracking-wide">{{ data.title }}</h1>

      <p class="text-black text-[22px] w-[75%] font-normal tracking-wider">
        {{ data.about }}
      </p>
    </div>
    <div class="w-[90%]">
      <img :src="imgSrc" alt="iotics-details" />
    </div>
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
