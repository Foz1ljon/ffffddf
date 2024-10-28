<template>
  <div class="bg-white w-full rounded-xl flex flex-col lg:flex-nowrap flex-wrap">
    <img :src="imgSrc" class="rounded-t-xl" alt="new function iotics" />
    <div class="flex flex-col p-2 tracking-wide gap-4 my-2">
      <p class="text-[#596167] text-[19px] bold">{{ data.caption }}</p>
      <h3 class="text-[22px] w-full  text-wrap lg:text-nowrap bold text-[#020C14] truncate">{{ data.title }}</h3>
      <p class="text-[#596167] text-[19px] font-normal">{{ data.date }}</p>
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

    computed: {
      imgSrc() {
        return new URL(`../assets/images/${this.data.photo}.png`, import.meta.url).href;
      },
    },
  };
</script>
  