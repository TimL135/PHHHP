<template>
    <div>
        <SearchInput placeholder="Gruppe" v-model="searchForm.name">
            <template #button
                ><Button sideButton @click="searchGroup">suche</Button></template
            >
        </SearchInput>
        <InputError :message="searchForm.errors.name" />
        <div
            v-for="group of searchGroups"
            class="d-flex justify-content-between mt-2"
        >
            {{ group.name }}<Button @click="join(group)">join</Button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import * as type from "../../types/type";
import { SearchInput, Button } from "custom-mbd-components";
import InputError from "../InputError.vue";
import { useForm } from "@inertiajs/vue3";
import axios from "axios";

const searchGroups = ref<type.Group[]>([]);

const searchForm=useForm({
name:""
});
const joinForm=useForm({});
async function join(group: type.Group) {
joinForm.post(`api/${group.id}/joinGroup`,{
    onSuccess:()=>{
        searchGroups.value=searchGroups.value.filter(e=>e.id!=group.id)
    }
});
}

async function searchGroup() {
    searchGroups.value=(await axios.post("api/searchGroup", searchForm)).data;
}
</script>
<style scoped></style>
