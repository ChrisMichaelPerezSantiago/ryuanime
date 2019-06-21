export const mutations = {
  SET_DATA(state , payload){
    state.data = payload;  
  },
  IS_LOADING(state , payload){
    state.isLoading = payload;
  }
};