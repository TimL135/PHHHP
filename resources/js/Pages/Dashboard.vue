<script setup lang="ts">
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import { ref, toRefs } from "vue";
import * as type from "../types/type";
import showTask from "../Components/HHH/showTask.vue";
import { Modal, Button } from "custom-mbd-components";

const props = withDefaults(
    defineProps<{ user: type.User; groups: type.Group[] }>(),
    {}
);
const { user, groups } = toRefs(props);

const tasksToday = ref<type.Group[]>(
    groups.value.map((group) => ({
        ...group,
        tasks: group.tasks
            .filter(
                (e) =>
                    new Date(
                        e.appointment || e.created_at
                    ).toLocaleDateString() == new Date().toLocaleDateString()
            )
            .filter((e) => e.worker_id == user.value.id || e.worker_id == null)
            .filter((e) => e.done == false),
    }))
);
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <div class="d-flex flex-column align-items-center">
            <div class="h1">Moin, {{ user.name }}</div>
            <div v-if="tasksToday?.length > 0" class="mt-4">
                <div class="mb-2 h2">Aufgaben für heute</div>
                <div v-for="e of tasksToday" class="mt-2">
                    <template v-if="e.tasks.length>0">
                    <div class="mb-2 h4">{{ e.name }}</div>
                    <div v-for="task of e.tasks">
                        <Modal :title="task.title">
                            <showTask
                                dashboard
                                :task="task"
                                :group="e"
                                :groupUser="e.users"
                                :user="user"
                                :task-id="task.id"
                            >
                            </showTask>
                            <template #button>
                                <div class="m-1">
                                    <Button class="btn btn-primary w-100"
                                        >{{ task.title }} ({{
                                            new Date(
                                                task.appointment ||
                                                    task.created_at
                                            ).toLocaleDateString()
                                        }})</Button
                                    >
                                </div>
                            </template>
                        </Modal>
                    </div>
                </template>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
