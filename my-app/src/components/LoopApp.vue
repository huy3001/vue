<!-- eslint-disable -->
<template>
    <div class="loopApp">
        <h4>{{title}}</h4>
        <ul>
            <!-- Loop an Array -->
            <li v-for="(list, index) in lists" :key="index">Text-{{index}}: {{list.text}}</li>
        </ul>
        <ul>
            <!-- Loop a Object -->
            <li v-for="(item, title, index) in object" :key="index">{{index}} - {{title}}: {{item}}</li>
        </ul>
        <br>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    data: function() {
        return {
            title: 'This is loop app',
            object: {
                name: 'Huy Nguyen',
                job: 'Web developer',
                tech: 'Frontend'
            },
            lists: [
                {text: 'What is Lorem Ipsum?'},
                {text: 'Where does it come from?'},
                {text: 'Why do we use it?'}
            ]
        }
    }
}
</script>
