<!--
A component to display a listing of animes. It can be used to display
animes by genre, alphabetically, or even a limited list (e.g. latest 10
or so animes).

Via props, the caller can customize the components, enabling or disabling
features like pagination.

Besides the props received from the caller, this component emits events
that can be used by the caller to react to events such as when the user
has selected an item from the drop down menu, or changed the listing page.
-->
<template>
  <!-- all content -->
  <div class="bg-white overflow-hidden">
    <!-- top bar -->
    <div class="border-b flex px-6 py-2 items-center flex-none">
      <div class="flex flex-col">
        <h3 class="text-grey-darkest mb-1 font-extrabold">
          👑 {{ pageTitle }}
        </h3>
        <div class="text-grey-dark text-sm truncate">
          💖 Enjoy the world of anime
        </div>
      </div>
      <div class="flex-1 justify-center hidden sm:flex"></div>
      <!-- href links to platforms and social media -->
      <div class="flex justify-start items-center text-gray-500">
        <h1 v-if="menuItem">{{ menuTitle }}</h1>
        <select
          v-model="menuItem"
          v-if="menuOptions && menuOptions.length > 0"
          class="list-reset border border-purple-200 rounded m-3 w-20 font-sans"
        >
          <option
            v-for="(menuOption, index) in menuOptions"
            :value="menuOption"
            :key="index"
          >
            {{ menuOption }}
          </option>
        </select>
        <a
          href="https://github.com/ChrisMichaelPerezSantiago/ryuanime"
          class="block flex items-center hover:text-gray-700 mr-5"
        >
          <svg
            class="fill-current w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>GitHub</title>
            <path
              d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"
            ></path>
          </svg>
        </a>
      </div>
    </div>

    <!-- content inside -->
    <div class="px-6 py-4 flex-1" id="style-1">
      <!-- [TEMPORARY SOLUTION] navbar for phones -->
      <DropDownSection class="ddSection"></DropDownSection>
      <div v-if="isLoading">
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="flex flex-wrap" v-else>
        <div
          class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4"
          v-for="(anime, index) in animes"
          :key="index"
        >
          <LatestAnime :anime="anime"></LatestAnime>
        </div>
      </div>
    </div>
    <!-- pagination control, displayed only when pagination prop flag is true -->
    <paginate
      class="paginator-container list-reset border border-purple-200 rounded w-auto font-sans"
      v-if="pagination"
      v-model="page"
      :page-count="animes.length"
      :page-range="3"
      :margin-pages="2"
      :click-handler="() => $emit('page-selected', this.page)"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'"
    >
    </paginate>
  </div>
</template>

<script>
import LatestAnime from "./LatestAnime";
import DropDownSection from "./DropDownSection";
import { mapState } from "vuex";

export default {
  name: "DefaultLayout",
  components: {
    LatestAnime,
    DropDownSection
  },
  data() {
    return {
      menuItem: null, // drop down menu
      page: 0 // pagination page selected
    };
  },
  watch: {
    menuItem: function() {
      this.$emit("menu-item-selected", this.menuItem);
    }
  },
  computed: {
    ...mapState(["isLoading"])
  },
  created() {
    this.menuItem = this.menuInitialValue;
  },
  props: {
    // page title
    pageTitle: {
      type: String,
      required: true
    },
    // anime data
    animes: {
      type: Array,
      required: true
    },
    // dropdown menu information
    menuTitle: {
      type: String,
      required: false
    },
    menuOptions: {
      type: Array,
      required: false
    },
    menuInitialValue: {
      type: String,
      required: false,
      default: ""
    },
    // anime data controls
    pagination: Boolean
  }
};
</script>
