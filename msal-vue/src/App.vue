<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import { msalInstance } from '../authConfiguration';
import { onMounted } from '@vue/runtime-core';

onMounted(() =>{
  msalInstance.handleRedirectPromise().then(
    res =>{
      if(res !=null && res.account !=null){
      msalInstance.setActiveAccount(res.account)
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
