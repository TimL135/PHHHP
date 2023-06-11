<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <div>
            <h4 v-if="groups.length == 0">Du hast noch keine Gruppe</h4>
            <Button
                v-if="groups.length > 0"
                v-for="e of groups"
                class="m-1 btn"
                :class="
                    groups.find(e=>e.id==group)?.name == e.name
                        ? 'btn-success'
                        : 'btn-primary'
                "
                @click="group = e.id"
            >
                {{ e.name }}
            </Button>
            <showGroup :group="groups.find(e=>e.id==group)" :user="user"></showGroup>
            <div class="mt-2">
                <h3>Gruppe finden</h3>
                <searchGroup :user="user" :groups="[]"></searchGroup>
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

const group = ref("");
</script>
<style scoped></style>
