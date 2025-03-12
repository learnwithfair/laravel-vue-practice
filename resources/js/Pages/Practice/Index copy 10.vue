<script setup>
import { ref } from 'vue';

const myInput = ref(null);
const inputValue = ref(0);

const focusInput = () => {
    inputValue.value += 2;
    myInput.value.focus();
};
</script>

<template>
    <div>
        <input ref="myInput" type="number" v-model="inputValue" />
        <button @click="focusInput">Set & Focus</button>
    </div>
</template>
