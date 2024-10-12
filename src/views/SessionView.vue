<script lang="ts" setup>
import SessionLayout from '@/layouts/SessionLayout.vue'
import SessionContainer from '@/components/sessionContainer/SessionContainer.vue'
import LoginForm from '@/components/loginForm/LoginForm.vue'
import SwichMenu from '@/components/swichMenu/SwichMenu.vue'

const items = [
  {
    text: 'opcion 1',
    id:1
  },
  {
    text: 'opcion 2',
    id:3
  },
  {
    text: 'opcion 4',
    id:5
  }
]


</script>

<template>
  <SessionLayout>
    <SessionContainer>
      <template v-slot:menu>
        <SwichMenu :items="items" >

        </SwichMenu>
      </template>
      <template v-slot:form>
        <LoginForm />
      </template>
    </SessionContainer>
  </SessionLayout>
</template>

<style lang="postcss" scoped></style>
