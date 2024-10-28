<template>
  <div
    :style="`border-color: ${brColor};`"
    :class="reverse ? 'flex-row-reverse border-r-2' : 'border-l-2'"
    class="bg-white rounded-2xl flex w-full px-7 p-5"
  >
    <p
      :class="'type'"
      class="italic text-start pr-2.5 text-[30px] text-[#020C14] tracking-wide"
    >
      {{ text }}
    </p>
    <Quote v-if="icon == 'quote'" class="w-[40%]" />
    <Exclamation  v-else class="w-[40%] my-auto" />
  </div>
</template>

<script>
  import Exclamation from "./icons/exclamation.vue";
  import Quote from "./icons/quote.vue";

  export default {
    props: {
      text: String,
      icon: String,
      brColor: String,
      type: String,
      reverse: {
        type: Boolean,
        default: false,
      },
    },
    components: {
      Quote,
      Exclamation,
    },
    data() {
      return {};
    },

    mounted() {},

    methods: {},
  };
</script>
