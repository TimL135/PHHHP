<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <div v-if="groups.length == 0">
            <h4>Du hast noch keine Gruppe</h4>
            <h4
                v-if="groups.length > 0"
                v-for="e of groups"
                :class="
                    group?.name == e.name
                        ? 'text-decoration-underline text-primary'
                        : ''
                "
                @click="group = e"
            >
                {{ e.name }}
            </h4>
            <showGroup :group="group" :user="user"></showGroup>
            <div class="mt-2">
                <h3>Gruppe finden</h3>
                <searchGroup :user="user"></searchGroup>
            </div>
            <div class="mt-2">
                <h3>neue Gruppe erstellen</h3>
                <createGroup :user="user" v-model="view"></createGroup>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
<script setup lang="ts">
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import { ref, toRefs } from "vue";
import * as type from "../types/type";
import createGroup from "../Components/HHH/createGroup.vue";
import showGroup from "../Components/HHH/showGroup.vue";
import searchGroup from "../Components/HHH/searchGroup.vue";
import { Button } from "custom-mbd-components";

const props = withDefaults(
    defineProps<{ user: type.User; groups: type.Group[] }>(),
    {}
);
const { user, groups } = toRefs(props);

const view = ref("");

const group = ref({} as type.Group);
</script>
<style scoped></style>
