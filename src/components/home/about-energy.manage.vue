<template>
  <section
    :class="reverse ? 'flex-row-reverse' : ''"
    class="container flex lg:flex-nowrap justify-between w-full flex-wrap gap-10 items-center py-6"
  >
    <div
      :style="`background-image: url('${imageSrc}');`"
      class="w-[630px] h-[420px] bg-cover bg-center rounded-2xl"
    ></div>
    <div class="w-[630px] h-[420px] flex justify-start items-center p-3">
      <p class="text-[19px] text-[#596167] font-normal tracking-wider">
        {{ data.about }}
      </p>
    </div>
  </section>
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
      reverse: Boolean,
    },
    computed: {
      imageSrc() {
        return new URL(`../../assets/images/${this.data.photo}.jpg`, import.meta.url)
          .href;
      },
    },
  };
</script>
