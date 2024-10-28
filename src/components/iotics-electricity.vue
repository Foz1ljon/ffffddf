<template>
  <div
    :class="reverse % 2 == 0 ? 'flex-row-reverse' : ''"
    class="flex items-center self-stretch justify-between w-full py-6 pt-10"
  >
    <img class="rounded-xl w-[413px]" src="../assets/electricity/e-iotics.png" alt="" />

    <div :class="reverse % 2 == 0 ? 'text-right' : ''" class="flex flex-col w-full p-4">
      <h2 class="text-[#020C14] py-5 px-[40px] text-[30px] bold tracking-wide">
        Состояние, удаление и редактирование данных
      </h2>
      <p
        style="line-height: 28.5px; letter-spacing: 1.33px"
        class="text-[#596167] px-[40px] w-full text-[19px]"
      >
        <span class="bold"> Данные полностью в ваших руках.</span> Вы можете проверить
        состояние поступления данных, удалить ненужные данные или редактировать их, с
        помощью новых функционалов системы.
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: Object,
      reverse: Number,
    },
    data() {
      return {};
    },

    mounted() {},

    methods: {},

    computed: {
      imgSrc() {
        return new URL(`../assets/electricity/e-iotics.png`, import.meta.url).href;
      },
    },
  };
</script>
