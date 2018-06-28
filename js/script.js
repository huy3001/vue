/**
 * Created by Nguyen Cong Huy on 4/16/2018.
 */

/* The first app */
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello world!'
    }
});

/* Hover app */
var hoverApp = new Vue({
    el: '#hoverApp',
    data: {
        message: 'You hover on this page in ' + new Date().toLocaleString()
    }
});

/* Conditional app */

var conditionApp = new Vue ({
    el: '#conditionApp',
    data: {
        seen: true
    }
});

/* Loop app */

var loopApp = new Vue ({
    el: '#loopApp',
    data: {
        lists: [
            {text: 'Text 1'},
            {text: 'Text 2'},
            {text: 'Text 3'}
        ]
    }
});