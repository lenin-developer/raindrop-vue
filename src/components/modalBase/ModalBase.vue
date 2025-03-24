<script setup lang='ts'>
import { ref, type Ref } from 'vue';

const dialogRef = ref() as Ref<HTMLDialogElement>

const openDialog = () => dialogRef.value?.showModal();
const closeDialog = () => dialogRef.value?.close();

defineExpose({
    openDialog,
    closeDialog
});

</script>


<template>
    <dialog ref="dialogRef" :class="$style.dialog">
        <slot></slot>
    </dialog>
</template>


<style lang='postcss' module>
.dialog {
    border-radius: 8px;
    padding: 0px;
    outline: none;
    border: none;
    background: transparent;

    opacity: 0;
    transform: scale(0.5);
    transition: opacity 0.4s, transform 0.4s;
    /* transition: display 1s, overlay 1s, opacity 1s; */
    /* transition-behavior: allw-discrete; */

    &::backdrop {
        opacity: 0;
        background-color: var(--color-gray-overlay);
    }

    &[open] {
        opacity: 1;
        transform: scale(1);

        &::backdrop {
            opacity: 1;
        }

        @starting-style {
            /** esto se ejecuta primero en el open */
            opacity: 0;
            transform: scale(0.5);
        }
    }

}
</style>