<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";
import { onBeforeMount } from 'vue';

import { MsalDataService } from '../services/MsalDataService';

const service=new MsalDataService()

onBeforeMount(()=>{
  if(!service.isLoggedIn()){
    service.login()
  }
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
