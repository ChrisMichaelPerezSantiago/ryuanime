<template>
  <div class="container mx-auto">
    <div class="border m-6 rounded-lg  bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
      <div class="sm:flex sm:items-center px-6 py-4">
        <img class="block h-16 sm:h-24 rounded-lg mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" :src="anime.poster" alt="">
        <div class="text-center sm:text-left sm:flex-grow">
          <div class="mb-4">
            <p class="text-xl leading-tight">{{anime.title}}</p>
            <p class="text-sm leading-tight text-grey-dark">    </p>
          </div>
          <div class="flex flex-wrap">
            <router-link  :to="{name: 'LatestAnimeVideo' , params:{id: anime.id , title: anime.title}}" tag="button" class="text-xs font-semibold rounded-full px-4 py-1 mx-3 leading-normal bg-white border border-blue text-blue hover:bg-blue hover:text-gray-600">
              <i class="fas fa-headphones"></i>
              Watch
            </router-link>
            <button class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-gray-600">Message</button>
          </div>
				</div>
      </div>
    </div>
  </div>
</template>


<script>
  export default{
    props: ['anime']
  };
</script>