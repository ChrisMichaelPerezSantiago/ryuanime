<template>
  <AnimeListing page-title="Last Animes Added" :animes="latest"></AnimeListing>
</template>

<script>
import AnimeListing from "../components/AnimeListing";
import store from "../store/store";
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    AnimeListing
  },
  computed: {
    ...mapState(["latest"])
  },
  created() {
    store.dispatch("GET_LATEST_DATA");
  }
};
</script>
