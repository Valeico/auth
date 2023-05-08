<script setup>
import { RouterLink, RouterView } from 'vue-router';
let pepe = localStorage.getItem('teme');
let body = document.querySelector('body');
if(pepe == 'dark'){
    // console.log(pepe)
    body.classList.toggle("dark");
}

</script>

<template>
  <RouterView></RouterView>
</template>

<style scoped>
</style> 