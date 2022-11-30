<template>
    <div>
        <div class="card m-3" style="width: 15rem;">
            <div class="card-body">
                <h5 class="card-title" v-text="thecardtitle"></h5>
                <p class="card-text">I'm a <b>brother</b>.</p>
                <button @click="messageSister" class="btn btn-primary">Message Sister</button>
                <div v-if="messageson" class="mt-3 alert alert-secondary" v-html="messageson"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"

    export default defineComponent{
        props: ['messageson'],

        data:() => {
            return {
                thecardtitle: 'Child Component!'
            }
        };

        methods: {
            messageSister() {
                this.$emit('brothersaid', 'Mom said do your homework!')
            }
        }
    };

function messageSister() {
  throw new Error("Function not implemented.");
}
</script>