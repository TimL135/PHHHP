<template>
    <div>
        <TextInput placeholder="name" v-model="form.name">
            <template #button>
                <Button sideButton @click="create">erstellen</Button>
            </template>
        </TextInput>
        <InputError :message="form.errors.name" />
        <!-- <CheckboxInput v-model="isPublic">private Gruppe</CheckboxInput> -->
    </div>
</template>
<script setup lang="ts">
import { ref, toRefs } from "vue";
import { TextInput, Button } from "custom-mbd-components";
import { useForm } from "@inertiajs/vue3";
import InputError from "../InputError.vue";

const form=useForm({
name:""
});
const isPublic = ref(true);
async function create() {
form.post("api/addGroup")
}
</script>
<style scoped></style>
