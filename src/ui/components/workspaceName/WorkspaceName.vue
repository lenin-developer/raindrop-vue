<script setup lang='ts'>

defineProps<{
    groupName: string,
    name: string,
    isDefaul: boolean
}>();

</script>

<template>
    <ul>
        <li>
            <input type="radio" :name="groupName" value="name" >
            <p>{{ name }}</p>
        </li>
    </ul>

</template>

<style lang='postcss' module></style>