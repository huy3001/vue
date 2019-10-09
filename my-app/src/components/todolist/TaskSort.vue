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
                    sortActive
                </span>
            </button>
            <div class="dropdown-menu">
                <a 
                    class="dropdown-item" 
                    href="#">
                    sort.name - sort.order
                </a>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    data: function() {
        return {
            
        }
    }
}
</script>