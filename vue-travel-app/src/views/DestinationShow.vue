<template>
    <section class="destination">
        <h2>{{destination.name}}</h2>
        <div class="destination-details">
            <img :src="`/src/assets/images/${destination.image}`" :alt="destination.name">
            <p>{{destination.description}}</p>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import sorceData from '../data.json';
export default defineComponent({
computed:{
    destinationId(){
        return parseInt(this.$route.params.id)
    },
    destination(){
        return sorceData.destinations.find(destination => destination.id === this.destinationId)
    }
}
})
</script>