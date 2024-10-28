<template>
  <div @wheel="handleScroll" class="bg-[#EDEFF6]">
    <!-- Main page -->

    <div class="h-screen flex flex-col gap-4">
      <div class="container h-[20%] pt-14">
        <Path :path="'Electricity'" />
        <h1 class="text-5xl font-normal w-full text-[#020C14] text-center">
          {{ t("title") }}
        </h1>
      </div>
      <div class="flex h-[80%] justify-center items-center py-10">
        <div class="relative h-full w-[60%] flex justify-center">
          <div
            :style="`left: ${laptopPos}%`"
            class="absolute duration-200 h-[50%] flex items-end w-[60%] bottom-0"
          >
            <img
              class="h-full bg-contain"
              src="../assets/images/electricity-laptop.png"
              alt=""
            />
          </div>
          <div class="h-full">
            <img class="h-full" src="../assets/images/electricity-desktop.png" alt="" />
          </div>
          <div
            :style="`right: ${mobilePos}%`"
            class="absolute h-[60%] flex items-end duration-200 w-[190px] bottom-0"
          >
            <img
              class="h-full bg-contain"
              src="../assets/images/electricity-mobile.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <!-- iotics electricity -->
    <div class="container">
      <h2 class="txt text-4xl font-normal">IOTICS - Electricity</h2>
      <p class="text-[30px] py-6 font-normal tracking-wide text-[#020C14]">
        {{ t("mainBtm") }}
      </p>
    </div>
    <!-- iotics electricity / -->

    <div class="w-full relative">
      <img src="../assets/images/electricity.png" alt="electricity-bg" />
      <div class="container">
        <p
          class="absolute bottom-0 w-[85%] text-white font-normal text-[22px] tracking-wide left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          {{ t("section2") }}
        </p>
      </div>
    </div>

    <!-- Quote and btm text -->
    <div class="container w-[1280px] py-8">
      <QuoteCard
        :brColor="'#FF995A'"
        :reverse="true"
        :text="'Интеллектуальное управление энергопотреблением — это не просто необходимость, это конкурентное преимущество. IOTICS позволяет пользователям оставаться впереди, оптимизируя потребление для более эффективного и устойчивого будущего.'"
      />

      <div class="my-7">
        <p class="text-[#596167] text-[22px] tracking-wide bold">
          Оптимизируйте потребление энергии с помощью IOTICS.
        </p>
        <p class="text-[22px] text-[#596167] tracking-wide">
          <span class="bold">IOTICS</span> предоставляет информацию в реальном времени об
          использовании электроэнергии. Пользователи могут устанавливать лимиты
          потребления, получать уведомления о неэффективности и контролировать качество
          электроэнергии с помощью нашего модуля “Векторная диаграмма”. Благодаря
          регистрации событий <span class="bold">IOTICS</span>
          помогает предприятиям избегать сбоев, сокращать расходы и работать устойчиво.
        </p>
      </div>
    </div>
    <!-- Quote and btm text /-->

    <ElectricitycardWrapper />

    <div class="container w-[1280px] h-full py-8">
      <div
        class="flex flex-col h-full justify-center items-center gap-5 divide-y-[1px] divide-[#B4BCC1]"
      >
        <div class="flex justify-start w-full py-10">
          <h1 class="bold text-5xl text-[#020C14]">Также в IOTICS - Electricity</h1>
        </div>
        <template v-for="(item, index) in 17" :key="index">
          <IotictElectricity :reverse="index + 1" />
        </template>
        <div class="flex flex-col items-start w-full gap-5 pt-8">
          <h1 class="text-[30px] font text-[#596167]">Быстрые ссылки</h1>
          <div class="flex gap-4">
            <template v-for="(data, i) in tags" :key="i">
              <Tags :data :type="'pin'" />
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="py-16">
      <div
        class="w-full h-[784px] bg-cover bg-center bg-[url('../assets/electricity/bg.png')]"
      >
        <div class="w-full h-full flex flex-col gap-2 items-center pb-6 justify-end">
          <Button :text="$t('buy')" :bg="true" />
          <p class="text-[22px] font-normal text-center text-[#C3C3D2] my-2">
            {{ t("comingSoonAi") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { useI18n } from "vue-i18n";
  import Path from "../components/path.vue";
  import QuoteCard from "../components/quote-card.vue";
  import IotictElectricity from "../components/iotics-electricity.vue";
  import Button from "../components/main/button.vue";
  import ElectricitycardWrapper from "../components/electricitycard-wrapper.vue";
  import Tags from "../components/tags.vue";
  export default {
    components: {
      Path,
      QuoteCard,
      ElectricitycardWrapper,
      IotictElectricity,
      Button,
      Tags,
    },
    data() {
      return {
        mobileSize: 0.8,
        laptopSize: 0.4,
        laptopPos: -16,
        mobilePos: -10,
        mainSize: window.scrollY / document.body.offsetHeight,
        resize: false,
      };
    },

    mounted() {},

    methods: {
      handleScroll() {
        console.log(window.scrollY / document.body.offsetHeight);

        this.resize = true;

        this.mobilePos =
          -10 +
          this.mobileSize * (window.scrollY / document.body.offsetHeight) * 100 +
          0.5;
        this.laptopPos =
          -16 +
          this.laptopSize * (window.scrollY / document.body.offsetHeight) * 100 +
          0.5;
      },
    },
    created() {},
    computed: {
      t() {
        const { t } = useI18n();
        return t;
      },

      tags() {
        return [
          { name: "Демо-версия IOCTICS - Electricity", to: "/" },
          { name: "Цена", to: "/" },
          {
            name: "Релизы",
            to: "/",
          },
        ];
      },
    },
    mounted() {},
    watch: {},
  };
</script>

<style scoped>
  .txt {
    background: linear-gradient(91.53deg, #ff6cbb 0%, #3b78f9 48%, #11d93c 100%);
    background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
</style>
