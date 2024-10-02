<script lang="ts" setup>
import SessionLayout from '@/layouts/SessionLayout.vue'
import SessionContainer from '@/components/sessionContainer/SessionContainer.vue'
import LoginForm from '@/components/loginForm/LoginForm.vue'
</script>

<template>
  <SessionLayout>
    <SessionContainer>
      <template v-slot:menu>
        <h1>menu</h1>
      </template>
      <template v-slot:form>
        <LoginForm />
      </template>
    </SessionContainer>
  </SessionLayout>
</template>

<style lang="postcss" scoped></style>
