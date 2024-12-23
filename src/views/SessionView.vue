<script lang="ts" setup>
import {ref, type Ref} from 'vue';
import SessionLayout from '@/layouts/SessionLayout.vue'
import SessionContainer from '@/components/sessionContainer/SessionContainer.vue'
import LoginForm from '@/components/loginForm/LoginForm.vue'
import SwichMenu from '@/components/swichMenu/SwichMenu.vue'

const items = [
  {
    text: 'login',
    id:1
  },
  {
    text: 'sign in',
    id:2
  },
]

const ItemSelected: Ref<number> = ref(items?.[0]?.id);


</script>

<template>
  <SessionLayout>
    <SessionContainer>
      <template v-slot:menu>
        <SwichMenu :items="items" v-model="ItemSelected" />
      </template>
      <template v-slot:form>
        <LoginForm :session="ItemSelected" />
      </template>
    </SessionContainer>
  </SessionLayout>
</template>

<style lang="postcss" scoped></style>
