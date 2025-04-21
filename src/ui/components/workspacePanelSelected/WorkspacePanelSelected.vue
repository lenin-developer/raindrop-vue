<script setup lang='ts'>
import { Icon } from "@iconify/vue"
import { WorkspaceName } from '@/ui/components';

defineProps<{
    show: boolean
}>();

const groupName = 'workspace';

</script>

<template>
    <div :class="[$style.workspace, { [$style.show]: show }]">
        <section :class="$style.workspace_edit">
            <Icon icon="ph:nut-bold" />
        </section>
        <ul :class="$style.workspace_list">
            <ul>
                <WorkspaceName name="nomvre 1" :is-defaul="false" :group-name="groupName" />
                <WorkspaceName name="nomvre 2" :is-defaul="false" :group-name="groupName" />
                <WorkspaceName name="nomvre 3" :is-defaul="true" :group-name="groupName" />
                <WorkspaceName name="nomvre 4" :is-defaul="false" :group-name="groupName" />
            </ul>
        </ul>
        <section :class="$style.workspace_footer">
            <button>nuevo workspace</button>
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

    background-color: red;
    transition: height 0.2s;
    overflow: hidden;
}

.show {
    height: min-content;
}

.workspace_edit {}

.workspace_list {}


.workspace_footer {}
</style>