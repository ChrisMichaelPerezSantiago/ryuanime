export const mutations = {
  SET_LATEST_DATA(state , payload){
    state.latest = payload;  
  },
  IS_LOADING(state , payload){
    state.isLoading = payload;
  }
};