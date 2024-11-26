<script setup lang="ts">
import Navbar from '@/components/Navbar/index.vue';
</script>

<template>
  <div id="app" class="font-poppins text-white bg-primary">
    <Navbar/>
    <router-view/>
  </div>
</template>