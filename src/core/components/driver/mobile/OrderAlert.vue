<template>
  <Transition name="slide-down">
    <div v-if="show" class="order-alert-wrapper">
      <div class="order-card-refined">
        
        <div class="image-container">
          <img :src="AppImage.package_1" alt="Colis" class="package-img" />
          
          <div class="distance-tag">
            <i class="fi fi-rr-marker"></i>
            <span>{{ distance }} km</span>
          </div>
        </div>

        <div class="card-content">
          <div class="title-row">
            <i class="fi fi-rr-box-alt icon-title"></i>
            <h3>Colis à proximité</h3>
          </div>
          <p>Nouvelle demande de livraison disponible immédiatement.</p>
        </div>

        <div class="card-actions">
          <button class="btn-ignore" @click="$emit('close')">
            <i class="fi fi-rr-cross-small"></i>
            Ignorer
          </button>
          
          <button class="btn-confirm" @click="handleAccept">
            Accepter
            <i class="fi fi-rr-check"></i>
          </button>
        </div>

      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { AppColor } from '@/core/constants/app_colors'
import { AppImage } from '@/core/constants/app_images'

defineProps({
  show: Boolean,
  distance: { type: String, default: '2.5' }
})

const handleAccept = () => {
  console.log("Course acceptée !")
}
</script>

<style scoped>
.fi-rr-check,.fi-rr-cross-small{
    margin-top: 4px;
}
.order-alert-wrapper {
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  padding: 0 15px;
}

.order-card-refined {
  background: white;
  width: 100%;
  max-width: 380px;
  border-radius: 20px;
  padding: 12px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.12);
  border: 1px solid v-bind('AppColor.border');
}

.image-container {
  position: relative;
  width: 100%;
  height: 120px;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 12px;
}

.package-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.distance-tag {
  position: absolute;
  top: 8px;
  right: 8px;
  background: white;
  padding: 4px 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  font-weight: 800;
  color: v-bind('AppColor.text');
}

/* CONTENT */
.card-content {
  text-align: left;
  margin-bottom: 15px;
  padding: 0 5px;
}

.title-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon-title {
  color: v-bind('AppColor.primary.base');
  font-size: 16px;
}

.card-content h3 {
  font-size: 16px;
  font-weight: 800;
  color: v-bind('AppColor.text');
  margin: 0;
}

.card-content p {
  margin-top: 4px;
  font-size: 12px;
  color: v-bind('AppColor.textLight');
  line-height: 1.4;
}

/* ACTIONS */
.card-actions {
  display: flex;
  gap: 10px;
}

.card-actions button {
  flex: 1;
  height: 44px;
  border-radius: 12px;
  border: none;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-ignore {
  background: v-bind('AppColor.surface');
  color: v-bind('AppColor.textLight');
}

.btn-confirm {
  background: v-bind('AppColor.primary.base');
  color: white;
}

/* NOUVELLE ANIMATION : VIENT DU HAUT */
.slide-down-enter-active {
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from {
  transform: translateY(-120%);
  opacity: 0;
}
.slide-down-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>