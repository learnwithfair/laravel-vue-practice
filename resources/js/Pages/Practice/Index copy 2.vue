<script setup>
import { reactive } from "vue";
const state = reactive({ count: 0 });
</script>

<template>
    <div>
        <p>Count: {{ state.count }}</p>
        <div class="flex gap-4">
            <button @click="state.count++" type="button"
                class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Increase
            </button>

            <button @click="state.count <= 0 ? (state.count = 0) : state.count--" type="button"
                class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                Decrease
            </button>
        </div>
    </div>
</template>
