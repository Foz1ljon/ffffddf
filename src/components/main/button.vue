<template>
  <button
    :class="bg ? 'bg-custom-blue text-white' : ''"
    class="border-2 rounded-full border-custom-blue px-6 py-1.5 outline-none active:bg-blue-700 active:border-blue-700 text-custom-blue hover:bg-custom-blue hover:text-white"
  >
    {{ text }}
  </button>
</template>

<script>
  export default {
    props: {
      text: String,
      bg: Boolean,
    },
  };
</script>

<style lang="scss" scoped></style>
