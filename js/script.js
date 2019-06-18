/**
 * Created by Nguyen Cong Huy on 4/16/2018.
 */

/* First app */
Vue.component('first-app', {
    template: '#first-app-template',
    data: function() {
        return {
            title: 'This is fisrt app',
            label: 'Enter message here',
            message: 'Hello world!'
        }
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('');
        }
    }
});

/* Hover app */
Vue.component('hover-app', {
    template: '#hover-app-template',
    data: function() {
        return {
            title: 'This is hover app',
            message: 'You hover on this page in ' + new Date().toLocaleString()
        }
    }
});

/* Condition app */
Vue.component('condition-app', {
    template: '#condition-app-template',
    data: function() {
        return {
            title: 'This is condition app',
            greenColor: 'green',
            redColor: 'red',
            seen: true
        }
    }
});

/* Loop app */
Vue.component('loop-app', {
    template: '#loop-app-template',
    data: function() {
        return {
            title: 'This is loop app',
            object: {
                name: 'Huy Nguyen',
                job: 'Web developer',
                tech: 'Frontend'
            },
            lists: [
                {text: 'What is Lorem Ipsum?'},
                {text: 'Where does it come from?'},
                {text: 'Why do we use it?'}
            ]
        }
    }
});

/* Props app */
Vue.component('props-app', {
    template: '#props-app-template',
    data: function() {
        return {
            title: 'This is props app',
            books: [
                {   
                    id: 1,
                    title: 'Rich dad poor dad'
                },
                {
                    id: 2,
                    title: 'Never give up'
                },
                {
                    id: 3,
                    title: 'Love story'
                }
            ]
        }
    }
});

Vue.component('props-item', {
    props: ['item'],
    template: '<li>{{item.title}}</li>'
});

Vue.component('form-app', {
    template: '#form-app-template',
    data: function() {
        return {
            title: 'This is form app',
            message: '',
            checked: false,
            choice: [],
            gender: '',
            selected: '',
            options: [
                {
                    text: 'One',
                    value: 1
                },
                {
                    text: 'Two',
                    value: 2
                },
                {
                    text: 'Three',
                    value: 3
                }
            ]
        }
    }
});

var app = new Vue({
    el: '#myApp',
    data: {
        title: 'This is my training course',
        firstName: 'Huy',
        lastName: 'Nguyen'
    },
    computed: {
        reverseTitle: function() {
            // Change value of title
            this.title = "This is Vue training";
            // Show reversed title
            return 'Reversed title is: ' + this.title.split('').reverse().join('');
        },

        fullName: function() {
            return 'Developer is: ' + this.firstName + ' ' + this.lastName;
        }
    },
    created: function() {
        console.log('Title is: ' + this.title);
    }
});