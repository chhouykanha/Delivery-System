<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
   <RouterView v-slot="{Component}">
        <transition name="fade">
            <component :is="Component" />
        </transition>
    </RouterView>
</template>
