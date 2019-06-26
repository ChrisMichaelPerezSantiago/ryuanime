var _ = require('lodash');

export const getters = {
  FILTER_ANIME_SEARCHED: (state) => (search) =>{
    return _.map(state.data , (data) =>{
      return data.title.includes(search);
    });
  }
};