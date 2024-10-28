<template>
  <router-link
    :to="data.to"
    :class="
      type == 'pin'
        ? 'text-[#014FDF] font-normal'
        : 'text-[#596167] border border-[#020C14] px-3 p-2'
    "
    class="text-sm flex items-center gap-2 font-normal tracking-wide rounded-full"
  >
    {{ data.name }} <ArrowUp v-if="type == 'arrow'" /> <Pin v-if="type == 'pin'" />
    <Sharp v-if="type !== 'arrow' && type !== 'pin'" />
  </router-link>
</template>

<script>
  import ArrowUp from "./icons/arrow-up.vue";
  import Pin from "./icons/pin.vue";
  import Sharp from "./icons/sharp.vue";

  export default {
    props: {
      data: Object,
      type: {
        type: String,
        default: "arrow",
      },
    },
    components: {
      ArrowUp,
      Sharp,
      Pin,
    },
  };
</script>
