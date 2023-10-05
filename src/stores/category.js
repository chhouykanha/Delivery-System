import { ref, computed, onMounted, isProxy, toRaw } from 'vue'
import { defineStore } from 'pinia';
import {useMockData} from '../stores/mockdata';

export const useCategoryStore = defineStore('category', () => {
    let id = ref(6);
    const mockData = useMockData();
    let categories = ref(mockData.categories);
    let active = ref(true);
    let category = ref({
        id : id.value,
        name : null,
        desc : null
    });

    // function clear all data

    function clearData () {
        category.value= {
            name : null,
            desc : null
        };
        active.value = true;
    }

    // function handle add Category
    const handleAddCategory = () => {

        if(category.value.name !== null && category.value.desc !== null){
          categories.value.push({
                id : ++id.value,
                name : category.value.name,
                desc : category.value.desc,
                status : true
          })
          clearData();
          console.log(categories.value)
         
        }else{
          alert('You have to insert data!');
        }
    
    }

    // function handle Delete data
    const handleDelete = () => {
        let index = categories.value.findIndex(item => item.id == category.value.id);
        categories.value.splice(index,1);
        clearData();
     }

    // function handle show data to update
    const handleEdit = (id) => {
        category.value = Object.assign({},categories.value.find((item) => item.id == id));
        active.value = !active;
    }


    // function handle update data
    const handleUpdate =  () => {
        let index = categories.value.findIndex(item => item.id == category.value.id);
        categories.value[index].name = category.value.name;
        categories.value[index].desc = category.value.desc;   
        clearData();
    }


    return {
        categories,
        category, 
        active,
        id, 
        clearData,
        handleDelete,
        handleUpdate,
        handleEdit,
        handleAddCategory 
    }

})
