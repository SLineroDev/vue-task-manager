<script setup lang="ts">
import { computed } from 'vue'

const { taskId, isNewTask, isEditing } = defineProps({
  taskId: {
    type: Number,
    required: true
  },
  isNewTask: {
    type: Boolean,
    default: false
  },
  isEditing: {
    type: Boolean,
    default: false
  }
})

const title = computed(() => {
  if (isNewTask) return 'New Task'
  if (isEditing) return 'Edit Task'
  return 'View Task'
})
</script>
<template>
  <header class="flex justify-between pb-2 mb-4 border-b border-muted">
    <span class="text-muted">#{{ taskId }}</span>
    <h3>{{ title }}</h3>
    <span class="flex-0"></span>
  </header>
</template>
