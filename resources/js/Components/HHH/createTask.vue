<template>
    <form @submit.prevent="submit">
        <TextInput
            placeholder="kurz Beschreibung"
            v-model="form.title"
            name="title"
        ></TextInput>
        <InputError :message="form.errors.title" />
        <SelectInput
            placeholder="zuweisen"
            v-model="searchSelect"
            :options="groupUser"
            :option-projection="(e) => e.name"
            @select-item="(e) => (form.worker_id = e.id)"
        ></SelectInput>
        <InputError :message="form.errors.worker_id" />
        <RadioGroup
            class="mt-2"
            v-model="form.repeat"
            :options="repeatOptions"
        ></RadioGroup>
        <InputError :message="form.errors.repeat" />
        <DateInput
            placeholder="nächster Termin"
            v-model="form.appointment"
            v-if="form.repeat >= 1"
        ></DateInput>
        <InputError :message="form.errors.appointment" />
        <TextareaInput
            placeholder="Notizen (optinoal)"
            v-model="form.notes"
        ></TextareaInput>
        <InputError :message="form.errors.notes" />
        <Button class="btn btn-primary w-100 mt-2">erstellen</Button>
    </form>
</template>
<script setup lang="ts">
import { ref, toRefs } from "vue";
import { useForm } from "@inertiajs/vue3";
import * as type from "../../types/type";
import {
    TextInput,
    TextareaInput,
    SelectInput,
    Button,
    RadioGroup,
    DateInput,
} from "custom-mbd-components";
import { repeatOptions, closeModal } from "../../global";
import InputError from "../InputError.vue";

const props = withDefaults(
    defineProps<{
        group: type.Group;
        groupUser: type.User[];
        user: type.User;
        modelValue: boolean;
    }>(),
    {}
);
const { group, groupUser, user } = toRefs(props);
const form = useForm({
    title: "",
    notes: "",
    done: false,
    creator_id: user.value.id,
    repeat: 0,
    worker_id: null,
    appointment: "",
});
const searchSelect = ref("");

function submit() {
    form.post(`api/${group.value.id}/addTask`, {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
            searchSelect.value = "";
            console.log(searchSelect.value);
        },
    });
}
</script>
<style scoped></style>
