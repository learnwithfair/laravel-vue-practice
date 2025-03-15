import { ref } from 'vue';

export default function useCounter() {
    const count = ref(0);
    const increment = () => count.value++;
    return { count, increment };
}
