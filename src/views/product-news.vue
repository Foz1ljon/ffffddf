<template>
  <div class="bg-[#edeff6]">
    <div class="container py-3">
      <Path :path="t('news')" class="mt-10" />

      <h1
        v-if="$i18n.locale == 'uz'"
        class="text-4xl py-4 bold lg:w-[34%] w-full text-[#ABABB9]"
      >
        <span class="bold text-[#020C14]">Energiyaga</span>
        oid so'nggi yangiliklardan xabardor bo'ling
      </h1>
      <h1
        v-if="$i18n.locale == 'ru'"
        class="text-4xl py-4 bold lg:w-[34%] w-full text-[#ABABB9]"
      >
        Будьте в курсе последних новостей в сфере
        <span class="bold text-[#020C14]">энергетики</span>
      </h1>
      <h1
        v-if="$i18n.locale == 'eng'"
        class="text-4xl py-4 bold lg:w-[34%] w-full text-[#ABABB9]"
      >
        Stay up to date with the latest
        <span class="bold text-[#020C14]">energy</span> news
      </h1>
      <div class="flex justify-evenly">
        <p
          class="text-[30px] text-[#ABABB9] cursor-pointer active:text-[#020C14]"
          v-for="(item, i) in year"
          :key="i"
        >
          {{ item }}
        </p>
      </div>

      <div class="py-6">
        <Month />
      </div>

      <div v-if="currentPage === 1" class="lg:grid flex flex-wrap gap-2">
        <template v-for="(data, i) in paginatedNews" :key="data.id">
          <NewsCard
            v-if="i < 3"
            :class="i == 0 ? 'col-span-2' : ''"
            :data="data"
            :index="i"
          />
        </template>
      </div>

      <div v-if="currentPage === 1" class="grid lg:grid-cols-3 grid-cols-1 gap-3 my-3">
        <template v-for="(data, i) in paginatedNews" :key="data.id">
          <NewFuncCard
            v-if="i > 2 && i < 6"
            @click="$router.push(`/products/${data.id}`)"
            :data="data"
          />
        </template>
      </div>

      <div
        v-if="currentPage >= 1"
        class="grid grid-cols-1 divide-y-2 divide-[#B4BCC1] gap-2"
      >
        <template v-for="(data, i) in paginatedNews" :key="data.id">
          <NewRelease
            v-if="(i > 5 && currentPage === 1) || (i >= 0 && currentPage > 1)"
            @click="$router.push(`/products/${data.id}`)"
            :data="data"
          />
        </template>
      </div>

      <div class="flex justify-center items-center py-4 gap-8">
        <button
          class="bg-[#D5DCE9] rotate-180 outline-none p-4 rounded-full active:bg-[#B2B6BE]"
          @click="prevPage"
          :disabled="currentPage === 1"
        >
          <Arrow />
        </button>
        <p class="flex items-center gap-4 text-[#020C14] text-[22px] tracking-wide">
          <span class="py-2 px-4 rounded-md bg-white border border-gray-400">
            {{ currentPage }}
          </span>
          of {{ totalPages }}
        </p>
        <button
          class="bg-[#D5DCE9] p-4 outline-none rounded-full active:bg-[#B2B6BE]"
          @click="nextPage"
          :disabled="currentPage === totalPages"
        >
          <Arrow />
        </button>
      </div>

      <!-- Tags Section -->
      <div class="flex gap-4 my-3">
        <template v-for="(el, i) in tags" :key="i">
          <Tags :data="el" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import { useI18n } from "vue-i18n";
  import Path from "../components/path.vue";
  import NewsCard from "../components/news-card.vue";
  import NewFuncCard from "../components/newfunc-card.vue";
  import NewRelease from "../components/new-release.vue";
  import Tags from "../components/tags.vue";
  import Arrow from "../components/icons/arrow-right.vue";
  import Month from "../components/month.vue";

  export default {
    components: {
      Path,
      NewsCard,
      NewFuncCard,
      NewRelease,
      Arrow,
      Tags,
      Month,
    },
    data() {
      return {
        currentPage: 1,
        itemsPerPage: 12,
      };
    },

    computed: {
      t() {
        const { t } = useI18n();
        return t;
      },
      year() {
        return [2018, 2019, 2020, 2021, 2022, 2023, 2024];
      },

      news() {
        return [
          {
            id: 1,
            photo: "iotics",
            type: this.$t("release"),
            title: this.$t("newsWater"),
            date: "24.04.2024",
          },
          {
            id: 2,
            photo: "iotics2",
            type: this.$t("update"),
            title: this.$t("newsGas"),
            date: "24.04.2024",
          },
          {
            id: 3,
            photo: "iotics3",
            type: this.$t("update"),
            title: this.$t("newsGreen"),
            date: "24.04.2024",
          },
          {
            id: 4,
            photo: "newFunc",
            caption: this.$t("newFunc"),
            title: this.$t("newFunc_title"),
            date: "24.04.2024",
          },
          {
            id: 5,
            photo: "newFunc",
            caption: this.$t("newFunc"),
            title: this.$t("newFunc_title"),
            date: "24.04.2024",
          },
          {
            id: 6,
            photo: "newFunc",
            caption: this.$t("newFunc"),
            title: this.$t("newFunc_title"),
            date: "24.04.2024",
          },
          {
            id: 7,
            photo: "ai",
            caption: this.$t("newUpdCap"),
            title: this.$t("newUpdtitle"),
            date: "24.04.2024",
          },
          {
            id: 8,
            photo: "ai",
            caption: this.$t("newUpdCap"),
            title: this.$t("newUpdtitle"),
            date: "24.04.2024",
          },
          {
            id: 9,
            photo: "ai",
            caption: this.$t("newUpdCap"),
            title: this.$t("newUpdtitle"),
            date: "24.04.2024",
          },
          {
            id: 10,
            photo: "ai",
            caption: this.$t("newUpdCap"),
            title: this.$t("newUpdtitle"),
            date: "24.04.2024",
          },
          {
            id: 11,
            photo: "ai",
            caption: this.$t("newUpdCap"),
            title: this.$t("newUpdtitle"),
            date: "24.04.2024",
          },
          {
            id: 12,
            photo: "ai",
            caption: this.$t("newUpdCap"),
            title: this.$t("newUpdtitle"),
            date: "24.04.2024",
          },
          {
            id: 13,
            photo: "ai",
            caption: this.$t("newUpdCap"),
            title: this.$t("newUpdtitle"),
            date: "24.04.2024",
          },
          {
            id: 14,
            photo: "ai",
            caption: this.$t("newUpdCap"),
            title: this.$t("newUpdtitle"),
            date: "24.04.2024",
          },
          {
            id: 15,
            photo: "ai",
            caption: this.$t("newUpdCap"),
            title: this.$t("newUpdtitle"),
            date: "24.04.2024",
          },
          {
            id: 16,
            photo: "ai",
            caption: this.$t("newUpdCap"),
            title: this.$t("newUpdtitle"),
            date: "24.04.2024",
          },
          {
            id: 17,
            photo: "ai",
            caption: this.$t("newUpdCap"),
            title: this.$t("newUpdtitle"),
            date: "24.04.2024",
          },
        ];
      },

      tags() {
        return [
          {
            to: "/",
            name: this.$t("upd"),
          },
          {
            to: "/",
            name: this.$t("upd"),
          },
          {
            to: "/",
            name: this.$t("res"),
          },
          {
            to: "/",
            name: this.$t("patch"),
          },
          {
            to: "/",
            name: this.$t("new"),
          },
          {
            to: "/",
            name: this.$t("run"),
          },
        ];
      },

      paginatedNews() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.news.slice(start, end);
      },

      totalPages() {
        return Math.ceil(this.news.length / this.itemsPerPage);
      },
    },

    methods: {
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },

      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
    },
  };
</script>
