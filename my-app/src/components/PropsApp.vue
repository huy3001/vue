<!-- eslint-disable -->
<template>
    <div class="propsApp">
        <h4>{{title}}</h4>
        <ol>
            <PropsItem v-for="book in books" :item="book" :key="book.id"/>
        </ol>
        <br>
    </div>
</template>

<script>
/* eslint-disable */
import PropsItem from './PropsItem';

export default {
    components: {
        PropsItem
    },
    data: function() {
        return {
            title: 'This is props app',
            books: [
                {   
                    id: 1,
                    title: 'Rich dad poor dad'
                },
                {
                    id: 2,
                    title: 'Never give up'
                },
                {
                    id: 3,
                    title: 'Love story'
                }
            ]
        }
    }
}
</script>