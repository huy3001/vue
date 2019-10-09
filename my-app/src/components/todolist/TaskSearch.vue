<!-- eslint-disable -->
<template>
    <div class="search">
        <form class="form-inline">
            <input
                class="form-control" 
                type="text" 
                placeholder="Search for..." 
                v-model="searchStr"
            />
            <button
                class="btn btn-primary ml-sm-2" 
                type="button" 
                @click="applySearch()"
            >
                Go
            </button>
            <button
                class="btn btn-danger ml-sm-2" 
                type="button" 
                v-show="toggleResetButton()" 
                @click="resetSearch()"
            >
                Reset
            </button>
        </form>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    data: function() {
        return {
            searchStr: ''
        }
    },
    methods: {
        /* Apply search action */
        applySearch: function() {
            this.$emit('search', this.searchStr)
        },

        /* Hide reset button when input is empty */
        toggleResetButton: function() {
            return this.searchStr === '' ? false : true
        },

        /* Reset search action */
        resetSearch: function() {
            this.searchStr = '';
            this.$emit('reset', this.searchStr);
        }
    }
}
</script>