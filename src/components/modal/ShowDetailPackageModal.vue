<script setup>
     import {ref} from 'vue';
     import {   TransitionRoot,
                TransitionChild,
                Dialog,
                DialogPanel,
                DialogTitle
            }from '@headlessui/vue';
    import Button from '../../base-component/Button';

    const props = defineProps(['package','isOpenShowPackageModal']);
    

</script>

<template>
    <TransitionRoot appear :show="props.isOpenShowPackageModal" as="template">
        <Dialog class="relative z-10 text-xs font-battambang">
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

                        <DialogPanel class="w-full max-w-5xl h-auto transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                            <div class="flex justify-between items-center px-6 py-2 text-lg font-medium leading-6 text-gray-900">
                                    <span>ព័ត៌មានកញ្ចប់អ៊ីវ៉ាន់លម្អិត</span>
                                    <span><Button @click="$emit('isCloseShowPackageModal')" variant="gray" size="sm" class="rounded-md">បោះបង់</Button></span>
                            </div>

                            <div class="border-b-2 border-slate-200 my-2"></div>

                            <div class="px-4 py-2 grid grid-cols-3 gap-5">
                                <div class="rounded-md space-y-2 p-4 border-2 border-slate-200">
                                        <div class="flex  justify-between items-center">
                                                <span>អ្នកផ្ញើរ</span>
                                                <span>{{ props.package.sender_phone }}</span>
                                        </div>
                                        <div class="flex justify-between items-center">
                                                <span>អាស័យដ្ឋាន</span>
                                                <span>{{ props.package.sender_address }}</span>
                                        </div>
                                </div>
                                <div class="rounded-md space-y-2 p-4 border-2 border-slate-200">
                                    <div class="flex justify-between items-center">
                                                <span>អ្នកទទូល</span>
                                                <span>{{ props.package.receiver_phone }}</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                                <span>អាស័យដ្ឋាន</span>
                                                <span>{{ props.package.receiver_address }}</span>
                                    </div>
                                </div>
                            </div>

                            <div class="border-b-2 border-slate-200 my-2"></div>

                            <div class="px-4 py-2 grid grid-cols-3 gap-5">
                                    <div class="grid grid-rows-2 gap-5">
                                        <div class="rounded-md p-4 space-y-2 border-2 border-slate-200">
                                            <div class="flex justify-between items-center">
                                                <span>ផ្នែកងារដឹក</span>
                                                <span>{{ props.package.carrier }}</span>
                                            </div>
                                            <div class="flex justify-between items-center">
                                                <span>លេខទូរស័ព្ទទំនាក់ទំនង</span>
                                                <span>{{ props.package.receiver_address }}</span>
                                            </div>
                                            <div class="flex justify-between items-center">
                                                <span>អ្នកត្រួតពិនិត្យ</span>
                                                <span>{{ props.package.checker }}</span>
                                            </div>
                                        </div>
                                        <div class="rounded-md p-4 border-2 border-slate-200">
                                                
                                                    <div class="flex justify-between items-center">
                                                        <span>អ្នកត្រួតពិនិត្យ</span>
                                                        <span>{{ props.package.shipping_status }}</span>
                                                    </div>
                                                
                                        </div>
                                    </div>
                                    <div class="rounded-md p-2 border-2 border-slate-200">
                                                <div class="border-b-2 border-slate-200">
                                                        ព័ត៌មានដឹក
                                                </div>
                                    </div>
                                    <div class="rounded-md p-2 border-2 border-slate-200">
                                                <div class="border-b-2 border-slate-200">
                                                        ប្រវត្តិកែប្រែស្ថានភាព
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