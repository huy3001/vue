<template>
	<div id="app">
		<div class="container">
			<img src="./assets/logo.png">
			<h1>{{title}}</h1>
			<p><b>{{fullName}}</b></p>
			<FirstApp/>
		</div>
	</div>
</template>

<script>
import FirstApp from './components/FirstApp';

export default {
	components: {
		FirstApp
	},
	data: function() {
		return {
			title: 'This is Vue training',
			firstName: 'Huy',
			lastName: 'Nguyen'
		}
	},
	computed: {
		reverseTitle: function() {
			return 'Reversed title is: ' + this.title.split('').reverse().join('')
		},

		fullName: function() {
			return 'Developer is: ' + this.firstName + ' ' + this.lastName
		}
	},
	created: function() {
		console.log('Title is: ' + this.title)
	},
	name: 'App'
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
