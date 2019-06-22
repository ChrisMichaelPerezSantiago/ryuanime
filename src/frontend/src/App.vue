<template>
  <div id="app" class="font-sans bg-white antialiased h-screen flex">
    <NavBar/>
    <router-view />
    <Footer/>
  </div>
</template>


<script>
  import NavBar from "./views/NavBar";

  export default {
    components: {
      NavBar,
    }
  };
</script>


<style>
</style>
