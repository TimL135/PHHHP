<template>
    <div>
        <SearchInput placeholder="Gruppe" v-model="groupSearch">
            <template #button
                ><Button sideButton @click="getGroups">suche</Button></template
            >
        </SearchInput>
        <div
            v-for="group of searchGroups"
            class="d-flex justify-content-between mt-2"
        >
            {{ group.name }}<Button @click="join(group)">join</Button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, toRefs } from "vue";
import * as type from "../../types/type";
import { SearchInput, Button } from "custom-mbd-components";
import { searchGroup, joinGroup } from "../../api";
const props = withDefaults(
    defineProps<{ user: type.User; groups: type.Group[] }>(),
    {}
);
const { user, groups } = toRefs(props);
const searchGroups = ref<type.Group[]>([]);
const groupSearch = ref("");

async function join(group: type.Group) {
    await joinGroup(group.id, user.value.id);
    group.users.push(user.value.id);
    groups.value.push(group);
}

async function getGroups() {
    try {
        searchGroups.value = await searchGroup(groupSearch.value);
    } catch {
        console.log("fail");
    }
}
</script>
<style scoped></style>
