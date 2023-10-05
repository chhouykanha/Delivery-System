<script setup>
        import {ref} from 'vue';
        import Icon from '../../base-component/Icon';
        import Button from '../../base-component/Button';

        let active1 = ref(false);
        let active2 = ref(false);

        
</script>

<template>
        <div class="grid grid-cols-3 gap-5">
               <div class="col-span-2">
                        <div class="flex justify-between items-center mb-5 mt-10">
                                <div>
                                                <button class="px-8 py-2 text-sm  bg-white shadow-md rounded-md">
                                                <span class="flex space-x-1">
                                                                <Icon name="Filter" />
                                                                <span>ច្រោះទិន្នន័យ</span>
                                                </span>
                                                </button>
                                </div>
                                        <div class="relative">
                                                <input type="name" id="name"
                                                        class="w-full h-10 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm"
                                                        placeholder="Name" autocomplete="off" />
                                                <label for="name" class="absolute text-gray-400 top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">*ស្វែងរក</label>
                                        </div>
                        </div>

                        <div>
                                <table class="min-w-full border border-gray-300">
                                                <thead class="bg-lightgray">

                                                        <tr>
                                                                <th scope="col" class="py-1.5 px-1 border border-gray-300 text-left text-sm font-semibold text-gray-900">
                                                                        ល.រ
                                                                </th>
                                                                <th scope="col" class="py-1.5 px-1 border border-gray-300 text-left text-sm font-semibold text-gray-900">
                                                                        លេខសម្គាល់
                                                                </th>
                                                                <th scope="col" class="py-1.5 px-1 border border-gray-300 text-left text-sm font-semibold text-gray-900">
                                                                        ថ្លៃសេវា
                                                                </th>
                                                                <th scope="col" class="py-1.5 px-1 border border-gray-300 text-left text-sm font-semibold text-gray-900">
                                                                        គិតពី
                                                                </th>
                                                                <th scope="col" class="py-1.5 px-1 border border-gray-300 text-left text-sm font-semibold text-gray-900">
                                                                        បង់សេវាពី
                                                                </th>
                                                                <th scope="col" class="py-1.5 px-1 border border-gray-300 text-left text-sm font-semibold text-gray-900">
                                                                        COD
                                                                </th>
                                                                <th scope="col" class="py-1.5 px-1 border border-gray-300 text-left text-sm font-semibold text-gray-900">
                                                                        ស្ថានភាពដឹក
                                                                </th>
                                                
                                                                <th scope="col" class="py-1.5 px-1 border border-gray-300 text-left text-sm font-semibold text-gray-900">
                                                                        សកម្មភាព
                                                                </th>
                                                        </tr>
                                                
                                                </thead>

                                                <tbody>
                                                        <tr class="bg-white hover:bg-secondary group cursor-pointer transition">
                                                                <td class="whitespace-nowrap border  border-gray-300 px-2 py-1.5 text-sm text-gray-500 group-hover:text-white">
                                                                        1
                                                                </td>
                                                                <td class=" whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500 group-hover:text-white">
                                                                        RM094849
                                                                </td>
                                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500 group-hover:text-white">
                                                                        20000reil
                                                                </td>
                                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500 group-hover:text-white">
                                                                        20000reil
                                                                </td>
                                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500 group-hover:text-white">
                                                                        20000reil
                                                                </td>
                                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500 group-hover:text-white">
                                                                        20000reil
                                                                </td>
                                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500 group-hover:text-white">
                                                                        20000reil
                                                                </td>
                                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500 group-hover:text-white">
                                                                        20000reil
                                                                </td>
                                                        </tr>
                                                        <tr class="bg-lightgray">
                                                                <td class="whitespace-nowrap border  border-gray-300 px-2 py-1.5 text-sm text-gray-500">
                                                                        1
                                                                </td>
                                                                <td class=" whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500">
                                                                        RM094849
                                                                </td>
                                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500">
                                                                        20000reil
                                                                </td>
                                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500">
                                                                        20000reil
                                                                </td>
                                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500">
                                                                        20000reil
                                                                </td>
                                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500">
                                                                        20000reil
                                                                </td>
                                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500">
                                                                        20000reil
                                                                </td>
                                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500">
                                                                        20000reil
                                                                </td>
                                                        </tr>
                                                
                                                </tbody>
                                </table>
                        </div>
               </div>

               <div class="space-y-5">
                      <div class="grid grid-cols-2 gap-10">
                                <div></div>
                                <Button variant="secondary" size="sm" class="rounded-md flex items-center justify-center space-x-2 ">
                                        <span>
                                                <Icon name="Package" size="18" stroke-width="1" />
                                        </span>
                                        <span>ថែមកញ្ចប់ឥវ៉ាន់ថ្មី</span>
                                </Button>
                      </div>
                      <div class="grid grid-cols-3 gap-5">
                                <Button variant="primary" size="sm" class="rounded-md flex items-center justify-center space-x-2">
                                        <span>
                                                <Icon name="ArrowLeft" size="18" stroke-width="1" />
                                        </span>
                                        <span>ចូលឃ្លាំង</span>
                                        
                                </Button>
                                <Button variant="warning" size="sm" class="rounded-md flex items-center justify-center space-x-2">
                                        <span>
                                                <Icon name="ArrowRight" size="18" stroke-width="1" />
                                        </span>
                                        <span>ចេញឃ្លាំង</span>
                                        
                                </Button>
                                <Button variant="black" size="sm" class="rounded-md flex items-center justify-center space-x-2">
                                        <span>
                                                <Icon name="Check" size="18" stroke-width="1" color="white" />
                                        </span>
                                        <span>ត្រួតពិនិត្យ</span>

                                        
                                </Button>
                      </div>

                      <div>
                               <div class="border-t-2 border-l-2 border-r-2 border-lightgray">
                                        <h3 class="py-2 bg-secondary text-white px-4">ព័ត៌មានសម្អិត</h3>

                                        <div class="flex flex-col space-y-4  text-sm">
                                               <ul class="border-b-2 border-lightgray">
                                                        <li class="flex p-2 justify-between ">
                                                                <span>ប្រាក់ទទួលបានសរុប</span>
                                                                <span>1534,985៛</span>
                                                        </li>
                                               </ul>

                                                <ul class="space-y-2 border-b-2 border-lightgray">
                                                        <li class="flex px-2 justify-between">
                                                                <span>ស្ថានភាពដឹក</span>
                                                                <span>បានដឹកដល់</span>
                                                        </li>
                                                        <li class="flex px-2 justify-between">
                                                                <span>ប្រភេទឥវ៉ាន់</span>
                                                                <span>របស់ក្មេងលេង</span>
                                                        </li>
                                                        <li class="flex px-2 justify-between">
                                                                <span>ទម្ងន់</span>
                                                                <span>2.5kg</span>
                                                        </li>
                                                        <li class="flex px-2 justify-between">
                                                                <span>អ្នកផ្ញើរ</span>
                                                                <span>012345678</span>
                                                        </li>
                                                        <li class="flex px-2 justify-between">
                                                                <span>អាស័យដ្ឋាន</span>
                                                                <span class="line-clamp-1">បាត់ដំបង</span>
                                                        </li>
                                                        <li class="flex px-2 justify-between">
                                                                <span>អ្នកទទួល</span>
                                                                <span>012345678</span>
                                                        </li>
                                                        <li class="flex px-2 justify-between">
                                                                <span>អាស័យដ្ឋាន</span>
                                                                <span class="line-clamp-1">បាត់ដំបង</span>
                                                        </li>
                                                        <li class="flex px-2 justify-between font-semibold">
                                                                <span>ផ្នែកងារដឹក</span>
                                                                <span class="line-clamp-1">Tort Tueng</span>
                                                        </li>
                                                       
                                                </ul>

                                                <ul class="px-4 space-y-3 text-xs">
                                                        <li class="border-b-2 font-semibold border-lightgray">
                                                               <span>ព័ត៌មានដឹក</span> 
                                                        </li>

                                                       <ul class="px-2">
                                                                <li @click="active1 = !active1" class="bg-white select-none cursor-pointer flex justify-between mb-2">
                                                                        <span>រៀបចំដឹក</span>
                                                                        <span class="flex">
                                                                                <span>13-07-2023 T10:28AM</span>
                                                                                <span :class="active1 ? 'rotate-90' : 'rotate-0'" class="transform transition-all"> 
                                                                                        <Icon name="ChevronRight" size="15" stroke-width="2" /> 
                                                                                </span>
                                                                                
                                                                        </span>
                                                                </li>

                                                                <li :class="active1 ? 'h-12' : 'h-0'" class="relative transition-all duration-300 overflow-hidden">
                                                                        <input type="name" id="name"
                                                                                disabled
                                                                                value="kasdjfadsf"
                                                                                class="w-full h-12 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm"
                                                                                placeholder="Name" autocomplete="off" />
                                                                        <label for="name"
                                                                                class="absolute text-gray-400 top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">*កត់សម្គាល់</label>
                                                                </li>

                                                                <li class="flex justify-between mb-2">
                                                                        <span>ចូលឃ្លាំង</span> 
                                                                       <span class="flex space-x-3.5">
                                                                                <span>13-07-2023 T10:28AM</span> 
                                                                                <span></span> 
                                                                       </span>   
                                                                </li>
                                                                <li class="flex justify-between mb-2">
                                                                        <span>ចេញឃ្លាំង</span> 
                                                                       <span class="flex space-x-3.5">
                                                                                <span>13-07-2023 T10:28AM</span> 
                                                                                <span></span> 
                                                                       </span>   
                                                                </li>

                                                                <li @click="active2 = !active2" class="select-none bg-white cursor-pointer flex justify-between mb-1">
                                                                        <span>បានដឹកដល់</span>
                                                                        <span class="flex">
                                                                                <span>13-07-2023 T10:28AM</span>
                                                                                <span :class="active2 ? 'rotate-90' : 'rotate-0'" class="transform transition-all">  
                                                                                        <Icon name="ChevronRight" size="15" stroke-width="2" /> 
                                                                                </span>
                                                                                
                                                                        </span>
                                                                </li>

                                                                <li :class="active2 ? 'h-12' : 'h-0'" class="transition-all duration-300 overflow-hidden relative">
                                                                        <input type="name" id="name"
                                                                                disabled
                                                                        
                                                                                value="kasdjfadsf"
                                                                                class="w-full h-12 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm"
                                                                                placeholder="Name" autocomplete="off" />
                                                                        <label for="name"
                                                                                class="absolute text-gray-400 top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">*កត់សម្គាល់</label>
                                                                </li>
                                                       </ul>
                                                </ul>
                                        </div>
                               </div> 
                      </div>
               </div>

        </div>


</template>
