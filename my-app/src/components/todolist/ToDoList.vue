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
                    <TaskSort 
                        :option="sortOption"
                        @sort="handleSort"
                    />
                </div>
                <div class="col-3">
                    <!-- Render task sort -->
                    <TaskAdd @add-task="handleAddTask"/>
                </div>
            </div>
        </div>
        <!-- Render task list -->
        <TaskList 
            :list="updateList()"
            @sort="handleSort"
            @edit="handleEditTask"
            @remove="handleRemoveTask"
        />
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
    props: {
        title: String
    },
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
                option: '',
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
                    id: 4,
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

        /* Handle sort action */
        handleSort: function(option, order) {
            this.sort.option = option;
            this.sort.order = order;
        },

        /* Handle compare action */
        handleCompare: function(option, order) {
            return function(a, b) {
                if(!a.hasOwnProperty(option) || !b.hasOwnProperty(option)) {
                    // property doesn't exist on either object
                    return 0; 
                }

                const varA = (typeof a[option] === 'string') ? a[option].toLowerCase() : a[option];
                const varB = (typeof b[option] === 'string') ? b[option].toLowerCase() : b[option];

                let comparison = 0;

                if (varA > varB) {
                    comparison = 1;
                } else if (varA < varB) {
                    comparison = -1;
                }

                return (
                    (order === 'desc') ? (comparison * -1) : comparison
                );
            }
        },

        /* Handle add task action */
        handleAddTask: function(name, level) {
            // Copy current list
            let currentList = [...this.list];

            // Set new task
            this.task = {
                id: this.list.length + 1,
                name: name,
                level: level
            }

            // Update current list with new task
            let newList = currentList.concat(this.task);

            // Update original list with new list
            this.list = [...newList];

            // Clear localStorage
            localStorage.clear();

            // Save new list to localStorage
            localStorage.setItem('newList', JSON.stringify(newList));
        },

        /* Handle edit task action */
        handleEditTask: function(id, name, level) {
            // Copy current list
            let currentList = [...this.list];

            // Find index of edited task in list
            let taskIndex = currentList.findIndex(function(item) {
                return item.id === id
            })

            // Set edited task
            this.task = {
                id: id,
                name: name,
                level: level
            }

            // Update edited list after edit task
            currentList.splice(taskIndex, 1, this.task);

            // Update original list with edited list
            this.list = [...currentList];

            // Clear localStorage
            localStorage.clear();

            // Save edited list to localStorage
            localStorage.setItem('editedList', JSON.stringify(currentList));
        },

        /* Handle remove task action */
        handleRemoveTask: function(id) {
            // Copy current list
            let currentList = [...this.list];

            // Filter current list after remove task
            let updatedList = currentList.filter(function(item) {
                return item.id !== id;
            });

            // Update original list with updated list
            this.list = [...updatedList];

            // Clear localStorage
            localStorage.clear();

            // Save updated list to localStorage
            localStorage.setItem('updatedList', JSON.stringify(updatedList));
        },

        /* Update list after change */
        updateList: function() {
            let list = [...this.list]; // Copy current list
            let sortOption = this.sort.option;
            let sortOrder = this.sort.order;
            const search = this.searchStr;

            // Update list after search
            if(search.length) {
                list = list.filter(function(item) {
                    return item.name.toLowerCase().indexOf(search) !== -1
                });
            }

            // Update list after sort
            if(sortOption.length) {
                list = list.sort(this.handleCompare(sortOption, sortOrder));
            }

            return list;
        }
    },
    mounted: function() {
        // Check if localStarage has newList property
        if(localStorage.hasOwnProperty('newList')) {
            // Get new list from localStorage
            let newList = localStorage.getItem('newList');
            newList = JSON.parse(newList);
            
            // Update new list
            this.list = [...newList];
        }

        // Check if localStarage has editedList property
        if (localStorage.hasOwnProperty('editedList')) {
            // Get updated toDoList from localStorage
            let editedList = localStorage.getItem('editedList');
            editedList = JSON.parse(editedList);

            // Update edited list
            this.list = [...editedList];
        }

        // Check if localStarage has updatedList property
        if (localStorage.hasOwnProperty('updatedList')) {
            // Get updated list from localStorage
            let updatedList = localStorage.getItem('updatedList');
            updatedList = JSON.parse(updatedList);

            // Update changed list
            this.list = [...updatedList];
        }
    }
}
</script>

