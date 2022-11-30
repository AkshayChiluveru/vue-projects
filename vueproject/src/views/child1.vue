<template>
  <div class="card-body">
    <b-row class="mt-3">
      <b-row bg-variant="dark" text-variant="white">
        <!-- <div class="cols-12 cols-sm-12 cols-md-6 cols-lg-3"> -->
        <h2>{{ message }}</h2>
        <button class="btn btn-info" @click="popup()">alert message</button>
      </b-row>
      <!-- </div> -->
    </b-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data: () => ({
    message: 'hi from child1',
  }),
  methods: {
    popup() {
      window.alert('from-child1', window.message);
    },
  },
});
</script>
