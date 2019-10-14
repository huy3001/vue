<!-- eslint-disable -->
<template>
    <div class="action">
        <button 
            class="btn btn-sm btn-warning" 
            type="button" 
            data-toggle="modal" 
            data-target="#editTask"
            :task-edit="taskId"
            @click="editTask">
            Edit
        </button>

        <button 
            class="btn btn-sm btn-danger ml-sm-2" 
            type="button"
            :task-remove="taskId"
            @click="removeTask">
            Remove
        </button>

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
    </div>
</template>

<script>
/* eslint-disable */
export default {
    props: ['tasks', 'taskId'],
    data: function() {
        return {
            editedId: '',
            editedName: '',
            editedLevel: ''
        }
    },
    methods: {
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
            this.$emit('edit', this.editedId, this.editedName, this.editedLevel);
        },

        /* Remove selected task */
        removeTask: function(event) {
            // Get selected task
            let selectedId = event.target.getAttribute('task-remove');

            // Handle remove task action
            this.$emit('remove', parseInt(selectedId));
        }     
    }
}
</script>