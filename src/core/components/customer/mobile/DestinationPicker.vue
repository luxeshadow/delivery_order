<script setup lang="ts">
import { ref } from 'vue'
import { AppColor } from '@/core/constants/app_colors'
import { AppImage } from '@/core/constants/app_images'

/** INPUTS */
const currentPosition = ref('')
const destination = ref('')

/** LOADING STATE */
const isLoading = ref(false)

/** ACTION */
const startRoute = () => {
  if (!currentPosition.value || !destination.value) {
    return
  }

  isLoading.value = true

  // simulation d'appel API / calcul itinéraire
  setTimeout(() => {
    isLoading.value = false

    console.log('Route démarrée')
    console.log('Position:', currentPosition.value)
    console.log('Destination:', destination.value)
  }, 1200)
}
</script>
<template>
  <div class="route-wrapper">

    <!-- BG IMAGE -->
    <img
      :src="AppImage.bg"
      alt="Background"
      class="bg-image"
    />

    <div class="overlay"></div>

    <!-- CARD -->
    <div class="route-container">

      <div class="left-icons">

        <div class="pickup-dot-wrapper">
          <div class="pickup-dot"></div>
        </div>

        <div class="line"></div>

        <i class="fi fi-rr-marker destination-icon"></i>
      </div>

      <div class="inputs">

        <div class="input-box">
          <input type="text" placeholder="Votre position..." />
          <i class="fi fi-rr-navigation"></i>
        </div>

        <div class="divider"></div>

        <div class="input-box">
          <input type="text" placeholder="Destination" />
          <i class="fi fi-rr-map-marker"></i>
        </div>

      </div>

    </div>

    <button class="start-btn">
      <span>Commencer</span>
      <i class="fi fi-rr-route"></i>
    </button>

  </div>
</template>
<style>
.route-wrapper {
  position: relative;
  overflow: hidden;
  margin: 10px;
  border-radius: 22px;
  background: v-bind('AppColor.primary.light');
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
}

/* BG IMAGE (IMG) */
.bg-image {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;

  filter: blur(0px);
  transform: scale(1.05);

  opacity: 0.18;

  z-index: 0;
}
.route-container {
  position: relative;
  z-index: 2;

  display: flex;
  align-items: flex-start;
  gap: 14px;

  padding: 18px;
}

/* LEFT SIDE */
.left-icons {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 12px;
  min-width: 24px;
}

/* PICKUP */
.pickup-dot-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;

  border-radius: 50%;

  background: v-bind('AppColor.primary.base + "20"');
}

.pickup-dot {
  width: 8px;
  height: 8px;

  border-radius: 50%;

  background: v-bind('AppColor.primary.base');
}

/* LINE */
.line {
  width: 0;
  height: 16px;

  border-left: 3px dotted v-bind('AppColor.border');

  margin: 4px 0;
}

/* DESTINATION ICON */
.destination-icon {
  font-size: 18px;
  color: v-bind('AppColor.danger');
}

/* INPUTS */
.inputs {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.input-box {
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px 0;
}

.input-box i {
  font-size: 16px;
  color: v-bind('AppColor.textLight');
}

.input-box input {
  flex: 1;

  border: none;
  outline: none;

  background: transparent;

  font-size: 15px;
  font-weight: 600;

  color: v-bind('AppColor.text');

  font-family: 'Plus Jakarta Sans', sans-serif;
}

.input-box input::placeholder {
  color: v-bind('AppColor.textLight');
  font-weight: 500;
}

/* DIVIDER */
.divider {
  width: 100%;
  height: 1px;

  background: v-bind('AppColor.border');
}

/* BUTTON */
.start-btn {
  position: relative;
  z-index: 2;

  margin: 0 18px 18px auto;

  height: 38px;
  width: fit-content;

  padding: 0 16px;

  border: none;
  border-radius: 12px;

  background: linear-gradient(
    135deg,
    v-bind('AppColor.primary.base'),
    v-bind('AppColor.primary.dark')
  );

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  color: white;
  font-size: 14px;
  font-weight: 700;

  box-shadow: 0 10px 20px rgba(0,0,0,0.12);

  transition: 0.2s ease;
}

.start-btn i {
  font-size: 13px;
}

.start-btn:active {
  transform: scale(0.97);
}
</style>