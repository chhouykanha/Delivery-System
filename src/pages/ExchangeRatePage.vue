<script setup>
 import {h, onMounted, ref} from 'vue';
 import {useExchangeRateStore} from '../stores/exchange_rate.js';
 import Icon from '../base-component/Icon';
 import Button from '../base-component/Button';


 const exchangeRateStore = useExchangeRateStore();
 const exchange_rates = ref(exchangeRateStore.exchange_rates);

 const columnHeader = ref([
       'លេខសម្គាល់',
       'កាលបរិច្ឆេទ',
       'អត្រារប្រាក់',
       'បរិយាយ',
 ]);

const  inputDate = ref(null);
let type = ref(null);

const changeInputTypeToDate = () => {
     if(inputDate.value.type == 'text'){
          type.value = 'date';
     }
}

const changeInputTypeToText = () => {
     if(inputDate.value.type = 'date'){
          type.value = 'text';
     }
}

</script>

<template>
     <main class="grid grid-cols-4 gap-5">
          
          <div class="col-span-2">
               <table class="min-w-full border border-gray-300">
                         <thead class="bg-lightgray">
                                   <tr>
                                        <th 
                                             v-for="(column, idx) in columnHeader"
                                             :key="idx"
                                             scope="col"
                                             class="py-1.5 px-1 border border-gray-300 text-left text-sm font-semibold text-gray-900">
                                             {{ column }}
                                        </th>
                                       
                                   </tr>
                         </thead>

                         <tbody>
                              <tr v-for="row in exchange_rates" :key="row.id">
                                    <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500">
                                        {{ row.id }}
                                   </td>

                                   <td @click="exchangeRateStore.handleEdit(row.id)" class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-blue-600 underline cursor-pointer">
                                        {{ row.date }}  
                                   </td>

                                   <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500">
                                        {{ row.usd }} ដុល្លារ = {{ row.khmer_exchange }} រៀល
                                        <button @click="exchangeRateStore.handleToggleActiveExchangeRate(row.id)">
                                                  <span v-if="row.status">
                                                       <Icon name="CheckCircle" color="rgba(0, 232, 99, 0.8)" stroke-width="3" size="20" />
                                                  </span>
                                                  <span v-if="!row.status">
                                                       <Icon name="XCircle" color="rgba(232, 0, 56, 0.8)" stroke-width="3" size="20" />
                                                  </span>
                                        </button>
                                   </td>

                                   <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500">
                                        {{ row.desc }}
                                   </td>
                              </tr>
                         </tbody>
               </table>
          </div>
          <div class="p-4 border border-gray-300 rounded-sm space-y-4">
                        <label>បញ្ចូលព័ត៌មានអត្រាប្តូរប្រាក់</label>

                        <div class="relative mb-3">
                            <input :type="type" id="date"
                                ref="inputDate"
                                @focus="changeInputTypeToDate"
                                @blur="changeInputTypeToText"
                                v-model="exchangeRateStore.exchange_rate.date"
                                class="w-full h-12 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm"
                                placeholder="MM/DD/YYYY" />
                            <label for="date"
                                class="absolute text-gray-400 top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">*កាលបរិច្ចេទ</label>
                        </div>

                        <div class="grid grid-cols-3 gap-2">
                              <div class="relative mb-3">
                                   <input type="text" id="text"
                                        v-model="exchangeRateStore.exchange_rate.usd"
                                        class="w-full h-12 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm"
                                        placeholder="Name" autocomplete="off" />
                                   <label for="text"
                                        class="absolute text-gray-400 top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">ប្រាក់គោល</label>
                              </div>
                              <div class="relative mb-3 col-span-2">
                                   <input type="text" id="text"
                                        v-model="exchangeRateStore.exchange_rate.khmer_exchange"
                                        class="w-full h-12 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm"
                                        placeholder="Name" autocomplete="off" />
                                   <label for="text"
                                        class="absolute text-gray-400 top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">អត្រាប្រាក់</label>
                              </div>
                        </div>

                        <div class="relative mb-3">
                            <textarea id="desc"
                                v-model="exchangeRateStore.exchange_rate.desc"
                                class="w-full h-24 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm"
                                placeholder="Name"> </textarea>
                            <label for="desc"
                                class="absolute text-gray-400 top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">*បរិយាយ</label>
                        </div>

                       
                        <div class="flex justify-end space-x-1">
                                <Button @click="exchangeRateStore.clearData" size="sm" variant="gray" class="rounded-md">បោះបង់</Button>
                                <Button v-if="exchangeRateStore.active" @click="exchangeRateStore.handleAdd" size="sm" variant="secondary" class="rounded-md">បញ្ចូល</Button>
                                <div v-if="!exchangeRateStore.active" class="space-x-1">
                                        <Button size="sm" variant="warning" class="rounded-md" @click="exchangeRateStore.handleUpdate">កែប្រែ</Button>
                                        <Button size="sm" variant="danger" class="rounded-md" @click="exchangeRateStore.handleDelete" >លុប</Button>
                                </div>
                        </div>
                </div>

     </main>
</template>