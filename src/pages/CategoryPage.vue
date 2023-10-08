<script setup>
import {computed, ref, } from 'vue';
import Button from '../base-component/Button';
import { useCategoryStore } from '../stores/category';

let categoryStore = useCategoryStore();
let data = ref(categoryStore.categories);

const columnHeader = ref([
        {name : 'id' , title : 'លេខសម្គាល់'},
        {name : 'category', title : 'ប្រភេទឥវ៉ាន់' },
        {name : 'desc', title : 'បរិយាយ'}
]);

const sortKey =  ref('លេខសម្គាល់');
const sortDirection =  ref('asc');
const search = ref('');

function sortBy(key) {
        if (sortKey.value === key) {
        sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
      } else {
        sortKey.value = key;
        sortDirection.value = "asc";
      }
}

const sortCateogry = computed(() => {
        return data.value.sort((a, b) => {
        // Sort by the first column
        if (sortKey.value === "id") {
          return a.id.localeCompare(b.id);
        }

        // If the first column is equal, sort by the second column
        if (a.id === b.id && sortKey.value === "category") {
          return a.category - b.category;
        }

        

        // If all columns are equal, return 0
        return 0;
      });
})


</script>

<template>
     <main class="grid grid-cols-4 gap-5">
                <div class="col-span-2">
                        <table class="min-w-full border border-gray-300">
                                <thead class="bg-lightgray">

                                        <tr>
                                                <th 
                                                        v-for="(column, idx) in columnHeader" :key="idx"
                                                        @click="sortBy(column)"
                                                        scope="col"
                                                        class="py-1.5 px-1 cursor-pointer border border-gray-300 text-left text-sm font-semibold text-gray-900"
                                                        
                                                        >
                                                {{ column.title }}
                                                </th>
                                        </tr>
                                       
                                </thead>

                                <tbody>
                                        <tr v-for="row in sortCateogry" :key="row.id">
                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500">
                                                        {{ row.id }}
                                                </td>
                                                <td class=" whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-blue-600 underline cursor-pointer" @click="categoryStore.handleEdit(row.id)">
                                                        {{ row.name }}
                                                </td>
                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500">
                                                        {{ row.desc }}
                                                </td>
                                        </tr>
                                       
                                </tbody>
                        </table>
                </div>
                <div class="p-4 border border-gray-300 rounded-sm space-y-4">
                        <label>បញ្ចូលព័ត៌មានប្រភេទកញ្ចប់អីវ៉ាន់</label>

                        <div class="relative mb-3">
                            <input type="name" id="name"
                                v-model="categoryStore.category.name"
                                class="w-full h-12 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm"
                                placeholder="Name" autocomplete="off" />
                            <label for="name"
                                class="absolute text-gray-400 top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">*ប្រភេទ</label>
                        </div>

                        <div class="relative mb-3">
                            <textarea id="desc"
                                v-model="categoryStore.category.desc"
                                class="w-full h-24 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm"
                                placeholder="Name"> </textarea>
                            <label for="desc"
                                class="absolute text-gray-400 top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">*បរិយាយ</label>
                        </div>

                        

                        <div class="flex justify-end space-x-2">
                                <Button @click="categoryStore.clearData" size="sm" variant="gray" class="rounded-md">បោះបង់</Button>
                                <Button v-if="categoryStore.active" @click="categoryStore.handleAddCategory" size="sm" variant="secondary" class="rounded-md">បញ្ចូល</Button>
                                <div v-if="!categoryStore.active" class="space-x-1">
                                        <Button size="sm" variant="warning" class="rounded-md" @click="categoryStore.handleUpdate">កែប្រែ</Button>
                                        <Button size="sm" variant="danger" class="rounded-md" @click="categoryStore.handleDelete" >លុប</Button>
                                </div>
                        </div>
                </div>
        </main>
</template>