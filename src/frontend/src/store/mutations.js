export const mutations = {
  SET_LATEST_DATA(state , payload){
    state.latest = payload;  
  },
  SET_VIDEO_ANIME(state , payload){
    state.videos = payload;
  },
  IS_LOADING(state , payload){
    state.isLoading = payload;
  }
};