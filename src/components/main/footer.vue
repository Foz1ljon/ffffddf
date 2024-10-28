<template>
  <footer class="bg-[#E6E8F0] w-full py-3">
    <div class="container">
      <section class="flex justify-between flex-wrap">
        <!-- column 1 -->
        <div class="flex flex-col gap-1">
          <a
            class="text-sm font-normal tracking-wider text-[#020C14]"
            v-for="(el, i) in product"
            :key="i"
            :class="el.bold && i == 0 ? 'bold py-1' : ''"
            :href="el.to"
          >
            {{ el.name }}
          </a>
        </div>

        <!-- column 2 -->
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-1">
            <a
              :class="el.bold && i == 0 ? 'bold py-1' : ''"
              class="text-sm font-normal tracking-wider text-[#020C14]"
              v-for="(el, i) in opportunities"
              :key="i"
              :href="el.to"
            >
              {{ el.name }}
            </a>
          </div>
          <div class="flex flex-col gap-1">
            <a
              :class="el.bold && i == 0 ? 'bold py-1' : ''"
              class="text-sm font-normal tracking-wider text-[#020C14]"
              v-for="(el, i) in clients"
              :key="i"
              :href="el.to"
            >
              {{ el.name }}
            </a>
          </div>
        </div>

        <!-- column 3 -->
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-1">
            <a
              :class="el.bold && i == 0 ? 'bold py-1' : ''"
              class="text-sm font-normal tracking-wider text-[#020C14]"
              v-for="(el, i) in prices"
              :key="i"
              :href="el.to"
            >
              {{ el.name }}
            </a>
          </div>
          <div class="flex flex-col gap-1">
            <a
              v-for="(el, i) in releases"
              :key="i"
              :href="el.to"
              :class="el.bold && i == 0 ? 'bold py-1' : ''"
              class="text-sm font-normal tracking-wider text-[#020C14]"
            >
              {{ el.name }}
            </a>
          </div>
        </div>

        <!-- column 4 -->
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-1">
            <a
              :href="el.to"
              v-for="(el, i) in more"
              :key="i"
              :class="el.bold && i == 0 ? 'bold py-1' : ''"
              class="text-sm font-normal tracking-wider text-[#020C14]"
            >
              {{ el.name }}
            </a>
          </div>
          <div class="flex flex-col gap-1">
            <a
              v-for="(el, i) in about"
              :key="i"
              :href="el.to"
              class="text-sm font-normal tracking-wider text-[#020C14]"
              :class="el.bold ? 'bold' : ''"
            >
              {{ el.name }}
            </a>
          </div>
        </div>
      </section>
      <p v-if="$i18n.locale == 'ru'" class="text-[#596167] text-sm tracking-wider my-3">
        Остались вопросы? Пишите в службу поддержки
        <a class="support" target="_blank" href="http://support.iotics.uz"
          >support.iotics.uz</a
        >
        или звоните
        <a class="support" target="_blank" href="http://support.iotics.uz"
          >+998 94 675-11-00</a
        >
      </p>
      <p v-if="$i18n.locale == 'uz'" class="text-[#596167] text-sm tracking-wider my-3">
        Hali savollaringiz bormi?
        <a class="support" target="_blank" href="http://support.iotics.uz"
          >support.iotics.uz</a
        >
        qo'llab-quvvatlash xizmatiga yozing yoki
        <a class="support" target="_blank" href="http://support.iotics.uz"
          >+998 94 675-11-00</a
        >
        raqamiga qo'ng'iroq qiling.,
      </p>

      <p v-if="$i18n.locale == 'eng'" class="text-[#596167] text-sm tracking-wider my-3">
        Still have questions? Write to the support service
        <a class="support" target="_blank" href="http://support.iotics.uz"
          >support.iotics.uz</a
        >
        or call
        <a class="support" href="http://">+998 94 675-11-00</a>
      </p>

      <hr class="bg-[#B4BCC1] py-[1px] my-4" />

      <div class="flex flex-col">
        <div class="flex justify-between text-[#596167] text-sm">
          <p>{{ $t("copyright") }}</p>
          <p class="text-[#020C14] bold">{{ $t("uzb") }}</p>
        </div>

        <div
          class="flex gap-2 divide-x-[1px] py-2 flex-wrap divide-[#7E7F80] text-[#596167]"
        >
          <router-link class="my-5 pl-2" v-for="(el, i) in footerBtm" :key="i" :to="el.to"
            >{{ el.name }}
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import { useI18n } from "vue-i18n";

  export default {
    data() {
      return {};
    },

    mounted() {},

    methods: {},
    computed: {
      product() {
        return [
          {
            to: "/product/news",
            name: this.$t("product"),
            bold: true,
          },
          {
            to: "/product/news",
            name: this.$t("news"),
            bold: false,
          },
          {
            to: "/product/electricity",
            name: this.$t("electrocity"),
            bold: false,
          },
          {
            to: "/product/green-energy",
            name: this.$t("greenEnergy"),
            bold: false,
          },
          {
            to: "/",
            name: this.$t("water"),
            bold: false,
          },
          {
            to: "/",
            name: this.$t("gas"),
            bold: false,
          },
          {
            to: "/",
            name: this.$t("heat"),
            bold: false,
          },
          {
            to: "/product/configpro",
            name: this.$t("confPro"),
            bold: false,
          },
          {
            to: "/product/scada",
            name: this.$t("scada"),
            bold: false,
          },
          {
            to: "/product/for-edu-Purpose",
            name: this.$t("forEdu"),
            bold: false,
          },
        ];
      },
      opportunities() {
        return [
          {
            to: "/",
            name: this.$t("opportunities"),
            bold: true,
          },
          {
            to: "/",
            name: this.$t("reporting"),
            bold: false,
          },
          {
            to: "/",
            name: this.$t("mnemoDiagram"),
            bold: false,
          },
          {
            to: "/",
            name: this.$t("graphic"),
            bold: false,
          },
          {
            to: "/",
            name: this.$t("addFeatures"),
            bold: false,
          },
        ];
      },
      clients() {
        return [
          {
            to: "/",
            name: this.$t("clients"),
            bold: true,
          },
          {
            to: "/",
            name: this.$t("letOfGrat"),
            bold: false,
          },
          {
            to: "/",
            name: this.$t("case"),
            bold: false,
          },
          {
            to: "/",
            name: this.$t("allClients"),
            bold: false,
          },
          {
            to: "/",
            name: this.$t("scopeCoverage"),
            bold: false,
          },
        ];
      },
      prices() {
        return [
          {
            to: "/",
            name: this.$t("prices"),
            bold: true,
          },
          {
            to: "/",
            name: this.$t("tariffs"),
            bold: false,
          },
          {
            to: "/",
            name: this.$t("demoVersion"),
            bold: false,
          },
          {
            to: "/",
            name: this.$t("licenceApp"),
            bold: false,
          },
        ];
      },
      releases() {
        return [
          {
            to: "/product/news",
            name: this.$t("releases"),
            bold: true,
          },
          {
            to: "/",
            name: this.$t("descRelease"),
            bold: false,
          },
          {
            to: "/",
            name: this.$t("expRelease"),
            bold: false,
          },
          {
            to: "/",
            name: this.$t("expMore"),
            bold: false,
          },
        ];
      },
      more() {
        return [
          {
            to: "/",
            name: this.$t("more"),
            bold: true,
          },
          {
            to: "/",
            name: this.$t("formUsers"),
            bold: false,
          },
          {
            to: "/",
            name: this.$t("faq"),
            bold: false,
          },
          {
            to: "/",
            name: this.$t("contact"),
            bold: false,
          },
        ];
      },
      about() {
        return [
          {
            to: "/",
            name: this.$t("about"),
            bold: true,
          },
          {
            to: "/",
            name: this.$t("company"),
            bold: false,
          },
          {
            to: "/",
            name: this.$t("team"),
            bold: false,
          },
          {
            to: "/",
            name: this.$t("futurePlans"),
            bold: false,
          },
        ];
      },
      footerBtm() {
        return [
          {
            to: "/",
            name: this.$t("privacyPolicy"),
          },
          {
            to: "/",
            name: this.$t("termsOfUse"),
          },
          {
            to: "/",
            name: this.$t("salesAndReturn"),
          },
          {
            to: "/",
            name: this.$t("declaration"),
          },
          {
            to: "/",
            name: this.$t("mapSite"),
          },
        ];
      },
    },
  };
</script>

<style scoped>
  .support {
    color: #0063d4;
    text-decoration: underline;
  }
</style>
