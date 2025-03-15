<script setup>
import { provide } from "vue";
import ChildComponentCopy4 from "./ChildComponent copy 4.vue";

provide("appMessage", "Hello from Provide!");
</script>

<template>
    <ChildComponentCopy4 />
</template>
