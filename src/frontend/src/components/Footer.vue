<template>
 <div class="">
  <div class="bg-blue text-white font-bold py-2 px-4 mx-auto block rounded"  id="js-load-map"></div>
  <p class="text-sm text-grey-dark flex items-start py-2 leading-normal justify-center">
    <span>© {{year}} Ryuanime , All rights reserved</span>
  </p>
  </div>
</template>


<script>
  export default {
    data(){
      return{
        year: new Date().getFullYear()
      }
    }
  }
</script>
