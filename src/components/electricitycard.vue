<template>
  <div
    class="flex flex-col justify-between gap-5 items-center text-[22px] bg-white rounded-[30px] p-10"
  >
    <div class="flex flex-col gap-5">
      <h2 class="text-[#014FDF] bold">{{ prop?.title }}</h2>
      <p class="text-[#020C14] tracking-wider font-normal">
        {{ prop?.about }}
      </p>
      <p class="text-[#596167] text-[19px] tracking-wider italic">
        {{ prop?.tag }}
      </p>
    </div>

    <div class="flex w-[550px] justify-center h-full">
      <img class="bg-center" :src="imgSrc" alt="" />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      i: Number,
      prop: Object,
    },
    data() {
      return {};
    },

    mounted() {},

    methods: {},
    computed: {
      imgSrc() {
        return new URL(`../assets/electricity/${this.prop.photo}.png`, import.meta.url)
          .href;
      },
    },
  };
</script>
