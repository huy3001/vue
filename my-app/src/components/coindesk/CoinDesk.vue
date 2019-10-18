<!-- eslint-disable -->
<template>
    <div class="coin-desk mt-4">
        <div class="title">
            <hr>
            <h3>{{ title }}</h3>
            <p>Updated: {{ data.time.updated }}</p>
            <hr>
        </div>

        <table class="table table-bordered table-striped mt-4">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Code</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="(item, index) in bpi"
                    :key="index">
                    <td>{{ item.description }}</td>
                    <td>{{ item.code }}</td>
                    <td><span v-html="item.symbol"></span>{{ item.rate_float | currencyDecimal }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';

export default {
    props: {
        title: String
    },
    data: function() {
        return {
            apiCoinDesk: 'https://api.coindesk.com/v1/bpi/currentprice.json',
            data: null,
            bpi: null            
        }
    },
    filters: {
        currencyDecimal: function(value) {
            return value.toFixed(2)
        }
    }, 
    mounted: function() {
        /* Fetch data from JSON file */
        let self = this;
        axios.get(this.apiCoinDesk)
            .then(function(response) {
                // handle success
                console.log(response);
                self.data = response.data;
                self.bpi = response.data.bpi;
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            })
    },
}
</script>