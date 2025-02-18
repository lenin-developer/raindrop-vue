<script lang="ts" setup></script>

<template>
  <section :class="$style.sessionContainer">
    <div :class="$style.sessionContainer__layout">
      <slot name="menu"></slot>
      <slot name="form"></slot>
    </div>
  </section>
</template>

<style lang="postcss" module>
.sessionContainer {
  position: absolute;
  right: 10%;
  top: 3%;
  width: 500px;
  background-color: #020420ae;
  backdrop-filter: blur(8px);
  border-radius: 12px;
  box-shadow: 0px 0px 0px 2px var(--color-green-100);

  @media(--md-viewport) {
    width: calc(100% - 20%);
  }

  @media(--sm-viewport){
    width: calc(100% - 6%);
    right: 3%;
  }

}

.sessionContainer__layout {
  height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 60px;
  gap: 60PX;
}
</style>
