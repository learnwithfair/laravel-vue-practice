#### v-bind/:

-   Vue-তে ডাটা বাইন্ডি ং করার জন {{ }} এবং v-bind ববহার করা হয়।

```vue
<script setup>
import { ref } from "vue";

const message = ref("Hello Vue 3!");
const tooltip = ref("This is a tooltip message");
</script>
<template>
    <div>
        <p>{{ message }}</p>
        <p :title="tooltip">Hover over me</p>
    </div>
</template>
```

##### Reactivity

-   কাজ:
    Vue.js এর সবচে য়ে শক্তি শালী ফি চার হল reactivity system, যা ডাটা পরি বর্তনে র সাথে সাথে UI আপডে ট
    করে ।

```vue
<script setup>
import { reactive } from "vue";
const state = reactive({ count: 0 });
</script>

<template>
    <div>
        <p>Count: {{ state.count }}</p>
        <div class="flex gap-4">
            <button
                @click="state.count++"
                type="button"
                class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Increase
            </button>

            <button
                @click="state.count <= 0 ? (state.count = 0) : state.count--"
                type="button"
                class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
                Decrease
            </button>
        </div>
    </div>
</template>
```

##### Computed Properties

-   কাজ:
    Vue.js-এ কিছুমান য়ংক্রিয়ভাবে আপডেট করার জন computed প্র োপার্টি ববহার করা হয়।

```vue
<script setup>
import { ref, computed } from "vue";
const num = ref(5);
const squared = computed(() => num.value * num.value);
</script>

<template>
    <div>
        <p>Number: {{ num }}</p>
        <p>Squared: {{ squared }}</p>
        <button
            @click="num++"
            class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
            Increase
        </button>
    </div>
</template>
```

```vue
<script setup>
import { ref } from "vue";

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
        <button
            @click="calculate('+')"
            class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
            Add
        </button>
        <button
            @click="calculate('-')"
            class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 ml-2"
        >
            Subtract
        </button>
        <button
            @click="calculate('*')"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ml-2"
        >
            Multiply
        </button>
        <button
            @click="calculate('/')"
            class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 ml-2"
        >
            Divide
        </button>

        <p>Number: {{ num }}</p>
        <p>Result: {{ result }}</p>
    </div>
</template>
```
