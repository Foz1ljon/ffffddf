<template>
  <div class="flex relative justify-center">
    <form class="max-w-sm mx-auto">
      <select
        id="countries"
        
        class="bg-gray-50 border border-[#C3C3D2] text-[#020C14] text-[22px] w-[400px] tracking-wide rounded-lg h-full px-4 p-2.5 outline-none"
      >
        <option selected>Все месяцы</option>
        <option value="01">Январь</option>
        <option value="02">Февраль</option>
        <option value="03">Март</option>
        <option value="04">Апрель</option>
        <option value="05">Май</option>
        <option value="06">Июнь</option>
        <option value="07">Июль</option>
        <option value="08">Август</option>
        <option value="09">Сентябрь</option>
        <option value="10">Октябрь</option>
        <option value="11">Ноябрь</option>
        <option value="12">Декабрь</option>
      </select>
    </form>
  </div>
</template>

<script>
  import ArrowBlue from "./icons/arrow-blue.vue";

  export default {
    components: {
      ArrowBlue,
    },
    data() {
      return {
        isOpen: false,
      };
    },

    mounted() {},

    methods: {},
  };
</script>
