<template>
    <div class="search">
        <form class="form-inline">
            <input
                class="form-control" 
                type="text" 
                placeholder="Search for..." 
                v-model="searchStr"
                @keyup.enter="applySearch"
            />
            <button
                class="btn btn-primary ml-sm-2" 
                type="button" 
                @click="applySearch"
            >
                Go
            </button>
            <button
                class="btn btn-danger ml-sm-2" 
                type="button" 
                v-show="toggleResetButton()" 
                @click="resetSearch"
            >
                Reset
            </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchStr: ''
        }
    },
    methods: {
        /* Apply search action */
        applySearch() {
            // Handle search action
            this.$emit('search', this.searchStr)
        },

        /* Hide reset button when input is empty */
        toggleResetButton() {
            return this.searchStr === '' ? false : true
        },

        /* Reset search action */
        resetSearch() {
            // Reset value of searchStr
            this.searchStr = '';
            
            // Handle reset action
            this.$emit('reset', this.searchStr);
        }
    }
}
</script>
