<script lang="ts" setup></script>

<template>
  <div class="loginUserLayout">
    <div class="floatingContainer">
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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-areas: '. . . . . content content .';
}

.floatingContainer {
  z-index: 1;
  min-height: 100vh;
  width: 100%;
  grid-column: content;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 80%;
  object-fit: cover;
  object-position: left;
}

.overly {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-gray-200);
  opacity: var(--opacity-05);
  /* mix-blend-mode: overlay; */
  height: 100%;
}
</style>
