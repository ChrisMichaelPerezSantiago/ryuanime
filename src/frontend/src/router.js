import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import LatestAnimeVideo from "./views/LatestAnimeVideo";
import AnimesByLetter from "./views/AnimesByLetter";
import AnimesByGender from "./views/AnimesByGender";
import Movies from './views/Movies';
import Ovas from './views/Ovas';
import SearchAnime from "./views/SearchAnime";
import NotFound from "./views/NotFound";


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
    },
    {
      path: "/AnimesByGender",
      name: "AnimesByGender",
      component: AnimesByGender
    },
    {
      path: "/Movies",
      name: "Movies",
      component: Movies
    },
    {
      path: "/Ovas",
      name: "Ovas",
      component: Ovas
    },
    {
      path: "/SearchAnime",
      name: "SearchAnime",
      component: SearchAnime
    },
    {
      "path": "*",
      name: 'NotFound',
      component: NotFound
    }
  ]
});
