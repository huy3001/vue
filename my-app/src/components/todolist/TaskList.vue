<!-- eslint-disable -->
<template>
    <table class="table table-bordered table-striped mt-4">
        <thead class="thead-dark">
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Task</th>
                <th scope="col">Level</th>
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

        }
    }
}
</script>