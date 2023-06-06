<template>
    <div>
        <TextInput placeholder="name" v-model="name">
            <template #button>
                <Button sideButton @click="create">erstellen</Button>
            </template>
        </TextInput>
        <!-- <CheckboxInput v-model="isPublic">private Gruppe</CheckboxInput> -->
    </div>
</template>
<script setup lang="ts">
import { ref, toRefs } from "vue";
import * as type from "../../types/type";
import { TextInput, Button } from "custom-mbd-components";
import { addGroup } from "../../api";

const props = withDefaults(
    defineProps<{ modelValue: string; user: type.User }>(),
    {}
);
const { modelValue, user } = toRefs(props);

const emit = defineEmits(["update:modelValue"]);

const name = ref("");

const isPublic = ref(true);
async function create() {
    if (name.value == "") return;
    try {
        const group = {
            id: -1,
            name: name.value,
            is_public: isPublic.value,
            users: [user.value.id] as type.Id[],
            tasks: {} as type.Tasks,
        } as type.Group;
        const id = await addGroup(group);

        emit("update:modelValue", "");
    } catch {}
}
</script>
<style scoped></style>
