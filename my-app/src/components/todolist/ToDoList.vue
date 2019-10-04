<!-- eslint-disable -->
<template>
    <div class="todo-list mt-4">
        <div class="title">
            <h3>{{ title }}</h3>
            <hr>
        </div>
        <div class="control">
            <div class="row">
                <div class="col-4">

                </div>
                <div class="col-4">
                    
                </div>
                <div class="col-4">
                    
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

export default {
    components: {
        TaskList
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
            ]
        }
    }
}
</script>

