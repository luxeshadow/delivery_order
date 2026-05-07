<template>
  <section class="packages-section">
    <div class="section-header">
      <span class="badge">Colis transportés</span>
      <h2>Des centaines de colis<br>livrés chaque semaine</h2>
      <p>Aperçu des formats et types de colis que nous prenons en charge.</p>
    </div>

    <div class="horizontal-scroll-wrapper">
      <div class="packages-slider">
        
        <div class="package-item">
          <img :src="AppImage.package_1" alt="Colis 1">
          <div class="item-overlay">
            <span class="category">Petit Colis</span>
            <span class="status">Sécurisé</span>
          </div>
        </div>

        <div class="package-item">
          <img :src="AppImage.package_2" alt="Colis 2">
          <div class="item-overlay">
            <span class="category">Moyen Format</span>
            <span class="status">Rapide</span>
          </div>
        </div>

        <div class="package-item">
          <img :src="AppImage.package_3" alt="Colis 3">
          <div class="item-overlay">
            <span class="category">Grand Volume</span>
            <span class="status">Fiable</span>
          </div>
        </div>

        <div class="package-item">
          <img :src="AppImage.package_4" alt="Colis 4">
          <div class="item-overlay">
            <span class="category">Emballage Spécial</span>
            <span class="status">Suivi</span>
          </div>
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
.packages-section {
  padding: 20px 0; /* On enlève le padding latéral pour le scroll */
}

/* HEADER */
.section-header {
  padding: 0 5px;
  margin-bottom: 20px;
}

.badge {
  display: inline-flex;
  padding: 6px 14px;
  border-radius: 99px;
  background: v-bind('AppColor.primary.light');
  color: v-bind('AppColor.primary.dark');
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
}

.section-header h2 {
  margin-top: 12px;
  font-size: 24px;
  font-weight: 800;
  color: v-bind('AppColor.text');
  line-height: 1.2;
}

.section-header p {
  margin-top: 8px;
  font-size: 14px;
  color: v-bind('AppColor.textLight');
}

/* HORIZONTAL SCROLL */
.horizontal-scroll-wrapper {

  overflow-x: auto;
  padding: 5px 2px; 
  scrollbar-width: none; /* Cache la scrollbar sur Firefox */
}

.horizontal-scroll-wrapper::-webkit-scrollbar {
  display: none; /* Cache la scrollbar sur Chrome/Safari */
}

.packages-slider {
  display: flex;
  gap: 16px;
  /* Permet de dépasser la largeur de l'écran */
  width: max-content;
}

/* ITEM CARD */
.package-item {
  width: 220px; /* Largeur fixe pour les cartes en ligne */
  height: 300px;
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  background: #f0f0f0;
}

.package-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.package-item:hover img {
  transform: scale(1.05);
}

/* OVERLAY */
.item-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 18px;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  display: flex;
  flex-direction: column;
}

.category {
  color: white;
  font-size: 16px;
  font-weight: 800;
}

.status {
  color: v-bind('AppColor.primary.accent'); /* On utilise ta couleur accent */
  font-size: 12px;
  font-weight: 600;
  margin-top: 2px;
}

/* Animation au chargement (optionnel) */
@keyframes slideIn {
  from { transform: translateX(30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.package-item {
  animation: slideIn 0.5s ease backwards;
}

/* Staggered delay pour l'effet de liste */
.package-item:nth-child(1) { animation-delay: 0.1s; }
.package-item:nth-child(2) { animation-delay: 0.2s; }
.package-item:nth-child(3) { animation-delay: 0.3s; }
.package-item:nth-child(4) { animation-delay: 0.4s; }
</style>