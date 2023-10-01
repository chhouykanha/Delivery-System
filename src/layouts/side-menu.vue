<script setup >
    import { RouterLink } from 'vue-router';
    import { useToggleSidebar } from '@/stores/toggle_sidebar';
    import Icon from '../base-component/Icon';
    const ToggleSidebar = useToggleSidebar();
</script>

<template>
    <div :class="ToggleSidebar.activeSidebar ? 'w-60' : 'w-16 text-center'" class=" h-screen bg-lightgray shadow-sm transition-all duration-300">
            <div class="flex flex-col pt-10">
                    <RouterLink :to="{name : 'home_page'}" exact-active-class="bg-black text-white" class="flex space-x-2 items-center text-left text-lg p-4 transition hover:bg-secondary hover:text-white">
                        <Icon name="LayoutDashboard" size="20" />
                        <span v-if="ToggleSidebar.activeSidebar">ផ្ទាំងដើម</span>    
                    </RouterLink>

                    <RouterLink :to="{name : 'package_page'}" exact-active-class="bg-black text-white"  class="flex space-x-2 items-center text-left text-lg p-4 transition hover:bg-secondary hover:text-white">
                        <Icon name="Package" size="20" />
                        <span v-if="ToggleSidebar.activeSidebar" >កញ្ចប់ឥវ៉ាន់</span>    
                    </RouterLink>
                    <RouterLink :to="{name : 'category_page'}"  exact-active-class="bg-black text-white" class="flex space-x-2 items-center text-left text-lg p-4 transition hover:bg-secondary hover:text-white">
                        <Icon name="Shapes" size="20" />
                        <span v-if="ToggleSidebar.activeSidebar" >ប្រភេទឥវ៉ាន់</span>    
                    </RouterLink>
                    <RouterLink :to="{name : 'exchange_rate_page'}"  exact-active-class="bg-black text-white" class="flex space-x-2 items-center text-left text-lg p-4 transition hover:bg-secondary hover:text-white">
                        <Icon name="ArrowRightLeft" size="20"/>
                        <span v-if="ToggleSidebar.activeSidebar" >អត្រាប្តូរប្រាក់</span>    
                    </RouterLink>
                    <RouterLink :to="{name : 'report_page'}"  exact-active-class="bg-black text-white"  class="flex space-x-2 items-center text-left text-lg p-4 transition hover:bg-secondary hover:text-white">
                        <Icon name="BarChartBig" size="20" />
                        <span v-if="ToggleSidebar.activeSidebar" >របាយការណ៍</span>    
                    </RouterLink>
            </div>
    </div>
</template>
