<template>
  <div class="flex-1 flex flex-col bg-white overflow-hidden">
    <div class="px-6 py-4 content-center bg-indigo-900 flex-1 overflow-y-scroll scrollbar" id="style-1">
      <h2>{{title}}</h2>
      <h2>┏(＾0＾)┛┗(＾0＾) ┓</h2>
    </div>
  </div>
</template>

<script>

  export default {
    name: "NotFound",
    data(){
      return{
        title: 'Not Found'
      }
    },
  };
</script>

<style>
  h2{
    font-size: 100px !important;
    color: #3c366b;
    text-align: center;
  }
</style>


