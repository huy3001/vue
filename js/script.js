/**
 * Created by Nguyen Cong Huy on 4/16/2018.
 */

/* First app */
Vue.component('first-app', {
    template: '#first-app-template',
    data: function() {
        return {
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
            message: 'You hover on this page in ' + new Date().toLocaleString()
        }
    }
});

/* Condition app */
Vue.component('condition-app', {
    template: '#condition-app-template',
    data: function() {
        return {
            seen: true
        }
    }
});

/* Loop app */
Vue.component('loop-app', {
    template: '#loop-app-template',
    data: function() {
        return {
            lists: [
                {text: 'Text 1'},
                {text: 'Text 2'},
                {text: 'Text 3'}
            ]
        }
    }
});

var app = new Vue({
    el: '#myApp',
    data: {
        title: 'This is my training course'
    },
    created: function() {
        console.log('Title is: ' + this.title);
    }
});