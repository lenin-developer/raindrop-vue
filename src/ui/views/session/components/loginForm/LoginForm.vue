<script lang="ts" setup>
import { useRouter } from 'vue-router';
import {
  SocialMediaButton,
  HrCustom,
  ButtonBase,
  InputLabel
} from '@/ui/components';

import {IconGoogle, IconFacebook, IconMail, IconKey} from '@/ui/components/icons'
import type { SwitchItem } from '@/ui/components/navigation/switchMenu/SwitchItem';

const router = useRouter();

const props = defineProps<{
  session: SwitchItem
}>()

const login = () => {
  router.push({ name: 'home' })
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

    <InputLabel label="Email" id="correo" :class="$style.InputBase" autocomplete="off">
      <template #icon>
        <IconMail :class="$style.colorIcon" />
      </template>
    </InputLabel>



    <InputLabel type="password" label="Password" id="password" :class="$style.InputBase" autocomplete="off">
      <template #icon>
        <IconKey :class="$style.colorIcon" />
      </template>
    </InputLabel>

    <ButtonBase @click="login"> {{ session?.text }} </ButtonBase>

  </form>
  <!-- </div> -->
</template>

<style lang="postcss" module>
.container {
  display: flex;
  width: 90%;
  height: 100%;
  background: #0f172a80;
  box-shadow: 0px 0px 0px 0.5px var(--color-gray-transparent-100);
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

  &>path {
    fill: var(--color-secondary);
  }
}

.wrapperInputIcons {
  align-items: flex-end;

}

.wrapperInputIcons>div {
  padding-left: 0px;
}
</style>
