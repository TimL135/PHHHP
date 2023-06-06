<template>
    <div v-if="groups.length == 0">
        <h4>Du hast noch keine Gruppe</h4>
        <div>
            <Button class="me-2 btn btn-primary" @click="view = 'search'"
                >Gruppe Suche</Button
            >
            <Button class="btn btn-primary" @click="view = 'create'"
                >Gruppe erstellen</Button
            >
        </div>
        <div>
            <createGroup
                v-if="view == 'create'"
                v-model="view"
                :user="user"
            ></createGroup>
            <searchGroup :user="user" v-if="view == 'search'"></searchGroup>
        </div>
    </div>
    <div v-else>
        <h4
            v-for="e of groups"
            :class="
                group?.name == e.name
                    ? 'text-decoration-underline text-primary'
                    : ''
            "
        >
            {{ e.name }}
        </h4>
        <showGroup
            :group="group"
            :groupUser="group.users"
            :user="user"
        ></showGroup>
        <div class="mt-2">
            <h3>weitere Gruppe finden</h3>
            <searchGroup :user="user"></searchGroup>
        </div>
        <div class="mt-2">
            <h3>neue Gruppe erstellen</h3>
            <createGroup :user="user" v-model="view"></createGroup>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, toRefs } from "vue";
import * as type from "../types/type";
import createGroup from "../Components/HHH/createGroup.vue";
import showGroup from "../Components/HHH/showGroup.vue";
import searchGroup from "../Components/HHH/searchGroup.vue";
import { Button } from "custom-mbd-components";
import { getGroupUsers } from "../api";

const props = withDefaults(
    defineProps<{ user: type.User; groups: type.Group[] }>(),
    {}
);
const { user, groups } = toRefs(props);

const view = ref("");

const group = ref({} as type.Group);
</script>
<style scoped></style>
