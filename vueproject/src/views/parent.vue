<template>
  <div class="card">
    <h2>parent component</h2>
    <h3>{{ childData }}</h3>
    <div class="child">
      <Child :parentData="fromParent" v-on:from-child="fromChild" />
    </div>
  </div>
  <div class="d-flex justify-content-center">
    <child1></child1>
  </div>
  <Child1 />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Child from '../views/child.vue';
import child1 from '../views/child1.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'parent',
  components: {
    Child,
    child1,
  },
  data: () => ({
    fromParent: 'hi, my child',
    childData: null,
  }),
  methods: {
    fromChild(data: any) {
      this.childData = data;
    },
  },
});
</script>

<style scoped>
child {
  position: right;
  float: right;
}
h3 {
  color: red;
}
.card {
  display: flex;
  text-align: center;
  justify-content: center;
}

button {
  background-color: rgb(148, 148, 245);
}
</style>
