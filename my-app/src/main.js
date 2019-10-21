/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 0,
		todos: [
			{
				id: 1,
				name: 'Homepage',
				level: 3
			},
			{
				id: 2,
				name: 'Catalog',
				level: 2
			},
			{
				id: 3,
				name: 'Product',
				level: 1 // 1 - Low, 2 - Normal, 3 - High
			}
		]
	},
	mutations: {
		increment: state => {
			state.count++
		},
		decrement: state => {
			state.count--
		}
	},
	getters: {
		normalTask: state => {
			return state.todos.filter(item => item.level === 2)
		},
		countNormalTask: (state, getters) => {
			return getters.normalTask.length
		},
		getTaskById: (state) => (id) => {
			return state.todos.find(item => item.id === id)
		}
	}
})

new Vue({
	el: '#app',
	store,
	router,
	components: { App },
	template: '<App/>'
})
