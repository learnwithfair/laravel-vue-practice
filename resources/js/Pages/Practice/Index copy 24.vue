<script setup>
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { useForm } from "@inertiajs/vue3";

const form = useForm({
    avatar: null,
});

const submit = () => {
    form.post("/upload", {
        forceFormData: true,
    });
};
</script>

<template>
    <form @submit.prevent="submit">
        <input type="file" @change="form.avatar = $event.target.files[0]" />
        <PrimaryButton type="submit">Upload</PrimaryButton>
    </form>
</template>
