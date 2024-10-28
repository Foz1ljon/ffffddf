<template>
  <div class="relative overflow-hidden group">
    <!-- Marquee Container -->
    <div class="w-fit flex gap-2.5 duration-1000 marquee-container">
      <!-- <div class="w-[420px] h-[240px] def -ml-[420px]"></div> -->
      <div
        v-for="(el, i) in arr"
        :key="`marquee-${el.id}`"
        class="w-[420px] h-[240px] flex items-end justify-between p-4 text-white text-[19px]"
        :class="{ reSize: i == 0 }"
        :style="[el?.style, `animation-play-state: ${isRunning};`]"
      >
        <p class="font-normal">{{ el?.desc }}</p>

        <p class="bold flex gap-2 items-center">
          <span> <Logo /> </span>{{ el?.title }}
        </p>
      </div>
    </div>

    <div class="flex justify-center py-4">
      <button
        @click="isRunning == 'paused' ? (isRunning = 'running') : (isRunning = 'paused')"
        class="flex justify-center items-center bg-[#B2B6BE] rounded-full"
      >
        <p v-if="isRunning == 'paused'" class="py-2.5 pr-2.5 px-4">
          <Play />
        </p>
        <p v-else class="py-2.5 px-3.5">
          <Pause />
        </p>
      </button>
    </div>
  </div>
</template>

<script>
  import Logo from "./icons/logo.vue";
  import Pause from "./icons/pause.vue";
  import Play from "./icons/play.vue";

  export default {
    props: {
      data: Array,
    },
    components: {
      Logo,
      Pause,
      Play,
    },
    data() {
      return {
        isRunning: "running",
        arr: [...this.data],
      };
    },
    computed: {},
    mounted() {
      setInterval(() => {
        let a = this.arr.shift();
        this.arr.push(a);
      }, 10000);
    },
  };
</script>

<style>
  @keyframes resizer {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -430px;
    }
  }

  .reSize {
    animation: resizer 10s infinite linear;
    /* animation-play-state: running; */
  }
</style>
