<script setup>
    import {ref} from 'vue';
    import {    TransitionRoot,
                TransitionChild,
                Dialog,
                DialogPanel,
                DialogTitle
            }from '@headlessui/vue';
    import Button from '../../base-component/Button';

    const props = defineProps(['openModal']);

</script>

<template>
    <TransitionRoot appear :show="props.openModal" as="template">
        <Dialog as="div" @close="$emit('closeAddPackageModal')"  class="relative z-10 text-xs font-battambang">
            <TransitionChild as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0">
                    <div class="fixed inset-0 bg-black bg-opacity-25"></div>
            </TransitionChild>
                                                                                        
                    <div class="fixed inset-0 overflow-y-auto">
                        <div class="flex min-h-full items-center justify-center p-4 text-center">
                            <TransitionChild
                                as="template"
                                enter="duration-300 ease-out"
                                enter-from="opacity-0 scale-95"
                                enter-to="opacity-100 scale-100"
                                leave="duration-200 ease-in"
                                leave-from="opacity-100 scale-100"
                                leave-to="opacity-0 scale-95">
                                    <DialogPanel class="w-full max-w-5xl h-auto transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                                                                                        
                                        <DialogTitle
                                            as="h3"
                                            class="text-lg font-medium leading-6 text-gray-900">
                                            បញ្ចូលអ៊ីនវ៉ាន់
                                        </DialogTitle>

                                        <div class="mt-2">
                                            <div class="grid grid-cols-2 gap-5">
                                                    <div class="border border-slate-200 rounded-md p-2 space-y-2">
                                                            <p>ព៌ត៌មានអ្នកផ្ញើរ</p>

                                                            <form>
                                                                    <div class="relative mb-3">
                                                                        <input type="text"  id="name" class="w-1/2 h-10 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm" placeholder="លេខអ្នកផ្ញើ"  >
                                                                        <label for="name"
                                                                            class="absolute text-gray-400 top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">លេខអ្នកផ្ញើ</label>
                                                                    </div>

                                                            
                                                                    <div class="mb-3 grid grid-cols-2 gap-2">
                                                                        <div class="relative">
                                                                            <input type="text"  id="name" class="w-full h-10 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm" placeholder="លេខអ្នកផ្ញើ"  >
                                                                            <label for="name"
                                                                                class="absolute text-gray-400 top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">រាជធានី</label>
                                                                        </div>
                                                                        <div class="relative">
                                                                            <input type="text"  id="name" class="w-full h-10 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm" placeholder="លេខអ្នកផ្ញើ"  >
                                                                            <label for="name"
                                                                                class="absolute text-gray-400 top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">រាជធានី</label>
                                                                        </div>

                                                                       

                                                                    </div>

                                                                    <div class="mb-3 grid grid-cols-2 gap-2">
                                                                        <div class="relative">
                                                                            <input type="text"  id="name" class="w-full h-10 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm" placeholder="លេខអ្នកផ្ញើ"  >
                                                                            <label for="name"
                                                                                class="absolute text-gray-400 top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">រាជធានី</label>
                                                                        </div>
                                                                        <div class="relative">
                                                                            <input type="text"  id="name" class="w-full h-10 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm" placeholder="លេខអ្នកផ្ញើ"  >
                                                                            <label for="name"
                                                                                class="absolute text-gray-400 top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">រាជធានី</label>
                                                                        </div>

                                                                       

                                                                    </div>
                                                                    
                                                                    <div class="relative">
                                                                        <textarea id="name" class="w-full h-24 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm"  placeholder="Address">
                                                        
                                                                        </textarea>
                                                                        <label for="name"
                                                                            class="absolute text-gray-400 top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">រាជធានី</label>
                                                                    </div>
                                                            </form>
                                                    </div>


                                                    <div class="border border-slate-200 rounded-md p-2 space-y-2">
                                                            <p>ព៌ត៌មានអ្នកទទូល</p>

                                                            <form>
                                                                    <div class="relative mb-3">
                                                                        <input type="text"  id="name" class="w-1/2 h-10 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm" placeholder="លេខអ្នកផ្ញើ"  >
                                                                        <label for="name"
                                                                            class="absolute text-gray-400 top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">លេខអ្នកផ្ញើ</label>
                                                                    </div>

                                                            
                                                                    <div class="mb-3 grid grid-cols-2 gap-2">
                                                                        <div class="relative">
                                                                            <input type="text"  id="name" class="w-full h-10 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm" placeholder="លេខអ្នកផ្ញើ"  >
                                                                            <label for="name"
                                                                                class="absolute text-gray-400 top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">រាជធានី</label>
                                                                        </div>
                                                                        <div class="relative">
                                                                            <input type="text"  id="name" class="w-full h-10 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm" placeholder="លេខអ្នកផ្ញើ"  >
                                                                            <label for="name"
                                                                                class="absolute text-gray-400 top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">រាជធានី</label>
                                                                        </div>

                                                                       

                                                                    </div>

                                                                    <div class="mb-3 grid grid-cols-2 gap-2">
                                                                        <div class="relative">
                                                                            <input type="text"  id="name" class="w-full h-10 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm" placeholder="លេខអ្នកផ្ញើ"  >
                                                                            <label for="name"
                                                                                class="absolute text-gray-400 top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">រាជធានី</label>
                                                                        </div>
                                                                        <div class="relative">
                                                                            <input type="text"  id="name" class="w-full h-10 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm" placeholder="លេខអ្នកផ្ញើ"  >
                                                                            <label for="name"
                                                                                class="absolute text-gray-400 top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">រាជធានី</label>
                                                                        </div>

                                                                       

                                                                    </div>
                                                                    
                                                                    <div class="relative">
                                                                        <textarea id="name" class="w-full h-24 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm"  placeholder="Address">
                                                        
                                                                        </textarea>
                                                                        <label for="name"
                                                                            class="absolute text-gray-400 top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">រាជធានី</label>
                                                                    </div>
                                                            </form>
                                                    </div>    
                                            </div>

                                            <div class="grid grid-cols-3 mt-5 gap-4">
                                                    <div class="col-span-2 border border-slate-200 rounded-md p-2 space-y-2">
                                                        <p>ព៌ត៌មានទំនិញ</p>
                                                        <form>
                                                                <div class="grid grid-cols-3 gap-2">
                                                                    <select class="p-1 rounded-md border focus:outline-none w-full">
                                                                            <option disabled selected>ប្រភេទទំនិញ</option>
                                                                            <option  >
                                                                          
                                                                            </option>
                                                                        
                                                                    </select>

                                                                    <div class="relative">
                                                                            <input type="text"  id="name" class="w-full h-10 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm" placeholder="លេខអ្នកផ្ញើ"  >
                                                                            <label for="name"
                                                                                class="absolute text-gray-400 top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">រាជធានី</label>
                                                                    </div>

                                                                    <div class="relative">
                                                                            <input type="text"  id="name" class="w-full h-10 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm" placeholder="លេខអ្នកផ្ញើ"  >
                                                                            <label for="name"
                                                                                class="absolute text-gray-400 top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">រាជធានី</label>
                                                                    </div>
                                                                   
                                                                    
                                                                </div>

                                                                <div class="flex justify-end gap-2 p-1">
                                                                    
                                                                        <!-- <span>{{ exchange.usd}} ដុល្លារ​ = {{ exchange.khmer_exchange }} រៀល</span> -->
                                                        
                                                                        <p class="text-red-500 text-md">4000 រៀល</p>
                                                                </div>

                                                                <div class="grid grid-cols-3 gap-2">
                                                                    
                                                                    <div class="relative">
                                                                            <input type="text"  id="name" class="w-full h-10 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm" placeholder="លេខអ្នកផ្ញើ"  >
                                                                            <label for="name"
                                                                                class="absolute text-gray-400 top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">រាជធានី</label>
                                                                    </div>

                                                                    <div class="space-y-1">
                                                                        <label>ថ្លៃគិតពី</label>
                                                                        <div>
                                                                            <input type="radio" name="price" /> អ្នកផ្ញើរ
                                                                            <input type="radio" name="price"/>  អ្នកទទួល
                                                                        </div>
                                                                    </div>

                                                                    <div>
                                                                    <select class="rounded-md border h-10 focus:outline-none w-full">
                                                                            <option disabled selected>ជ្រើសរើសសេវា</option>
                                                                            <!-- <option v-for="(payment_status,idx) in DataStore.payment_status" :value="payment_status.id" :key="idx">
                                                                            {{ payment_status.name }}
                                                                            </option> -->
                                                                        
                                                                    </select>
                                                                    </div>
                                                                </div>

                                                                <div class="relative mt-4">
                                                                        <textarea id="name" class="w-full h-24 p-3 pt-4 placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-gray-500 focus:shadow-sm"  placeholder="Address">
                                                        
                                                                        </textarea>
                                                                        <label for="name"
                                                                            class="absolute text-gray-400 top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1">រាជធានី</label>
                                                                </div>
                                                        </form>
                                                    </div>
                                                    <div class="flex justify-start items-end">
                                                            <div class="space-y-2">
                                                                <Button variant="primary" class="block px-4 py-2 rounded-md">
                                                                        រក្សាទុក
                                                                </Button>
                                                                <Button variant="warning" class="block px-4 py-2 rounded-md" >
                                                                        រក្សាទុកនិងព្រីន
                                                                </Button>
                                                                
                                                                <Button variant="black" class="block px-4 py-2 rounded-md">
                                                                        រក្សាទុក​និងថែមអ៊ីវ៉ាន់ថ្មី
                                                                </Button>
                                                                <Button @click="$emit('closeAddPackageModal')" variant="gray" class="block px-4 py-2 rounded-md">
                                                                        បោះបង់
                                                                </Button>
                                                            </div>
                                                    </div>
                                            </div>

                                        </div>
                                                                                                                                         
                                    </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
        </Dialog>
    </TransitionRoot>
</template>