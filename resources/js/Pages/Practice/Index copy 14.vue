<script setup>
import { ref } from "vue";
import ChildComponentCopy from "./ChildComponent copy.vue";

const message = ref("");
</script>

<template>
    <ChildComponentCopy v-model="message" />
    <p>Parent Message: {{ message }}</p>
</template>
