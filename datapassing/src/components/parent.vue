<template>
    <div>
        <div class="card m-2" style="width: 40rem;">
            <div class="card-body">
                <h4 class="card-title" v-text="thecardtitle"></h4>
                <button @click="momSaidChill" class="btn btn-block btn-outline-danger" v-if="stopFighting()">Mom says
                    stop fighting!
                </button>
                <div class="d-flex justify-content-center">
                    <brother-card :messageson="messageson" @brothersaid="messageChild1($event)"></brother-card>
                    <sister-card :messageChild1="messageChild1" @sistersaid="messageSon($event)"></sister-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup() lang="ts">
    import { defineComponent } from '@vue/runtime-core';
import child from './child.vue';
    import child1 from './child1.vue';

    export default defineComponent{
        components: {child, child1}

        data:() => {
            return {
                thecardtitle: 'Parent Component!',
                messagedaughter: '',
                messageson: ''
            },
        };
           
        methods: {
            messageChild1(message) {
                this.messageChild1= message;
            },

            messageSon(message) {
                this.messageson = message;
            },

            stopFighting() {
                if (this.messagedaughter && this.messageson) {
                    return true;
                }
                return false;
            },

            momSaidChill() {
                this.messagedaughter = '';
                this.messageson = '';
            }
        }
    };
</script>

function momSaidChill() {
  throw new Error('Function not implemented.');
}
