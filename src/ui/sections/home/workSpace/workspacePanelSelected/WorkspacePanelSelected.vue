<script setup lang='ts'>
import { Icon } from "@iconify/vue"
import { ButtonBase } from '@/ui/components';
import WorkspaceName from '../workspaceName/WorkspaceName.vue';

const show = defineModel<boolean>('show', { required: true });

const UpdateShowEvet = ()=> {
    show.value = !show.value
}

</script>

<template>
    <div :class="[$style.workspace, { [$style.show]: show }]">
        <section :class="$style.workspace_edit">
            <button>
                <Icon icon="fa-solid:edit" />
                <p>Editar</p>
            </button>
        </section>
        <ul :class="$style.workspace_list">
            <WorkspaceName name="nomvre 1" :is-defaul="false" />
            <WorkspaceName name="nomvre 2" :is-defaul="false" />
            <WorkspaceName name="nomvre 3" :is-defaul="true" />
            <WorkspaceName name="nomvre 4" :is-defaul="false" />
        </ul>
        <section :class="$style.workspace_footer">
            <ButtonBase @click="UpdateShowEvet" >nuevo workspace</ButtonBase>
        </section>
    </div>
</template>

<style lang='postcss' module>
.workspace {
    position: absolute;
    top: 100%;
    height: 0px;
    width: 100%;
    interpolate-size: allow-keywords;

    overflow: hidden;
    background-color: #020420ae;
    backdrop-filter: blur(8px);
    transition: height 0.2s;
}

.show {
    height: min-content;
}

.show::after,
.show::before {
    content: '';
    position: absolute;
    width: 100%;
    background-image: conic-gradient(var(--color-secondary));
    top: 0%;
    left: 50%;
    translate: -50% -50%;
    padding: 1px;
    border-radius: 1px;
}


.workspace_edit {
    display: flex;
    padding: 8px 8px 0px 8px;
    justify-content: flex-start;

    &> :where(button) {
        background-color: transparent;
        border: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 6px;
        border-radius: 6px;

        &:hover {
            background-color: #1D2B3D;
            cursor: pointer;
        }

        &> :where(p) {
            margin: 0px 8px;
            color: var(--color-gray-200);
        }

        &> :where(svg) {
            color: var(--color-secondary);
        }
    }


}

.workspace_list {
    padding: 0px 8px;
    width: 100%;
    margin-top: 8px;
}


.workspace_footer {

    &> :where(button) {
        width: 100%;
    }
}
</style>