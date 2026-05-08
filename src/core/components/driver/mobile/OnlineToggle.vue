<template>
  <div class="driver-header">
    <div class="header-bg">
      <img :src="AppImage.drive_1" alt="Driver Background" />
      <div class="overlay"></div>
    </div>

    <div class="header-content">
      
      <div class="toggle-wrapper">
        <div 
          class="status-pill" 
          :class="{ 'is-online': isOnline }" 
          @click="isOnline = !isOnline"
        >
          <div class="icon-zone">
            <i class="fi fi-rr-moon-stars" :class="{ 'active-icon': !isOnline }"></i>
          </div>
          <span class="status-label">
            {{ isOnline ? 'SERVICE ACTIF' : 'HORS SERVICE' }}
          </span>
          <div class="icon-zone">
            <i class="fi fi-rr-route" :class="{ 'active-icon': isOnline }"></i>
          </div>
          <div class="handle-bg"></div>
        </div>
      </div>

      <div class="driver-profile-mini">
        <div class="avatar-container">
          <img :src="AppImage.drive_2" alt="Driver Avatar" class="avatar" />
          <div class="status-dot" :class="{ 'online': isOnline }"></div>
        </div>
        
        <div class="driver-meta">
          <h2>Moussa Diop</h2>
          <div class="rating">
            <i class="fi fi-ss-star"></i>
            <span>4.9</span>
            <span class="trips">• 1,240 courses</span>
          </div>
        </div>
      </div>

      <div class="quick-stats">
        <div class="stat-card">
          <span class="stat-value">98%</span>
          <span class="stat-desc">Acceptation</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">12€</span>
          <span class="stat-desc">Aujourd'hui</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">4.2km</span>
          <span class="stat-desc">Proximité</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AppColor } from '@/core/constants/app_colors'
import { AppImage } from '@/core/constants/app_images'

const isOnline = ref(false)
</script>

<style scoped>
.driver-header {
  position: relative;
  width: 100%;
  height: 350px; /* On augmente un peu la hauteur */
  overflow: hidden;
  -webkit-mask-image: linear-gradient(to bottom, 
    black 70%, 
    rgba(0, 0, 0, 0.5) 85%, 
    transparent 100%
  );
  mask-image: linear-gradient(to bottom, 
    black 70%, 
    rgba(0, 0, 0, 0.5) 85%, 
    transparent 100%
  );
}

.header-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.header-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* On peut ajouter un léger zoom pour donner de la profondeur */
  transform: scale(1.05); 
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom, 
    rgba(0,0,0,0.2) 0%, 
    rgba(0,0,0,0.7) 100%
  );
}

.header-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 25px 20px;
}

.toggle-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 40px;
}

.status-pill {
  width: 210px; height: 48px; background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px); border-radius: 24px; display: flex;
  align-items: center; padding: 0 5px; cursor: pointer;
  border: 1px solid rgba(255,255,255,0.2); position: relative;
}

.status-label {
  flex: 1; text-align: center; font-size: 10px; font-weight: 900;
  letter-spacing: 0.8px; color: white; z-index: 2; text-transform: uppercase;
}

.icon-zone { width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; z-index: 2; }
.icon-zone i { font-size: 16px; color: rgba(255,255,255,0.5); transition: 0.3s; }
.icon-zone i.active-icon { color: white; transform: scale(1.1); }

.handle-bg {
  position: absolute; width: 38px; height: 38px; border-radius: 50%;
  left: 5px; transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: 1; background: v-bind('AppColor.secondary.base');
}
.is-online .handle-bg { left: calc(100% - 43px); background: v-bind('AppColor.primary.base'); }

/* PROFILE SECTION */
.driver-profile-mini {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
}

.avatar-container {
  position: relative;
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 20px;
  border: 2px solid white;
  object-fit: cover;
}

.status-dot {
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ff4d4d; /* Rouge quand hors ligne */
  border: 3px solid #1a1a1a;
  transition: 0.3s;
}

.status-dot.online {
  background: v-bind('AppColor.success'); /* Vert quand en ligne */
}

.driver-meta h2 {
  color: white;
  font-size: 22px;
  font-weight: 800;
  margin: 0;
}

.rating {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 4px;
}

.rating i { color: #FFD700; font-size: 14px; }
.rating span { color: white; font-weight: 700; font-size: 14px; }
.trips { color: rgba(255,255,255,0.6) !important; font-weight: 400 !important; font-size: 12px !important; }

/* QUICK STATS ROW */
.quick-stats {
  display: flex;
  gap: 12px;
}

.stat-card {
  flex: 1;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(5px);
  padding: 12px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(255,255,255,0.1);
}

.stat-value {
  color: white;
  font-weight: 900;
  font-size: 16px;
}

.stat-desc {
  color: rgba(255,255,255,0.5);
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 2px;
}
</style>