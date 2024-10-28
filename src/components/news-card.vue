<template>
  <a
    :href="`/product/${data.id}`"
    :class="index !== 0 ? 'lg:flex-wrap ' : ''"
    class="md:flex grid grid-cols-1 bg-white rounded-lg mt-1"
  >
    <div>
      <img :src="imgSrc" alt="ionics-img" />
    </div>
    <div class="flex flex-col p-3 gap-3 my-2 justify-center items-start">
      <p class="tracking-wide bold text-[#596167] text-[19px]">{{ data.type }}</p>
      <p class="text-[#020C14] bold text-[30px] tracking-wide w-[90%]">
        {{ data.title }}
      </p>
      <p class="tracking-wide font-normal text-[#596167] text-[19px]">
        {{ data.date }}
      </p>
    </div>
  </a>
</template>

<script>
  export default {
    data() {
      return {};
    },

    mounted() {},

    methods: {},
    props: {
      data: Object,
      index: Number,
    },
    computed: {
      imgSrc() {
        return new URL(`../assets/images/${this.data.photo}.png`, import.meta.url).href;
      },
    },
  };
</script>
