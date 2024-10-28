<template>
  <Navbar />
  <div class="bg-[#edeff6]">
    <routerView />
  </div>

  <Footer />
</template>

<script>
  import Navbar from "../components/main/navbar.vue";
  import Footer from "../components/main/footer.vue";
  // import Home from "../views/home.vue";
  export default {
    components: {
      Navbar,
      Footer,
      // Home,
    },
  };
</script>
