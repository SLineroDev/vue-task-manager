<script setup lang="ts">
import TaskFormButtons from '@/components/TaskForm/TaskFormButtons.vue'
import TaskFormHeader from '@/components/TaskForm/TaskFormHeader.vue'
import TaskFormInputs from '@/components/TaskForm/TaskFormInputs.vue'
import { NEW_TASK } from '@/constants'
import { useTasksProviderInject } from '@/providers/useTasksProvider'
import { computed, onMounted, ref } from 'vue'
import type { FormInputErrors } from './TaskFormInputs.vue'

const { tasks, nextId, addTask, editTask, removeTask } = useTasksProviderInject()

const { taskId } = defineProps({
  taskId: {
    type: Number,
    required: true
  }
})

const isNewTask = computed(() => taskId === nextId.value)

const initialTask = ref(
  isNewTask.value ? { id: nextId.value, ...NEW_TASK } : { ...tasks.value.find((t) => t.id === taskId)! }
)
const isEditing = ref(isNewTask.value)
const localTask = ref({ ...initialTask.value })
const inputsRef = ref<InstanceType<typeof TaskFormInputs>>()
const showInputError = ref<FormInputErrors>({})

const emit = defineEmits(['close-dialog'])

onMounted(() => {
  inputsRef.value?.focus()
})

function showFormErrors() {
  showInputError.value.title = !Boolean(localTask.value.title && localTask.value.title.trim())
  if (localTask.value.dueDate) showInputError.value.dueDate = isNaN(Date.parse(localTask.value.dueDate))
  return Object.values(showInputError.value).some((v) => v === true)
}

function saveTask() {
  if (showFormErrors()) return
  isEditing.value = false
  initialTask.value = { ...localTask.value }
  editTask(localTask.value)
}

function createTask() {
  if (showFormErrors()) return
  addTask(localTask.value)
  emit('close-dialog')
}

function deleteTask() {
  removeTask(localTask.value.id)
  emit('close-dialog')
}

function onEdit() {
  isEditing.value = true
  inputsRef.value?.focus()
}

function cancel() {
  if (isNewTask.value) return emit('close-dialog')
  isEditing.value = false
  localTask.value = { ...initialTask.value }
}

function handleFormEnterKey(event: KeyboardEvent) {
  event.preventDefault()
  if (isNewTask.value) return createTask()
  if (!isNewTask.value && isEditing.value) return saveTask()
}

function submit() {
  if (isNewTask.value) return createTask()
  if (!isNewTask.value && isEditing.value) return saveTask()
  if (!isNewTask.value && !isEditing.value) return (isEditing.value = true)
}
</script>

<template>
  <section class="p-6 dark:text-light dark:bg-dark rounded-3xl">
    <TaskFormHeader :task-id="taskId" :isNewTask="isNewTask" :isEditing="isEditing" :key="+isEditing" />
    <form @submit.prevent="submit" @keydown.enter="handleFormEnterKey" class="flex flex-col justify-center gap-8">
      <TaskFormInputs ref="inputsRef" v-model="localTask" :isEditing="isEditing" :showError="showInputError" />
      <TaskFormButtons
        :isNewTask="isNewTask"
        :isEditing="isEditing"
        :hide-cancel="taskId === 1"
        @click-cancel="cancel"
        @click-delete="deleteTask"
        @click-edit="onEdit" />
    </form>
  </section>
</template>
