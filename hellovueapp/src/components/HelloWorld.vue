<template>
<h1>Parent Component</h1>
<div id="app-2">
  <span v-bind:title="message">
    Hover mouse over me for a few seconds
    and see a dynamically bound title which I have set!
  </span>
  <input type="text" v-model="message" />

  <p>The default name is <strong>{{ message }}</strong></p>
</div>
<h3>My Name is {{ name }}</h3>
<button v-on:click="changeName('Akash')">Change Name</button>

<!-- <div id ="wat_pro">  
  Kilometers : <input type = "text" v-model = "kilometers"><br/>  
  Meters : <input type = "text" v-model = "meters">  
</div>   -->

</template>

<script>
export default {
  el: "#app",
  data: function () {
    return {
      message: "Akshay",
      message: 'You loaded this page on ' + new Date().toLocaleString(),
      name: "Akshay"
    }

  },
  methods: {
    changeName(name) {
      this.name = name
    },
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>


