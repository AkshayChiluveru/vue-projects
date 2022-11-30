<template>
  <HelloWorld msg="Welcome to Your Vue.js " />
  <parent v-bind:title="titleMessage" />
  <div id="app">
    <Child setParentComponentDetails="setDetailsForComponent"> </Child>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import parent from "./components/parent.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    parent,
  },
  methods: {
    // Called by child component
    setDetailsForComponent() {
      console.log("Calling from child component");
    },
  },
  data() {
    return {
      titleMessage: "Hey Bro",
    };
  },
};
</script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
