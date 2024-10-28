<template>
  <div class="bg-[#edeff6]">
    <HeroMain />
    <hr class="py-1" />
    <Super />

    <template class="grid md:grid-cols-2 energy grid-cols-1 w-full gap-2">
      <div v-for="(item, index) in menu" :key="index">
        <Energy :data="item" />
      </div>
    </template>
    <hr class="py-1" />
    <Carousel />

    <Marque class="py-6" :data="marques" />

    <EnergyManage />
  </div>
</template>
<script>
  import Super from "../components/home/superiority.vue";
  import Energy from "../components/home/energy.vue";
  import Button from "../components/main/button.vue";
  import HeroMain from "../components/home/hero-main.vue";
  import EnergyManage from "../components/home/energy-manage.vue";
  import Logo from "../components/icons/logo.vue";
  import Marque from "../components/marque.vue";
  import Carousel from "../components/carousel.vue";
  export default {
    components: {
      Super,
      Energy,
      Button,
      HeroMain,
      EnergyManage,
      Logo,
      Marque,
      Carousel,
    },

    data() {
      return {
        arr: this.marques,
      };
    },
    computed: {
      menu() {
        return [
          {
            title: this.$t("electroenergy"),
            img: "electr",
            about: this.$t("electro_about"),
          },
          {
            title: this.$t("gas"),
            img: "gas",
            about: this.$t("gas_about"),
          },
          {
            title: this.$t("water"),
            img: "water",
            about: this.$t("water_about"),
          },
          {
            title: this.$t("hotEnergy"),
            img: "hot",
            about: this.$t("hotEnergy_about"),
          },
          {
            title: this.$t("greenEnergy"),
            img: "green",
            about: this.$t("greenEnergy_about"),
          },
          {
            title: this.$t("ai"),
            img: "electr",
            about: this.$t("ai_about"),
          },
        ];
      },

      marques() {
        return [
          {
            title: "ConfigPro",
            style: "background: linear-gradient(180deg, #7C7EA6 0%, #15121B 100%);",
            desc: "1Конфигурация",
          },
          {
            title: "Сервер опроса",
            style: "background: linear-gradient(180deg, #FE36BB 0%, #230076 100%);",
            desc: "2Electricity",
          },
          {
            title: "Green Energy",
            style: "background: linear-gradient(180deg, #FFDF2C 0%, #00853C 100%);",
            desc: "3Мнемосхема",
          },
          {
            title: "Water",
            style: "background: linear-gradient(180deg, #32E0FF 0%, #A90049 100%);",
            desc: "4Мониторинг",
          },
          {
            title: "Predictive",
            style: "background: linear-gradient(180deg, #3971FF 0%, #9C00A5 100%);",
            desc: "5Помощник",
          },
          {
            title: "Water",
            style: "background: linear-gradient(180deg, #32E0FF 0%, #A90049 100%);",
            desc: "6Мониторинг",
          },
          {
            title: "Predictive",
            style: "background: linear-gradient(180deg, #3971FF 0%, #9C00A5 100%);",
            desc: "7Помощник",
          },
        ];
      },
      mounted() {
        console.log(this.marques);
      },
    },
  };
</script>

<style scoped></style>
