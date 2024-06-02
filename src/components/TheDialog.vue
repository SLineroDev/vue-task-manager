<script setup lang="ts">
import TaskForm from '@/components/TaskForm/TaskForm.vue'
import { useDialogProvider } from '@/composables/useDialogProvider'
import TheDialogHeader from './TheDialogHeader.vue'

const { dialogRef, taskId, openDialog, closeDialog, handleClickOutside } = useDialogProvider()

defineExpose({
  openDialog
})
</script>

<template>
  <dialog
    ref="dialogRef"
    class="w-full m-auto shadow-md focus:outline-none rounded-2xl dark:text-light dark:bg-dark md:max-w-2xl backdrop:animate-fadeIn backdrop:bg-stone-900/90 animate-scaleDown open:animate-scaleUp"
    @click="handleClickOutside"
    @close="closeDialog">
    <div class="p-6 wrapper">
      <TheDialogHeader v-if="taskId" :key="taskId" />
      <TaskForm v-if="taskId" :key="taskId" :task-id="taskId" />
    </div>
  </dialog>
</template>
