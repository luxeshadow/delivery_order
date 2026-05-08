<template>
  <footer class="app-footer">
    <div class="faq-container">
      <h3 class="faq-title">Questions fréquentes</h3>
      
      <div class="faq-list">
        <div 
          v-for="(item, index) in faqItems" 
          :key="index" 
          class="faq-item"
          :class="{ 'is-open': openIndex === index }"
          @click="toggleFaq(index)"
        >
          <div class="faq-question">
            <span>{{ item.question }}</span>
            <div class="faq-icon">
              <i :class="openIndex === index ? 'fi fi-rr-minus' : 'fi fi-rr-plus'"></i>
            </div>
          </div>
          
          <div class="faq-answer" v-if="openIndex === index">
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-divider"></div>

    <div class="footer-bottom">
      <div class="footer-info">
        <p>© 2026 Votre Service de Livraison</p>
        <div class="footer-links">
          <a href="#" class="underlined-link">Politique de confidentialité</a>
          <a href="#" class="underlined-link">Conditions d'utilisation</a>
        </div>
      </div>
      
      <div class="social-icons">
        <i class="fi fi-brands-whatsapp"></i>
        <i class="fi fi-brands-instagram"></i>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AppColor } from '@/core/constants/app_colors'

const openIndex = ref<number | null>(null)

const faqItems = [
  { 
    question: "Comment suivre mon colis ?", 
    answer: "Vous pouvez suivre votre colis en temps réel via l'onglet navigation de l'application." 
  },
  { 
    question: "Quels sont les délais de livraison ?", 
    answer: "Nos livraisons standards s'effectuent généralement entre 10h et 13h selon votre zone." 
  },
  { 
    question: "Comment contacter l'assistance ?", 
    answer: "Cliquez sur le bouton WhatsApp en haut de la page pour parler à Elizabeth." 
  }
]

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<style scoped>
.app-footer {
  background: v-bind('AppColor.surface');
  padding: 10px 5px 20px 5px;
  margin: 10px;
}

/* FAQ STYLING */
.faq-container {
  max-width: 600px;
  margin: 0 auto 30px auto;
}

.faq-title {
  font-size: 20px;
  font-weight: 800;
  color: v-bind('AppColor.text');
  margin-bottom: 20px;
  text-align: center;
}

.faq-item {
  background: white;
  border-radius: 16px;
  margin-bottom: 12px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid v-bind('AppColor.border');
}

.faq-item.is-open {
  border-color: v-bind('AppColor.primary.base');
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  color: v-bind('AppColor.text');
  font-size: 14px;
}

.faq-icon {
  color: v-bind('AppColor.primary.base');
  font-size: 18px;
  display: flex;
  align-items: center;
}

.faq-answer {
  margin-top: 12px;
  font-size: 13px;
  color: v-bind('AppColor.textLight');
  line-height: 1.5;
  animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* FOOTER BOTTOM */
.footer-divider {
  height: 1px;
  background: v-bind('AppColor.border');
  margin-bottom: 20px;
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
}

.footer-info p {
  font-size: 12px;
  color: v-bind('AppColor.textLight');
  margin-bottom: 10px;
}

.footer-links {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.underlined-link {
  font-size: 12px;
  color: v-bind('AppColor.text');
  font-weight: 600;
  text-decoration: underline; /* Souligné comme demandé */
}

.social-icons {
  display: flex;
  gap: 20px;
  font-size: 20px;
  color: v-bind('AppColor.textLight');
}

/* Responsive */
@media (min-width: 768px) {
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
  .footer-links {
    justify-content: flex-start;
  }
}
</style>