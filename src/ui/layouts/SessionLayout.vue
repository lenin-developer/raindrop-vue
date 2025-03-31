<script lang="ts" setup></script>

<template>
  <div :class="$style.loginUserLayout">
    <video muted autoplay loop :class="$style.loginUserLayout__video">
      <source src="/multimedia/back-ground-vide.mp4" type="video/mp4" />
    </video>
    <div :class="$style.loginUserLayout__overly"></div>
    <div :class="$style.loginUserLayout__containerSlot">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="postcss" module>
.loginUserLayout {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: var(--color-primary);
}

.loginUserLayout__containerSlot {
  position: relative;
  min-height: 100vh;
  width: 100%;
  z-index: 1;
}

.loginUserLayout__video {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 75%;
  object-fit: cover;
  object-position: left;
}

.loginUserLayout__overly {
  position: absolute;
  top: 0;
  left: 0;
  width: 75%;
  height: 100%;
  background: var(--color-primary);
  opacity: var(--opacity-05);
  /* mix-blend-mode: overlay;  */
  height: 100%;
}
</style>
