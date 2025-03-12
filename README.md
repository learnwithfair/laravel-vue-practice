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

##### 3.Computed Properties

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

##### 4. Switch Rendering

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

##### 5. Class and Style Bindings

```vue
<script setup>
import { ref } from "vue";
const isActive = ref(false);
</script>
<template>
    <div>
        <p :class="{ active: isActive }">Styled Text</p>
        <button
            @click="isActive = !isActive"
            class="px-4 py-2 bg-blue-600 text-white  hover:bg-blue-700 ml-2"
        >
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
```

##### 6. Conditional Rendering

```vue
<script setup>
import { ref } from "vue";
const isLoggedIn = ref(false);
</script>

<template>
    <div>
        <p v-if="isLoggedIn">Welcome back!</p>
        <p v-else>Please log in</p>
        <button
            @click="isLoggedIn = !isLoggedIn"
            class="p-2 bg-blue-600 rounded"
        >
            Toggle
        </button>
    </div>
</template>
```

##### 7.List Rendering

```vue
<script setup>
import { ref } from "vue";
const users = ref([
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
]);
</script>

<template>
    <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
</template>
```

##### 8. Form Input Bindings (ইনপুট ফি ল্ডে র সাথে ডাটা লি করা)

```vue
<script setup>
import { ref } from "vue";
const name = ref("");
</script>

<template>
    <div>
        <input v-model="name" placeholder="Enter your name" />
        <p>Hello, {{ name }}</p>
    </div>
</template>
```

##### 9.Watchers (এক ভে রি য়ে বলে র পরি বর্তন পর্যবে ণ করা)

```vue
<script setup>
import { ref, watch } from "vue";
const count = ref(0);
watch(count, (newValue, oldValue) => {
    console.log(`Count changed from ${oldValue} to ${newValue}`);
});
</script>

<template>
    <div>
        <p>Count: {{ count }}</p>
        <button @click="count++">Increase</button>
    </div>
</template>
```

##### 10. Template Refs (ডাইরে লি DOM এলি মে অাক্সে স করা)

```vue
<script setup>
import { ref } from "vue";

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
```

##### 6.

```vue

```

##### 6.

```vue

```

##### 6.

```vue

```

##### 6.

```vue

```

##### 6.

```vue

```

##### 6.

```vue

```

##### 6.

```vue

```

##### 6.

```vue

```

##### 6.

```vue

```

##### 6.

```vue

```

##### 6.

```vue

```

##### 6.

```vue

```

##### 6.

```vue

```

##### 6.

```vue

```

##### 6.

```vue

```

##### 6.

```vue

```

##### 6.

```vue

```
