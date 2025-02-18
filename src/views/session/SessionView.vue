<script lang="ts" setup>
import { ref, type Ref } from 'vue';
import SessionLayout from '@/layouts/SessionLayout.vue'
import type { SwitchItem } from '@/components/switchMenu/SwitchItem';
import { LoginForm, SessionForm, SwichMenu } from '@/components';


const items: SwitchItem[] = [
  {
    text: 'Login',
    id: 1
  },
  {
    text: 'Sign in',
    id: 2
  }
]

const loginOrSignIn = ref({ ...items?.[0] }) as Ref<SwitchItem>;



</script>

<template>
  <SessionLayout>
    <SessionForm>
      <template v-slot:menu>
        <SwichMenu :items="items" v-model="loginOrSignIn" />
      </template>
      <template v-slot:form>
        <LoginForm :session="loginOrSignIn" />
      </template>
    </SessionForm>
  </SessionLayout>
</template>

<style lang="postcss" scoped></style>
