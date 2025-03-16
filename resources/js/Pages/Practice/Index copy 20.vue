<script setup>
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { ref } from "vue";
const show = ref(true);
</script>

<template>
    <div>
        <PrimaryButton @click="show = !show">Toggle</PrimaryButton>
        <transition name="rahat">
            <p v-if="show">Hello Vue!</p>
        </transition>
    </div>
</template>

<style scoped>
.rahat-enter-active,
.rahat-leave-active {
    transition: opacity 0.5s;
}

.rahat-enter,
.rahat-leave-to {
    opacity: 0;
}
</style>
