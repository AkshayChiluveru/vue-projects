<script lang="ts">
import{ defineComponent } from "@vue/runtime-core";
import sourceData from "../data.json";
export default defineComponent({
  data: () => {
  return {
    destinations: sourceData.destinations,
  };
}

})

</script>

<template>
  <div class="home">
    <h1> All Destinations</h1>
    <div class="destinations">
      <router-link 
      v-for="destination in destinations" 
      :key="destination.id" 
      :to="{name: 'destination.show', params:{id: destination.id, slug:destination.slug}}"
     >
  <h2>{{destination.name}}</h2>
  <img :src="`/src/assets/images/${destination.image}`" :alt="destination.name"/>
  </router-link>
    </div>
  
  </div>
</template>
