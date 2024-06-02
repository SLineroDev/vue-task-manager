<template>
  <table class="text-center">
    <thead>
      <tr>
        <th class="p-4 font-bold">Id</th>
        <th class="p-4 font-bold">Task</th>
        <th class="p-4 font-bold">Description</th>
        <th class="p-4 font-bold">Due Date</th>
        <th class="p-4 font-bold">Done</th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="transition-colors cursor-pointer hover:bg-green-300/70 hover:text-stone-900"
        v-for="task in tasks"
        :key="task.id"
        @click="onTaskClick(task.id)">
        <td class="p-4">{{ task.id }}</td>
        <td class="p-4">{{ task.title }}</td>
        <td class="p-4">{{ task.description }}</td>
        <td class="p-4">{{ task.dueDate }}</td>
        <td class="relative p-4">
          <input type="checkbox" :id="'checkbox' + task.id" v-model="task.done" class="hidden" />
          <label :for="'checkbox' + task.id" class="cursor-pointer">
            <div
              class="w-6 h-6 m-auto transition-colors border border-gray-400 rounded"
              :class="{ 'bg-green-600': task.done }"></div>
          </label>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { Task } from '@/types'
import type { PropType } from 'vue'

const emit = defineEmits(['open-modal'])

const { tasks } = defineProps({
  tasks: {
    type: Array as PropType<Task[]>,
    required: true
  }
})

function onTaskClick(taskId: number) {
  emit('open-modal', taskId)
}
</script>
