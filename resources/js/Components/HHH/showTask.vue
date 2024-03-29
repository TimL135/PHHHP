<template>
    Ersteller: {{ creator?.user.name }}
    <TextInput placeholder="kurz Beschreibung" v-model="editForm.title"></TextInput>
    <InputError :message="editForm.errors.title" />
    <SelectInput
        :disabled="dashboard"
        placeholder="zugewiesen"
        v-model="searchSelect"
        :options="group.users"
        :option-projection="(e:type.Groupuser) => e.user.name"
        @select-item="(e:type.Groupuser) => (editForm.worker_id = e.user.id)"
    ></SelectInput>
    <InputError :message="editForm.errors.worker_id" />
    <RadioGroup class="mt-2 p-0 py-2" v-model="editForm.repeat" :options="repeatOptions"></RadioGroup>
    <RadioGroup class="mt-2" v-model="editForm.important" :options="importantOptions"></RadioGroup>
    <InputError :message="editForm.errors.repeat" />
    <DateInput placeholder="nächster Termin" v-model="appointment" v-if="editForm.repeat >= 1"></DateInput>
    <NumberInput placeholder="Punkte" v-model="editForm.points"></NumberInput>
    <TextareaInput placeholder="Notizen (optinoal)" v-model="editForm.notes"></TextareaInput>
    <InputError :message="editForm.errors.notes" />
    erstellt
    <div class="d-flex">
        <div class="w-50 me-2">
            <DateInput placeholder="am" v-model="createDate" disabled></DateInput>
        </div>
        <div class="w-50">
            <TimeInput placeholder="um" v-model="createTime" disabled></TimeInput>
        </div>
    </div>

    <div class="my-2">
        <CheckboxInput v-model="editForm.done">erledigt</CheckboxInput>
    </div>
    <div class="d-flex">
        <Button class="btn btn-primary me-2" @click="editTask()" :loading="editForm.processing">speichern</Button>
        <Button class="btn btn-danger" @click="deleteTask()" :loading="deleteForm.processing">löschen</Button>
    </div>
</template>
<script setup lang="ts">
import { computed, ref, toRefs } from 'vue';
import * as type from '../../types/type';
import { TextInput, TextareaInput, SelectInput, Button, RadioGroup, DateInput, TimeInput, CheckboxInput, NumberInput } from 'custom-mbd-components';
import { repeatOptions, importantOptions, closeModal } from '../../global';
import { useForm } from '@inertiajs/vue3';
import InputError from '../InputError.vue';

const props = withDefaults(
    defineProps<{
        group: type.Group;
        task: type.Task;
        dashboard?: boolean;
    }>(),
    {
        dashboard: false,
    }
);
const { group, task } = toRefs(props);
const createDate = ref(task.value.created_at);
const createTime = ref(task.value.created_at);
const searchSelect = ref(group.value.users.find(e => e.user.id == task.value.worker_id)?.user.name || '');
const editForm = useForm({
    title: task.value.title,
    notes: task.value.notes,
    done: task.value.done,
    creator_id: task.value.creator_id,
    repeat: task.value.repeat,
    important: task.value.important,
    worker_id: task.value.worker_id,
    points: task.value.points,
});
const deleteForm = useForm({
    group_id: group.value.id,
    task_id: task.value.id,
});
function deleteTask() {
    deleteForm.post(`api/${task.value.group_id}/${task.value.id}/deleteTask`, {
        onSuccess: () => {
            closeModal();
        },
    });
}
const appointment = computed({
    get() {
        let newAppointment = new Date();
        const date = task.value.appointment ? new Date(task.value.appointment) : new Date();
        if (!editForm.done || editForm.repeat == 0) newAppointment = date;
        else {
            switch (editForm.repeat) {
                case 1:
                case 7:
                case 14:
                    newAppointment = newDateValue(date, editForm.repeat);
                    break;
                case 31:
                    newAppointment = newDateValue(date, 0, 1);
                    break;
            }
        }
        return newAppointment.toISOString().substring(0, 10);
    },
    set() {},
});

function newDateValue(date: Date, day = 0, month = 0) {
    if (month) return new Date(new Date(date).setMonth(date.getMonth() + month));
    else return new Date(new Date(date).setDate(date.getDate() + day));
}

const creator = computed(() => {
    return group.value.users.find(e => e.user.id == task.value.creator_id);
});

async function editTask() {
    editForm.transform(data => ({
        ...data,
        appointment: appointment.value,
    }));
    editForm.post(`api/${group.value.id}/${task.value.id}/editTask`, {
        onSuccess: () => {
            editForm.reset();
            searchSelect.value = '';
            closeModal();
        },
    });
}
</script>
<style scoped></style>
