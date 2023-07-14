<template>
    <div>
        <Accordion :items="accordionItems">
            <template #users>
                <Modal v-for="groupUser of group.users" :title="groupUser.user.name">
                    <div class="container">
                        <template v-if="groupUser.user.id != user.id">
                            <Button :href="'mailto:' + groupUser.user.email" :disabled="user.id == groupUser.user.id" class="btn btn-primary w-100">
                                Nachricht schreiben
                            </Button>
                            <Button v-if="user.id == group.owner_id" class="btn btn-danger w-100 mt-2" @click="kickUser(groupUser.user)">
                                {{ groupUser.user.name }} kicken
                            </Button>
                        </template>
                    </div>
                    <template #button>
                        <div class="m-1">
                            <Button class="btn btn-primary w-100">{{ groupUser.user.name }} ({{ groupUser.points }})</Button>
                        </div>
                    </template>
                </Modal>
                <div class="m-1">
                    <Button
                        class="btn btn-primary w-100"
                        :href="'mailto:' + [...group.users.filter(e => e.user.id != user.id).map(e => e.user.email)]"
                    >
                        Nachricht an alle
                    </Button>
                    <EmailInput placeholder="email" v-model="addForm.email">
                        <template #button>
                            <Button sideButton @click="addUser()">hinzufügen</Button>
                        </template>
                    </EmailInput>
                    <InputError :message="addForm.errors.email"></InputError>
                </div>
            </template>
            <template #settings>
                <div>
                    <TextInput placeholder="name" v-model="settingsForm.name"></TextInput>
                    <InputError :message="settingsForm.errors.name" />
                    <div class="my-2">
                        <CheckboxInput v-model="settingsForm.is_public">öffentlich</CheckboxInput>
                        <InputError :message="settingsForm.errors.is_public" />
                    </div>
                    <div class="m-1">
                        <Button class="btn btn-primary w-100" @click="editSettings()" :loading="settingsForm.processing">speichern</Button>
                    </div>
                </div>
            </template>
            <template #addTask>
                <Modal title="Aufgabe hinzufügen" v-model="addModal">
                    <createTask :group="group" :groupUser="groupUser!" :user="user" v-model="addModal"></createTask>
                    <template #button>
                        <div style="height: 1px"></div>
                        <div class="m-1">
                            <Button class="py-2 btn btn-success w-100">Aufgabe hinzufügen</Button>
                        </div>
                    </template>
                </Modal>
            </template>
            <template #myTasks>
                <div v-for="done of [true, false]">
                    <div>{{ (!done ? 'nicht ' : '') + 'erledigt' }}</div>
                    <div
                        v-for="task of Object.entries(group.tasks)
                            .filter(e => e[1].worker_id == user.id)
                            .filter(e => e[1].done == done)
                            .sort((a, b) => +(a[1].appointment || a[1].created_at) - +(b[1].appointment || b[1].created_at))"
                        class="mb-1"
                    >
                        <Modal :title="task[1].title">
                            <showTask :task="task[1]" :group="group" :user="user" :task-id="+task[0]" v-model="showModal"></showTask>
                            <template #button>
                                <div class="m-1">
                                    <Button class="btn btn-primary w-100">
                                        {{ task[1].title }} ({{ new Date(task[1].appointment || task[1].created_at).toLocaleDateString() }})
                                    </Button>
                                </div>
                            </template>
                        </Modal>
                    </div>
                </div>
            </template>
            <template #tasks>
                <div v-for="done of [true, false]">
                    <div>{{ (!done ? 'nicht ' : '') + 'erledigt' }}</div>
                    <div
                        v-for="task of Object.entries(group.tasks)
                            .filter(e => e[1].done == done)
                            .filter(e => e[1].worker_id || e[1].done == true)
                            .sort((a, b) => +(a[1].appointment || a[1].created_at) - +(b[1].appointment || b[1].created_at))"
                        class="mb-1"
                    >
                        <Modal :title="task[1].title">
                            <showTask
                                :task="task[1]"
                                :group="group"
                                :groupUser="group.users"
                                :user="user"
                                :task-id="+task[0]"
                                v-model="showModal"
                            ></showTask>
                            <template #button>
                                <div class="m-1">
                                    <Button class="btn btn-primary w-100">
                                        {{ task[1].title }} ({{ new Date(task[1].appointment || task[1].created_at).toLocaleDateString() }})
                                    </Button>
                                </div>
                            </template>
                        </Modal>
                    </div>
                </div>
                <div>
                    <div>nicht zugewiesen</div>
                    <div
                        v-for="task of Object.entries(group.tasks)
                            .filter(e => !e[1].worker_id && !e[1].done)
                            .sort((a, b) => +(a[1].appointment || a[1].created_at) - +(b[1].appointment || b[1].created_at))"
                        class="mb-1"
                    >
                        <Modal :title="task[1].title">
                            <showTask
                                :task="task[1]"
                                :group="group"
                                :groupUser="group.users"
                                :user="user"
                                :task-id="+task[0]"
                                v-model="showModal"
                            ></showTask>
                            <template #button>
                                <div class="m-1">
                                    <Button class="btn btn-primary w-100">
                                        {{ task[1].title }} ({{ new Date(task[1].appointment || task[1].created_at).toLocaleDateString() }})
                                    </Button>
                                </div>
                            </template>
                        </Modal>
                    </div>
                </div>
            </template>
            <template #leave>
                <Modal :title="`${group.name} verlassen?`">
                    <div class="d-flex justify-content-end">
                        <Button class="btn btn-danger me-2 w-50" @click="leaveGroup(group.id)" :loading="leaveForm.processing">Ja</Button>
                        <Button class="btn btn-primary w-50" @click="closeModal()">Nein</Button>
                    </div>
                    <template #button>
                        <div style="height: 1px"></div>
                        <div class="m-1">
                            <Button class="py-2 btn btn-danger w-100">Gruppe verlassen</Button>
                        </div>
                    </template>
                </Modal>
            </template>
        </Accordion>
    </div>
</template>
<script setup lang="ts">
import { computed, ref, toRefs } from 'vue';
import * as type from '../../types/type';
import { Modal, Accordion, Button, TextInput, EmailInput, CheckboxInput } from 'custom-mbd-components';
import createTask from './createTask.vue';
import showTask from './showTask.vue';
import { closeModal } from '../../global';
import { useForm } from '@inertiajs/vue3';
import InputError from '../InputError.vue';

const props = withDefaults(
    defineProps<{
        group: type.Group;
        user: type.User;
    }>(),
    {}
);
const { group, user } = toRefs(props);

const addModal = ref(false);
const showModal = ref(false);
const groupUser = computed(() => {
    return group.value.users.find(e => e.user.id == user.value.id);
});

const accordionItems = computed(() => {
    const array = [];
    array.push({ title: 'Mitglieder', hash: 'users' });
    if (groupUser.value?.is_admin) {
        array.push({ title: 'Einstellungen', hash: 'settings' });
    }
    array.push({
        title: 'Aufgabe hinzufügen',
        hash: 'addTask',
        noAccordion: true,
    });
    array.push({ title: 'Meine Aufgaben', hash: 'myTasks' });
    array.push({ title: 'Aufgaben', hash: 'tasks' });
    array.push({
        title: 'Gruppe verlassen',
        hash: 'leave',
    });
    return array;
});
const addForm = useForm({
    email: '',
});
function addUser() {
    addForm.post(`api/${group.value.id}/addGroupUser`, {
        onSuccess: () => {
            addForm.reset();
        },
    });
}
const kickForm = useForm({});
function kickUser(user: type.User) {
    kickForm.post(`api/${group.value.id}/${user.id}/kickGroupUser`);
}
const settingsForm = useForm({
    name: group.value.name,
    is_public: group.value.is_public,
});
function editSettings() {
    settingsForm.post(`api/${group.value.id}/editSettingsGroup`);
}
const leaveForm = useForm({});

function leaveGroup(groupId: type.Id) {
    leaveForm.post(`api/${groupId}/leaveGroup`, {
        onSuccess: () => {
            closeModal();
        },
    });
}
</script>
<style scoped></style>
