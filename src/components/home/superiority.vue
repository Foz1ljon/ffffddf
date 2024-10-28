<template>
  <section class="bg-[#151520] w-full h-[608px]">
    <div class="flex justify-center relative items-center py-12">
      <div class="flex lg:flex-nowrap flex-wrap lg:justify-evenly justify-center">
        <div v-for="(item, index) in super" :key="index">
          <Super :data="item" :index />
        </div>
      </div>
    </div>
    <div class="flex flex-col mt-11">
      <p class="text-[30px] font-normal text-white text-center my-5">
        {{ t("allinOne") }}
      </p>
      <div class="gap-2 flex justify-center">
        <Button :text="t('details')" :bg="true" />
        <Button :text="t('buy')" />
      </div>
      <p class="text-[22px] font-normal text-center text-[#C3C3D2] my-2">
        {{ t("comingSoonAi") }}
      </p>
    </div>
  </section>
  <hr class="py-1" />
</template>

<script>
  import { useI18n } from "vue-i18n";
  import Button from "../main/button.vue";
  import Super from "../home/super.vue";

  export default {
    components: {
      Button,
      Super,
    },
    computed: {
      t() {
        const { t } = useI18n();
        return t;
      },

      super() {
        return [
          {
            title: this.$t("quality"),
            img: "star_1",
            time: 1,
          },
          {
            title: this.$t("accuracy"),
            img: "star_2",
            time: 2,
          },
          {
            title: this.$t("convenience"),
            img: "star_3",
            time: 3,
          },
        ];
      },
    },
  };
</script>
