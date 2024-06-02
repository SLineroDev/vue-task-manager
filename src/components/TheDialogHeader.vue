<script setup lang="ts">
import AppCrossIcon from '@/components/icons/AppCrossIcon.vue'
import { useDialogProviderInject } from '@/composables/useDialogProvider'
import { computed } from 'vue'

const { isNewTask, taskId, closeDialog } = useDialogProviderInject()

const { isEditing } = defineProps({
  isEditing: {
    type: Boolean,
    default: false
  }
})

const title = computed(() => {
  if (isNewTask.value) return 'New Task'
  if (isEditing) return 'Edit Task'
  return 'View Task'
})
</script>
<template>
  <header class="flex justify-between pb-2 mb-4 border-b border-muted">
    <span class="text-muted">#{{ taskId }}</span>
    <h3>{{ title }}</h3>
    <button class="outline-none" click="closeDialog" @click="closeDialog" title="Close">
      <AppCrossIcon />
    </button>
  </header>
</template>
