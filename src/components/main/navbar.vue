<template>
  <header
    class="bg-custom-black/90 blur-0 w-full fixed z-20 py-1 h-[44px] flex backdrop:blur-[30px]"
  >
    <div class="container w-[1280px] flex justify-between gap-8 items-center">
      <a href="/">
        <Logo />
      </a>
      <div v-for="(item, i) in menu" :key="i">
        <a
          :href="item.to"
          class="text-white xl:text-sm lg:flex hidden lg:text-xs font-normal w-full"
        >
          {{ item.name }}
        </a>
      </div>
      <button><Search /></button>
      <div class="flex justify-center items-center">
        <div class="flex gap-2">
          <span class="text-base font-normal text-white">{{ lang }}</span>
          <button @click="isShow = !isShow"><Lang /></button>
          <div
            v-if="isShow"
            class="fixed flex divide-y-2 rounded-md p-0.5 flex-col w-9 duration-300 top-8 bg-white"
          >
            <button @click="updateLanguage('uz')">Uz</button>
            <button @click="updateLanguage('ru')">Ru</button>
            <button @click="updateLanguage('eng')">En</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import Logo from "../icons/logo.vue";
  import Search from "../icons/search.vue";
  import Lang from "../icons/lang.vue";
  import { useI18n } from "vue-i18n";
  import axios from "axios";

  export default {
    components: {
      Logo,
      Search,
      Lang,
    },
    data() {
      return {
        isShow: false,
        lang: "",
      };
    },
    methods: {
      updateLangLabel(locale) {
        const langMap = {
          uz: "Uz",
          ru: "Ru",
          eng: "En",
        };
        this.lang = langMap[locale] || "En";
      },

      updateLanguage(locale) {
        localStorage.setItem("locale", locale);
        this.$i18n.locale = locale;
        this.updateLangLabel(locale);
      },

      async getLang() {
        try {
          const { data } = await axios.get(
            "https://api.ipgeolocation.io/ipgeo?apiKey=35da056259494320bf095c7a7202aebc",
          );
          const localeMap = {
            UZ: "uz",
            RU: "ru",
            KZ: "ru",
            KG: "ru",
            TJ: "ru",
          };
          const locale = localeMap[data.country_code2] || "eng";
          this.updateLanguage(locale);
        } catch (err) {
          console.log("Error", err);
        }
      },
    },

    async mounted() {
      await this.getLang();
      const storedLocale = localStorage.getItem("locale") || this.$i18n.locale;
      this.updateLanguage(storedLocale);
    },

    computed: {
      t() {
        return useI18n().t;
      },
      menu() {
        return [
          { to: "/product/news", name: this.t("product") },
          { to: "/", name: this.t("opportunities") },
          { to: "/", name: this.t("clients") },
          { to: "/", name: this.t("prices") },
          { to: "/", name: this.t("releases") },
          { to: "/", name: this.t("forum") },
          { to: "/", name: this.t("frequentAskQuestions") },
          { to: "/", name: this.t("about") },
          { to: "/", name: this.t("contact") },
          { to: "/", name: this.t("login") },
        ];
      },
    },
  };
</script>
