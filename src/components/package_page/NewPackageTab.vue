<script setup>
        import {ref, computed} from 'vue';
        import Icon from '../../base-component/Icon';
        import Button from '../../base-component/Button';
        import {useMockData} from '../../stores/mockdata';
        import { Popover, PopoverButton, PopoverPanel,  TransitionRoot,TransitionChild,Dialog,DialogPanel}from '@headlessui/vue';
        import AddPackageModal from '../modal/AddPackageModal.vue';

        const mockdata = useMockData();
        let active1 = ref(false);
        let active2 = ref(false);
        let activeFilter = ref(false);
        let showSingleData = ref(mockdata.products[mockdata.products.length - 1]);
  
        const emits = defineEmits(['closeAddPackageModal']);
        
        const isOpenAddPackageModal = ref(false);
  
        const isOpen = ref(false)
        let searchQuery = ref('');
        
        function closeModalTag() {
                isOpen.value = false
        }
        function openModalTag() {
                isOpen.value = true
        }

        const handleShowData = (id) => {
                let findIndex = mockdata.products.findIndex(product => product.id === id)
                showSingleData.value = mockdata.products[findIndex];
        }


        const filterSearchPackage = computed(() => {
                return mockdata.products.filter(product => product.no.toLowerCase().includes(searchQuery.value.toLowerCase()));
        });



        

</script>

<template>
        <div class="grid grid-cols-3 gap-5">
               <div class="col-span-2">
                        <div class="flex justify-between items-center mb-5 mt-14">
                                <div class="relative">
                                                <div @click="activeFilter = !activeFilter" :class="activeFilter ? 'w-96 h-auto' : 'w-auto h-auto'" class=" transition cursor-pointer px-4 py-2 text-sm  bg-white shadow-md rounded-md absolute -top-5 left-0">
                                                        <span class="flex space-x-1">
                                                                        <Icon name="Filter" />
                                                                        <span>ច្រោះទិន្នន័យ</span>
                                                        </span>

                                                        <div v-if="activeFilter" class="p-2" >
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eos minus enim et in nihil dolores est a quisquam culpa. Suscipit ipsa totam quisquam earum saepe animi possimus, ex et sequi minus similique nostrum itaque sit beatae, ad quam cumque nam! Amet mollitia cum nulla voluptates quaerat laboriosam, totam, tempore dolor, eligendi distinctio magnam? Consectetur vel facilis debitis dicta sapiente sed at laborum reiciendis ea consequuntur quasi quidem, minima officiis labore ipsam similique aut impedit natus maiores odio magnam! Iure quis nihil exercitationem, molestiae nobis temporibus, minima at qui ratione aut labore id ducimus deleniti cum repudiandae excepturi iste repellat!
                                                        </div>



                                                       
                                                </div>
                                </div>
                                        <div class="relative">
                                                <input type="name" id="name"
                                                       v-model="searchQuery"
                                                        
                                                        class="w-full h-10 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm"
                                                        placeholder="Name" autocomplete="off" />
                                                <label for="name" class="absolute text-gray-400 top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">*ស្វែងរកតាមរយៈលេខសម្គាល់</label>
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
                                                        <tr v-for="(data, idx) in filterSearchPackage" :key="data.id" @click="handleShowData(data.id)" :class="idx % 2 == 0 ? 'bg-white' : 'bg-lightgray'" class=" hover:bg-secondary group cursor-pointer transition">
                                                                <td class="whitespace-nowrap border  border-gray-300 px-2 py-1.5 text-sm text-gray-500 group-hover:text-white">
                                                                       {{ ++idx }}
                                                                </td>
                                                                <td class=" whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500 group-hover:text-white">
                                                                       {{ data.no }}
                                                                </td>
                                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500 group-hover:text-white">
                                                                        {{ data.service_fee }}
                                                                </td>
                                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500 group-hover:text-white">
                                                                        {{ data.service_fee_charge }}
                                                                </td>
                                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500 group-hover:text-white">
                                                                        {{ data.payment_status }}
                                                                </td>
                                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500 group-hover:text-white">
                                                                        {{ data.cod }}៛
                                                                </td>
                                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500 group-hover:text-white">
                                                                        {{data.shipping_status }}
                                                                </td>


                                                                <td class=" text-center whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500 group-hover:text-white">
                                                                        
                                                                        <Popover class="relative">
                                                                                <PopoverButton @click="" class="bg-gray-300 px-3 py rounded-full group-hover:bg-gray-600">
                                                                                        <Icon name="MoreHorizontal" stroke-width="2" />
                                                                                </PopoverButton>
                                                                                
                                                                                <PopoverPanel class="text-black transition absolute -top-5 right-20 z-10 rounded-md bg-white  shadow-lg px-2 py">
                                                                                <div class="absolute -right-2 top-6 h-0 w-0 border-t-8 border-l-8 border-b-8 
                                                                                                border-solid border-t-transparent border-b-transparent border-l-white"></div>
                                                                                <div class="flex items-start p-2 flex-col space-y-3 py-3">
                                                                                        <button @click="openModalTag" class="text-xs flex justify-between space-x-3 items-center">
                                                                                                <span>
                                                                                                        <Icon name="Printer" size="15"  />
                                                                                                </span>
                                                                                                <span>ព្រីនស្លាក</span>
                                                                                        </button>
                                                                                        <button class="text-xs flex justify-between space-x-3 items-center">
                                                                                                <span>
                                                                                                        <Icon name="Check" size="15"  />
                                                                                                </span>
                                                                                                <span>ត្រួតពិនិត្យ</span>
                                                                                        </button>
                                                                                        <button class="text-xs flex justify-between space-x-3 items-center">
                                                                                                <span>
                                                                                                        <Icon name="ArrowRightSquare" size="15"  />
                                                                                                </span>
                                                                                                <span>សម្គាល់មកស្ថានភាពដើមវិញ</span>
                                                                                        </button>
                                                                                </div>
                                                                                </PopoverPanel>

                                                                                <!-- </TransitionRoot> -->
                                                                        </Popover>

                                                                        <div>
                                                                                <TransitionRoot appear :show="isOpen" as="template">
                                                                                        <Dialog as="div" @close="closeModalTag" class="relative z-10 text-xs">
                                                                                                <TransitionChild
                                                                                                as="template"
                                                                                                enter="duration-300 ease-out"
                                                                                                enter-from="opacity-0"
                                                                                                enter-to="opacity-100"
                                                                                                leave="duration-200 ease-in"
                                                                                                leave-from="opacity-100"
                                                                                                leave-to="opacity-0"
                                                                                                >
                                                                                                <div class="fixed inset-0 bg-black bg-opacity-25" />
                                                                                                </TransitionChild>
                                                                                        
                                                                                                <div class="fixed inset-0 overflow-y-auto">
                                                                                                <div
                                                                                                class="flex min-h-full items-center justify-center p-4 text-center"
                                                                                                >
                                                                                                <TransitionChild
                                                                                                as="template"
                                                                                                enter="duration-300 ease-out"
                                                                                                enter-from="opacity-0 scale-95"
                                                                                                enter-to="opacity-100 scale-100"
                                                                                                leave="duration-200 ease-in"
                                                                                                leave-from="opacity-100 scale-100"
                                                                                                leave-to="opacity-0 scale-95"
                                                                                                >
                                                                                                <DialogPanel
                                                                                                        class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all"
                                                                                                >
                                                                                                        
                                                                                                        <div class="grid grid-cols-3 mt-2">
                                                                                                                <div class="col-span-2 border-r-2 border-slate-200 font-battambang">
                                                                                                                        <div class="mb-5">
                                                                                                                                <div class="mb-3">
                                                                                                                                        <p>អ្នកទទូល</p>
                                                                                                                                        <div class="pl-2">
                                                                                                                                                <p>លេខទូរស័ព្ទ៖ <span>{{ data.receiver_phone }}</span></p>
                                                                                                                                                <p>អាស័យដ្ឋាន៖ <span>{{ data.receiver_address }}</span></p>
                                                                                                                                        </div>
                                                                                                                                </div>     
                                                                                                                                <div class="mb-3">
                                                                                                                                        <p>អ្នកផ្ញើរ</p>
                                                                                                                                        <div class="pl-2">
                                                                                                                                                <p>លេខទូរស័ព្ទ៖ <span>{{ data.sender_phone }}</span></p>
                                                                                                                                                <p>អាស័យដ្ឋាន៖ <span>{{ data.sender_address }}</span></p>
                                                                                                                                        </div>
                                                                                                                                </div>     
                                                                                                                        </div>

                                                                                                                        <div class="border-b-2 decoration-slate-700"></div>

                                                                                                                        <div class="my-3">
                                                                                                            
                                                                                                                                        <p>អ៊ីវ៉ាន់</p>
                                                                                                                                        <div class="flex justify-center">
                                                                                                                                               <table class="border border-slate-500">
                                                                                                                                                        <tr class="border border-slate-500 p-2">
                                                                                                                                                                <td class="border border-slate-500 p-2">
                                                                                                                                                                        <span class="block mb-2">
                                                                                                                                                                                ថ្លៃសេវា
                                                                                                                                                                        </span>
                                                                                                                                                                        <span>
                                                                                                                                                                                {{ data.service_fee }} KHR
                                                                                                                                                                        </span>
                                                                                                                                                                </td>
                                                                                                                                                                <td class="border border-slate-500 p-2 space-y-2">
                                                                                                                                                                        <span class="block mb-2">
                                                                                                                                                                                COD
                                                                                                                                                                        </span>
                                                                                                                                                                        <span>
                                                                                                                                                                                {{ data.cod }} KHR
                                                                                                                                                                        </span>
                                                                                                                                                                </td>
                                                                                                                                                        </tr>

                                                                                                                                                        <tr class="border border-slate-500 p-2">
                                                                                                                                                                 <td colspan="2" class="border text-center border-slate-500 p-2">
                                                                                                                                                                        {{ data.service_fee + data.cod }} KHR
                                                                                                                                                                 </td>               
                                                                                                                                                        </tr>
                                                                                                                                               </table>
                                                                                                                                        </div>

                                                                                                                        </div>

                                                                                                                        <div>
                                                                                                                                <p>ប្រភេទឥវ៉ាន់​៖ {{ data.category }}, {{ data.product_weight }}kg</p>

                                                                                                                        </div>
                                                                                                                </div>
                                                                                                                <div class="font-battambang">
                                                                                                                        <div class="p-2 flex flex-col items-center justify-center border-b-2 border-slate-200">
                                                                                                                                <img class="w-16 h-16" :src="data.qr_code" alt="qr_code">
                                                                                                                                <p>ស្កេនមើលព័ត៌មាន</p>
                                                                                                                        </div>

                                                                                                                        
                                                                                                                </div>
                                                                                                        </div>
                                                                                        
                                                                                                      
                                                                                                </DialogPanel>
                                                                                        </TransitionChild>
                                                                                        </div>
                                                                                        </div>
                                                                                </Dialog>
                                                                                </TransitionRoot>
                                                                        </div>
                                                                </td>
                                                        </tr>

                                                
                                                </tbody>
                                </table>
                                
                                <div class="flex justify-between items-center mt-4">
                                        <div></div>
                                        <div class="rounded-md border  border-gray-400 text-xs">
                                                <button class="border  border-gray-300 px-2 py-1">First</button>
                                                <button class="border  border-gray-300 px-2 py-1">Prev</button>
                                                <button class="border  border-gray-300 px-2 py-1">1</button>
                                                <button class="border  border-gray-300 px-2 py-1">2</button>
                                                <button class="border  border-gray-300 px-2 py-1">3</button>
                                                <button class="border  border-gray-300 px-2 py-1">4</button>
                                                <button class="border  border-gray-300 px-2 py-1">5</button>
                                                <button class="border  border-gray-300 px-2 py-1">...</button>
                                                <button class="border  border-gray-300 px-2 py-1">Next</button>
                                                <button class="border  border-gray-300 px-2 py-1">Last</button>
                                        </div>
                                </div>
                        </div>
               </div>

               <div class="space-y-5">
                      <div class="grid grid-cols-2">
                                <div></div>
                                <Button @click="isOpenAddPackageModal = true"  variant="secondary" size="sm" class="rounded-md flex items-center justify-center space-x-2 ">
                                        <span>
                                                <Icon name="Package" size="18" stroke-width="1" />
                                        </span>
                                        <span>ថែមកញ្ចប់ឥវ៉ាន់ថ្មី</span>
                                </Button>
                      </div>
                      <div class="grid grid-cols-3 gap-5">
                                <Button variant="primary" size="sm" class="text-sm rounded-md flex items-center justify-center space-x-1">
                                        <span>
                                                <Icon name="ArrowLeft" size="18" stroke-width="1" />
                                        </span>
                                        <span>ចូលឃ្លាំង</span>
                                        
                                </Button>
                                <Button variant="warning" size="sm" class="text-sm rounded-md flex items-center justify-center space-x-1">
                                        <span>
                                                <Icon name="ArrowRight" size="18" stroke-width="1" />
                                        </span>
                                        <span>ចេញឃ្លាំង</span>
                                        
                                </Button>
                                <Button variant="black" size="sm" class="text-sm rounded-md flex items-center justify-center space-x-1">
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
                                                                <span>{{ showSingleData.cod }}.00 ៛</span>
                                                        </li>
                                               </ul>

                                                <ul class="space-y-2 border-b-2 border-lightgray">
                                                        <li class="flex px-2 justify-between">
                                                                <span>ស្ថានភាពដឹក</span>
                                                                <span>{{ showSingleData.shipping_status }}</span>
                                                        </li>
                                                        <li class="flex px-2 justify-between">
                                                                <span>ប្រភេទឥវ៉ាន់</span>
                                                                <span>{{ showSingleData.category }}</span>
                                                        </li>
                                                        <li class="flex px-2 justify-between">
                                                                <span>ទម្ងន់</span>
                                                                <span>{{ showSingleData.product_weight }}</span>
                                                        </li>
                                                        <li class="flex px-2 justify-between">
                                                                <span>អ្នកផ្ញើរ</span>
                                                                <span>{{ showSingleData.sender_phone }}</span>
                                                        </li>
                                                        <li class="flex px-2 justify-between">
                                                                <span>អាស័យដ្ឋាន</span>
                                                                <span class="line-clamp-1">{{ showSingleData.sender_address}}</span>
                                                        </li>
                                                        <li class="flex px-2 justify-between">
                                                                <span>អ្នកទទួល</span>
                                                                <span>{{ showSingleData.receiver_phone }}</span>
                                                        </li>
                                                        <li class="flex px-2 justify-between">
                                                                <span>អាស័យដ្ឋាន</span>
                                                                <span class="line-clamp-1">{{ showSingleData.receiver_address }}</span>
                                                        </li>
                                                        <li class="flex px-2 justify-between font-semibold">
                                                                <span>ផ្នែកងារដឹក</span>
                                                                <span class="line-clamp-1">{{ showSingleData.carrier }}</span>
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






        <!--  =============== Modal =============================== -->

        <AddPackageModal :openModal="isOpenAddPackageModal" @closeAddPackageModal="isOpenAddPackageModal = false" />

</template>
