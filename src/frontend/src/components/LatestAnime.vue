<template>
  <div class="card container mx-auto">
    <section class="movie_image">
      <img class="movie_poster" :src="anime.poster" />
    </section>

    <section class="center">
      <div class="about_movie">
        <h3>{{anime.title}}</h3>
        <div class="movie_info">
          <p style="color: #ffbf00;">{{anime.state}}</p>
          <p></p>
          <p></p>
        </div>
        <div class="movie_desc">
          <p>{{anime.synopsis.slice(0 , 150)}} ...</p>
        </div>

        <router-link :to="{name: 'LatestAnimeVideo' , params:{id: anime.id , title: anime.title , synopsis: anime.synopsis , poster: anime.poster , type: anime.type , state: anime.state}}" tag="button" class="watch">
          <i class="fas fa-headphones"></i>Watch Now!
        </router-link>
      </div>
    </section>
    <svg class="wavy" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
      <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style="stroke: none;"></path>
    </svg>
  </div>
</template>


<script>
export default {
  props: ["anime"],
};
</script>


<style>
</style>
