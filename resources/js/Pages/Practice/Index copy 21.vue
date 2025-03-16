<script setup>
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { ref } from "vue";
const items = ref([1, 2, 3]);
const addItem = () => items.value.push(items.value.length + 1);
</script>

<template>
    <PrimaryButton @click="addItem">Add Item</PrimaryButton>
    <transition-group name="list" tag="ul">
        <li v-for="item in items" :key="item">{{ item }}</li>
    </transition-group>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
    transition: all 0.5s;
}

.list-enter,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>
