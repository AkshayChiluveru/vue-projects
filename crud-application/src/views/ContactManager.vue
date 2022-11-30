<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">
          Contact Manager
          <router-link
            to="/contacts/add"
            class="btn btn-success btn-sm"
          >Add Contact</router-link>
        </p>
        <form>
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="search Name"
                  />
                </div>
                <div class="col">
                  <input
                    type="submit"
                    class="btn btn-outline-dark"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- <pre>{{contacts}}</pre> -->
  <div
    class="container mt-3"
   v-if="contacts.length > 0" 
  >
    <div class="row">
      <div
        class="col-md-6"
        v-for="(contact, index) in contacts"
        :key="contact.id"
        :contact="contact"
      >
        <div class="card my-2 list-group-item-success shadow-lg">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-sm-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFJZ3JaffX_9zWM_wqaUYPQeBVyN6n-By2d-bdyg&s"
                  class="contact-img"
                />
              </div>
              <div class="col-sm-7">
                <ul class="list-group">
                  <li class="list-group-item">
                    Id : <span class="fw-bold">{{contact.id}}</span>
                  </li>
                  <li class="list-group-item">
                    Name : <span class="fw-bold">{{contact.name}}</span>
                  </li>
                  <li class="list-group-item">
                    Phone : <span class="fw-bold">{{contact.phone}}</span>
                  </li>
                </ul>
              </div>
              <div class="col-sm-2 d-flex flex-column justify-content-center align-items-center">
                <router-link
                  :to="`/contacts/view/${contact.id}`"
                  class="btn btn-warning my-1"
                >View</router-link>
                <router-link
                  :to="`/contacts/edit/${contact.id}`"
                  class="btn btn-primary my-1"
                >Edit</router-link>
                <button
                  class="btn btn-danger my-1"
                  @click="clickDelete(index)"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ContactService from "../services/ContactService";
import { defineComponent } from "vue";
import source from "../components/data.json";

export default defineComponent({
  name: "ContactManager",
  props: ["id"],
  data() {
    return {
      contacts: source.contacts,
      errorMessage: null,
    };
  },
  created() {
    this.getAllContacts()
  },
  watch:{
   
  },

  methods: {
    clickDelete: async function (index: any) {
        var result = confirm("Want to delete?");
      if (result) {
            this.contacts.splice(index, 1)
       }
       this.$router.push('/')
        
    },
    getAllContacts(){
        contacts: source.contacts
    }
  },
});
</script>


