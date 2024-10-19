<script lang="ts" setup></script>

<template>
  <section :class="$style.wrapper">
    <div :class="$style.wrapper__layout">
      <slot name="menu"></slot>
      <slot name="form"></slot>
    </div>
    <!-- <div :class="$style.children">
      <slot name="menu"></slot>
    </div>
    <div :class="$style.children">
      <slot name="form"></slot>
    </div> -->
  </section>
</template>

<style lang="postcss" module>
.wrapper {
  position: absolute;
  right: 10%;
  top: 3%;
  height: 94%;
  width: 600px;
  background-color: #020420ae;
  backdrop-filter: blur(8px);
  border-radius: 12px;
  box-shadow: 0px 0px 0px 3px var(--color-green-100);
}

.wrapper__layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 60px;
  gap: 60PX;
}

.children {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
