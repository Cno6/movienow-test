import { createStore } from 'vuex';
import { getAllMovie } from '@/api';

export default createStore({
  state: {
    isLoading: false,
    movies: [],
  },
  getters: {
    movieList(state) {
      return state.movies;
    },
  },
  mutations: {
    toggleLoad(state, status) {
      state.isLoading = status;
    },
    loadMovies(state, data) {
      state.movies = data;
    },
  },
  actions: {
    async fetchMovies({ commit }) {
      commit('toggleLoad', true);
      await getAllMovie()
        .then((response) => {
          commit('loadMovies', response.data);
          commit('toggleLoad', false);
        })
        .catch((error) => {
          throw new Error(error.message);
        });
    },
  },
});
