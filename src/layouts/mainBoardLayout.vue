<script setup>
import { ref } from 'vue';
import MenuAside from '@/sections/MenuAside.vue';

const widthAsideMenu = ref('300px');
const cursorType = ref('auto');
const element = ref(null)

const resizeAsideLamda = () => {
    element.value.addEventListener('mousemove', mouseMoveLamda);
    cursorType.value = 'col-resize';
}

const mouseMoveLamda = (e) => {
    widthAsideMenu.value = `${e?.clientX}px`
}

const mouseUpLamda = () => {
    element.value.removeEventListener('mousemove', mouseMoveLamda);
    cursorType.value = 'auto';
}

</script>

<template>
    <div ref="element" :class="$style.layout" @mouseup="mouseUpLamda">
        <MenuAside @resize-aside-lamda="resizeAsideLamda" :cursor-type="cursorType"   />
        <main :class="$style.main">

        </main>
    </div>
</template>

<style lang="postcss" module>
.layout {
    display: grid;
    grid-template-columns: clamp(200px, v-bind(widthAsideMenu), 40%) 1fr;
    grid-template-rows: 100vh;
    grid-template-areas: "aside main";
    cursor: v-bind(cursorType);

    @media (--md-viewport) {
        grid-template-columns: 0px 1fr;
        grid-template-areas: "aside main";
    }
}

.main {
    background-color: var(--color-background-main);
    grid-area: main;
}
</style>
