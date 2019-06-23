import axios from 'axios';

const BASE_API_URL= 'http://localhost:3000/api/v1/';
const API_URL_ENDPOINT = {
  latest: 'latest',
  video: 'anime'
}

const A = axios.create({ baseURL: String(BASE_API_URL) });

export const actions = {
  GET_LATEST_DATA({commit}){
    A.get(API_URL_ENDPOINT.latest).then((res) =>{
      const animes = res.data.animes.map((data) => data[0]);
      commit('SET_LATEST_DATA' , animes);
      commit('IS_LOADING' , false);
    }).catch((err) =>{
      console.error(err)
    });
  },
  GET_ANIME_VIDEO({commit} , info){
    console.log("id: " , info.id , "chapter: " , info.eps)
    A.get(`${API_URL_ENDPOINT.video}` + "/" + `${info.id}` + "/" + `${info.eps}`)
      .then((res) =>{
        console.log("video =>" , res.data)
        commit('SET_VIDEO_ANIME' , res.data);
        commit('IS_LOADING' , false);
      }).catch((err) =>{
      console.error(err)
    })
  }
};