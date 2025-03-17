# Laravel 11, Vue 3 এবং Inertia.js গাইড

-   Document:
    https://docs.google.com/document/d/1wpWH0XZfWYKLRPYAbPzqPGedjxjWwpcRKUy4_PxntQY/edit?usp=sharing

##### 1. v-bind/:

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

##### 2. Reactivity

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

##### 11. Registration (কম্পোনেন্ট নিবন্ধন করা)

কাজ: Vue.js-এ কম্পোনেন্ট নিবন্ধন করার দুটি পদ্ধতি রয়েছে:

-   Global Registration (Vue অ্যাপে একবার নিবন্ধন করলে যেকোনো স্থানে ব্যবহার করা যাবে)
-   Local Registration (শুধুমাত্র নির্দিষ্ট কম্পোনেন্টের মধ্যে ব্যবহার করা যাবে)

```vue
<script setup>
import IndexCopy10 from "./Index copy 10.vue";
</script>

<template>
    <div>
        <!-- Local Registration -->
        <index-copy-10 />
        <IndexCopy10 class="mt-5" />
    </div>
</template>
```

##### 12. Props (প্রপস ব্যবহার করা)

কাজ: Props ব্যবহার করে আমরা Parent কম্পোনেন্ট থেকে Child কম্পোনেন্টে ডাটা পাঠাতে পারি।

-   Parent Component

```vue
<script setup>
import ChildComponent from "./ChildComponent.vue";
</script>

<template>
    <ChildComponent message="Hello from Parent!" />
</template>
```

-   Child Component

```vue
<script setup>
defineProps(["message"]);
</script>

<template>
    <p>{{ message }}</p>
</template>
```

##### 13. Events (ইভেন্ট হ্যান্ডলিং করা)

কাজ: Child কম্পোনেন্ট থেকে Parent কম্পোনেন্টে ডাটা পাঠানোর জন্য ইভেন্ট ব্যবহার করা হয়।

-   Parent Component

```vue
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
```

-   Child Component

```vue
<script setup>
const mgs = "Hello from Child!";
</script>

<template>
    <button @click="$emit('send-message', mgs)">Send Message</button>
    <!-- <button @click="$emit('send-message', 'Hello from Child!')">Send Message</button> -->
</template>
```

##### 14. Component v-model (কম্পোনেন্টে v-model ব্যবহার করা)

কাজ: Vue 3-এ v-model ব্যবহার করে Parent এবং Child কম্পোনেন্টের মধ্যে Two-way Data Binding করা যায়।

-   Parent Component

```vue
<script setup>
import { ref } from "vue";
import ChildComponentCopy from "./ChildComponent copy.vue";

const message = ref("");
</script>

<template>
    <ChildComponentCopy v-model="message" />
    <p>Parent Message: {{ message }}</p>
</template>
```

-   Child Component

```vue
<script setup>
import { ref } from "vue";

defineProps(["modelValue"]);
const inputValue = ref("");
</script>

<template>
    <input
        v-model="inputValue"
        @input="$emit('update:modelValue', inputValue)"
    />
</template>
```

##### 15. Fallthrough Attributes (অতিরিক্ত অ্যাট্রিবিউট হস্তান্তর করা)

কাজ: Child কম্পোনেন্টের Root Element-এ Parent Component থেকে প্রাপ্ত সব Attribute স্বয়ংক্রিয়ভাবে যোগ হয়।

-   Parent Component

```vue
<script setup>
import ChildComponentCopy2 from "./ChildComponent copy 2.vue";
</script>

<template>
    <ChildComponentCopy2 class="custom-class" title="Hello" />
</template>
<style scoped>
.custom-class {
    color: red;
    padding: 10px 8px;
    background: blue;
}
</style>
```

-   Child Component

```vue
<template>
    <button>Click Me</button>
</template>
```

-   ফলাফল:

```html
<button class="custom-class" title="Hello">Click Me</button>
```

##### 16. Slots (কম্পোনেন্টের ভিতরে কাস্টম কন্টেন্ট পাঠানো)

কাজ: Slots ব্যবহার করে Parent কম্পোনেন্ট থেকে Child কম্পোনেন্টের ভিতরে ডাটা পাঠানো যায়।

-   Parent Component

```vue
<script setup>
import ChildComponentCopy3 from "./ChildComponent copy 3.vue";
</script>

<template>
    <ChildComponentCopy3>
        <p>This is a custom slot content.</p>
    </ChildComponentCopy3>
</template>
```

-   Child Component

```vue
<template>
    <div>
        <slot> </slot>
    </div>
</template>
```

##### 17. Provide / Inject (ডাটা শেয়ার করা)

কাজ: Provide / Inject ব্যবহার করে Parent থেকে অনেকগুলো Nested Child কম্পোনেন্টে ডাটা শেয়ার করা যায়।

-   Parent Component

```vue
<script setup>
import { provide } from "vue";
import ChildComponentCopy4 from "./ChildComponent copy 4.vue";

provide("appMessage", "Hello from Provide!");
</script>

<template>
    <ChildComponentCopy4 />
</template>
```

-   Child Component

```vue
<script setup>
import { inject } from "vue";

const injectedMessage = inject("appMessage");
</script>

<template>
    <p>{{ injectedMessage }}</p>
</template>
```

##### 18. Async Components (অ্যাসিনক্রোনাস কম্পোনেন্ট লোড করা)

কাজ: Lazy Load করা যায়, যখন কম্পোনেন্টের লোডিং সময় বেশি লাগে।

```vue
<script setup>
import { defineAsyncComponent } from "vue";

const AsyncComponent = defineAsyncComponent(() =>
    import("../../Components/ApplicationLogo.vue")
);
</script>

<template>
    <Suspense>
        <AsyncComponent />

        <template #fallback>
            <p class="text-[red]">Loading...</p>
        </template>
    </Suspense>
</template>
```

##### 19. Composables (Reusable Functions ব্যবহার করা)

কাজ: Vue 3-এ Composables ব্যবহার করে আমরা Reusable Functions তৈরি করতে পারি, যা কম্পোনেন্টগুলোর মধ্যে কোড পুনঃব্যবহারযোগ্য করে।

```vue
<script setup>
import useCounter from "@/Composables/useCounter";

const { count, increment } = useCounter();
</script>

<template>
    <div>
        <p>Count: {{ count }}</p>
        <button @click="increment">Increase</button>
    </div>
</template>
```

```js
// Composables/useCounter.js
import { ref } from "vue";
export default function useCounter() {
    const count = ref(0);
    const increment = () => count.value++;
    return { count, increment };
}
```

##### 20. Transition (অ্যানিমেশন প্রয়োগ করা)

কাজ: Vue.js-এ Transition ব্যবহার করে CSS অ্যানিমেশন সহজে যোগ করা যায়।

```vue
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
```

##### 21.TransitionGroup (একাধিক এলিমেন্ট অ্যানিমেট করা)

```vue
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
```

##### 22. KeepAlive (কম্পোনেন্ট স্টেট সংরক্ষণ করা)

```vue
<script setup>
import { ref } from "vue";

import IndexCopy20 from "./Index copy 20.vue";
import IndexCopy21 from "./Index copy 21.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";

const currentView = ref(IndexCopy21);
const toggle = ref(false);

const changeView = () =>
    toggle.value
        ? (currentView.value = IndexCopy20)
        : (currentView.value = IndexCopy21);
// const changeView = () => {
//     toggle.value = !toggle.value;
//     if (toggle.value) currentView.value = IndexCopy20;
//     else currentView.value = IndexCopy21;
// };
</script>

<template>
    <PrimaryButton
        @click="
            () => {
                toggle = !toggle;
                changeView();
            }
        "
    >
        Change View
    </PrimaryButton>

    <!-- <PrimaryButton @click="changeView"> Change View </PrimaryButton> -->

    <br />
    <keep-alive>
        <component :is="currentView" />
    </keep-alive>
</template>
```

##### 23. Teleport (একটি এলিমেন্ট অন্য স্থানে রেন্ডার করা)

Vue 3-এর Teleport ব্যবহার করে আমরা একটি কম্পোনেন্ট বা HTML এলিমেন্টকে body বা অন্য কোনো নির্দিষ্ট স্থানে রেন্ডার করতে পারি, যদিও এটি মূল কম্পোনেন্টের অংশ থাকে।

```vue
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
```

##### 24. File Uploads (ফাইল আপলোড করা)

Task: Inertia.js এ useForm() দিয়ে ফাইল আপলোড করা যায়।

```vue
<script setup>
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { useForm } from "@inertiajs/vue3";

const form = useForm({
    avatar: null,
});

const submit = () => {
    form.post("/upload", {
        forceFormData: true,
    });
};
</script>

<template>
    <form @submit.prevent="submit">
        <input type="file" @change="form.avatar = $event.target.files[0]" />
        <PrimaryButton type="submit">Upload</PrimaryButton>
    </form>
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
