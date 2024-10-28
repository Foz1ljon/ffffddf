<template>
  <div
    :style="`background-image: url('${imageSrc}');`"
    class="w-[100%] pt-[37%] aspect-video bg-no-repeat bg-cover"
  >
    <div class="flex flex-col gap-3 items-center">
      <h1 class="bold text-5xl text-center my-3 text-white">{{ data.title }}</h1>
      <div class="flex justify-center gap-2 mx-auto">
        <Button :text="t('details')" :bg="true" />
        <Button :text="t('buy')" />
      </div>
      <p class="font-normal text-[22px] py-4 w-full text-center text-white">
        {{ data.about }}
      </p>
    </div>
  </div>
</template>

<script>
  import Button from "../main/button.vue";
  import { useI18n } from "vue-i18n";
  export default {
    components: {
      Button,
    },

    data() {
      return {};
    },

    props: {
      data: Object,
    },
    computed: {
      t() {
        const { t } = useI18n();

        return t;
      },
      imageSrc() {
        return new URL(`../../assets/images/${this.data.img}.png`, import.meta.url).href;
      },
    },

    methods: {},
    mounted() {},
  };
</script>

<style scoped></style>
