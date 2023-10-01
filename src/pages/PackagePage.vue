<script setup>
    import {ref} from 'vue';
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
    import NewPackageTab from '../components/package_page/NewPackageTab.vue';
    import CheckPackageTab from '../components/package_page/CheckPackageTab.vue';
import Icon from '../base-component/Icon';


    let tabActive = ref(true);

</script>
<template>
        <TabGroup as="div">
            <TabList as="div" class="grid grid-cols-2 place-items-center gap-1 w-full max-w-md">
                    <Tab :class="tabActive? 'text-primary border-b  border-primary' : 'bg-tranparent border-b border-gray-400'"  as="div" class=" w-full flex space-x-2 justify-center cursor-pointer text-black focus:outline-none" @click="tabActive = true" >
                            <Icon name="Package" size="20" stroke-width="2" />
                            <span>កញ្ចប់ឥវ៉ាន់ថ្មីៗ</span>
                    </Tab>
                    <Tab :class="tabActive? 'bg-tranparent border-b border-gray-400' : 'text-primary border-b  border-primary'" as="div" class="w-full flex space-x-2 justify-center cursor-pointer text-black focus:outline-none" @click="tabActive = !tabActive">
                           <Icon name="CheckCheck" size="20" stroke-width="2" />
                            <span>កញ្ចប់ឥវ៉ាន់បានត្រួតពិនិត្យ</span>
                    </Tab>
            </TabList>
            <TabPanels>
                <TabPanel class="mt-5">
                         <NewPackageTab />
                </TabPanel>
                <TabPanel class="mt-5">
                        <CheckPackageTab />
                </TabPanel>
            </TabPanels>
        </TabGroup>
</template>