<template>
  <div class="route-container">

    <div class="left-icons">

      <div class="pickup-dot-wrapper">
        <div class="pickup-dot"></div>
      </div>


      <div class="line"></div>

      <i class="fi fi-rr-marker destination-icon"></i>
    </div>

    <!-- INPUTS -->
    <div class="inputs">
  
      <div class="input-box">
        
        <input
          type="text"
          placeholder="Votre position..."
        >
        <i class="fi fi-rr-navigation"></i>
      </div>

      <div class="divider"></div>

      <!-- DESTINATION -->
      <div class="input-box">
        <!-- L'icône de destination est déjà à gauche de l'input ici -->
        
        <input
          type="text"
          placeholder="Destination"
        ><i class="fi fi-rr-map-marker"></i>
      </div>

      <!-- START BUTTON -->
    
    </div>
    
  </div>  
  <button class="start-btn">
        
        <span>Commencer</span>
        <i class="fi fi-rr-route"></i>
      </button>
</template>

<script setup lang="ts">
import { AppColor } from '@/core/constants/app_colors'
</script>

<style scoped>
.route-container {
  margin: 5px;

  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 18px;
  border-radius: 15px;
  background: v-bind('AppColor.primary.light');
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
}
/* LEFT SIDE */
.left-icons {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 12px; /* Ajusté pour centrer avec le premier input */
  min-width: 24px;   /* Assure que la colonne de gauche reste fixe */
}

/* Le point orange avec son halo transparent */
.pickup-dot-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: v-bind('AppColor.primary.base + "20"'); /* Ajoute 20 en hexa pour la transparence */
}

.pickup-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: v-bind('AppColor.primary.base');
}

.line {
  width: 0px;
  height: 16px;
  border-left: 3px dotted v-bind('AppColor.border');
  margin: 4px 0;
}

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

/* Style des icônes à l'intérieur des inputs (position et destination) */
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

.divider {
  width: 100%;
  height: 1px;
  background: v-bind('AppColor.border');
}

.start-btn {
  margin-top: 18px;
  height: 36px;
  width: fit-content;

  border: none;
  border-radius: 10px;

  background: linear-gradient(
    135deg,
    v-bind('AppColor.primary.base')
  );

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: white;
  font-size: 14px;
  font-weight: 700;

  margin-left: auto;
}

.start-btn i {
  font-size: 13px;
}

.start-btn:active {
  transform: scale(0.98);
}
</style>