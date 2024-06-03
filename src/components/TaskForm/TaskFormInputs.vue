<script setup lang="ts">
import TaskFormInput from './TaskFormInput.vue'
import TaskFormChekbox from './TaskFormChekbox.vue'
import type { Task } from '@/types'
import { onUpdated, ref, watch, type PropType } from 'vue'

export type FormInputErrors = {
  [K in keyof Task]?: boolean
}
const task = defineModel({ type: Object as PropType<Task>, required: true })
const { isEditing, showError } = defineProps({
  isEditing: {
    type: Boolean,
    default: false
  },
  showError: {
    type: Object as PropType<FormInputErrors>,
    default: {}
  }
})

const titleRef = ref<InstanceType<typeof TaskFormInput>>()

function focus() {
  titleRef.value?.focus()
}
defineExpose<{ focus: () => void }>({ focus })
</script>

<template>
  <div class="flex flex-col gap-4">
    <TaskFormInput
      ref="titleRef"
      v-model="task.title"
      :type="'text'"
      :isEditing="isEditing"
      :showError="showError.title"
      :errorMessage="'Title is Mandatory'">
      Title
    </TaskFormInput>
    <TaskFormInput v-model="task.description" :type="'textarea'" :isEditing="isEditing">Description</TaskFormInput>
    <div class="grid items-stretch justify-between grid-cols-2 gap-6">
      <TaskFormInput
        v-model="task.dueDate"
        :type="'date'"
        :isEditing="isEditing"
        :showError="showError.dueDate"
        :errorMessage="'Select a valid Date'">
        Due Date
      </TaskFormInput>
      <TaskFormChekbox v-model="task.done" :isEditing="isEditing" :id="`check-form-${task.id}`" />
    </div>
  </div>
</template>
