<template>
  <router-view></router-view>
  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
@import "@/main.css";
</style>
