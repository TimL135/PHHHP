<template>
  <div>
    <EmailInput placeholder="email" v-model="email"></EmailInput>
    <PasswordInput placeholder="passwort" v-model="password"></PasswordInput>
    <Button @click="login" class="w-100 btn btn-primary mt-2"> login</Button>
    <Button href="/register" class="w-100 btn btn-primary mt-2">
      register</Button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import * as API from "../../js/Api";
import { PasswordInput, EmailInput, Button } from "custom-mbd-components";


const email = ref("");
const password = ref("");

async function login() {
  try {
    await API.login(email.value, password.value);
    switchRoute("dashboard");
  } catch { }
}

function switchRoute(route: string) {

}
</script>
<style scoped></style>
