<template>
    <div class="hoverApp">
        <h4>{{title}}</h4>
        <p :title="message">Hover me in few seconds to see my title</p>
        <br>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'This is hover app',
            message: 'You hover on this page in ' + new Date().toLocaleString()
        }
    }
}
</script>
