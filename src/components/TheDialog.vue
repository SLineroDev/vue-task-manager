<script setup lang="ts">
import TaskForm from '@/components/TaskForm/TaskForm.vue'
import { useDialogProvider } from '@/providers/useDialogProvider'
import AppCrossIcon from './icons/AppCrossIcon.vue'

const { dialogRef, taskId, openDialog, closeDialog, handleClickOutside } = useDialogProvider()

defineExpose({
  openDialog
})
</script>

<template>
  <dialog
    id="theDialog"
    ref="dialogRef"
    class="w-full m-auto shadow-md focus:outline-none rounded-2xl dark:text-light dark:bg-dark md:max-w-2xl backdrop:animate-fadeIn backdrop:bg-stone-900/90 animate-scaleDown open:animate-scaleUp"
    @click="handleClickOutside"
    @close="closeDialog">
    <button class="absolute right-0 m-6 outline-none" click="closeDialog" @click="closeDialog" title="Close">
      <AppCrossIcon />
    </button>
    <TaskForm v-if="taskId" :key="taskId" :task-id="taskId" @close-dialog="closeDialog" />
  </dialog>
</template>
