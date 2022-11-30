<template>
  <div class="container mt-3 align-items-center">
    <div class="row">
      <div class="col-md-6">
        <div class="card my-2 list-group-item-success shadow-lg">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-sm-3">
                <img  class="contact-img rounded-circle" width="150"
                  :src="profilePhoto" 
                />
              </div>
              <div class="col-sm-7">
                <ul class="list-group">
                  <li class="list-group-item">
                    Full Name : <span class="fw-bold">{{profile.data.displayName}}</span>
                  </li>
                  <li class="list-group-item">
                    job Title : <span class="fw-bold">{{profile.data.jobTitle}}</span>
                  </li>
                  <li class="list-group-item">
                    Phone : <span class="fw-bold">{{profile.data.mobilePhone}}</span>
                  </li>
                  <li class="list-group-item">
                    mail : <span class="fw-bold">{{profile.data.mail}}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MsalService } from "../services/MsalService";
import { onMounted, reactive, ref } from "@vue/runtime-core";
const service = new MsalService();
let profile = reactive({
  data: {},
});
let profilePhoto = ref();
onMounted(() => {
  getProfile();
  getImg();
});
async function getProfile() {
  profile.data = await service.callProfile();
}

async function getImg() {
  const temp = await service.getPhoto();
  var UrlCreator = window.URL || window.webkitURL;
  profilePhoto.value = UrlCreator.createObjectURL(temp);
  console.log(profilePhoto.value);
}
</script>

<style>
</style>
