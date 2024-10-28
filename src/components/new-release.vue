<template>
  <div class="flex justify-between gap-10 h-[240px]  items-center w-full">
    <img class="bg-cover w-[413px] rounded-3xl" :src="imgSrc" alt="new-release-ionics" />

    <div class="flex flex-col gap-5 items-start w-full">
      <p
        class="lg:text-[19px] text-base bold tracking-[1.33px] leading-[150%] text-[#596167]"
      >
        {{ data?.caption }}
      </p>
      <h3 class="text-[30px] bold tracking-[2.1px] text-[#020C14]">
        {{ data?.title }}
      </h3>
      <p
        class="lg:text-[19px] md:text-base text-sm font-normal tracking-[1.33px] leading-[150%] text-[#596167]"
      >
        {{ data?.date }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: Object,
    },

    computed: {
      imgSrc() {
        return new URL(`../assets/images/${this.data.photo}.png`, import.meta.url).href;
      },
    },
  };
</script>
