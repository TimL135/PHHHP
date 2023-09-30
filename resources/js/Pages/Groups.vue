<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <div>
            <h4 v-if="groups.length == 0">Du hast noch keine Gruppe</h4>
            <Button
                v-if="groups.length > 0"
                v-for="e of groups"
                class="m-1 btn"
                :class="groups.find(e => e.id == groupId)?.name == e.name ? 'btn-success' : 'btn-primary'"
                @click="groupId = e.id"
            >
                {{ e.name }}
            </Button>
            <template v-for="group of groups">
                <showGroup v-if="groupId == group.id" :group="group" :user="user"></showGroup>
            </template>

            <div class="mt-2">
                <searchGroup :user="user" :searchGroups="searchGroups"></searchGroup>
            </div>
            <div class="mt-2">
                <createGroup :user="user" v-model="view"></createGroup>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { ref, toRefs } from 'vue';
import * as type from '../types/type';
import createGroup from '../Components/HHH/createGroup.vue';
import showGroup from '../Components/HHH/showGroup.vue';
import searchGroup from '../Components/HHH/searchGroup.vue';
import { Button } from 'custom-mbd-components';

const props = withDefaults(
    defineProps<{
        user: type.User;
        groups: type.Group[];
        searchGroups: type.Group[];
    }>(),
    {}
);

const { user, groups } = toRefs(props);
for (const group of groups.value) {
    const channel = window.Echo.private(`updateTasks.${group.id}`);
    channel
        .subscribed(() => {
            console.log('subscribed');
        })
        .listen('.newTask', e => {
            if (e.new) group.tasks.push(e.new);
            if (e.delete) group.tasks = group.tasks.filter(g => g.id != e.delete.id);
            if (e.update) group.tasks = group.tasks.map(g => (g.id == e.update.id ? e.update : g));
            console.log(e);
        });
}

const view = ref('');

const groupId = ref('');
</script>
<style scoped></style>
