<template>
    <div>
        <TextInput placeholder="name" v-model="form.name">
            <template #button>
                <Button sideButton @click="create" :loading="form.processing"
                    >erstellen</Button
                >
            </template>
        </TextInput>
        <InputError :message="form.errors.name" />
    </div>
</template>
<script setup lang="ts">
import { TextInput, Button } from "custom-mbd-components";
import { useForm } from "@inertiajs/vue3";
import InputError from "../InputError.vue";

const form = useForm({
    name: "",
});
async function create() {
    form.post("api/addGroup");
}
</script>
<style scoped></style>
