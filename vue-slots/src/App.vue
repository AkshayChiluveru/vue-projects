<script setup lang="ts">
import FancyButton from './views/HomeView.vue'
import FancyButton1 from './views/AboutView.vue'
import SubmitButton from './views/FallBack.vue'
import BaseLayout from './views/BaseLayout.vue'
import MyComponent from './components/MyComponent.vue'
  { FancyButton } { FancyButton1 } { SubmitButton }
  { BaseLayout } {MyComponent}

</script>

<template>
  <FancyButton>
    Click me <!-- slot content -->
 	</FancyButton>

   <FancyButton>
    <span>Click me! </span>
    <FancyButton1 />
  </FancyButton>

   <!-- use fallback text -->
   <SubmitButton />
  
  <!-- provide custom text -->
  <SubmitButton >Save</SubmitButton>

  <BaseLayout>
    <template v-slot:header>
      <h1>Here might be a page title</h1>
    </template>

    <template v-slot:default>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>

    <template v-slot:footer>
      <p>Here's some contact info</p>
    </template>
  </BaseLayout>

  <MyComponent v-slot="slotProps">
  	{{ slotProps.text }} {{ slotProps.count }}
  </MyComponent>

</template>