import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import LatestAnimeVideo from "./views/LatestAnimeVideo"
import AnimesByLetter from "./views/AnimesByLetter"


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/LatestAnimeVideo",
      name: "LatestAnimeVideo",
      component: LatestAnimeVideo
    },
    {
      path: "/AnimesByLetter",
      name: "AnimesByLetter",
      component: AnimesByLetter
    }
  ]
});
