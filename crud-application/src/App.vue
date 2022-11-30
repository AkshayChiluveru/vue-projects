<script setup lang="ts">
import { onMounted } from 'vue'
import NavBar from '../src/components/NavBar.vue'
import contactService from './services/ContactService'


onMounted(()=>{
    // console.log(contactService.getContact(2))

})

 function get(){
    // contactService.api()
}
</script>

<template>
<div>
    <NavBar />
 <router-view />

</div>
</template>

<style scoped>

</style>
