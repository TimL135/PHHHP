<script setup lang="ts">
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, usePage } from "@inertiajs/vue3";
import { ref } from "vue";
import * as type from "../types/type";
import showTask from "../Components/HHH/showTask.vue";
import { Modal } from "custom-mbd-components";

const user = ref(usePage().props.auth.user);
const groups = ref(usePage().props.groups as type.Group[]);
const tasksToday = ref<type.Group[]>(
    groups.value.map((group) => ({
        ...group,
        tasks: Object.entries(group.tasks)
            .filter(
                (e) =>
                    new Date(
                        e[1].appointment || e[1].create_at || ""
                    ).toLocaleDateString() == new Date().toLocaleDateString()
            )
            .filter(
                (e) => e[1].worker_id == user.value.id || e[1].worker_id == null
            )
            .filter((e) => e[1].done == false)
            .reduce((a, b) => ({ ...a, [b[0]]: b[1] }), {}),
    }))
);
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <div class="d-flex flex-column align-items-center">
            <h1 v-if="user">Moin, {{ user.name }}</h1>
            <div v-if="tasksToday.length > 0" class="mt-4">
                <h3 class="mb-2">Aufgaben für heute</h3>
                <div v-for="e of tasksToday">
                    <h4 class="mb-2">{{ e.name }}</h4>
                    <div v-for="task of Object.entries(e.tasks)">
                        <Modal :title="task[1].title">
                            <showTask
                                dashboard
                                :task="task[1]"
                                :group="e"
                                :groupUser="e.users"
                                :user="user"
                                :task-id="+task[0]"
                            >
                            </showTask>
                            <template #button>
                                <div class="m-1">
                                    <Button class="btn btn-primary w-100"
                                        >{{ task[1].title }} ({{
                                            new Date(
                                                task[1].appointment ||
                                                    task[1].create_at ||
                                                    ""
                                            ).toLocaleDateString()
                                        }})</Button
                                    >
                                </div>
                            </template>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
