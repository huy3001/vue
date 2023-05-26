import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const app = createApp(App)

const store = createStore({
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

app.use(store)

app.mount('#app')
