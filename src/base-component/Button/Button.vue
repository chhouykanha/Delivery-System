
<script setup>
     import { computed, ref } from "vue";
     const props = defineProps({
            variant : {
                type : String,
                default : null
            },
            size : {
                type : String,
                default : null,
            },
     });


    let btnColor = ref('');
    let btnSize = ref('');

     const defaultStyle = "transition active:scale-95";

    // Sizes
    const small = "text-sm px-6 py-2";
    const large = "text-lg px-8 py-2";

    // Main Colors

    const gray = "bg-white border-2 border-lightgray hover:bg-lightgray";

    const primary = "bg-primary border-primary text-white hover:bg-primary";
    const secondary = "bg-secondary border-secondary text-white hover:bg-secondary";
    const warning = "bg-warning border-warning text-black hover:bg-warning";
    const black = "bg-black border-black text-white hover:bg-black";
    const danger = "bg-red-600 border-600 text-white hover:bg-red-500";

    switch(props.variant){
        case 'gray' : 
            btnColor.value = gray;
            break;
        case 'danger' : 
            btnColor.value = danger;
            break;
        case 'primary' : 
            btnColor.value = primary;
            break;
        case 'secondary' : 
            btnColor.value = secondary;
            break;
        case 'warning' : 
            btnColor.value = warning;
            break;
        case 'black' : 
            btnColor.value = black;
            break;
    }

    switch (props.size){
        case 'sm' : 
            btnSize.value = small;
            break;
        case 'lg' : 
            btnSize.value = large;
            break;
    }


    const computedClass = computed(() => {
        return  defaultStyle + ' ' +btnColor.value+ ' ' +btnSize.value+ ' ';
    })  

</script>

<template>
    <button  :class="computedClass" >
        <slot></slot>
    </button>
</template>