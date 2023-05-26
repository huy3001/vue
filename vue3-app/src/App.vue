<template>
  <div class="container">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    />
    <h1>{{ title }}</h1>
    <p><b>{{ fullName }}</b></p>
    <ToDoList title="To do list"/>
    <CoinDesk title="Currency price index"/>
  </div>
</template>

<script>
import ToDoList from './components/todolist/ToDoList';
import CoinDesk from './components/coindesk/CoinDesk';

export default {
  name: 'App',
  components: {
    ToDoList, CoinDesk
  },
  data() {
    return {
      title: 'This is Vue training',
      firstName: 'Huy',
      lastName: 'Nguyen',
    }
  },
  computed: {
    reverseTitle() {
      return 'Reversed title is: ' + this.title.split('').reverse().join('');
    },

    fullName() {
      return 'Developer is: ' + this.firstName + ' ' + this.lastName;
    },
  },
  created() {
    console.log('Title is: ' + this.title);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
