<template>
  <section
    class="bg-[url('../assets/images/hero-main.jpg')] w-full h-[784px] bg-cover bg-center bg-no-repeat"
  >
    <div class="flex flex-col h-full gap-1.3 justify-end py-6 ">
      <div class="gap-4 flex justify-center">
        <Button :text="t('details')" :bg="true" />
        <Button :text="t('buy')" />
      </div>
      <p class="text-[22px] font-normal text-center text-[#C3C3D2] my-2">
        {{ t("comingSoonAi") }}
      </p>
    </div>
  </section>
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

    mounted() {},

    methods: {},
    computed: {
      t() {
        const { t } = useI18n();
        return t;
      },
    },
  };
</script>
