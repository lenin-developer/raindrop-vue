<script setup lang='ts'>
import { inject } from 'vue';
import { PROVIDER_SHOW_PANEL, type TypeSetResizePanel } from "@/consts/keys/provider";
import { Icon } from "@iconify/vue";

const  {showPanel} = inject<TypeSetResizePanel>(PROVIDER_SHOW_PANEL)!;

</script>

<template>
    <header :class="$style?.['header-aside']">
        <span class="util_span_conten_icon" >
            <Icon icon="mingcute:user-4-fill" width="100%" height="100%" class="util_color-green" />
        </span>
        <p>nombre del usruario</p>
        <button @click="showPanel" class="util_btn_content_icon" aria-label="show panel">
            <Icon icon="majesticons:menu-expand-left" width="100%" height="100%" />
        </button>
    </header>
</template>

<style lang='postcss' module>
.header-aside {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    padding: 6px;
    background-color: var(--color-blue-100);

    & :where(p) {
        user-select: none;
        padding: 0 12px;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: break-word;
        overflow: hidden;
        pointer-events: none;
        flex: 1;
    }
}

.header__content-icon {
    display: inline-block;
    width: 32px;
    min-width: 32px;
    height: 32px;

    padding: 0px;
    margin: 0px;
    background-color: transparent;
    border: none;

}

.util__icon-user {
    color: #00dc82;
}
</style>