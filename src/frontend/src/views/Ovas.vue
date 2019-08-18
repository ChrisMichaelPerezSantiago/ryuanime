<template>
  <AnimeListing
    page-title="Ova"
    :paginated-content="ovas"
    :animes="ovas.data"
    v-on:page-selected="pageSelected"
  ></AnimeListing>
</template>

<script>
import AnimeListing from "../components/AnimeListing";
import store from "../store/store";
import { mapState } from "vuex";

export default {
  name: "Ovas",
  components: {
    AnimeListing
  },
  data() {
    return {
      page: 0
    };
  },
  computed: {
    ...mapState(["ovas"])
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
        store.dispatch("GET_ANIME_OVAS", this.page);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
