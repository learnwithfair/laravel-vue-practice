<script setup>
import { ref } from "vue";

import IndexCopy20 from "./Index copy 20.vue";
import IndexCopy21 from "./Index copy 21.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";

const currentView = ref(IndexCopy21);
const toggle = ref(false);

const changeView = () =>
    toggle.value ? (currentView.value = IndexCopy20) : (currentView.value = IndexCopy21);
// const changeView = () => {
//     toggle.value = !toggle.value;
//     if (toggle.value) currentView.value = IndexCopy20;
//     else currentView.value = IndexCopy21;
// };
</script>

<template>
    <PrimaryButton @click="
        () => {
            toggle = !toggle;
            changeView();
        }
    ">
        Change View
    </PrimaryButton>

    <!-- <PrimaryButton @click="changeView"> Change View </PrimaryButton> -->

    <br />
    <keep-alive>
        <component :is="currentView" />
    </keep-alive>
</template>
