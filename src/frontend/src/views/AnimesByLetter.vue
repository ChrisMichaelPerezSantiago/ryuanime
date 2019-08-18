<template>
  <AnimeListing
    page-title="Animes by Letter"
    menu-title="Alphabet"
    :menu-options="options"
    :menu-initial-value="letter"
    :paginated-content="animesByAlpha"
    :animes="animesByAlpha.data"
    v-on:menu-item-selected="letterSelected"
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
      letter: "a",
      options: [...Array(26).keys()].map(i => String.fromCharCode(i + 97)) //[a .. z]
    };
  },
  computed: {
    ...mapState(["animesByAlpha"])
  },
  created() {
    this.fetchData();
  },
  methods: {
    letterSelected(letter) {
      this.letter = letter;
      this.fetchData();
    },
    pageSelected(page) {
      this.page = page;
      this.fetchData();
    },
    fetchData() {
      // fetch data from the backend, and populate the data used by the listing component
      try {
        const info = { letter: this.letter, page: this.page };
        store.dispatch("GET_ANIME_ALPHA", info);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
