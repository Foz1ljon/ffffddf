<template>
  <div class="flex py-3">
    <a href="/">
      <LogoBlack />
    </a>
    <ArrowRight />
    <p class="text-[#596167] text-sm font-normal">{{ path }}</p>
  </div>
</template>

<script>
  import ArrowRight from "./icons/arrow-right.vue";
  import LogoBlack from "./icons/logo-black.vue";

  export default {
    props: {
      path: String,
    },
    components: {
      LogoBlack,
      ArrowRight,
    },
    data() {
      return {};
    },

    methods: {},
  };
</script>
