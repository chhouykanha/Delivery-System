import {ref, computed} from 'vue';
import { defineStore } from 'pinia';
export const useMockData = defineStore( 'MockData', () => {
    let categories = ref([
        {
            id : 1,
            name : 'របស់ក្មេងលេង',
            desc : 'adsfadfadsf'
        },
        {
            id : 2,
            name : 'សម្លៀកបំពាក់',
            desc : 'adsfasdfadfadfadsf'
        },
        {
            id : 3,
            name : 'កុំព្យទ័រ',
            desc : 'asdfdsfasdf'
        },
        {
            id : 4,
            name : 'ទួរស័ព្ទដៃ',
            desc : 'asdfdsfasdf'
        },
        {
            id : 5,
            name : 'សម្ភារៈប្រើប្រាស់',
            desc : 'asdfdsfasdf'
        },
    ]);

    const exchange_rates = ref([
        {
          id : 1,
          date : '9-28-2023',
          usd : 1,
          khmer_exchange : 4000,
          desc: 'none',
          status : true
        },
        {
          id : 2,
          date : '9-29-2023',
          usd : 1,
          khmer_exchange : 4100,
          desc: 'none',
          status: false
        }
    ]);

    return {
         categories,
         exchange_rates
    }
});