<template>
  <button class="nav-float-btn" @click="go">
    <div class="inner-glow"></div>

    <img
      :src="AppImage.navigation"
      alt="navigation"
      class="nav-icon"
    />
  </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { AppColor } from '@/core/constants/app_colors'
import { AppImage } from '@/core/constants/app_images'

const props = defineProps<{
  to: string
}>()

const router = useRouter()

const go = () => {
  if (!props.to) return
  router.push(props.to)
}
</script>

<style scoped>
.nav-float-btn {
  position: fixed;
  bottom: 25px;
  right: 22px;

  width: 64px;
  height: 64px;

  border: none;
  outline: none;

  /* Forme "Squircle" plus moderne que le simple arrondi */
  border-radius: 22px;

  /* Utilisation de ton dégradé orange pour le punch */
  background: linear-gradient(
    135deg,
    v-bind('AppColor.primary.base'),
    v-bind('AppColor.primary.dark')
  );

  display: flex;
  align-items: center;
  justify-content: center;

  /* Double ombre : une pour la profondeur, une pour la couleur (glow) */
  box-shadow: 
    0 10px 20px rgba(0, 0, 0, 0.15),
    0 6px 15px v-bind('AppColor.primary.base + "66"'); /* 66 = 40% d'opacité */

  cursor: pointer;
  z-index: 999;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Effet de brillance interne pour le côté premium */
.inner-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0)
  );
  pointer-events: none;
}

.nav-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
  /* Si ton icône navigation est noire/sombre, on la passe en blanc */
  filter: brightness(0) invert(1); 
  z-index: 2;
  transition: transform 0.3s ease;
}

/* INTERACTION */
.nav-float-btn:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 15px 25px rgba(0, 0, 0, 0.2),
    0 8px 20px v-bind('AppColor.primary.base + "80"');
}

.nav-float-btn:active {
  transform: scale(0.9);
}

.nav-float-btn:hover .nav-icon {
  transform: rotate(-15deg) scale(1.1);
}
</style>