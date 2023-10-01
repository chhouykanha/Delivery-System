<script setup>
    import { useToggleSidebar } from '@/stores/toggle_sidebar';
    import {useRoute} from 'vue-router';
    import Icon from '../base-component/Icon';

    const ToggleSidebar = useToggleSidebar();
    const route = useRoute();
    
</script>

<template>
        <div class="flex justify-between">
                <div class="flex items-center space-x-4">
                    <button  @click="ToggleSidebar.toggleSidebar()" class="  bg-transparent">
                        <Icon name="AlignJustify" size="32" stroke-width="2" />
                    </button>
                    <span class="text-whtie mx-4 text-lg">{{ route.meta.page_name }}</span>
                </div>

                <div class="flex space-x-12 items-center">
                        <div class="w-10 cursor-pointer flex space-x-1 items-center">
                                <img src="../assets//images/flag_cambodia.webp" alt="flag-cambodia">
                                <span class="text-lg text-gray-800">KH</span>
                        </div>
                        
                        <button class="bg-tranparent cursor-pointer">
                                <Icon name="UserCog2" size="32" stroke-width="2" />
                        </button>
                </div>
                
        </div>
</template>