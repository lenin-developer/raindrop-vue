<script lang="ts" setup></script>

<template>
  <div :class="$style.loginUserLayout">
    <video muted autoplay loop :class="$style.loginUserLayout__video">
      <source src="/multimedia/back-ground-vide.mp4" type="video/mp4" />
    </video>
    <div :class="$style.loginUserLayout__overly"></div>
    <div :class="$style.loginUserLayout__containerSlot">
      <section :class="$style.sessionContainer">
        <div :class="$style.sessionContainer__layout">
          <slot name="menu"></slot>
          <slot name="form"></slot>
        </div>
      </section>
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

.sessionContainer {
  position: absolute;
  right: 10%;
  top: 3%;
  width: 500px;
  background-color: #020420ae;
  backdrop-filter: blur(8px);
  border-radius: 12px;
  box-shadow: 0px 0px 0px 2px var(--color-secondary);

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
