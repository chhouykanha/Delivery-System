import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import dayjs from 'dayjs' 
import { useMockData } from './mockdata'
export const useExchangeRateStore = defineStore('exchage_rate', () => {
    const mockData = useMockData();
    let exchange_rates = ref(mockData.exchange_rates);
    let id = ref(2);
    let active = ref(true);
    let exchange_rate = ref({
         id : id.value,
         date : dayjs(new Date()).format('MM/DD/YYYY'),
         usd : 1,
         khmer_exchange : null,
         desc : null,
         status : true
    });



    const handleToggleActiveExchangeRate = (id) => {
        let index = exchange_rates.value.findIndex(item => item.id == id );
        exchange_rates.value.forEach(exchange => {
            exchange.status = false
        })
        exchange_rates.value[index].status = true;
    }

    const handleAdd = () => {
        if(exchange_rate.value.date == null || exchange_rate.value.khmer_exchange == null || exchange_rate.value.desc == null){
          alert('insert data');
        }else{
          exchange_rates.value.forEach(exchange_rate => {
              exchange_rate.status = false
          })
          exchange_rates.value.push({
              id : ++id.value,
              date : dayjs(exchange_rate.value.date).format('DD-MM-YYYY'),
              usd : exchange_rate.value.usd,
              khmer_exchange : exchange_rate.value.khmer_exchange,
              desc : exchange_rate.value.desc,
              status : true
          });
          clearData();
        }
    }

    const handleEdit = (id) => {
        exchange_rate.value = Object.assign({}, exchange_rates.value.find(exchange_rate => exchange_rate.id == id));
        active.value = false;
    }
  
    const handleDelete = () => {
        let index = exchange_rates.value.findIndex(item => item.id == exchange_rate.value.id)
        exchange_rates.value.splice(index,1);

        if(exchange_rates.value.length == 1){
            exchange_rates.value.forEach((exchage_rate) => {exchage_rate.status = true})
        }
        
        clearData();
    }
  
    const handleUpdate = () => {
      let index = exchange_rates.value.findIndex(item => item.id == exchange_rate.value.id);
      exchange_rates.value.forEach(exchange_rate => {
          exchange_rate.status = false
      })
  
      exchange_rates.value[index].date = exchange_rate.value.date;
      exchange_rates.value[index].usd = exchange_rate.value.usd;
      exchange_rates.value[index].desc = exchange_rate.value.desc;
      exchange_rates.value[index].khmer_exchange = exchange_rate.value.khmer_exchange;
      exchange_rates.value[index].status = true;
  
      clearData();
    }
  
    function clearData(){
        exchange_rate.value = {
            id : id.value,
            date : dayjs().format('YYYY-MM-DD'),
            usd : 1,
            khmer_exchange : null,
            desc : null,
            stauts : true
        }
        active.value = true;
    }



    return {
        exchange_rates,
        handleToggleActiveExchangeRate,
        exchange_rate,
        handleAdd,
        handleDelete,
        handleEdit,
        handleUpdate,
        active
    }
})
