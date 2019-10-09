<!-- eslint-disable -->
<template>
    <tbody>
        <!-- Render task details -->
        <tr v-for="(item, index) in renderTasks"
            :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td v-html="item.level"></td>
            <td>
                <!-- Render task actions -->
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
    computed: {
        renderTasks: function() {
            let self = this;

            const taskItem =  self.tasks.map(function(item) {
                return {
                    id: item.id,
                    name: item.name,
                    level: self.levelInfo(item.level)
                }
            })
            
            return taskItem;
        }
    },
    methods: {
        levelInfo: function(level) {
            switch (level) {
                case 1:
                    return '<span class="badge badge-secondary">Low</span>';
                case 3:
                    return '<span class="badge badge-danger">High</span>';
                default:
                    return '<span class="badge badge-success">Normal</span>';
            }
        }
    }
}
</script>