<!-- eslint-disable -->
<template>
    <div class="sort text-center">
        <div class="btn-group">
            <button 
                class="btn btn-info dropdown-toggle" 
                type="button" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false">
                <span class="mr-sm-2">
                    Sort By
                </span>
                <span class="badge badge-light mr-sm-2">
                    {{ updateSortOption() }}
                </span>
            </button>
            <div class="dropdown-menu">
                <a 
                    v-for="(item, index) in option"
                    :key="index"
                    :href="item.id"
                    :sort-option="item.option"
                    :sort-order="item.order"
                    @click="selectSortOption"
                    class="dropdown-item">
                    {{ item.option }} - {{ item.order }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    props: {
        option: Array
    },
    data: function() {
        return {
            isActive: ''
        }
    },
    methods: {
        /* Select sort option */
        selectSortOption: function(event) {
            event.preventDefault();

            // Get selected sort option and order
            const sortOption = event.target.getAttribute('sort-option').toLowerCase();
            const sortOrder = event.target.getAttribute('sort-order').toLowerCase();

            // Set isActive by selected option
            this.isActive = event.target.getAttribute('href');

            // Handle sort action
            this.$emit('sort', sortOption, sortOrder);
        },
        
        /* Update sort option */
        updateSortOption: function() {
            let sortOption = this.option;
            let activeOption = this.option[0].option + ' - ' + this.option[0].order;
            const selectedOption = this.isActive; // Current selected option

            // Update activeOption when selectedOption changed
            sortOption.forEach(function(item) {
                if(item.id === parseInt(selectedOption)) {
                    activeOption = item.option + ' - ' + item.order;
                }
            });

            return activeOption;
        }
    }
}
</script>