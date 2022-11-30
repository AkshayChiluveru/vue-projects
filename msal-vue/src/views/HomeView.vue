<script setup lang="ts">
import { onBeforeMount } from '@vue/runtime-core';
import { MsalService } from '../services/MsalService';

const service = new MsalService

onBeforeMount(() =>{
  if(!service.isAuthenticated())
  service.login()
})

</script>

<template>
  <div class="row justify-content-center"> 
    <div class="col-4 mt-4">
      <h2>This is a home page</h2>
      <p>you are successfully Logged In</p>
    </div>

</div>

</template>
 

