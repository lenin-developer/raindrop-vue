<script setup lang="ts">
defineProps<{
    text?: string,
    color?: string
}>()


</script>
<template>
    <div v-if="text" :class="$style.hrCustom" >
        <hr :class="[$style.hrCustom_hr]" />
        <span :class="$style.hrCustom_text">{{ text }}</span>
        <hr :class="[$style.hrCustom_hr]" />
    </div>
    <hr v-else :class="[$style.hrCustom_hr]" />
</template>

<style lang="postcss" module>
.hrCustom {
    display: flex;
    width: 100%;
}

.hrCustom_hr {
    width: 100%;
    border-width: 0px;
    height: 0.5px;
    background-color: v-bind(  color ??  "#fff");

}

.hrCustom_text {
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
}
</style>