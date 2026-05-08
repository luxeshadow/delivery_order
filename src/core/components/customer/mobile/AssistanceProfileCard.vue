<template>
  <div class="assistance-card">
    
    <div class="top-section">
      <div class="profile-info">
        <div class="avatar-wrapper">
          <img :src="AppImage.assistance" alt="Assistant">
          <div class="verified-badge">
            <i class="fi fi-rr-check-circle"></i>
          </div>
        </div>
        
        <div class="details">
          <h3>Elizabeth Henry</h3>
          <p>Nixon care hospital</p>
        </div>
      </div>

      <a href="https://wa.me/00000000" target="_blank" class="whatsapp-link">
        <div class="whatsapp-circle">
          <img :src="AppImage.whatsapp" alt="WhatsApp" class="whatsapp-icon-img">
        </div>
      </a>
    </div>

    <div class="bottom-section">
      <div class="schedule-item">
        <i class="fi fi-rr-calendar"></i>
        <span>Jeudi-Samedi</span>
      </div>
      
      <div class="schedule-item">
        <i class="fi fi-rr-clock"></i>
        <span>10:00 to 13:00</span>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { AppColor } from '@/core/constants/app_colors'
import { AppImage } from '@/core/constants/app_images'
</script>

<style scoped>
.assistance-card {
  background: linear-gradient(135deg, #222121, #141414); 
  padding: 22px;
  border-radius: 26px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

/* TOP SECTION */
.top-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.profile-info {
  display: flex;
  align-items: center;
  gap: 14px;
}

.avatar-wrapper {
  position: relative;
  width: 56px;
  height: 56px;
}

.avatar-wrapper img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.verified-badge {
  position: absolute;
  bottom: 2px;
  right: -5px;
  color: v-bind('AppColor.success');
  background: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.details h3 {
  color: white;
  font-size: 19px;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.3px;
}

.details p {
  color: rgba(255, 255, 255, 0.85);
  font-size: 14px;
  margin: 2px 0 0 0;
}

/* WHATSAPP BUTTON STYLE */
.whatsapp-circle {
  width: 52px;
  height: 52px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.whatsapp-icon-img {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.whatsapp-link:active .whatsapp-circle {
  transform: scale(0.9);
}

/* BOTTOM SECTION (Horaires) */
.bottom-section {
  display: flex;
  align-items: center;
  gap: 24px;
}

.schedule-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  font-size: 14px;
  font-weight: 500;
}

.schedule-item i {
  font-size: 16px;
  opacity: 0.9;
}
.fi-rr-check-circle{
    margin-top: 2px;
}
</style>