<script setup>
import { Link } from '@inertiajs/vue3';
import { router } from '@inertiajs/vue3';

const props = defineProps({
    tasks: Array
});

const toggleTask = (task) => {
    router.patch(route('tasks.toggle-complete', task.id));
};

const deleteTask = (task) => {
    if (confirm('Are you sure you want to delete this task?')) {
        router.delete(route('tasks.destroy', task.id));
    }
};
</script>

<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                <div class="flex justify-between items-center mb-6">
                    <h1 class="text-2xl font-semibold text-gray-900">Task Manager</h1>
                    <Link :href="route('tasks.create')"
                        class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Create Task
                    </Link>
                </div>
                <!--
                <div v-if="$page.props.flash.success" class="mb-4 p-4 bg-green-100 text-green-700 rounded">
                    {{ $page.props.flash.success }}
                </div> -->

                <div v-if="tasks.length === 0" class="text-gray-500">
                    No tasks found. Create your first task to get started.
                </div>

                <div v-else>
                    <div v-for="task in tasks" :key="task.id"
                        class="border-b border-gray-200 py-4 flex items-center justify-between">
                        <div class="flex items-center">
                            <button @click="toggleTask(task)" class="mr-3 h-5 w-5 rounded border"
                                :class="{ 'bg-blue-500 border-blue-500': task.completed, 'border-gray-300': !task.completed }">
                                <svg v-if="task.completed" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                            </button>

                            <div :class="{ 'line-through text-gray-400': task.completed }">
                                <div class="font-medium">{{ task.title }}</div>
                                <div v-if="task.description" class="text-sm text-gray-500">{{ task.description }}</div>
                            </div>
                        </div>

                        <div class="flex space-x-2">
                            <Link :href="route('tasks.edit', task.id)" class="text-blue-600 hover:text-blue-800">
                            Edit
                            </Link>
                            <button @click="deleteTask(task)" class="text-red-600 hover:text-red-800">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
