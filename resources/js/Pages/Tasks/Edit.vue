<!-- resources/js/Pages/Tasks/Edit.vue -->
<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                <div class="mb-6">
                    <h1 class="text-2xl font-semibold text-gray-900">Edit Task</h1>
                </div>

                <form @submit.prevent="submit">
                    <div class="mb-4">
                        <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                        <input id="title" v-model="form.title" type="text"
                            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            :class="{ 'border-red-500': form.errors.title }">
                        <div v-if="form.errors.title" class="text-red-500 text-sm mt-1">
                            {{ form.errors.title }}
                        </div>
                    </div>

                    <div class="mb-4">
                        <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                        <textarea id="description" v-model="form.description" rows="4"
                            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            :class="{ 'border-red-500': form.errors.description }"></textarea>
                        <div v-if="form.errors.description" class="text-red-500 text-sm mt-1">
                            {{ form.errors.description }}
                        </div>
                    </div>

                    <div class="mb-4">
                        <div class="flex items-center">
                            <input id="completed" v-model="form.completed" type="checkbox"
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <label for="completed" class="ml-2 block text-sm text-gray-700">
                                Mark as completed
                            </label>
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <Link :href="route('tasks.index')" class="text-gray-600 hover:text-gray-900">
                        Cancel
                        </Link>
                        <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            :disabled="form.processing">
                            Update Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Link, useForm } from '@inertiajs/vue3';

const props = defineProps({
    task: Object,
});

const form = useForm({
    title: props.task.title,
    description: props.task.description || '',
    completed: props.task.completed,
});

const submit = () => {
    form.put(route('tasks.update', props.task.id));
};
</script>
