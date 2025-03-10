<script setup>
import { ref, computed } from "vue";
const num = ref(5);
const squared = computed(() => num.value * num.value);
</script>

<template>
    <div>
        <p>Number: {{ num }}</p>
        <p>Squared: {{ squared }}</p>
        <button @click="num++" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Increase
        </button>
    </div>
</template>
