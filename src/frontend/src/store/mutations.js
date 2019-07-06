export const mutations = {
  initialiseStore(state) {
    // Check if the ID exists
    if(localStorage.getItem('store')) {
      // Replace the state object with the stored item
      this.replaceState(
        Object.assign(state, JSON.parse(localStorage.getItem('store')))
      );
    }
  },
  SET_LATEST_DATA(state , payload){
    state.latest = payload;  
  },
  SET_VIDEO_ANIME(state , payload){
    state.videos = payload;
  },
  SET_ANIME_ALPHA(state , payload){
    state.animesByAlpha = payload;
  },
  SET_ANIME_GENDER(state , payload){
    state.animesByGender = payload;
  },
  SET_ANIME_SEARCH(state , payload){
    state.searchAnimeList = payload;
  },
  IS_LOADING(state , payload){
    state.isLoading = payload;
  }
};