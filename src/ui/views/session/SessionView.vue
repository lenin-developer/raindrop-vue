<script lang="ts" setup>
import { ref, type Ref } from 'vue';
import {SessionLayout} from '@/ui/layouts'
import { LoginForm, SwitchMenu } from '@/ui/components';
import type { SwitchItem } from '@/ui/components/navigation/switchMenu/SwitchItem';


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
      <template v-slot:menu>
        <SwitchMenu :items="items" v-model="loginOrSignIn" />
      </template>
      <template v-slot:form>
        <LoginForm :session="loginOrSignIn" />
      </template>
  </SessionLayout>
</template>


<style lang="postcss" scoped></style>
