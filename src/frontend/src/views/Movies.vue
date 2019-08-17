<template>
  <AnimeListing
    page-title="Movies"
    :pagination="true"
    :animes="movies"
    v-on:page-selected="pageSelected"
  ></AnimeListing>
</template>

<script>
import AnimeListing from "../components/AnimeListing";
import store from "../store/store";
import { mapState } from "vuex";

export default {
  name: "Movies",
  components: {
    AnimeListing
  },
  data() {
    return {
      page: 0
    };
  },
  computed: {
    ...mapState(["movies"])
  },
  created() {
    this.fetchData();
  },
  methods: {
    pageSelected(page) {
      this.page = page;
      this.fetchData();
    },
    fetchData() {
      // fetch data from the backend, and populate the data used by the listing component
      try {
        store.dispatch("GET_ANIME_MOVIES", this.page);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
