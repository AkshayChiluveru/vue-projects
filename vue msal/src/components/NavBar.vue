<template>

    <nav class="navbar bg-primary">

        <router-link to="/">
            <h2 class="mx-2">
                <span class="mx-2 text-white bg-primary">Vue Msal
                </span>
            </h2>
        </router-link>
        <p class="text-white" v-if="isLoggedIn()"><strong> welcome </strong></p>
        <ul class="p-0 m-0">
            <li style="list-style: none">
                <button class="me-2 btn btn-primary" v-show="!isLoggedIn()" @click="login">Login</button>
                <button class="me-2 btn btn-primary" v-show="isLoggedIn()" @click="logout">Logout</button>
                <router-link to="/profile">
                    <button class="me-2 btn btn-primary">Profile</button>
                </router-link>
            </li>
        </ul>
    </nav>

</template>

<script setup lang="ts">
import { MsalDataService } from '../services/MsalDataService';

const service = new MsalDataService()
function isLoggedIn() {
    console.log(service.isLoggedIn())
    return service.isLoggedIn()
}
function login() {
    service.login()
}
function logout() {
    service.logout()
}
</script>