<script setup>
import { ref } from "vue";
import ChildComponent1 from "./ChildComponent1.vue";

const receivedMgs = ref("");
const receiveMessage = (msg) => {
    receivedMgs.value = msg;
};
</script>

<template>
    <div>
        <ChildComponent1 @send-message="receiveMessage" />
        <p>{{ receivedMgs }}</p>
    </div>
</template>
