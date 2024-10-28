<template>
  <section class="w-[1300px] container">
    <h1 class="text-center text-5xl bold flex-wrap text-[#020C14] py-4">
      {{ t("newStep") }}
    </h1>
    <template v-for="(item, index) in info" :key="index">
      <AboutManage :data="item" :reverse="index % 2 == 0 ? true : false" />
    </template>

    <div class="flex justify-center flex-col items-center py-5">
      <p class="text-[19px] font-normal italic text-center text-[#596167] px-20 py-6">
        {{ t("manageItalicTxt") }}
      </p>

      <div><Button :text="t('orderBtn')" :bg="true" /></div>
    </div>
  </section>
</template>

<script>
  import { useI18n } from "vue-i18n";
  import AboutManage from "./about-energy.manage.vue";
  import Button from "../main/button.vue";

  export default {
    components: {
      AboutManage,
      Button,
    },
    data() {
      return {};
    },

    mounted() {},

    methods: {},
    computed: {
      t() {
        const { t } = useI18n();
        return t;
      },
      info() {
        return [
          {
            about: this.$t("energyManageAbout1"),
            photo: "1",
          },
          {
            about: this.$t("energyManageAbout2"),
            photo: "2",
          },
          {
            about: this.$t("energyManageAbout3"),
            photo: "3",
          },
          {
            about: this.$t("energyManageAbout4"),
            photo: "4",
          },
          {
            about: this.$t("energyManageAbout5"),
            photo: "5",
          },
        ];
      },
    },
  };
</script>
