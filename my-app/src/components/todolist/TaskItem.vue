<!-- eslint-disable -->
<template>
    <tbody>
        <tr v-for="(item, index) in tasks"
            :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.level }}</td>
            <td>
                <TaskAction/>
            </td>
        </tr>
    </tbody>
</template>

<script>
/* eslint-disable */
import TaskAction from './TaskAction';

export default {
    components: {
        TaskAction
    },
    props: ['tasks'],
    data: function() {
        return {
            
        }
    },
    methods: {
        levelInfo: function(level) {
            switch (level) {
                case 1:
                    return <span class="badge badge-secondary">Low</span>;
                case 3:
                    return <span class="badge badge-danger">High</span>;
                default:
                    return <span class="badge badge-success">Normal</span>;
            }
        }
    }
}
</script>