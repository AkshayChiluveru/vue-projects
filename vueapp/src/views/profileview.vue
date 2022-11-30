<template>
    <div class="profile">
      <h1>This is an profile page</h1>
      <h2>Checked names: {{ checkedNames }}</h2>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>
      <input type="checkbox" id="checkbox"  />
	<label for="checkbox">true</label> <br />
    <button @click="awesome = !awesome">toggle</button>

	<h1 v-if="awesome">Vue is awesome!</h1>
	<h1 v-else>Oh no </h1>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue'
    
    const checkedNames = ref([])
    const awesome = ref(true)
    </script>