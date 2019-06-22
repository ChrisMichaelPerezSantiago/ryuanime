<template>
 <div class="flex justify-center p-1">
    <div class="max-w-md">
      <button class="bg-blue text-white font-bold py-2 px-4 mx-auto block rounded" type="button" id="js-load-map">Load Google Maps</button>
      <p class="text-sm text-grey-dark flex items-start py-2 leading-normal">
        <span>© {{year}} ryuanime , All rights reserved</span>
      </p>
    </div>
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