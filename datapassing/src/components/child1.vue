<template>
    <div>
        <div class="card m-3" style="width: 15rem;">
            <div class="card-body">
                <h5 class="card-title" v-text="thecardtitle"></h5>
                <p class="card-text">I'm a <b>sister</b>.</p>
                <button @click="messageChild" class="btn btn-warning">Message Brother</button>
                <div v-if="messageChild1" class="mt-3 alert alert-secondary" v-html="messageChild1"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"

    export default defineComponent{
        props: ['messageChild1'],

        data() {
            return {
                thecardtitle: 'Child Component!'
            }
        },

        methods: {
            messageChild() {
                this.$emit('sistersaid', 'Mom said do your homework!')
            }
        };
    }
</script>