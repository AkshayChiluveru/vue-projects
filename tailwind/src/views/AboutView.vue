<template>
  <div class="about">
    <button @click="count++">count is: {{count}}</button>
  </div>

</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
  data() {
  return {
    count: 0
  }
}

})

</script>