<script setup lang="ts">
import { MsalDataService } from "../services/MsalDataService";
import { onMounted, reactive, ref } from "@vue/runtime-core";
const service=new MsalDataService()
let profile = reactive({
	data: {}
});
let profilePhoto=ref()
onMounted(() => {
  getProfile()
  getImg()
})
async function getProfile() {
  profile.data = await service.callProfile()
  
}

async function getImg() {
  const temp= await service.getPhoto()
  var UrlCreator = window.URL || window.webkitURL
  profilePhoto.value=UrlCreator.createObjectURL(temp)
  console.log(profilePhoto.value)
}
</script>
<template>
  <div>
    <div class="container mt-4">
      <div class="row d-flex justify-content-center">
        <div class="col-md-7 mt-4">
          <div>
            <div>
              <div class="card mt-4 rounded">
                <div class="text-center" style="margin-top:-60px">
                  <img width="200" class="rounded-circle" :src="profilePhoto"/>
                </div>
                <table class="table table-borderless text-center">
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex flex-column">
                          <span class="text-left head badge bg-dark">FULL NAME</span>
                        </div>
                      </td>
                      <td>
                        <div class="d-flex flex-column">
                          <span class="text-left head">
                            <h5>{{profile.data.displayName}}</h5>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex flex-column">
                          <span class="text-left head badge bg-dark">EMAIL</span>
                        </div>
                      </td>
                      <td>
                        <div class="d-flex flex-column">
                          <span class="text-left head">
                            <h5>{{profile.data.mail}}</h5>
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex flex-column badge bg-dark">
                          <span class="text-left head">NAME</span>
                        </div>
                      </td>
                      <td>
                        <div class="d-flex flex-column">
                          <span class="text-left head ">
                            <h5>{{profile.data.surname}}</h5>
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
