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
