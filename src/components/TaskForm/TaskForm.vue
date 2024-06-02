<script setup lang="ts">
import TaskFormButtons from '@/components/TaskForm/TaskFormButtons.vue'
import TaskFormChekbox from '@/components/TaskForm/TaskFormChekbox.vue'
import TaskFormInput from '@/components/TaskForm/TaskFormInput.vue'
import { useTasksProviderInject } from '@/composables/useTasksProvider'
import { NEW_TASK } from '@/constants'
import { computed, onMounted, ref } from 'vue'

const { tasks, nextId, addTask, editTask, removeTask } = useTasksProviderInject()

const { taskId } = defineProps({
  taskId: {
    type: Number,
    default: false
  }
})

const isNewTask = computed(() => taskId === nextId.value)

const initialTask = ref(
  isNewTask.value
    ? { id: nextId.value, ...NEW_TASK }
    : { ...tasks.value.find((t) => t.id === taskId)! }
)
const isEditing = ref(isNewTask.value)
const localTask = ref({ ...initialTask.value })
const titleRef = ref<InstanceType<typeof TaskFormInput>>()
const isValidTitle = ref(true)
const isValidDate = ref(true)

const emit = defineEmits(['close-dialog'])

onMounted(() => {
  titleRef.value?.focus()
})

function validateTask() {
  isValidTitle.value = Boolean(localTask.value.title && localTask.value.title.trim())
  if (localTask.value.dueDate) isValidDate.value = !isNaN(Date.parse(localTask.value.dueDate))
}

function saveTask() {
  validateTask()
  if (!isValidTitle.value || !isValidDate.value) return
  isEditing.value = false
  initialTask.value = { ...localTask.value }
  editTask(localTask.value)
}

function createTask() {
  validateTask()
  if (!isValidTitle.value) return
  addTask(localTask.value)
  emit('close-dialog')
}

function deleteTask() {
  removeTask(localTask.value.id)
  emit('close-dialog')
}

function onEdit() {
  isEditing.value = true
  titleRef.value?.focus()
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
  <form
    @submit.prevent="submit"
    @keydown.enter="handleFormEnterKey"
    class="flex flex-col justify-center gap-8">
    <div class="flex flex-col gap-4">
      <TaskFormInput
        ref="titleRef"
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
