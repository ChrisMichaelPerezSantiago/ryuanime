var _ = require('lodash');

export const getters = {
  FILTER_SPESIFIC_DATA: (state) => (search) =>{
    return _.filter(state.data , (data) =>{
      return data.title.includes(search);
    });
  }
};