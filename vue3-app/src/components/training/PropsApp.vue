<template>
    <div class="propsApp">
        <h4>{{title}}</h4>
        <ol :style="{'font-size': fontSize + 'px'}">
            <PropsItem 
                v-for="book in books" 
                :item="book" 
                :key="book.id" 
                @change-size="onEnlargeText"/>
        </ol>
        <br>
    </div>
</template>

<script>
import PropsItem from './PropsItem';

export default {
    components: {
        PropsItem
    },
    data() {
        return {
            title: 'This is props app',
            fontSize: 14,
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
    },
    methods: {
        onEnlargeText(enlargeNumber) {
            this.fontSize += enlargeNumber;
        }    
    }
}
</script>
