import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let  defaultCity = '上海';
defaultCity  =  localStorage.city;
export default new Vuex.Store({
	state:{
		city:defaultCity
	},
/* 	actions: {
		changCity (cxt,city) {
			cxt.commit('changCity',city)
		}
	}, */
	mutations: {
		changCity (state,city) {
			state.city = city;
			localStorage.city  = city;
		}
	}
})
