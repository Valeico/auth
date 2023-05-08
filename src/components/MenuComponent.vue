<script setup>
import { ref } from 'vue';
import router from '../router';
  let teme = ref('');
  let handleBarClose = ref(true);
  teme.value = localStorage.getItem('teme');
  let handlSwitch = teme.value == 'dark' ? ref(false) : ref(true);
  let body = ref('');
  let prefencesTeme = ref('');
  const userData = ref([]);

  const closeSession = () => {
    $cookies.remove('auth');
    router.push('/');
  }

  userData.value = $cookies.get('auth');

  const darkMode = () => {
    teme.value = localStorage.getItem('teme');
    console.log('Tema 1', teme.value);
        if(teme.value != 'dark') {
            console.log('Tema 2',teme.value);
            localStorage.setItem('teme', 'dark');
            body.value = document.querySelector('body');
            body.value.classList.toggle("dark");
            handlSwitch.value = false;
        } else {
            console.log('Tema 3',teme.value);
            body.value = document.querySelector('body');
            body.value.classList.remove("dark");
            // localStorage.removeItem('teme');
            localStorage.setItem('teme', 'ligth');
        }
  }
  
</script>

<template>
    <!-- Nav -->
    <nav :class="[handleBarClose ? 'side-bar' : 'meme']">
        <!-- Heade data user -->
        <header>
            <div class="image-text">
                <i class='bx bx-globe bx-lg box'></i>
                <div class="text header-text">
                    <span class="rol">
                        {{ userData.rol }}
                    </span>
                    <span class="user">
                        {{ userData.user }}
                    </span>
                </div>
            </div>
            <i class="bx bx-chevron-right toggle" @click="handleBarClose = !handleBarClose"></i>
        </header>

        <!-- Nav list -->
        <div class="menu-bar">
            <div class="menu">
                <li class="search-box">
                    <i class='bx bx-search-alt-2 icon'></i>
                    <input type="search" placeholder="search...">
                </li>
                <ul class="menu-links">
                    <li class="nav-link" v-for='(menu, i) in userData.apps' :key="i">
                        <a href="/factura">
                            <i class='bx bx-home icon'></i>
                            <span class="nav-text">{{ menu.name }}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <button class="logout" @click="closeSession">Cerrar sesion <i class='bx bx-log-out'></i></button>
        <li class="mode">
            <div class="mon-sun">
                <i class='bx bx-sun icon moon' ></i>
                <i class='bx bx-moon icon sun' ></i>
            </div>
            <span>Dark Mode</span>
            <div @click="darkMode">
                <div class="toggle-switch" @click="handlSwitch = !handlSwitch">
                    <div :class="[handlSwitch ? 'switch' : 'switch mo']"></div>
                </div>
            </div>
        </li>
    </nav>
</template>

<style scoped>

/*======== Resuable CSS =====*/
.side-bar .text {
    /* border: solid 1px black; */
    margin-top: 8px;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
}

.side-bar .image-text {
    /* border: solid 1px black; */
    min-width: 60px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    
}

/*======== Side Bar =========*/
header{
    position: relative;
}

.side-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    padding: 10px 14px;
    background-color: var(--sidebar-color);
    border: solid 1px black;
}

.side-bar li {
    height: 50px;
    /* background: red; */
    margin-top: 10px;
    list-style: none;
    display: flex;
    align-items: center;
}

.side-bar li a {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    border-radius: 6px;
    transition: var(--tran-04)
}

.side-bar li a:hover {
    background: var(--primary-color);
}

.side-bar li a:hover .icon,
.side-bar li a:hover .nav-text{
    color: var(--sidebar-color);
}

.icon {
    min-width: 40px;
    margin-left: 10px;
    font-size: 20px;
}

.icon, .nav-text, text{
    color: var(--text-color);
}

.box {
    height: 55px;
    width: 55px;
    background: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20%;
    color: var(--sidebar-color);
}

.toggle {
    position: absolute;
    top: 50%;
    right: -11%;
    transform: translateY(-50px);
    height: 25px;
    width: 25px;
    background: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: var(--sidebar-color);
}

.search-box {
    background-color: var(--primary-color-light);
}

.search-box input {
    height: 100%;
    width: 100% ;
    outline: none;
    border: none;
}

.logout {
    color: var(--primary-color);
    width: 100%;
    height: 50px;
    margin-top: 50px;
    border: none;
    cursor: pointer;
    transition: var(--tran-04)
}


.logout:hover {
    background: var(--primary-color);
    color: var(--primary-color-light);
}

.side-bar .mode {
    background: var(--primary-color-light);
}

.side-bar .mode .mon-sun{
    height: 50px;
    width: 60px;
    display: flex;
    align-items: center;    
}
.side-bar .mode i {
    position: absolute;
}

.side-bar .mode i.sun {
    opacity: 0;
}

.side-bar .mode .toggle-switch {
    display: flex;
    align-items: center;
    height: 25px;
    margin-left: 10px;
    min-width: 60px;
    border-radius: 20px;
    background: var(--primary-color);
}

.switch {
    margin-left: 5px;
    width: 20px;
    height: 20px;
    background: var(--toggle-color);
    border-radius: 50%;
    transition: var(--tran-04);
}
.mo {
    margin-left: 35px;
    transition: var(--tran-04);
}
.meme{
    background: #18191A;
}
</style> 