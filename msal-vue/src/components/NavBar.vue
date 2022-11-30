<template>
  <nav class="navbar bg-primary">
    <router-link to="/">
    <h2><span class="mx-2 text-white bg-primary">Msal-Vue</span></h2>
    </router-link>
    <p class="text-white" v-if="isAuthenticated()"><strong> welcome </strong></p>
        <ul class="p-0 m-0">
            <li style="list-style: none">
                <button class="me-2 btn btn-primary" v-if="!isAuthenticated()" @click="login">Login</button>
                <button class="me-2 btn btn-primary" v-if="isAuthenticated()" @click="logout">Logout</button>
                <router-link to="/profile">
                    <button class="me-2 btn btn-primary">Profile</button>
                </router-link>

            </li>
        </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {MsalService} from '../services/MsalService'

let name=ref('')
const msal = new MsalService()
 function isAuthenticated(){
  console.log(msal.isAuthenticated)
  return msal.isAuthenticated()
}
 function login() {
  msal.login()
  }
  function logout() {
    msal.logout()
  }
</script>