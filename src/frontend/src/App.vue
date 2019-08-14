<template>
  <div id="app" class="font-sans bg-white antialiased h-screen flex">
    <Default>
      <router-view />
    </Default>
  </div>
</template>


<script>
  import Default from './layouts/Default'

  export default {
    components: {
      Default,
    }
  };
</script>


<style>
</style>
