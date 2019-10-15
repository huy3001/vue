<!-- eslint-disable -->
<template>
    <table class="table table-bordered table-striped mt-4">
        <thead class="thead-dark">
            <tr>
                <th scope="col">ID</th>
                <th 
                    scope="col"
                    v-for="(item, index) in sortType"
                    :key="index">
                    <a 
                        href="#"
                        title="Click to change order"
                        :sort-option="item.type"
                        :sort-order="item.order"
                        @click="applySort">
                        {{ item.type }} {{ item.arrow }}
                    </a>
                </th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <!-- Render task items -->
        <TaskItem 
            :tasks="list"
            :edit="handleEditTask"
            :remove="handleRemoveTask"
        />
    </table>
</template>

<script>
/* eslint-disable */
import TaskItem from './TaskItem';

export default {
    components: {
        TaskItem
    },
    props: {
        list: Array
    },
    data: function() {
        return {
            sortType: [
                {
                    id: 1,
                    type: 'Name',
                    order: 'asc',
                    arrow: ''
                },
                {
                    id: 2,
                    type: 'Level',
                    order: 'asc',
                    arrow: ''
                }
            ]
        }
    },
    methods: {
        /* Handle sort by name */
        applySort: function(event) {
            event.preventDefault();

            let seft = this;
            const upArrow = '\u{02191}';
            const downArrow = '\u{02193}';
            
            // Get selected sort type and order
            const sortOption = event.target.getAttribute('sort-option').toLowerCase();
            const sortOrder = event.target.getAttribute('sort-order').toLowerCase();

            // Reverse order when selected
            seft.sortType.forEach(function(item, index) {
                if(item.type.toLowerCase() === sortOption) {
                    seft.sortType[index].order = sortOrder === 'asc' ? 'desc' : 'asc';
                    seft.sortType[index].order === 'asc' ? seft.sortType[index].arrow = upArrow : seft.sortType[index].arrow = downArrow
                }
            });

            // Handle sort action
            this.$emit('sort', sortOption, sortOrder);
        },

        /* Handle edit task action */
        handleEditTask: function(id, name, level) {
            this.$emit('edit', id, name, level);
        },

        /* Handle remove task action */
        handleRemoveTask: function(id) {
            this.$emit('remove', id);
        }
    }
}
</script>

<style>
    .todo-list .table .thead-dark th a {
        color: inherit;
    }

    .todo-list .table .thead-dark th a:hover {
        color: inherit;
        text-decoration: none;
    }
</style>