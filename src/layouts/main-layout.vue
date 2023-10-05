<script setup>
    import { RouterView, useRoute } from 'vue-router';
    import sideMenu from '@/layouts/side-menu.vue';
    import topMenu from '@/layouts/top-menu.vue';
    const route = useRoute();
</script>

<template>
    <div class="flex font-battambang">
        <div>
            <sideMenu />
        </div>
        <div class="w-full flex flex-col">
            <div class="py-2 px-6">
                    <topMenu/>
            </div>

            <div class="pt-10 p-6">
                <RouterView></RouterView>
            </div>
        </div>
    </div>
</template>