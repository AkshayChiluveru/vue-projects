<script setup lang="ts">
import {  onMounted, ref } from 'vue';
import {  RouterView } from 'vue-router'
import { msalInstance } from '../authConfig'
import NavBar from './components/NavBar.vue'
onMounted(()=>{
    msalInstance.handleRedirectPromise().then(
      response =>{
        if(response != null && response.account != null){
            msalInstance.setActiveAccount(response.account)
        }
      }
    )
})
</script>

<template>

<div>
  <NavBar />
  <RouterView />
</div>
 
</template>

<style scoped>
</style>
