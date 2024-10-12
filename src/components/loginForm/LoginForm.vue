<script lang="ts" setup></script>

<template>
  <div :class="$style.container">
    <form :class="$style.container_form">
      <h2>Login</h2>
    </form>
  </div>
</template>

<style lang="postcss" module>
.container {
  display: flex;
  width: 90%;
  height: 100%;
  background: #0f172a80;
  box-shadow: 0px 0px 0px 0.5px var(--color-gray-300);
  border-radius: 12px;
}

.container_form {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 20px;
  border-radius: inherit;
}
</style>
