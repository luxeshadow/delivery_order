<template>
  

       <OrderAlert 
        :show="hasNewOrder" 
        distance="2.4" 
        @close="hasNewOrder = false" 
        @accept="handleOrderAccept"
      />
      <OnlineToggle @status-change="handleStatusChange" />
      <AssistanceProfileCard />
      <NavFloatButton to="/customer" />
      <Info />
      <Footer />
    
        
    

</template>

<script setup lang="ts">
import { ref } from 'vue'
import AssistanceProfileCard from '@/core/components/customer/mobile/AssistanceProfileCard.vue'
import OnlineToggle from '@/core/components/driver/mobile/OnlineToggle.vue'
import Info from '@/core/components/driver/mobile/Info.vue'
import OrderAlert from '@/core/components/driver/mobile/OrderAlert.vue'
import NavigationFloatingButton from '@/core/components/customer/mobile/NavigationFloatingButton.vue'
import Footer from '@/core/components/customer/mobile/Footer.vue'


// État pour simuler une nouvelle commande
const hasNewOrder = ref(true)
const isOnline = ref(false)

const handleStatusChange = (status: boolean) => {
  isOnline.value = status
  // Logique pour commencer à écouter les commandes WebSocket ici
}

const handleOrderAccept = () => {
  hasNewOrder.value = false
  // Logique pour passer à l'écran d'itinéraire
}
</script>
