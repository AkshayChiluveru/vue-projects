<template>
    <div class="container mt-3">
        <div class="col">
            <p class="h3 text-success fw-bold">Add Contact</p>
        </div>
    </div>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-4">
                <form @submit.prevent="submitCreate">
                    <div class="mb-2">
                        <input required v-model="contact.id" type="text" class="form-control" placeholder="id">
                    </div>
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
                        <input required v-model="contact.company" type="text" class="form-control" placeholder="Company">
                    </div>
                    <div class="mb-2">
                        <input required v-model="contact.website" type="text" class="form-control" placeholder="website">
                    </div>
                    <div class="mb-2">
                        <input required type="submit" class="btn btn-success" vlaue="create">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContactService from '../services/ContactService';
import source from '../components/data.json'

export default defineComponent({
    name: "AddContact",
    data(){
        return{
            contactId: this.$route.params.contactId,
            contacts: source.contacts,
            contact : {
                id: '',
                name :'',
                username :'',
                phone :'',
                company:'',
                website : '',
            },
        }
    },
    methods:{
        submitCreate(){
                //  ContactService.createContact(this.contact);
                this.contacts.push(this.contact)
                this.$router.push('/');
        
        }
    }
});
</script>