<template>
  <!-- Main -->
  <main class="flex-1 bg-grey-lightest z-0 py-5 px-0">
    <div class="flex flex-wrap max-w-5xl mx-auto">
      <!-- main col -->
      <div class="w-full md:flex-1">
        <!-- player -->
        <div class="bg-black relative mb-3">
          <video 
            id="video"
            controls
          ><source :src="videos.video" type="video/mp4"></video>
        </div>
        <!-- video info -->
        <div class="flex flex-wrap items-end">
          <!-- title -->
          <div class="pb-2">
            <h1 class="text-xl my-2">
              <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">video</span>
                <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">episode - {{eps}}</span>
                <span class="font-semibold mr-2 text-left flex-auto">{{Title}}</span>
                <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
              </div>
            </h1>
            <span class="text-base text-grey-darken">13 000 views</span>
          </div>
          <!-- buttons actions -->
          <div class="ml-auto">
            <!-- likes -->
            <div class="flex relative pb-2">
              <!-- like -->
              <div class="flex items-center">
                <svg class="w-5 opacity-75" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" class="style-scope yt-icon"></path></g></svg>
                <span class="text-xs text-grey-darken ml-1">1 300</span>
              </div>
              <!-- hate -->
              <div class="flex items-center ml-5">
                <svg class="w-5 opacity-75"  viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z" class="style-scope yt-icon"></path></g></svg>
                <span class="text-xs text-grey-darken ml-1">300</span>
              </div>
              <div class="absolute w-full h-1 bg-grey pin-b t-5 rounded-full overflow-hidden">
                <div class="absolute pin-l pin-t w-3/4 h-full bg-grey-darkest"></div>
              </div>
            </div>
          </div>
          <hr class="w-full border-t m-0 mb-3 "/>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import {mapState} from 'vuex'
  import store from '../store/store'

  export default{
    name: 'Video',
    props: ['Id' , 'Title' , 'Eps'],
    data(){
      return{
        id: this.Id,
        eps: this.Eps
      }
    },
    computed:{
      ...mapState(['videos' , 'isLoading'])
    },
    created(){
      let info = {id: this.id , eps: this.eps}
      store.dispatch('GET_ANIME_VIDEO' , info)
    }
  };
</script>


<style>
</style>