<template>
  <header class="app-bar">
    <!-- LEFT: PROFILE -->
    <button class="icon-btn profile-btn">
      <i :class="AppIcon.user_portrait"></i>
    </button>

    <!-- CENTER: LOCATION -->
    <div class="location-container">
      <span class="location-label">Votre position</span>
      <div class="location-row">
        <i class="fi fi-rr-marker primary-icon"></i>
        <span class="location-text">assigme, Togo</span>
        <i class="fi fi-rr-angle-small-down chevron"></i>
      </div>
    </div>

    <!-- RIGHT: NOTIFICATION -->
    <button class="icon-btn">
      <i :class="AppIcon.bell"></i>
      <span class="notification-badge"></span>
    </button>
  </header>
</template>

<script setup lang="ts">
import { AppColor } from '@/core/constants/app_colors'
import { AppIcon } from '@/core/constants/app_icons'
</script>

<style scoped>
.app-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;
  background: v-bind('AppColor.background');
  /* Optionnel : bordure basse très fine */
  border-bottom: 1px solid rgba(0,0,0,0.03);
}

/* BOUTONS ICONES */
.icon-btn {
  width: 48px;
  height: 48px;
  border: 1px solid rgba(0,0,0,0.05);
  border-radius: 14px;
  background: v-bind('AppColor.surface');
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: v-bind('AppColor.text');
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.icon-btn:active {
  transform: scale(0.92);
  background: rgba(0,0,0,0.02);
}

/* SECTION LOCALISATION */
.location-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.location-label {
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-weight: 600;
  color: v-bind('AppColor.text');
  opacity: 0.5;
  margin-bottom: 2px;
}

.location-row {
  display: flex;
  align-items: center;
  gap: 4px;
}

.primary-icon {
  color: v-bind('AppColor.primary.base');
  font-size: 12px;
}

.location-text {
  font-size: 13px;
  font-weight: 600;
  color: v-bind('AppColor.text');
}

.chevron {
  font-size: 12px;
  opacity: 0.4;
}

/* BADGE NOTIFICATION */
.notification-badge {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: v-bind('AppColor.danger');
  border: 2px solid v-bind('AppColor.surface');
  position: absolute;
  top: 13px;
  right: 13px;
}
</style>