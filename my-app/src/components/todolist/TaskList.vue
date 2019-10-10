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
                        :sort-type="item.type"
                        :sort-order="item.order"
                        @click="applySort">
                        {{ item.type }} {{ updateOrder(item.type) }}
                    </a>
                </th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <!-- Render task items -->
        <TaskItem :tasks="list"/>
    </table>
</template>

<script>
/* eslint-disable */
import TaskItem from './TaskItem';

export default {
    components: {
        TaskItem
    },
    props: ['list'],
    data: function() {
        return {
            sortType: [
                {
                    id: 1,
                    type: 'Name',
                    order: 'asc'
                },
                {
                    id: 2,
                    type: 'Level',
                    order: 'asc'
                }
            ]
        }
    },
    methods: {
        /* Handle sort by name */
        applySort: function(event) {
            event.preventDefault();
            
            // Get selected sort type and order
            const sortType = event.target.getAttribute('sort-type').toLowerCase();
            const sortOrder = event.target.getAttribute('sort-order').toLowerCase();
            let orderActive = this.sortType.order;

            // Reverse order when selected
            this.sortType.forEach(function(item, index) {
                if(item.type === 'name') {
                    this.sortType[index].order = orderActive === 'asc' ? 'desc' : 'asc'
                }
                else {
                    this.sortType[index].order = orderActive === 'asc' ? 'desc' : 'asc'
                }
            });

            // Handle sort action
            this.$emit('sort', sortType, sortOrder);
        },

        /* Update list after sort */
        updateOrder: function(type) {
            let orderActive = this.sortType.order;
            const sortType = type.toLowerCase();
            const upArrow = '\u{02191}';
            const downArrow = '\u{02193}';

            // Update arrow after click
            this.sortType.forEach(function(item, index) {
                if(item.type === sortType) {
                    this.sortType[index].order === 'asc' ? upArrow : downArrow
                }
                else {
                    this.sortType[index].order === 'asc' ? upArrow : downArrow
                }
            });
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