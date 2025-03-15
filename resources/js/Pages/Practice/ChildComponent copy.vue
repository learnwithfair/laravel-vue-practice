<script setup>
import { ref } from "vue";

defineProps(["modelValue"]);
const inputValue = ref("");
</script>

<template>
    <input v-model="inputValue" @input="$emit('update:modelValue', inputValue)" />
</template>
