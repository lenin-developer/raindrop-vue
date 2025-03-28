<script setup lang="ts">
defineProps<{
    text?: string
}>()

</script>


<template>
  <button type="button" :class="$style.btn" >
    <span :class="$style.btn__span" >
        <slot></slot>
    </span>
    {{ text }}
  </button>
</template>

<style lang="postcss" module>
.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    border: none;
    border-radius: 6px;
    background-color: var(--color-gray-100);
    cursor: pointer;
}

.btn:active {
    transform: scale(0.995);
}

.btn__span {
    display: flex;
    align-items: center;
    margin-right: 15px;
}



</style>