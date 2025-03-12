<script setup>
import { ref, watch } from 'vue';
const count = ref(0);
watch(count, (newValue, oldValue) => {
    console.log(`Count changed from ${oldValue} to ${newValue}`);
});
</script>

<template>
    <div>
        <p>Count: {{ count }}</p>
        <button @click="count++">Increase</button>
    </div>
</template>
