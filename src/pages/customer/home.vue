<template>

    <AppBar />
    <DestinationPicker />
    <PackageShowcase /> 
     <NavigationFloatingButton />
    <AssistanceProfileCard />
    
     <Footer />
     

</template>

<script setup lang="ts">
import AppBar from '@/core/components/customer/mobile/AppBar.vue'
import DestinationPicker from '@/core/components/customer/mobile/DestinationPicker.vue'
import NavigationFloatingButton from '@/core/components/customer/mobile/NavigationFloatingButton.vue'
import PackageShowcase from '@/core/components/customer/mobile/PackageShowcase.vue'
import AssistanceProfileCard from '@/core/components/customer/mobile/AssistanceProfileCard.vue'
import Footer from '@/core/components/customer/mobile/Footer.vue'
</script>
