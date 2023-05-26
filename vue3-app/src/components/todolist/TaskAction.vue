<template>
    <div class="action">
        <button 
            class="btn btn-sm btn-warning" 
            type="button" 
            data-toggle="modal" 
            data-target="#editTask"
            :task-edit="taskId"
            @click="edit">
            Edit
        </button>

        <button 
            class="btn btn-sm btn-danger ml-sm-2" 
            type="button"
            :task-remove="taskId"
            @click="remove">
            Remove
        </button>
    </div>
</template>

<script>
export default {
    props: {
        taskId: Number,
        edit: Function,
        remove: Function
    },
    data() {
        return {
            
        }
    }
}
</script>
