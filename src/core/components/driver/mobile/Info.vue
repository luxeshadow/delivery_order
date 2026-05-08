<template>
  <section class="app-info-section">
    <div class="background-layer">
      <img :src="AppImage.drive_3" alt="Background Driver" class="bg-image" />
      <div class="color-overlay"></div>
    </div>

    <div class="content-layer">
      <div class="header-tag">À PROPOS DE NOUS</div>
      
      <h1 class="main-title">
        ORDER <span class="highlight">DELIVERY</span>
      </h1>

      <div class="description-box">
        <p>
          Order Delivery est la plateforme leader de mise en relation logistique. 
          Nous transformons la manière dont les colis circulent en offrant aux 
          chauffeurs une liberté totale et une technologie de pointe pour 
          optimiser chaque kilomètre parcouru.
        </p>
      </div>

      <div class="info-badges">
        <div class="badge-item">
          <i class="fi fi-rr-apps-add"></i>
          <span>Interface Intuitive</span>
        </div>
        <div class="badge-item">
          <i class="fi fi-rr-chart-connected"></i>
          <span>Réseau Global</span>
        </div>
        <div class="badge-item">
          <i class="fi fi-rr-time-fast"></i>
          <span>Support 24/7</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { AppColor } from '@/core/constants/app_colors'
import { AppImage } from '@/core/constants/app_images'
</script>

<style scoped>
.app-info-section {
  position: relative;
  min-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 25px;
  overflow: hidden;
  background: white; 
}

.background-layer {
  position: absolute;
  inset: 0;
  z-index: 0;
  -webkit-mask-image: linear-gradient(to bottom, black 50%, rgba(0,0,0,0.1) 90%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 50%, rgba(0,0,0,0.1) 90%, transparent 100%);
}

.bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}

.color-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%);
}

.content-layer {
  position: relative;
  z-index: 2;
  max-width: 600px;
  width: 100%;
  text-align: left;
}

.header-tag {
  color: v-bind('AppColor.primary.base');
  font-weight: 900;
  font-size: 12px;
  letter-spacing: 3px;
  margin-bottom: 10px;
}

.main-title {
  font-size: 42px;
  font-weight: 900;
  color: white;
  line-height: 1;
  margin-bottom: 25px;
}

.main-title .highlight {
  color: v-bind('AppColor.primary.base');
}

.description-box p {
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 35px;
  font-weight: 500;
}

.info-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.badge-item {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 10px 18px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.badge-item i {
  color: v-bind('AppColor.primary.base');
  font-size: 16px;
}

.badge-item span {
  color: white;
  font-size: 13px;
  font-weight: 700;
}
</style>