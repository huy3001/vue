<!-- eslint-disable -->
<template>
	<div id="app">
		<div class="container">
			<img src="./assets/logo.png">
			<h1>{{title}}</h1>
			<p><b>{{fullName}}</b></p>
			<FirstApp/>
			<HoverApp/>
			<ConditionApp/>
			<LoopApp/>
			<PropsApp/>
			<FormApp/>	
		</div>
	</div>
</template>

<script>
/* eslint-disable */
import FirstApp from './components/training/FirstApp';
import HoverApp from './components/training/HoverApp';
import ConditionApp from './components/training/ConditionApp';
import LoopApp from './components/training/LoopApp';
import PropsApp from './components/training/PropsApp';
import FormApp from './components/training/FormApp';

export default {
	components: {
		FirstApp, HoverApp, ConditionApp, LoopApp, PropsApp, FormApp
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
