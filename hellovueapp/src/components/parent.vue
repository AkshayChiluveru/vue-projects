<template>
    <!-- <div >
        <h3>{{pageName}} -- {{title}}</h3>
    </div>
    <div class="submit-btn">    
        <p>    
           <input type="submit" value="Submit" @click="callingParentComponentMethod">    
           "OR"    
           <input type="submit" value="Submit" v-on:click="callingParentComponentMethod">    
        </p>    
     </div>     -->
     <input ref="input" />
</template>

<script setup>

import { ref, onMounted } from 'vue'

// declare a ref to hold the element reference
// the name must match template ref value
const input = ref(null)

onMounted(() => {
  input.value.focus()
})
// export default {
//     name: "parentComponent",
//     props:[
//         "title"
//     ],
//     methods: {    
//       // This method will call on click of submit button    
//       callingParentComponentMethod() {    
//       // emit the event and call the parent component    
//       this.$emit("setParentComponentDetails");    
//       }, 
     
//    },    
//     data() {
//         return {
//             pageName: "hello Bro",
//         };
            
//     },
// }
</script>