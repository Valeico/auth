<script setup>
import  { ref } from 'vue';
import AuthServices from '../services/AuthServices.js';
import router from '../router';
  let email = ref('');
  let pwd = ref('');

  const submit = async () => {
    const authService = await AuthServices(email.value, pwd.value);
    if(authService.jsonBolean){
      $cookies.set('auth', {
        authJson: authService.json,
        user: 'Raul',
        rol: 'Admin',
        apps: [
          {
            name: 'Factura',
            enlace: '/factura',
            icon: 'bx bx-home icon'
          },
          {
            name: 'lista Facturas',
            enlace: '/gridFactura'
          },
          {
            name: 'Clientes',
            enlace: '/clientes'
          },
        ]
      });
      router.push('/home');
    } else {
      alert(authService);
    }
  }
</script>

<template>
	<div class="body">
        <div class="login">
		    <div class="login-screen">

		    	<div class="app-title">
		    		<h1>Login</h1>
		    	</div>

		    	<div class="login-form">

		    		<div class="control-group">
		    		    <input type="email" class="login-field" v-model="email" placeholder="username" id="login-name">
		    		</div>

		    		<div class="control-group">
		    		    <input type="password" class="login-field" v-model="pwd" placeholder="password" id="login-pass">
		    		</div>
            <button @click.prevent="submit" @keyup="submit" class="btn btn-primary btn-large btn-block">Login</button>
            <br>
		    		<!-- <a class="login-link" href="#">forget your password?</a> -->

		    	</div>

		    </div>
	    </div>
    </div>
</template>

<style scoped>
* {
box-sizing: border-box;
}

*:focus {
	outline: none;
}
.login {
margin: 20px auto;
width: 300px;
}
.login-screen {
background-color: #FFF;
padding: 20px;
border-radius: 5px
}

.app-title {
text-align: center;
color: #777;
}

.login-form {
text-align: center;
}
.control-group {
margin-bottom: 10px;
}

input {
text-align: center;
background-color: #ECF0F1;
border: 2px solid transparent;
border-radius: 3px;
font-size: 16px;
font-weight: 200;
padding: 10px 0;
width: 250px;
transition: border .5s;
}

input:focus {
border: 2px solid #3498DB;
box-shadow: none;
}

.btn {
  border: 2px solid transparent;
  background: #3498DB;
  color: #ffffff;
  font-size: 16px;
  line-height: 25px;
  padding: 10px 0;
  text-decoration: none;
  text-shadow: none;
  border-radius: 3px;
  box-shadow: none;
  transition: 0.25s;
  display: block;
  width: 250px;
  margin: 0 auto;
}

.btn:hover {
  background-color: #2980B9;
}

.login-link {
  font-size: 12px;
  color: #444;
  display: block;
	margin-top: 12px;
}
.body {

font-family: Arial;
background-color: #3498DB;
padding: 50px;
}
</style>