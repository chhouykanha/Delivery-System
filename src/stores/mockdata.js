import {ref, computed} from 'vue';
import { defineStore } from 'pinia';
export const useMockData = defineStore( 'MockData', () => {
    const categories = ref([
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


    const shipping_status = ref([
        {
            id : 1,
            name : 'រៀបចំដឹក',
            status : true
        },
        {
            id : 2,
            name : 'ចូលឃ្លាំង',
            status : true
        },
        {
            id : 3,
            name : 'ចេញពីឃ្លាំង',
            status : true
        },
        {
            id : 4,
            name : 'បានដឹកដល់',
            status : true
        },
        {
            id : 5,
            name : 'បដិសេដ',
            status : true
        },
        {
            id : 6,
            name : 'បានផ្ទេរមកវិញ',
            status : true
        },
    ]);
  
  
    const service_charge_from = ref([
          {
              id : 1,
              name : 'អ្នកផ្ញើរ',
              status : true
          },
  
          {
              id : 2,
              name : 'អ្នកទទូល',
              status : true
          }
    ]);
  
    const payment_status = ref([
              {
                  id : 1,
                  name : 'បានបង់'
              },
              {
                  id : 2,
                  name : 'មិនទាន់បានបង់'
              },
    ]);
  
    const checker = ref([
          {
              id : 1,
              name : 'admin',
              status : true,
          },
          {
              id : 2,
              name : 'sub admin',
              status : true,
          },
    ]);
  
    const carrier = ref([
          {
              id : 1,
              name : 'Tort Teung',
              status : true,
          },
  
          {
              id : 2,
              name : 'Ry Danann',
              status : true,
          },
          {
              id : 3,
              name : 'Kim Sou',
              status : true,
          },
    ]);

    const products = ref([
        {
            id : 1,
            no : 'RM-001',
            sender_phone : '09784839',
            sender_capital : 'PhonmPenh',
            sender_province : 'a',
            sender_Commune : 'b',
            sender_village : 'c',
            sender_address : 'abc',
            sender_note : 'i love you',
            receiver_phone : '04948394',
            receiver_capital : 'PhonmPenh',
            receiver_province : 'a',
            receiver_Commune : 'b',
            receiver_village : 'c',
            receiver_address : 'abc',
            receiver_note : 'f u',
            category : 'របស់ក្មេងលេង',
            category_id : 1,
            product_weight : 1.5,
            product_price_usd : 100,
            product_price_reil : 400000,
            service_fee : 8000,
            service_fee_charge : 'អ្នកផ្ញើរ',
            service_fee_charge_id : 1,
            payment_status : 'បានបង់',
            payment_status_id : 1,
            shipping_status : 'រៀបចំដឹក',
            shipping_status_id : 1,
            cod : 15000,
            note : 'la la',
            qr_code : 'https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg',
            bar_code : 'https://png.pngtree.com/png-clipart/20220424/original/pngtree-black-and-white-icons-of-barcode-numbers-png-image_7554658.png',
            phone_supp : '093849473',
            checker : 'admin',
            checker_id : 1,
            check : false,
            carrier : 'Tort Teung',
            carrier_id : 1,
            status : false,
        },
        {
            id : 2,
            no : 'RM-002',
            sender_phone : '09784839',
            sender_capital : 'PhonmPenh',
            sender_province : 'a',
            sender_Commune : 'b',
            sender_village : 'c',
            sender_address : 'abc',
            sender_note : 'i love you',
            receiver_phone : '04948394',
            receiver_capital : 'PhonmPenh',
            receiver_province : 'a',
            receiver_Commune : 'b',
            receiver_village : 'c',
            receiver_address : 'abc',
            receiver_note : 'f u',
            category : 'របស់ក្មេងលេង',
            category_id : 1,
            product_weight : 1.5,
            product_price_usd : 100,
            product_price_reil : 400000,
            service_fee : 8000,
            service_fee_charge : 'អ្នកផ្ញើរ',
            service_fee_charge_id : 1,
            payment_status : 'បានបង់',
            payment_status_id : 1,
            shipping_status : 'រៀបចំដឹក',
            shipping_status_id : 1,
            cod : 15000,
            note : 'la la',
            qr_code : 'https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg',
            bar_code : 'https://png.pngtree.com/png-clipart/20220424/original/pngtree-black-and-white-icons-of-barcode-numbers-png-image_7554658.png',
            phone_supp : '093849473',
            checker : 'admin',
            checker_id : 1,
            check : true,
            carrier : 'Tort Teung',
            carrier_id : 1,
            status : false,
        },
        


  ]);




    return {
         categories,
         exchange_rates,
         shipping_status,
         service_charge_from,
         payment_status,
         checker,
         carrier,
         products
    }
});