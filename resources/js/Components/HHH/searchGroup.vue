<template>
    <div>
        <SearchInput placeholder="Gruppe" v-model="searchForm.search">
            <template #button
                ><Button sideButton @click="searchGroup"
                    >suche</Button
                ></template
            >
        </SearchInput>
        <InputError :message="searchForm.errors.search" />
        <div
            v-for="group of searchGroups"
            class="d-flex justify-content-between mt-2"
        >
            {{ group.name }}<Button @click="join(group)">join</Button>
        </div>
    </div>
</template>
<script setup lang="ts">
import * as type from "../../types/type";
import { SearchInput, Button } from "custom-mbd-components";
import InputError from "../InputError.vue";
import { router, useForm } from "@inertiajs/vue3";
import { toRefs } from "vue";
const props = withDefaults(
    defineProps<{
        searchGroups: type.Group[];
    }>(),
    {}
);
const { searchGroups } = toRefs(props);

const searchForm = useForm({
    search: "",
});
const joinForm = useForm({});
async function join(group: type.Group) {
    joinForm.post(`api/${group.id}/joinGroup`, {
        onSuccess: () => {
            searchGroups.value = searchGroups.value.filter(
                (e) => e.id != group.id
            );
        },
    });
}

async function searchGroup() {
    if (searchForm.data().search == "")
        searchForm.errors.search = "The search field is required.";
    else router.reload({ only: ["searchGroups"], data: searchForm.data() });
}
</script>
<style scoped></style>
