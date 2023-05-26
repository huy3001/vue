<template>
    <div class="vuex-app">
        <p>Count value: {{ count }}</p>
        <button 
            class="btn btn-primary"
            type="button"
            @click="increment"
            >
            +
        </button>
        <button 
            class="btn btn-danger" 
            type="button"
            @click="decrement"
            >
            -
        </button>
        <hr>
        <p>Normal task: {{ getNormalTask }}</p>
        <p>Count normal task: {{ countNormalTask }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    computed: {
        count() {
            return this.$store.state.count
        },
        showNormalTask() {
            return this.$store.getters.normalTask
        },
        countNormalTask() {
			return this.$store.getters.countNormalTask
        },
        getNormalTask() {
            return this.$store.getters.getTaskById(2)
        }
    },
    methods: {
        /* Hanle increment action */
        increment() {
            this.$store.commit('increment');
        },

        /* Hanle increment action */
        decrement() {
            this.$store.commit('decrement');
        }
    }
}
</script>
