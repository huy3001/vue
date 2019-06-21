<template>
    <div class="firstApp">
        <h4>{{title}}</h4>
        <form action="">
            <div class="form-group">
                <label for="messageInput">{{label}}</label>
                <input type="text" id="messageInput" class="form-control" v-model="message">
                <p class="form-text">{{message}}</p>
                <button type="button" class="btn btn-info" @click="reverseMessage">Reverse message</button>
            </div>
        </form>
        <br>
    </div>
</template>

<script>
export default {
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
}
</script>
