<script setup>

import MenuComponent from '../components/MenuComponent.vue';
import { ref } from 'vue';
import router from '../router';

  let user = ref([]);

  const closeSession = () => {
    $cookies.remove('auth');
    router.push('/');
  }

  user.value = $cookies.get('auth');
</script>

<template>
  <main>
    <MenuComponent></MenuComponent>
    <h1>Facura</h1>
    <p>{{ user.user }}</p>
    <br>
    <!-- <button @click="closeSession">Cerrar sesion</button> -->
  </main>
</template>

<style scoped>

</style> 