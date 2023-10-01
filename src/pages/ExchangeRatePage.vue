<script setup>
 import {h, ref} from 'vue';
 import {useExchangeRateStore} from '../stores/exchange_rate.js';
 import {
        useVueTable,
        FlexRender,
        getCoreRowModel,
        getPaginationRowModel,
        getSortedRowModel,
        getFilteredRowModel,
} from '@tanstack/vue-table';
import Icon from '../base-component/Icon';
import Button from '../base-component/Button';


 const exchangeRateStore = useExchangeRateStore();

 const sorting = ref([]);
const columnsCategory = [
  {
    accessorKey: 'id',
    header: 'លេខសម្គាល់',
    enableSorting: true,
  },
  {
    accessorKey: 'date',
    header: 'កាលបរិច្ឆេទ',
    enableSorting: true,
  },
  {
    header: 'អត្រាប្តូរប្រាក់',
    accessorFn : row => `${row.usd}ដុល្លារ​ = ${row.khmer_exchange}រៀល​`,
    enableSorting: false,
  },

  {
     accessorKey : 'status',
     header : 'ស្ថានភាព',
     enableSorting: false,
  },

  {
    accessorKey: 'desc',
    header: 'បរិយាយ',
    enableSorting: false,
  },
];

const exchange_rates = ref(exchangeRateStore.exchange_rates);

const table = useVueTable({
  data: exchange_rates.value,
  columns: columnsCategory,
  getSortedRowModel: getSortedRowModel(),
  getCoreRowModel: getCoreRowModel(),
  state: {
    get sorting() {
      return sorting.value
    },
  },
  onSortingChange: updaterOrValue => {
    sorting.value =
      typeof updaterOrValue === 'function'
        ? updaterOrValue(sorting.value)
        : updaterOrValue
  },
})


</script>

<template>
     <main class="grid grid-cols-4 gap-5">
          
          <div class="col-span-2">
               <table class="min-w-full border border-gray-300">
                         <thead class="bg-lightgray">
                                   <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
                                        <th 
                                                        v-for="header in headerGroup.headers"
                                                        :key="header.id"
                                                        scope="col"
                                                        class="py-1.5 px-1 border border-gray-300 text-left text-sm font-semibold text-gray-900"
                                                        :class="{'cursor-pointer select-none': header.column.getCanSort(),}"
                                                        @click="header.column.getToggleSortingHandler()?.($event)"
                                                        >

                                                        <FlexRender
                                                                :render="header.column.columnDef.header"
                                                                :props="header.getContext()"
                                                                />
                                                                {{ { asc: '&#129169;', desc: '&#129171;' }[header.column.getIsSorted()] }}
                                                    
                                        </th>
                                       
                                   </tr>
                         </thead>

                         <tbody>
                              <tr v-for="row in table.getRowModel().rows" :key="row.id">
                                    <td
                                        v-for="cell in row.getVisibleCells()"
                                        :key="cell.id"
                                        class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500">
                                        <div @click="exchangeRateStore.handleEdit(row.original.id)" v-if="cell.column.id == 'date'" class="text-blue-600 underline cursor-pointer">
                                                  <FlexRender
                                                       :render="cell.column.columnDef.cell "
                                                       :props="cell.getContext()"
                                                  /> 
                                        </div>

                                        <div v-else-if="cell.column.id == 'status'">
                                             <button @click="exchangeRateStore.handleToggleActiveExchangeRate(row.original.id)">
                                                  <span v-if="cell.row.original.status">
                                                       <Icon name="CheckCircle" color="rgba(0, 232, 99, 0.8)" stroke-width="3" size="20" />
                                                  </span>
                                                  <span v-else>
                                                       <Icon name="XCircle" color="rgba(232, 0, 56, 0.8)" stroke-width="3" size="20" />
                                                  </span>
                                             </button>
                                        </div>

                                        <div v-else class="pointer-events-none" >
                                                  <FlexRender
                                                       :render="cell.column.columnDef.cell"
                                                       :props="cell.getContext()"
                                                  />                 
                                        </div>
                                   </td>
                              </tr>
                         </tbody>
               </table>
          </div>
          <div class="p-4 border border-gray-300 rounded-sm space-y-4">
                        <label>បញ្ចូលព័ត៌មានអត្រាប្តូរប្រាក់</label>

                        <div class="relative mb-3">
                            <input type="date" id="date"
                                v-model="exchangeRateStore.exchange_rate.date"
                                class="w-full h-12 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm"
                                placeholder="Name" autocomplete="off" />
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

                       
                        

                        <div class="flex justify-end space-x-4">
                                <Button @click="exchangeRateStore.clearData" size="sm" variant="gray" class="rounded-md">បោះបង់</Button>
                                <Button v-if="exchangeRateStore.active" @click="exchangeRateStore.handleAdd" size="sm" variant="secondary" class="rounded-md">បញ្ចូល</Button>
                                <div v-if="!exchangeRateStore.active" class="space-x-2">
                                        <Button size="sm" variant="warning" class="rounded-md" @click="exchangeRateStore.handleUpdate">កែប្រែ</Button>
                                        <Button size="sm" variant="danger" class="rounded-md" @click="exchangeRateStore.handleDelete" >លុប</Button>
                                </div>
                        </div>
                </div>

     </main>
</template>