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
                <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">{{content}}</span>
                <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">{{state}}</span>
                <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">episode - {{eps}}</span>
                <span class="font-semibold mr-2 text-left flex-auto">{{Title}}</span>
                <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
              </div>
            </h1>
            <span class="text-base text-grey-darken">{{synopsis}}</span>
          </div>
          <!-- buttons actions -->
          <div class="ml-auto">
            <!-- likes -->
            <div class="flex relative pb-2">
              <!-- like -->
              <div class="flex items-center">
                <span class="text-black opacity-50 text-sm"> ライウアニミー</span>
              </div>
              <!-- hate -->
              <div class="flex items-center ml-5">
                <span class="text-xs text-grey-darken ml-1">🥇</span>
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
  import swal from 'sweetalert';
  import {mapState} from 'vuex'
  import store from '../store/store'

  export default{
    name: 'Video',
    props: ['Id' , 'Title' , 'Eps' , 'Synopsis' , 'ContentType' , 'State'],
    data(){
      return{
        id: this.Id,
        eps: this.Eps,
        synopsis: this.Synopsis,
        content: this.ContentType,
        state: this.State,
      }
    },
    computed:{
      ...mapState(['videos' , 'isLoading'])
    },
    watch:{
      "Eps": function(value){
        this.eps = value;
        let eps = this.eps;
        let info = {id: this.id , eps: eps}
        store.dispatch('GET_ANIME_VIDEO' , info)
        swal("Message!", "Wait a few seconds for the video to load\nIt's normal that it takes a bit", "success");
      },
      "videos.video": function(value){
        this.videos.video = value;
        document.getElementById('video').load();
      }
    },
  };
</script>


<style>
</style>