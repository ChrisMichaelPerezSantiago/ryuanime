<template>
  <AnimeListing
    page-title="Animes by Genres"
    menu-title="Genres"
    :menu-options="options"
    :menu-initial-value="genre"
    :paginated-content="animesByGender"
    :animes="animesByGender.data"
    v-on:menu-item-selected="genreSelected"
    v-on:page-selected="pageSelected"
  ></AnimeListing>
</template>

<script>
import AnimeListing from "../components/AnimeListing";
import store from "../store/store";
import { mapState } from "vuex";

export default {
  name: "AnimesByLetter",
  components: {
    AnimeListing
  },
  data() {
    return {
      page: 0,
      genre: "accion",
      options: [
        "accion","artes-marciales","autos","aventura","colegial","comedia","cosas-de-la-vida","dementia","demonios","deportes",
        "drama","ecchi","fantasia","harem","historico","josei","juegos","magia","mecha","militar","misterio","musica","nios",
        "parodia","policial","psicologico","romance","samurai","sci-fi","seinen","shoujo","shoujo-ai","shounen","shounen-ai",
        "sobrenatural","space","super poderes","terror","thriller","vampiros","yaoi","yuri",
      ]
    };
  },
  computed: {
    ...mapState(["animesByGender"])
  },
  created() {
    this.fetchData();
  },
  methods: {
    genreSelected(genre) {
      this.genre = genre;
      this.fetchData();
    },
    pageSelected(page) {
      this.page = page;
      this.fetchData();
    },
    fetchData() {
      // fetch data from the backend, and populate the data used by the listing component
      try {
        const info = { gender: this.genre, page: this.page };
        store.dispatch("GET_ANIME_GENDER", info);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
