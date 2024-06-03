<script setup lang="ts">
const { tasksCount } = defineProps({
  tasksCount: {
    type: Number,
    default: 0
  }
})
</script>
<template>
  <div class="text-center">
    <h2 class="py-6 text-2xl">
      My tasks
      <span class="text-muted">{{ tasksCount }}</span>
    </h2>
    <span v-if="tasksCount == 0">You don't have any tasks yet. Let's create one!</span>
  </div>
</template>
