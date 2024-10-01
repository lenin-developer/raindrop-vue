<script lang="ts" setup></script>

<template>
  <div class="loginUserLayout">
    <div class="cotenFloat">
      <h1>aaaa</h1>
      <slot></slot>
    </div>
    <video muted autoplay loop class="video">
      <source src="/multimedia/back-ground-vide.mp4" type="video/mp4" />
    </video>
    <div class="overly"></div>
  </div>
</template>

<style lang="postcss" scoped>
.loginUserLayout {
  position: relative;
  min-height: 100vh;
  display: flex;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  height: 99vh;
  width: 80%;
  object-fit: cover;
  object-position: left;
}

.cotenFloat {
}

.overly {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-gray-200);
  opacity: var(--opacity-05);
  mix-blend-mode: overlay;
  height: 100%;
}
</style>
