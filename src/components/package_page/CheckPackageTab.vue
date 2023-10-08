<script setup>
        import {ref, computed} from 'vue';
        import Icon from '../../base-component/Icon';
        import Button from '../../base-component/Button';
        import { useMockData } from '../../stores/mockdata';
        import ShowDetailPackageModal from '../modal/ShowDetailPackageModal.vue';

        const mockdata = useMockData();
        let packageDetail = ref(null);
        let isOpenShowPackageModal = ref(false);

        const handleShowPackageDetail = (id) => {
                isOpenShowPackageModal.value = true;
                let findIndex = mockdata.products.findIndex(product => product.id === id);
                packageDetail.value = mockdata.products[findIndex];
        }
        let searchQuery = ref('');

        const filterSearchPackage = computed(() => {
                return mockdata.products.filter(product => product.no.toLowerCase().includes(searchQuery.value.toLowerCase()));
        });
</script>

<template>
        <div class="flex justify-between items-center mb-5 mt-10">
                <div>
                        <button class="px-8 py-2 text-sm  bg-white shadow-md rounded-md">
                                <span class="flex space-x-1">
                                        <Icon name="Filter" />
                                        <span>ច្រោះទិន្នន័យ</span>
                                </span>
                        </button>
                </div>

                <div class="flex items-center gap-4">
               
                        <Button variant="secondary" size="sm" class="rounded-md flex items-center justify-center space-x-2 ">
                                        <span>
                                                <Icon name="Check" size="18" stroke-width="1" />
                                        </span>
                                        <span>ត្រួតពិនិត្យ</span>
                        </Button>
                        <Button variant="primary" size="sm" class="rounded-md flex items-center justify-center space-x-2 ">
                                        <span>
                                                <Icon name="Printer" size="18" stroke-width="1" />
                                        </span>
                                        <span>ព្រីនឯកសារ</span>
                        </Button>
                        <Button variant="warning" size="sm" class="rounded-md flex items-center justify-center space-x-2 ">
                                        <span>
                                                <Icon name="Sheet" size="18" stroke-width="1" />
                                        </span>
                                        <span>នាំចេញជា Excel</span>
                        </Button>

                        <div class="relative">
                                                <input type="name" id="name"
                                                        v-model="searchQuery"
                                                        class="w-full h-10 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm"
                                                        placeholder="Name" autocomplete="off" />
                                                <label for="name" class="absolute text-gray-400 top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">*ស្វែងរកតាមរយៈលេខសម្គាល់</label>
                        </div>
        
                      
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
                                                                        អ្នកផ្ញើរ
                                                                </th>
                                                                <th scope="col" class="py-1.5 px-1 border border-gray-300 text-left text-sm font-semibold text-gray-900">
                                                                        ឥអ៊ីវ៉ាន់
                                                                </th>
                                                                <th scope="col" class="py-1.5 px-1 border border-gray-300 text-left text-sm font-semibold text-gray-900">
                                                                        COD
                                                                </th>
                                                                <th scope="col" class="py-1.5 px-1 border border-gray-300 text-left text-sm font-semibold text-gray-900">
                                                                        ថ្លៃសេវា
                                                                </th>
                                                                <th scope="col" class="py-1.5 px-1 border border-gray-300 text-left text-sm font-semibold text-gray-900">
                                                                        បង់សេវា
                                                                </th>
                                                
                                                                <th scope="col" class="py-1.5 px-1 border border-gray-300 text-left text-sm font-semibold text-gray-900">
                                                                        គិតពី
                                                                </th>
                                                                <th scope="col" class="py-1.5 px-1 border border-gray-300 text-left text-sm font-semibold text-gray-900">
                                                                        ស្ថានភាពដឹក
                                                                </th>
                                                                <th scope="col" class="py-1.5 px-1 border border-gray-300 text-left text-sm font-semibold text-gray-900">
                                                                        ផ្នែកងារដឹក
                                                                </th>
                                                                <th scope="col" class="py-1.5 px-1 border border-gray-300 text-left text-sm font-semibold text-gray-900">
                                                                        អ្នកពិនិត្យ
                                                                </th>
                                                        </tr>
                                                
                                                </thead>

                                                <tbody>
                                                        <tr v-for="(data , idx) in filterSearchPackage" @click="handleShowPackageDetail(data.id)" :key="data.id" class="bg-white hover:bg-secondary group cursor-pointer transition">
                                                                <td class="whitespace-nowrap border  border-gray-300 px-2 py-1.5 text-sm text-gray-500 group-hover:text-white">
                                                                       {{ ++idx }}
                                                                </td>
                                                                <td class=" whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500 group-hover:text-white">
                                                                        {{ data.no }}
                                                                </td>
                                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500 group-hover:text-white">
                                                                        {{ data.sender_phone }}
                                                                </td>
                                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500 group-hover:text-white">
                                                                        {{ data.category }}
                                                                </td>
                                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500 group-hover:text-white">
                                                                        {{ data.cod }}
                                                                </td>
                                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500 group-hover:text-white">
                                                                       {{ data.service_fee }}
                                                                </td>
                                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500 group-hover:text-white">
                                                                        {{data.payment_status}}
                                                                </td>
                                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500 group-hover:text-white">
                                                                        {{ data.service_fee_charge }}
                                                                </td>
                                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500 group-hover:text-white">
                                                                       {{ data.shipping_status }}
                                                                </td>
                                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500 group-hover:text-white">
                                                                        {{ data.carrier }}
                                                                </td>
                                                                <td class="whitespace-nowrap border border-gray-300 px-2 py-1.5 text-sm text-gray-500 group-hover:text-white">
                                                                        {{data.checker}}
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


        <ShowDetailPackageModal :package="packageDetail" :isOpenShowPackageModal="isOpenShowPackageModal" @isCloseShowPackageModal="isOpenShowPackageModal = false" />
        
</template>