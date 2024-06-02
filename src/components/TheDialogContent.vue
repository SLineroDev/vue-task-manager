<script setup lang="ts">
import { useTaskForm } from '@/composables/useTaskForm'
import TaskFormButtons from '@/components/TaskForm/TaskFormButtons.vue'
import TaskFormInput from '@/components/TaskForm/TaskFormInput.vue'
import TaskFormChekbox from '@/components/TaskForm/TaskFormChekbox.vue'

const {
  isNewTask,
  isEditing,
  localTask,
  isValidTitle,
  isValidDate,
  deleteTask,
  onEdit,
  cancel,
  handleFormEnterKey,
  submit
} = useTaskForm()
</script>

<template>
  <form
    @submit.prevent="submit"
    @keydown.enter="handleFormEnterKey"
    class="flex flex-col justify-center gap-8">
    <div class="flex flex-col gap-4">
      <TaskFormInput
        v-model="localTask.title"
        :type="'text'"
        :isEditing="isEditing"
        :isValid="isValidTitle"
        :errorMessage="'Title is Mandatory'">
        Title
      </TaskFormInput>
      <TaskFormInput v-model="localTask.description" :type="'textarea'" :isEditing="isEditing">
        Description
      </TaskFormInput>
      <div class="grid items-stretch justify-between grid-cols-2 gap-6">
        <TaskFormInput
          v-model="localTask.dueDate"
          :type="'date'"
          :isEditing="isEditing"
          :isValid="isValidDate"
          :errorMessage="'Select a valid Date'">
          Due Date
        </TaskFormInput>
        <TaskFormChekbox v-model="localTask.done" :isEditing="isEditing" />
      </div>
    </div>
    <TaskFormButtons
      :isNewTask="isNewTask"
      :isEditing="isEditing"
      @click-cancel="cancel"
      @click-delete="deleteTask"
      @click-edit="onEdit" />
  </form>
</template>
