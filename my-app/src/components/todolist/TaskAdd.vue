<!-- eslint-disable -->
<template>
    <div class="add-task">
        <div class="action text-right">
            <button 
                class="btn btn-success" 
                type="button" 
                data-toggle="modal" 
                data-target="#addTaskModal">
                Add Task
            </button>
        </div>
        <div class="modal fade" 
            id="addTaskModal" 
            tabIndex="-1" 
            role="dialog" 
            aria-labelledby="addTaskModalLabel" 
            aria-hidden="true">
            <div class="modal-dialog" 
                role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 
                            class="modal-title" 
                            id="addTaskModalLabel">
                            Please enter task here
                        </h5>
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
                                    placeholder="Name"/>
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
                                    placeholder="Level"/>
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
                            data-dismiss="modal">
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
    data: function() {
        return {
            
        }
    }
}
</script>