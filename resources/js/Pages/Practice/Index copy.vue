<script setup>
import { provide } from "vue";
import ChildComponent from "./components/ChildComponent.vue";

provide("appMessage", "Hello from Provide!");
</script>

<template>
    <ChildComponent />
</template>
