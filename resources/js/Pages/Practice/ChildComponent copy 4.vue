<script setup>
import { inject } from "vue";

const injectedMessage = inject("appMessage");
</script>

<template>
    <p>{{ injectedMessage }}</p>
</template>
