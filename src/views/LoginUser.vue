<script lang="ts" setup>
import LoginUserLayout from '@/layouts/LoginUserLayout.vue'
import FormLogin from '@/components/formLogin/FormLogin.vue'
import ContentFormUser from '@/components/contentFormUser/ContentFormUser.vue'
</script>

<template>
  <LoginUserLayout>
    <ContentFormUser>
      <template v-slot:menu>
        <h1>menu</h1>
      </template>
      <template v-slot:form>
        <FormLogin />
      </template>
    </ContentFormUser>
  </LoginUserLayout>
</template>

<style lang="postcss" scoped></style>
