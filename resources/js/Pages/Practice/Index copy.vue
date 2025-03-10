<script setup>
import { ref } from 'vue';
const isLoggedIn = ref(false);
</script>

<template>
    <div>
        <p v-if="isLoggedIn">Welcome back!</p>
        <p v-else>Please log in</p>
        <button @click="isLoggedIn = !isLoggedIn" class="p-2 bg-blue-600 rounded">
            Toggle
        </button>
    </div>
</template>
