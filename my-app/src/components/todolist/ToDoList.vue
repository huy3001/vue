<!-- eslint-disable -->
<template>
    <div class="todo-list mt-4">
        <div class="title">
            <h3>{{ title }}</h3>
            <hr>
        </div>
        <div class="control">
            <div class="row">
                <div class="col-6">
                    <!-- Render task search -->
                    <TaskSearch 
                        @search="handleSearch" 
                        @reset="handleReset"
                    />
                </div>
                <div class="col-3">
                    <!-- Render task sort -->
                    <TaskSort/>
                </div>
                <div class="col-3">
                    <!-- Render task sort -->
                    <TaskAdd/>
                </div>
            </div>
        </div>
        <!-- Render task list -->
        <TaskList :list="list"/>
    </div>
</template>

<script>
/* eslint-disable */
import TaskList from './TaskList';
import TaskSearch from './TaskSearch';
import TaskSort from './TaskSort';
import TaskAdd from './TaskAdd';

export default {
    components: {
        TaskList, TaskSearch, TaskSort, TaskAdd
    },
    props: ['title'],
    data: function() {
        return {
            list: [
                {
                    id: 1,
                    name: 'Homepage',
                    level: 3 
                },
                {
                    id: 2,
                    name: 'Catalog',
                    level: 2
                },
                {
                    id: 3,
                    name: 'Product',
                    level: 1 // 1 - Low, 2 - Normal, 3 - High
                }
            ],
            searchStr: ''
        }
    },
    methods: {
        /* Handle search action */
        handleSearch: function(value) {
            this.searchStr = value;
            this.searchList();
        },
        
        /* Handle reset action */
        handleReset: function(value) {
            this.searchStr = value;
            this.searchList();
        },

        /* Update list after search */
        searchList: function() {
            const search = this.searchStr;

            if(search.length) {
                this.list = this.list.filter(function(item) {
                    return item.name.toLowerCase().indexOf(search) !== -1
                })
            }
        }
    }
}
</script>

