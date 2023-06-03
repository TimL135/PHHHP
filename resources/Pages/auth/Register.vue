<template>
  <div>
    <TextInput placeholder="name" v-model="name" :error="errors" name="name"></TextInput>
    <EmailInput placeholder="email" v-model="email" :error="errors" name="email"></EmailInput>
    <PasswordInput placeholder="passwort" v-model="password" :error="errors" name="password"></PasswordInput>
    <PasswordInput placeholder="passwort bestätigen" v-model="confirmPassword" :error="errors" name="confirmPassword">
    </PasswordInput>
    <Button @click="register" class="btn btn-primary w-100 mt-3">registrieren</Button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import * as type from "../../js/types";
import * as API from "../../js/Api";
import {
  TextInput,
  PasswordInput,
  EmailInput,
  Button,
} from "custom-mbd-components";

const name = ref("Test123");
const email = ref("Test@test.de");
const password = ref("Test1234");
const confirmPassword = ref("Test1234");
const errors = ref({} as type.Errors);
async function register() {
  errors.value = {};
  if (password.value != confirmPassword.value)
    for (let e of ["password", "confirmPassword"])
      errors.value[e] = "Die Passwörter stimmen nicht überein";
  if (!name.value) errors.value["name"] = "Du musst einen Namen angeben";
  if (!name.value) errors.value["email"] = "Du musst eine Email angeben";
  if (!password.value)
    errors.value["password"] = "Du musst ein Passwort angeben";
  if (!confirmPassword.value)
    errors.value["confirmPassword"] = "Du musst dein Passwort bestätigen";
  if (Object.keys(errors.value).length > 0) return;
  try {
    await API.register(name.value, email.value, password.value, confirmPassword.value);
  } catch { }
}
</script>
<style scoped></style>
