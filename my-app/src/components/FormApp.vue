<!-- eslint-disable -->
<template>
    <div class="formApp">
        <form action="">
            <h4>{{title}}</h4>
            <span>Your text is:</span>
            <p :style="{'white-space': 'pre-line'}">{{message}}</p>
            <div class="form-group">
                <textarea v-model="message" class="form-control" cols="30" rows="10" placeholder="Enter your text"></textarea>
            </div>
            <div class="form-group form-check">
                <input v-model="checked" type="checkbox" class="form-check-input" id="exampleCheck">
                <label class="form-check-label" for="exampleCheck">Check me out - {{checked}}</label>
            </div>
            <div class="form-group form-check">
                <input v-model="choice" type="checkbox" class="form-check-input" id="yourCheck1" value="New">
                <label class="form-check-label" for="yourCheck1">New</label>
            </div>
            <div class="form-group form-check">
                <input v-model="choice" type="checkbox" class="form-check-input" id="yourCheck2" value="Sale">
                <label class="form-check-label" for="yourCheck2">Sale</label>
            </div>
            <div class="form-group form-check">
                <input v-model="gender" type="radio" class="form-check-input" id="genderCheck1" value="Male">
                <label class="form-check-label" for="genderCheck1">Male</label>
            </div>
            <div class="form-group form-check">
                <input v-model="gender" type="radio" class="form-check-input" id="genderCheck2" value="Female">
                <label class="form-check-label" for="genderCheck2">Female</label>
            </div>
            <div class="form-group">
                <select v-model="selected" name="" id="yourSelect" class="form-control">
                    <option value="" disabled>Select your number</option>
                    <option v-for="(option, index) in options" :value="option.value" :key="index">{{option.text}}</option>
                </select>
            </div>
            <p>Your choice is: {{choice}}</p>
            <p>Selected gender is: {{gender}}</p>
            <p>Selected number is: {{selected}}</p>
        </form>
        <br>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    data: function() {
        return {
            title: 'This is form app',
            message: '',
            checked: false,
            choice: [],
            gender: '',
            selected: '',
            options: [
                {
                    text: 'One',
                    value: 1
                },
                {
                    text: 'Two',
                    value: 2
                },
                {
                    text: 'Three',
                    value: 3
                }
            ]
        }
    }
}
</script>
