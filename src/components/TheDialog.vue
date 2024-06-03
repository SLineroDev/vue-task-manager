<script setup lang="ts">
import TaskForm from '@/components/TaskForm/TaskForm.vue'
import AppCrossIcon from './icons/AppCrossIcon.vue'
import { ref } from 'vue'

const dialogRef = ref<HTMLDialogElement | null>(null)
const taskId = ref<number | null>(null)
const isNewTask = ref<boolean>(false)

function openDialog(id: number, addTask: boolean = false) {
  taskId.value = id
  isNewTask.value = addTask
  dialogRef.value?.showModal()
}

function closeDialog() {
  taskId.value = null
  dialogRef.value?.close()
}

function handleClickOutside(event: MouseEvent) {
  if (event.target === dialogRef.value) {
    closeDialog()
  }
}
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
