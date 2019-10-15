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
                <TaskAction
                    :tasks="tasks"
                    :task-id="item.id"
                    :edit="handleEditTask"
                    :remove="handleRemoveTask"
                />
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
    props: {
        tasks: Array,
        edit: Function,
        remove: Function
    },
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
        /* Change layout of level info */
        levelInfo: function(level) {
            switch (level) {
                case 1:
                    return '<span class="badge badge-secondary">Low</span>';
                case 3:
                    return '<span class="badge badge-danger">High</span>';
                default:
                    return '<span class="badge badge-success">Normal</span>';
            }
        },

        /* Handle edit task action */
        handleEditTask: function(id, name, level) {
            this.edit(id, name, level);
        },

        /* Handle remove task action */
        handleRemoveTask: function(id) {
            this.remove(id);
        }
    }
}
</script>