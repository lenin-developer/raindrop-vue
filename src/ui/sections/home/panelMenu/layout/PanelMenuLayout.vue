<script setup lang='ts'>

</script>
<template>
    <div :class="$style?.layout">
        <div>
            <slot name="panel-header" />
            <slot name="panel-opcion" />
            <section>
                <slot name="pabel-list" />
            </section>
        </div>
        <slot name="panel-bar" />
    </div>
</template>

<style lang='postcss' module>
.layout {
    display: flex;
    width: 100%;

    & :where(div) {
        width: 100%;
    }
}
</style>