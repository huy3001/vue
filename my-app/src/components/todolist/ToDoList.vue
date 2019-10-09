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
        <TaskList :list="updateList()"/>
        {{ list[0].name }}
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
            task: {
                id: '',
                name: '',
                level: ''
            },
            sort: {
                item: '',
                order: ''
            },
            sortOption: [
                {
                    id: 1,
                    option: 'Name',
                    order: 'Asc'
                },
                {
                    id: 2,
                    option: 'Name',
                    order: 'Desc'
                },
                {
                    id: 3,
                    option: 'Level',
                    order: 'Asc'
                },
                {
                    id: 2,
                    option: 'Level',
                    order: 'Desc'
                }
            ],
            searchStr: ''
        }
    },
    methods: {
        /* Handle search action */
        handleSearch: function(value) {
            this.searchStr = value;
        },
        
        /* Handle reset action */
        handleReset: function(value) {
            this.searchStr = value;
        },

        /* Update list after search */
        updateList: function() {
            let list = [...this.list]; // Copy current list
            const search = this.searchStr;

            if(search.length) {
                list = list.filter(function(item) {
                    return item.name.toLowerCase().indexOf(search) !== -1
                });
            }

            return list;
        }
    }
}
</script>

