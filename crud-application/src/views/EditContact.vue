<template>
    <div class="container mt-3">
        <div class="col">
            <p class="h3 text-success fw-bold">Edit Contact</p>
        </div>
    </div>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-5">
                <form @submit.prevent="submitUpdate()">
                    <div class="mb-2">
                        <input required v-model="contact.name" type="text" class="form-control" placeholder="Name">
                    </div>
                    <div class="mb-2">
                    
                        <input required v-model="contact.username" type="text" class="form-control" placeholder="User Name">
                    </div>
                    <div class="mb-2">
                        <input required v-model="contact.phone" type="text" class="form-control" placeholder="Phone">
                    </div>
                    <div class="mb-2">
                        <input required v-model="contact.email" type="text" class="form-control" placeholder="email">
                    </div>
                    <div class="mb-2">
                        <input required v-model="contact.website" type="text" class="form-control" placeholder="Website">
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-success" vlaue="Update">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <pre>{{contactId}}</pre>
</template>

<script lang="ts">
import ContactService from "../services/ContactService"
import { defineComponent } from "@vue/runtime-core"
import source from "../components/data.json";


export default defineComponent({
    name: "EditContact",
    data(){
        return{
            data:[],
            contactId: this.$route.params.contactId,
            contact : {
                name :'',
                username : '',
                phone :'',
                email:'',
                website : ''
            } ,
        }
    },
    created (){
        ContactService.getContact(this.contactId)
        .then(response =>{
            this.contact = response.data;
        })
        .catch(error =>{
            console.log(error);

        })
    },
    methods:{
        findIndex: (id: number) => source.contacts.findIndex(xyz => xyz.id==id),
        submitUpdate(){
            let index = this.findIndex(this.contactId)
            source.contacts[index] = this.contact
            this.$router.push('/')
        }
    }
});


</script>