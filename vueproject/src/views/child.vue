<template>
  <div class="card-body">
    <b-row class="mt-3">
      <b-row bg-variant="dark" text-variant="white">
        <!-- <div class="cols-12 cols-sm-12 cols-md-6 cols-lg-3"> -->
        <h2>child component</h2>
        <p>{{ localData }}</p>
        <button class="btn btn-info" @click="sendToParent()">
          send to parent
        </button>
        <p>
          The below button displays how many time you have been clicked:
          {{ count }}
        </p>
        <button class="btn btn-primary" @click="count++">
          You clicked {{ count }} times.
        </button>
      </b-row>
      <!-- </div> -->
    </b-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { child1 } from "./child1.vue";

const childCounter = ref(0);
export default defineComponent({
  props: ["parentData"],

  data: () => ({
    localData: null,
    childData: "hi, from child",
    count: 0,
  }),
  created() {
    this.localData = this.parentData;
  },
  methods: {
    sendToParent() {
      this.$emit("from-child", this.childData);
    },
  },
});
</script>

<style scoped>
.card-body {
  display: flex;
  border: black;
  text-align: center;
  justify-content: center;
}
</style>
