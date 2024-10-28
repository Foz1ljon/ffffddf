<template>
  <div class="container w-[1280px]">
    <h2 class="text-[#4929D8] bold text-start pt-[7%] text-5xl tracking-wide py-8">
      {{ "Сервер опроса" }}
    </h2>

    <div class="flex gap-3 flex-wrap py-10">
      <template v-for="(item, i) in properties" :key="i">
        <ElectricityCard
          v-if="i < 3"
          :class="(i + 1) % 3 == 0 ? 'lg:w-full  ' : 'lg:w-[calc(50%-6px)]  '"
          :prop="item"
        />
      </template>
    </div>
  </div>

  <div class="container xl:w-[1280px]">
    <h2 class="text-[#2E9C70] bold pt-[7%] text-5xl tracking-wide py-8">
      {{ "Объекты учета" }}
    </h2>

    <div class="flex gap-3 flex-wrap py-10">
      <template v-for="(el, i) in properties" :key="i">
        <ElectricityCard
          v-if="i > 2 && i < 6"
          :prop="el"
          :class="i == 3 ? 'lg:w-full ' : 'lg:w-[calc(50%-6px)] '"
        />
      </template>
    </div>
  </div>

  <div class="container w-[1280px]">
    <h2 class="text-[#E80032] bold pt-[7%] text-5xl tracking-wide py-8">
      {{ "Журналы событий" }}
    </h2>

    <div class="flex gap-3 flex-wrap py-10">
      <template v-for="(item, i) in properties" :key="i">
        <ElectricityCard
          v-if="i > 5"
          :class="(i + 1) % 3 == 0 ? 'lg:w-full  ' : 'lg:w-[calc(50%-6px)] '"
          :prop="item"
        />
      </template>
    </div>
  </div>
</template>

<script>
  import { useI18n } from "vue-i18n";
  import ElectricityCard from "./electricitycard.vue";

  export default {
    components: {
      ElectricityCard,
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
      properties() {
        return [
          {
            title: this.$t("eTitle1"),
            about: this.$t("eAbout1"),
            tag: this.$t("eTag1"),
            photo: "e1",
          },
          {
            title: this.$t("eTitle2"),
            about: this.$t("eAbout2"),
            tag: this.$t("eTag2"),
            photo: "e2",
          },
          {
            title: this.$t("eTitle3"),
            about: this.$t("eAbout3"),
            tag: this.$t("eTag3"),
            photo: "e3",
          },
          {
            title: this.$t("eTitle4"),
            about: this.$t("eAbout4"),
            tag: this.$t("eTag4"),
            photo: "e4",
          },
          {
            title: this.$t("eTitle5"),
            about: this.$t("eAbout5"),
            tag: this.$t("eTag5"),
            photo: "e5",
          },
          {
            title: this.$t("eTitle6"),
            about: this.$t("eAbout6"),
            tag: this.$t("eTag6"),
            photo: "e6",
          },
          {
            title: this.$t("eTitle7"),
            about: this.$t("eAbout7"),
            tag: this.$t("eTag7"),
            photo: "e7",
          },
          {
            title: this.$t("eTitle8"),
            about: this.$t("eAbout8"),
            tag: this.$t("eTag8"),
            photo: "e8",
          },
          {
            title: this.$t("eTitle9"),
            about: this.$t("eAbout9"),
            tag: this.$t("eTag9"),
            photo: "e9",
          },
        ];
      },
    },
  };
</script>
