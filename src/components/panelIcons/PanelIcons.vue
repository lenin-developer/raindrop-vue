<script setup lang='ts'>
import { onBeforeMount, ref, watch } from 'vue';
import type { Ref } from 'vue';
import { Icon } from "@iconify/vue"
import InputBase from '@/components/inputBase/InputBase.vue';


const props = defineProps<{
    showIcons: boolean
}>();


const initlistIcons = ref([]) as Ref<string[]>;
const listIcons = ref([]) as Ref<string[]>;
const searchIcons = ref('') as Ref<string>;

const getCollection = async () => {
    const res = await fetch('https://api.iconify.design/collection?prefix=material-icon-theme&chars=true&aliases=true');
    const json = await res.json()
    return json;
}

const getSearchIcon = async (search:string)=> {
    console.log('getSearchIcon')
    if(search){
        const res = await fetch(`https://api.iconify.design/search?query=${search}&limit=999`);
        const json = await res?.json();
        listIcons.value = json?.icons;
    }else{
        listIcons.value = initlistIcons.value;
    }
}

watch(searchIcons,()=>{
    getSearchIcon(searchIcons.value)
})

watch(()=>props.showIcons,()=>{
    if(!props.showIcons){
        searchIcons.value = '';
    }
})


onBeforeMount(() => {
    getCollection().then((json) => {
        const nameIcons =   json?.uncategorized?.map((name:string)=> (`material-icon-theme:${name}`));
        initlistIcons.value = nameIcons;
        listIcons.value = nameIcons;
    })
});

</script>


<template>
    <Transition name="show-panel">
        <div v-if="showIcons" :class="$style.panel">
            <div :class="$style['panel-search']">
                <InputBase placeholder="search icon" v-model="searchIcons" >
                    <template #iconLeft>
                        <span class="util_span_conten_icont" :class="$style.icon">
                            <Icon icon="icon-park-twotone:search" height="100%" width="100%"></Icon>
                        </span>
                    </template>
                </InputBase>
            </div>
            <div :class="$style['panel-icons']">
                <button v-for="value, index of listIcons" :key="index" @click="()=> { console.log('value',value) }"
                    :class="['util_btn_content_icon', $style.btn]" type="button">
                    <Icon :icon="`${value}`" width="100%" height="100%"></Icon>
                </button>
            </div>
        </div>
    </Transition>
</template>



<style lang='postcss' module>
.panel {
    height: 400px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-x: none;
    transition: all 0.5s;
}

.panel-search {
    height: 50px;
    padding: 8px 1px;
}

.panel-icons {
    max-height: 350px;
    padding-top: 2px;
    padding-bottom: 2px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-x: hidden;
}

.btn {
    &:hover {
        outline: 1px solid var(--color-secondary);
    }
}

.icon {
    padding-right: 8px;

    & :where(svg) {
        color: var(--color-secondary);
    }

}
</style>

<style lang='postcss' scoped>
.show-panel-enter-from,
.show-panel-leave-to {
    height: 0px;
}

.show-panel-leave-from,
.show-panel-lenter-to {
    height: 400px;
}
</style>