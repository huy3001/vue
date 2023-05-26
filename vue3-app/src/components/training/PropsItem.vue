<template>
    <li>
        <span>{{item.title}}</span>
        <span 
            class="badge badge-dark" 
            :style="{cursor: 'pointer'}" 
            @click="$emit('change-size', 1)">
            Enlarge
        </span>
    </li>
</template>

<script>
export default {
    props: ['item']
}
</script>
