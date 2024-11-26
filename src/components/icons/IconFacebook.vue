<script setup lang="ts">
import { computed } from 'vue'
type Props = {
    size?: number
    height?: number
    width?: number
}


const props: Props = defineProps<Props>();

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
    <svg :width="width.toString()" :height="height.toString()" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13.0789 5.31333H16V0.225333C15.496 0.156 13.7629 0 11.7444 0C2.50246 0 5.01692 10.4667 4.64895 12H0V17.688H4.64761V32H10.3458V17.6893H14.8054L15.5134 12.0013H10.3445C10.5951 8.236 9.32989 5.31333 13.0789 5.31333V5.31333Z"
            fill="#3B5999" />
    </svg>

</template>