<template>
  <div class="flex justify-between gap-10 h-[240px] !items-center w-full">
    <div>
      <img
        class="w-[413px] bg-cover rounded-2xl"
        :src="imgSrc"
        alt="new-release-ionics"
      />
    </div>
    <div class="flex flex-col justify-center gap-2 items-start w-full">
      <p class="lg:text-[19px] text-base bold tracking-wide text-[#596167]">{{ data?.caption }}</p>
      <h3 class="text-[30px] bold tracking-wider text-[#020C14]">
        {{ data?.title }}
      </h3>
      <p
        class="lg:text-[19px] md:text-base text-sm font-normal tracking-wide text-[#596167]"
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
