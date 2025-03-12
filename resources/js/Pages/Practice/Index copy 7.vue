<script setup>
import { ref } from 'vue';
const users = ref([{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]);
</script>

<template>
    <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
</template>

