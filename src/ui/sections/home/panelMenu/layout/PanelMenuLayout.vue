<script setup lang='ts'>

</script>
<template>
    <div :class="$style?.layout">
        <div>
            <slot name="panel-header" />
            <hr :class="$style.hr"  >
            <slot name="panel-workspace" ></slot>
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

    & > :where(div) {
        width: 100%;
    }
}

.hr {
        margin: 0px;
        border: 0px;
        height: 1px;
        background-color: var(--color-gray-300);    
    }
</style>