<script lang="ts" setup>
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
    text: 'logoun',
    id:3
  },
]


</script>

<template>
  <SessionLayout>
    <SessionContainer>
      <template v-slot:menu>
        <SwichMenu :items="items" />
      </template>
      <template v-slot:form>
        <LoginForm />
      </template>
    </SessionContainer>
  </SessionLayout>
</template>

<style lang="postcss" scoped></style>
