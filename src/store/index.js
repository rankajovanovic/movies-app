import Vue from 'vue';
import Vuex from 'vuex';

import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
    token: JSON.parse(localStorage.getItem('token')),
    activeUser: {},
    movies: []
  },
  getters,
  actions,
  mutations,
});