<script lang="ts" setup>
import { ref, type Ref } from 'vue';
import SessionLayout from '@/layouts/SessionLayout.vue'
import SessionContainer from '@/components/sessionContainer/SessionContainer.vue'
import LoginForm from '@/components/loginForm/LoginForm.vue'
import SwichMenu from '@/components/swichMenu/SwichMenu.vue'
import type { ItemSelect } from '@/types/ItemSelect';


const items: ItemSelect[] = [
  {
    text: 'Login',
    id: 1
  },
  {
    text: 'Sign in',
    id: 2
  }
]

const loginOrSignIn = ref({ ...items?.[0] }) as Ref<ItemSelect>;



</script>

<template>
  <SessionLayout>
    <SessionContainer>
      <template v-slot:menu>
        <SwichMenu :items="items" v-model="loginOrSignIn" />
      </template>
      <template v-slot:form>
        <LoginForm :session="loginOrSignIn" />
      </template>
    </SessionContainer>
  </SessionLayout>
</template>

<style lang="postcss" scoped></style>
