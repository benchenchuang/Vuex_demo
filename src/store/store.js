import Vue from 'vue'
import Vuex from 'vuex'
import model from './module/test'
Vue.use(Vuex);
export const store=new Vuex.Store({
  modules:{
    model
  }
})
