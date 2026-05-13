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

          <button class="btn-ignore" @click="handleClose">
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
import { onMounted, onBeforeUnmount } from 'vue'
import { AppImage } from '@/core/constants/app_images'
import { AppSong } from '@/core/constants/app_songs'

const props = defineProps({
  show: Boolean,
  distance: { type: String, default: '2.5' }
})

const emit = defineEmits(['close', 'accept'])

/* =======================
   AUDIO LOOP SYSTEM
======================= */

let audio: HTMLAudioElement | null = null
let loopActive = false

const playSoundLoop = () => {
  audio = new Audio(AppSong.newOrder)
  audio.volume = 0.6
  loopActive = true

  const playCycle = async () => {
    if (!audio || !loopActive) return

    try {
      await audio.play()
    } catch (e) {
      console.log('Audio bloqué par le navigateur')
      return
    }

    audio.onended = () => {
      if (!loopActive) return

      setTimeout(() => {
        if (loopActive && audio) {
          audio.currentTime = 0
          playCycle()
        }
      }, 200)
    }
  }

  playCycle()
}

const stopSound = () => {
  loopActive = false

  if (audio) {
    audio.pause()
    audio.currentTime = 0
    audio = null
  }
}

/* =======================
   VIBRATION
======================= */

const vibrate = () => {
  if (navigator.vibrate) {
    navigator.vibrate([200, 100, 200])
  }
}

/* =======================
   ACTIONS
======================= */

const handleAccept = () => {
  stopSound()
  vibrate()
  emit('accept')
}

const handleClose = () => {
  stopSound()
  vibrate()
  emit('close')
}

/* =======================
   LIFECYCLE
======================= */

onMounted(() => {
  if (props.show) {
    playSoundLoop()
  }
})

onBeforeUnmount(() => {
  stopSound()
})
</script>

<style scoped>
/* ==== WRAPPER ==== */
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

/* ==== CARD ==== */
.order-card-refined {
  background: white;
  width: 100%;
  max-width: 380px;
  border-radius: 20px;
  padding: 12px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.12);
}

/* ==== IMAGE ==== */
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
  font-size: 11px;
  font-weight: 800;
}

/* ==== CONTENT ==== */
.card-content {
  text-align: left;
  margin-bottom: 15px;
}

.title-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon-title {
  color: #ff7a00;
}

.card-content h3 {
  font-size: 16px;
  font-weight: 800;
}

.card-content p {
  font-size: 12px;
  color: #888;
}

/* ==== ACTIONS ==== */
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
  background: #f2f2f2;
  color: #666;
}

.btn-confirm {
  background: #ff7a00;
  color: white;
}

/* ==== ANIMATION ==== */
.slide-down-enter-active {
  transition: all 0.5s ease;
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