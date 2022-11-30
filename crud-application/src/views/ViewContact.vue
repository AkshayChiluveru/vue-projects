<template>
   <div class="container mt-3">
        <div class="col">
            <p class="h3 text-success fw-bold">View Contact</p>
        </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-3" >
          <img src="https://cdn.icon-icons.com/icons2/2645/PNG/512/person_circle_icon_159926.png" class="addImg" >
        </div>
        <div class="col-md-6">
          <ul class="list-group">
                    <li class="list-group-item">Name : <span class="fw-bold">{{contacts.name}}</span></li>
                    <li class="list-group-item">User Name : <span class="fw-bold">{{contacts.username}}</span></li>
                    <li class="list-group-item">Phone : <span class="fw-bold">{{contacts.phone}}</span></li>
                    <li class="list-group-item">Email : <span class="fw-bold">{{contacts.email}}</span></li>
                    <li class="list-group-item">Website : <span class="fw-bold">{{contacts.website}}</span></li>
                </ul>
        </div>
      </div>
      <div class="row-mt-3">
        <div class="col">
          <router-link to="/" class="btn btn-primary">Back</router-link>
        </div>
      </div>
    </div>
    <!-- <pre>{{contacts}}</pre> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContactService from '../services/ContactService'
import users from '../components/data.json'

export default defineComponent({
    name: "ViewComponent",
    props:['id'],
    data() {
      return {
        contactId: this.$route.params.contactId,
        contacts: users,
      }
    },
    created: async function (){
      try{
      ContactService.getContact(this.contactId)
    .then(response =>{
        this.contacts = response.data;
        console.log() 
    })
  }
    catch(error){
        console.log(error)
    };
    },
});
</script>