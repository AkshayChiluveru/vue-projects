<template>
  <div class="profile">
    <h1>No.of Chocolates</h1>
    <button @click="count++">{{ count }}</button>
    <span v-bind:title="message">
      Hover mouse over me for a few seconds
      and see a dynamically bound title which I have set!
    </span>
    <input
      v-model="name"
      placeholder="Enter your name"
    />
    <h3><br /> Your name is: {{ name }}</h3>
  </div>
</template>


  <script setup() lang="ts">
import { reactive } from "vue";

const state = reactive({ count: 0 });

function increment() {
  state.count++;
}
  export default {
    data: function(){
        return{
            count: 0,
            name: "Akshay",
            message: 'You loaded this page on ' + new Date().toLocaleString()
        }
    }
  }
</script>

  

  
   <style>
@media (min-width: 1024px) {
  .profile {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  input{
    display: flex;
    align-items: center;

  }
}
</style>
   