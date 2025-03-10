<script setup>
import { ref } from 'vue';

const num = ref(5);
const result = ref(0);


const calculate = (operation) => {
    switch (operation) {
        case "+":
            result.value = num.value + num.value;
            break;
        case "-":
            result.value = num.value - num.value;
            break;
        case "*":
            result.value = num.value * num.value;
            break;
        case "/":
            result.value = num.value / num.value;
            break;
        default:
            result.value = 0;
            break;
    }
};
</script>

<template>
    <div align="middle">


        <button @click="calculate('+')" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Add
        </button>
        <button @click="calculate('-')" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 ml-2">
            Subtract
        </button>
        <button @click="calculate('*')" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ml-2">
            Multiply
        </button>
        <button @click="calculate('/')" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 ml-2">
            Divide
        </button>

        <p>Number: {{ num }}</p>
        <p>Result: {{ result }}</p>
    </div>
</template>
