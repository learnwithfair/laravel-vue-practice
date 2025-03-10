<script setup>
import { ref } from 'vue';
const isActive = ref(false);
</script>
<template>
    <div>
        <p :class="{ active: isActive }">Styled Text</p>
        <button @click="isActive = !isActive" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ml-2">
            Set Color
        </button>
    </div>
</template>

<style>
.active {
    color: red;
    font-weight: bold;
}
</style>
