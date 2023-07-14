<template>
    <form @submit.prevent="submit">
        <TextInput placeholder="kurz Beschreibung" v-model="form.title" name="title"></TextInput>
        <InputError :message="form.errors.title" />
        <SelectInput
            placeholder="zuweisen"
            v-model="searchSelect"
            :options="group.users"
            :option-projection="(e: type.Groupuser) => e.user.name"
            @select-item="(e: type.Groupuser) => (form.worker_id = e.user.id)"
        ></SelectInput>
        <InputError :message="form.errors.worker_id" />
        <RadioGroup class="mt-2" v-model="form.repeat" :options="repeatOptions"></RadioGroup>
        <InputError :message="form.errors.repeat" />
        <DateInput placeholder="nächster Termin" v-model="form.appointment" v-if="form.repeat >= 1"></DateInput>
        <InputError :message="form.errors.appointment" />
        <NumberInput v-if="groupUser.is_admin" placeholder="Punkte" v-model="form.points"></NumberInput>
        <TextareaInput placeholder="Notizen (optinoal)" v-model="form.notes"></TextareaInput>
        <InputError :message="form.errors.notes" />
        <Button class="btn btn-primary w-100 mt-2" :loading="form.processing">erstellen</Button>
    </form>
</template>
<script setup lang="ts">
import { ref, toRefs } from 'vue';
import { useForm } from '@inertiajs/vue3';
import * as type from '../../types/type';
import { TextInput, TextareaInput, SelectInput, Button, RadioGroup, DateInput, NumberInput } from 'custom-mbd-components';
import { repeatOptions, closeModal } from '../../global';
import InputError from '../InputError.vue';

const props = withDefaults(
    defineProps<{
        group: type.Group;
        groupUser: type.Groupuser;
        user: type.User;
        modelValue: boolean;
    }>(),
    {}
);
const { group, user } = toRefs(props);
const form = useForm({
    title: '',
    notes: '',
    done: false,
    creator_id: user.value.id,
    repeat: 0,
    worker_id: null as type.Id | null,
    appointment: '',
    points: 0,
});
const searchSelect = ref('');

function submit() {
    form.post(`api/${group.value.id}/addTask`, {
        onSuccess: () => {
            form.reset();
            searchSelect.value = '';
            closeModal();
        },
    });
}
</script>
<style scoped></style>
