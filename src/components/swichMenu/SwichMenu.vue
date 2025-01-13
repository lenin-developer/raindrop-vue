<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import type { ModelRef, Ref } from 'vue'
import type { ItemSelect } from '@/types/ItemSelect';

const { items } = defineProps<{
    items: ItemSelect[],
}>()

const itemSelect = defineModel() as ModelRef<ItemSelect>;

const translateXItem = ref('0px') as Ref<string>;
const indexItemSelected = ref(0) as Ref<number>;
const ulRef = ref(null) as Ref<HTMLUListElement | null>;

const mediaQueryMovil = window.matchMedia('(max-width: 480px)')
const mediaQueryDesktop = window.matchMedia('(min-width: 480px)')


const calculateTranslateXItem = (index: number) => {
    const li = ulRef.value?.firstElementChild  ;
    const widthItem = li?.clientWidth || 0;
    const marginItemMenu = 4;// esto es el margin-left y margin-rigth del item en css "content__item"
    translateXItem.value = `${index * widthItem + index * marginItemMenu}px`;
}


const selectItemMenu = (event: Event) => {
    const itemTarget = event?.target as HTMLLIElement;

    items?.find((item, index) => {
        if (itemTarget?.value === item?.id) {
            calculateTranslateXItem(index)
            itemSelect.value = item;
            indexItemSelected.value = index;
        }
    })
}


onMounted(() => {
    mediaQueryMovil.addEventListener('change', (e) => {
        if (e.matches, ulRef.value) {
            calculateTranslateXItem(indexItemSelected.value)
        }
    })
    mediaQueryDesktop.addEventListener('change', (e) => {
        if (e.matches, ulRef.value) {
            calculateTranslateXItem(indexItemSelected.value)
        }
    })
})


onUnmounted(() => {
    mediaQueryMovil.removeEventListener('change', () => { })
    mediaQueryDesktop.removeEventListener('change', () => { })
})

</script>

<template>
    <nav :class="[$style.swichMenu, $style.util__bordes]">
        <ul :class="$style.swichMenu__content" ref="ulRef">
            <li v-for="item in items" :key="item.id" :value="item.id?.toString()"
                :class="[$style.content__item, $style.util__bordes, { [$style.item__textSelected]: itemSelect?.id === item.id }]"
                @click="selectItemMenu">
                {{ item?.text }}
            </li>
        </ul>
        <span :class="[$style.content__BackgroundSelect, $style.util__bordes]">
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
    min-height: 24px;
    max-height: 24px;
    width: auto;
    max-width: -webkit-fill-available;
    /* para que no rebace el ancho del contenedor padre */
    max-width: -moz-available;
    /* para que no rebace el ancho del contenedor padre */
    padding: 4px;
    margin: 0px;
    outline: solid 1.5px var(--color-gray-300);
    overflow-x: auto;
    /* para el desbordamiento del contenido */
    scrollbar-width: none;
    /* ocultar scroll firefox*/
    -ms-overflow-style: none;
    /* ocultar scroll IE 11 */
}

.swichMenu::-webkit-scrollbar {
    display: none;
    /** ocultar scroll chromer */
}

.swichMenu__content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: min-content;
    height: 100%;
    padding: 0;
    margin: 0px;
}

.content__item,
.content__BackgroundSelect {
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
    transition: font-weight 0.2s ease-out;

    @media(--sm-viewport) {
        width: 80px;
    }

}

.item__textSelected {
    font-weight: 600;
}

.content__BackgroundSelect {
    transition: transform 0.2s ease-out;
    position: absolute;
    height: inherit;
    z-index: -1;
    background-color: var(--color-green-100);
    transform: translateX(v-bind(translateXItem));
}

.util__bordes {
    border-top-left-radius: 9999px;
    border-top-right-radius: 9999px;
    border-bottom-left-radius: 9999px;
    border-bottom-right-radius: 9999px;
}
</style>