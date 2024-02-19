<script setup>
import HelloWorld from './views/HomeView.vue'
import Navbar from "./components/NavbarComponent.vue";
import Footer from "./components/FooterComponent.vue";


</script>

<template>
  <Navbar></Navbar>
    <router-view></router-view>
  <Footer></Footer>
</template>

