<script lang="ts" setup>
import { useRouter } from 'vue-router';
import SocialMediaButton from '@/components/socialMediaButton/SocialMediaButton.vue';

import HrCustom from '@/components/hrCustom/HrCustom.vue'
import InputBase from '@/components/inputBase/InputBase.vue'
import ButtonBase from '@/components/buttonBase/ButtonBase.vue'

import IconGoogle from '@/components/icons/IconGoogle.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconMail from '@/components/icons/IconMail.vue'
import IconKey from '@/components/icons/IconKey.vue'
import type { ItemSelect } from '@/types/ItemSelect';

const router = useRouter();

const props = defineProps<{
  session: ItemSelect
}>()

const login = ()=> {
  router.push({name: 'home'})
}


</script>

<template>
  <!-- <div :class="$style.container"> -->
  <form :class="$style.container_form">
    <SocialMediaButton @click="login" :text="`${session?.text} wiht Google`">
      <IconGoogle />
    </SocialMediaButton>
    <SocialMediaButton @click="login" :text="`${props?.session?.text} wiht Facebook`">
      <IconFacebook />
    </SocialMediaButton>

    <HrCustom text="OR" />

    <InputBase label="Email" id="correo" :class="$style.InputBase" autocomplete="off">
      <template #icon>
        <IconMail :class="$style.colorIcon" />
      </template>
    </InputBase>



    <InputBase type="password" label="Password" id="password" :class="$style.InputBase" autocomplete="off">
      <template #icon>
        <IconKey :class="$style.colorIcon" />
      </template>
    </InputBase>

    <ButtonBase @click="login" >  {{session?.text}} </ButtonBase>

  </form>
  <!-- </div> -->
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
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  margin: 0;
  padding: 20px;
  border-radius: inherit;
  gap: 30px;
}

/* modificadores */

.InputBase {
  font-weight: 800;
}


.colorIcon {
  zoom: 0.6;

  & > path {
    fill: var(--color-green-100);
  } 
}

.wrapperInputIcons {
  align-items: flex-end;

}

.wrapperInputIcons>div {
  padding-left: 0px;
}
</style>
