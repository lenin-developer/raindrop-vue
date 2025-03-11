<script setup lang='ts'>
import { Icon } from "@iconify/vue";

</script>

<template>
    <header :class="$style?.['header-aside']">
        <span :class="$style?.['header__content-icon']">
            <Icon icon="mingcute:user-4-fill" width="100%" height="100%" :class='$style["util__icon-user"]' />
        </span>
        <p>nombre del usruario</p>
        <button  :class="$style?.['header__content-icon']">
            <Icon icon="majesticons:menu-expand-left" width="100%" height="100%"
                :class='$style["util__icon-show-menu"]' />
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

.util__icon-show-menu {
    cursor: pointer;
    color: #FFFFFF;

    &:hover {
        color: #00dc82;
    }
}
</style>