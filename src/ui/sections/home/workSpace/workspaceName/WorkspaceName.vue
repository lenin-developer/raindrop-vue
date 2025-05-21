<script setup lang='ts'>

defineProps<{
    name: string,
    isDefaul: boolean
}>();

</script>

<template>

    <li :class="$style.workspaceName">
        <div :class="$style.workspaceName_contenDefault">
            <span>{{ isDefaul ? "(default)" : '' }}</span>
        </div>
        <div :class="$style.workspaceName_contentName">
            <p>name name name</p>
        </div>
    </li>


</template>

<style lang='postcss' module>
.workspaceName {
    display: flex;
    gap: 0.25rem;
    align-items: center;
    width: 100%;
}

.workspaceName_contenDefault {
    min-width: 3.75rem;
    padding-right: 0.5rem;

    &> :where(span) {
        color: var(--color-gray-200);
    }
}

.workspaceName_contentName {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 0.375rem;
    overflow: hidden;

    &:hover {
        background-color: #1D2B3D;
        cursor: pointer;
    }


    &> :where(p) {
        margin: 10px 0px;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: break-word;
        overflow: hidden;
        color: v-bind(isDefaul ? "var(--color-secondary)" : "var(--color-gray-100)"  );
    }

}
</style>