<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
  <h1>Login Form</h1>
  <div class="form-group">
    <label for="Enter Name">Enter Name: </label> 
    <input type="text" class="from-control" id="enter name" placeholder="Enter Name" />
  </div>
  <div class="form-group">
    <label for="Last Name">last Name: </label> 
    <input type="text" class="form-control" id="enter password" placeholder="Enter Name" />
  </div>
  <div class="form-group">
    <label for="Email address">Enter Email: </label> 
    <input type="text" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter Email" />
    <small id="email" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="Enter Password">Enter password: </label> 
    <input type="password" class="form-control" placeholder="Enter password" id="password" />
  </div>
  <button class="btn btn-primary">
    submit
  </button>
</template>
