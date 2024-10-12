<script lang="ts" setup>
import { ref, computed } from 'vue'
import { type Ref } from 'vue'
import { type Items } from './SwichMenuTypes'

const { items } = defineProps<{
    items: Items[]
}>()

const ActiveOpctionBackgroundX = ref('0px') as Ref<string>;
const arrayRef = { el: ref([]) };


const refElementLi = computed(() => arrayRef.el.value);

const handleClick = (event: Event) => {
    const optionsAll = refElementLi.value as HTMLLIElement[];
    const opcionSelect = event?.target as HTMLLIElement;

    if (opcionSelect?.value) {
        optionsAll?.map((item, index) => {
            if (opcionSelect?.value === item?.value) {
                ActiveOpctionBackgroundX.value = `${index * 160 + index * 4}px`;
            }
            item.style.color = '#fff';
        })
        opcionSelect.style.color = '#020420';
    }
}

</script>

<template>
    <nav :class="[$style.swichMenu, $style.util__bordes]">
        <ul :class="$style.swichMenu__content">
            <li v-for="item in items" :key="item.id" :value="item.id?.toString()" :ref="arrayRef.el"
                @click="handleClick" :class="[$style.content__item, $style.util__bordes]">
                {{ item?.text }}
            </li>
        </ul>
        <span :class="[$style.content__select, $style.util__bordes]"
            :style="{ transform: `translateX(${ActiveOpctionBackgroundX})` }">
        </span>
    </nav>
</template>

<style lang="postcss" module>
.swichMenu {
    position: relative;
    box-sizing: content-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 24px;
    padding: 4px;
    margin: 0;
    outline: solid 1.5px var(--color-gray-300);

}

.swichMenu__content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 100%;
    height: 100%;
}

.content__item,
.content__select {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-white-100);
    width: 160px;
    height: 100%;
    text-decoration: none;
    list-style: none;
    margin: 0 2px;
    z-index: 1;
    cursor: pointer;
}

.content__select {
    transition: all 0.2s ease-out;
    position: absolute;
    height: inherit;
    z-index: -1;
    background-color: var(--color-green-100);
}

.util__bordes {
    border-top-left-radius: 9999px;
    border-top-right-radius: 9999px;
    border-bottom-left-radius: 9999px;
    border-bottom-right-radius: 9999px;
}


.item__text {
    color: var(--color-white-100);
}
</style>