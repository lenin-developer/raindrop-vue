<script setup lang='ts'>


</script>

<template>
    <header :class="$style.layout" >
        <section>
            <slot name="sectionTop"></slot>
        </section>
        <section>
            <slot name="sectionBottom"></slot>
        </section>
    </header>
</template>

<style lang='postcss' module>
.layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
</style>