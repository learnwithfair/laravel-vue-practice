<script setup>
import { ref } from "vue";

const message = ref("Hello Vue 3!");
const tooltip = ref("This is a tooltip message");
</script>
<template>
    <div>
        <p>{{ message }}</p>
        <p :title="tooltip">Hover over me</p>
    </div>
</template>
