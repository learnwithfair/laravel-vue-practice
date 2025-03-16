<script setup>
import useCounter from "@/Composables/useCounter";

const { count, increment } = useCounter();
</script>

<template>
    <div>
        <p>Count: {{ count }}</p>
        <button @click="increment">Increase</button>
    </div>
</template>
