<script setup lang="ts">
import { computed } from 'vue'
type Props = {
    size?: number
    height?: number
    width?: number
}


const props: Props = withDefaults(defineProps<Props>(), {
})



const height = computed(() => {
    let height = 32
    if ('height' in props && props?.height) {
        height = props?.height
    }
    if ('size' in props && props?.size) {
        height = props?.size
    }
    return height
});

const width = computed(() => {
    let width = 32
    if ('width' in props && props?.width) {
        width = props?.width
    }
    if ('size' in props && props?.size) {
        width = props?.size
    }
    return width
});
</script>


<template>
    <svg :width="width?.toString()" :height="height?.toString()" viewBox="0 0 30 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path 
            d="M27 0H3C1.35 0 0.015 1.35 0.015 3L0 21C0 22.65 1.35 24 3 24H27C28.65 24 30 22.65 30 21V3C30 1.35 28.65 0 27 0ZM27 6L15 13.5L3 6V3L15 10.5L27 3V6Z"
            fill="none" />
    </svg>
</template>


<style lang="postcss" scoped>
svg, path {
    fill: black;
}

</style>