<script setup lang='ts'>
import { ref, type Ref } from 'vue';
import ModalBase, { } from '@/components/modalBase/ModalBase.vue';
import { Icon } from "@iconify/vue"
import PanelIcons from '@/components/panelIcons/PanelIcons.vue';
import InputBase from '@/components/inputBase/InputBase.vue';

const modalData = ref() as Ref<InstanceType<typeof ModalBase>>;
const showIcons = ref(false) as Ref<boolean>
const nameGroup = ref('') as Ref<string>;


const openModal = () => modalData.value?.openDialog()

const closeModal = () => {
    showIcons.value = false;
    nameGroup.value = '';
    modalData.value?.closeDialog()
}

defineExpose({
    openModal,
    closeModal,
})

const addNewGroup = () => {
    console.log('agregado', nameGroup.value)
    closeModal()
}

const showSectionIcons = () => {
    showIcons.value = !showIcons.value;
}

</script>

<template>
    <ModalBase ref="modalData">
        <div :class="$style.modal">
            <header :class="$style.modal_header">
                <h2>nuevo grupo</h2>
                <button @click="closeModal" class="util_btn_content_icon" aria-label="close modal">
                    <Icon icon="uiw:close" width="100%" height="100%"></Icon>
                </button>
            </header>
            <form :class="$style.modal_form">
                <section :class="$style.form_section_input">
                     <InputBase v-model="nameGroup" placeholder="name group" />
                    <button type="button" @click="showSectionIcons" class="util_btn_content_icon" aria-label="add icon">
                        <Icon icon="fontisto:nav-icon-grid-a" width="100%" height="100%"></Icon>
                    </button>
                </section>
                <section>
                    <PanelIcons :showIcons="showIcons"/>
                </section>
                <button type="button" @click="addNewGroup" :class="$style.form_btn_ok">Ok</button>
                <button @click.prevent="closeModal" :class="$style.form_btn_cancel">Cancelar</button>
            </form>
        </div>
    </ModalBase>
</template>

<style lang='postcss' module>
.modal {
    box-sizing: border-box;
    width: min(90vw, 400px);
    padding: 16px 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-radius: 8px;
    border: 1px solid var(--color-gray-300);
    outline: 1px solid var(--color-gray-300);
    background-color: var(--color-primary);
}

.modal_header {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & :where(h2) {
        margin: 0px;
        font-size: 1.2rem
    }

    & :where(svg) {
        height: 20px;
    }
}

.modal_section_icons {
    height: 400px;
    background-color: red;
}

.modal_form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    & :where(button) {
        height: 28px;
        padding: 0px;
        margin: 0px;
        border: 0px solid transparent;
        border-radius: 6px;
        outline: none;

        &:hover {
            cursor: pointer;
        }
    }
}

.form_section_input {
    display: flex;
    justify-content: space-between;
    gap: 6px;
}

.form_btn_ok {
    background-color: var(--color-secondary);

    &:hover {
        background-color: var(--color-green-100);
    }
}

.form_btn_cancel {
    background-color: var(--color-white-100);

    &:hover {
        outline: 1px solid var(--color-gray-200);
    }
}
</style>