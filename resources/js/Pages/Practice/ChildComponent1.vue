<script setup>
const mgs = "Hello from Child!";
</script>

<template>
    <button @click="$emit('send-message', mgs)">Send Message</button>
    <!-- <button @click="$emit('send-message', 'Hello from Child!')">Send Message</button> -->
</template>
