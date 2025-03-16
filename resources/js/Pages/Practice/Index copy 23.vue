<script setup>
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { ref, Teleport } from "vue";

const showModal = ref(false);
</script>

<template>
    <div>
        <h1>Vue 3 Teleport Example</h1>
        <PrimaryButton @click="showModal = true">Open Modal</PrimaryButton>

        <!-- Modal Component -->
        <!-- <Teleport to="#modal-container"> -->
        <Teleport to="body">
            <div v-if="showModal" class="modal">
                <div class="modal-content">
                    <h2>Modal Title</h2>
                    <p>This is a modal rendered outside #app!</p>
                    <button @click="showModal = false">Close</button>
                </div>
            </div>
        </Teleport>
    </div>
</template>

<style scoped>
/* Modal Styling */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
}
</style>
