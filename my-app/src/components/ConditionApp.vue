<!-- eslint-disable -->
<template>
    <div class="conditionApp">
        <h4>{{title}}</h4>
        <button type="button" class="btn btn-primary" @click="seen = !seen">Click to see me</button>
        <br><br>
        <!-- Add transion effect to this element -->
        <transition name="fade">
            <div v-if="seen" :class="{'alert-success': seen}" :style="{color: greenColor}" class="alert" role="alert">
                Now you see me!
            </div>
            <div v-else :class="{'alert-danger': !seen}" :style="{color: redColor}" class="alert" role="alert">
                Nothing!
            </div>
        </transition>
        <!-- Show or hide many elements with a template -->
        <template v-if="seen">
            <strong>I'm a block</strong>
            <p>This is my content</p>
            <p><em>Created by: Huy Nguyen</em></p>
        </template>
        <br>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    data: function() {
        return {
            title: 'This is condition app',
            greenColor: 'green',
            redColor: 'red',
            seen: true
        }
    }
}
</script>