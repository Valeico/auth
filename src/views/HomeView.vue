<script setup>
// import router from '../router';
import MenuComponent from '../components/MenuComponent.vue';
</script>

<template>
  <main>
    <MenuComponent></MenuComponent>
    <h1>Home</h1>
    <div class="main-target">
      <div class="target">
        <i class='bx bx-calculator' ></i>
        <p>Nuevas facturas</p>
      </div>
      <div class="target">
        <i class='bx bxs-user-detail' ></i>
        <p>Clientes</p>
      </div>
      <div class="target">
        <i class='bx bxs-user-circle' ></i>
        <p>Usuarios</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main-target {
  border: 1px solid black;
}
</style> 