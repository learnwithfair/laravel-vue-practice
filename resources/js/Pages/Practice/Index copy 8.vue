<script setup>
import { ref } from 'vue';
const name = ref('');
</script>

<template>
    <div>
        <input v-model="name" placeholder="Enter your name" />
        <p>Hello, {{ name }}</p>
    </div>
</template>
