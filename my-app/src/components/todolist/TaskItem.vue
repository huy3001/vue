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
                    :edit="editTask"
                    :remove="removeTask"
                />
            </td>
        </tr>
        <tr>
            <div 
            class="modal fade" 
            id="editTask" 
            tabIndex="-1" 
            role="dialog" 
            aria-labelledby="editTaskLabel" 
            aria-hidden="true">
                <div 
                    class="modal-dialog" 
                    role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="editTaskLabel">Try to change task info</h5>
                            <button 
                                type="button" 
                                class="close" 
                                data-dismiss="modal" 
                                aria-label="Close">
                                <span aria-hidden="true">
                                    &times;
                                </span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label htmlFor="taskName">
                                        Task Name
                                    </label>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        id="taskName" 
                                        placeholder="Name" 
                                        v-model="editedName"/>
                                </div>
                                <div class="form-group">
                                    <label htmlFor="taskLevel">
                                        Task Level
                                    </label>
                                    <input 
                                        type="number" 
                                        class="form-control" 
                                        id="taskLevel" 
                                        min="1" 
                                        max="3" 
                                        aria-describedby="taskLevelHelp" 
                                        placeholder="Level" 
                                        v-model="editedLevel"/>
                                    <small 
                                        id="taskLevelHelp" 
                                        class="form-text text-muted">
                                        We have 3 levels: 1 - Low, 2 - Normal, 3 - High
                                    </small>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button 
                                type="button" 
                                class="btn btn-primary" 
                                data-dismiss="modal"
                                @click="saveEditTask">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
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
            editedId: '',
            editedName: '',
            editedLevel: ''
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

        /* Edit selected task */
        editTask: function() {
            let selectedId = event.target.getAttribute('task-edit');
            let selectedName, selectedLevel;
            let taskList = this.tasks;

            // Get name and level of selected task
            if(selectedId.length) {
                taskList.forEach(function(item) {
                    if(item.id === parseInt(selectedId)) {
                        selectedName = item.name;
                        selectedLevel = item.level;
                    }
                })
            }

            // Set value of edited task by selected task 
            this.editedId = parseInt(selectedId);
            this.editedName = selectedName;
            this.editedLevel = selectedLevel;
        },

        /* Save edit task action */ 
        saveEditTask: function() {
            this.edit(this.editedId, this.editedName, parseInt(this.editedLevel));
        },

        /* Remove selected task */
        removeTask: function(event) {
            // Get selected task
            let selectedId = event.target.getAttribute('task-remove');

            // Handle remove task action
            this.remove(parseInt(selectedId));
        }
    }
}
</script>