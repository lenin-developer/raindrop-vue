<script setup lang='ts'>
import { ref } from 'vue';
import { Icon } from "@iconify/vue"
import { WorkspacePanelSelected } from '@/ui/components';

const show = ref(false);


</script>

<template>
    <div  :class="$style.wrapper">
        <section :class="$style.workspace_container">
            <button :class="$style.workspace_btn" @click="() => { show = !show }">
                Workspace
                <Icon icon="bxs:down-arrow" />
            </button>
            <div :class="$style.workspace_name">
                <p>nombre nombre</p>
            </div>
            <WorkspacePanelSelected :show="show" />
        </section>
    </div>
</template>

<style lang='postcss' module>
.wrapper  {
    position: relative;
    width: 100%;
}

.workspace_container {
    display: flex;
    align-items: center;
    background-color: var(--color-primary);
    border-radius: 6px;
    padding: 1px 0px;
    overflow: auto;
}

.workspace_btn {
    display: flex;
    align-items: flex-end;
    background-color: transparent;
    border: transparent;
    border-radius: 6px;
    padding: 6px;
    color: #fff;

    &:hover {
        background-color: #1D2B3D;
        cursor: pointer;

        .workspace_container {
            background-color: red;
            /*#162033 */
            ;
        }
    }

    & svg {
        margin-left: 10px;
        color: var(--color-secondary);
    }
}

.workspace_name {
    width: 100%;
    display: flex;
    justify-content: center;

    & p {
        margin: 0px;
    }
}

.workspace_panel {
    width: 100%;
    height: 100%;
}
</style>