<template>
  <div class="map-view">
    <div class="map-placeholder">
      <div class="driver-marker">
        <div class="pulse"></div>
        <i class="fi fi-sr-navigation"></i>
      </div>
    </div>
    
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { AppColor } from '@/core/constants/app_colors'
</script>

<style scoped>
.map-view {
  position: fixed;
  inset: 0;
  background: #e5e7eb;
  z-index: 1;
}

.map-placeholder {
  width: 100%;
  height: 100%;
  background-image: radial-gradient(#d1d5db 2px, transparent 2px);
  background-size: 30px 30px; /* Petit effet de grille map */
  display: flex;
  align-items: center;
  justify-content: center;
}

.driver-marker {
  position: relative;
  color: v-bind('AppColor.primary.base');
  font-size: 24px;
}

.pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  background: v-bind('AppColor.primary.base + "40"');
  border-radius: 50%;
  animation: pulse-ring 2s infinite;
}

@keyframes pulse-ring {
  0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
}
</style>