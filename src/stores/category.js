import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia';
import categories_data from '../composables/categories.json';
import { useRouter } from 'vue-router';


export const useCategoryStore = defineStore('category', () => {
    let id = ref(6);
    let categories = ref(categories_data);
    let active = ref(true);
    let category = ref({
        id : id.value,
        name : null,
        desc : null
    });

    const router = useRouter();

 

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
          categories_data.push({
                id : ++id.value,
                name : category.value.name,
                desc : category.value.desc,
                status : true
          })
          categories.value = categories_data;
          router.push({name : 'home_page'})
          router.push({name : 'category_page'})
          clearData();
          
         
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

    const forceTableRefresh = () => {
        // Break Vue ref reactivity by recreating the data object
        categories.value = JSON.parse(JSON.stringify(categories.value))
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
