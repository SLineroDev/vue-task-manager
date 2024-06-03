<script setup lang="ts">
import TaskForm from '@/components/TaskForm/TaskForm.vue'
import TaskItem from '@/components/TaskItem/TaskItem.vue'
import { useTasksProviderInject } from '@/providers/useTasksProvider'
import TaskItemListAddButtonVue from './TaskItemListAddButton.vue'
import TaskItemListHeader from './TaskItemListHeader.vue'

const { tasks, nextId } = useTasksProviderInject()

const emit = defineEmits(['open-dialog'])
function openDialog(taskId?: number) {
  emit('open-dialog', taskId)
}
</script>

<template>
  <TaskItemListHeader :tasks-count="tasks.length" />
  <TransitionGroup
    v-if="tasks.length > 0"
    tag="section"
    name="tasks"
    mode="out-in"
    enter-active-class="duration-500 transform"
    leave-active-class="duration-500 transform"
    enter-from-class="scale-0 opacity-0"
    leave-to-class="scale-0 opacity-0"
    class="flex flex-col w-full gap-8 pb-20 overflow-x-hidden overflow-y-auto duration">
    <TaskItem
      class="cursor-pointer animate-slideUp"
      v-for="task in tasks.slice().reverse()"
      :key="task.id"
      :task="task"
      @open-task="() => openDialog(task.id)" />
  </TransitionGroup>
  <TaskForm v-if="tasks.length === 0" :task-id="nextId" id="emptyForm" class="mt-3" />
  <TaskItemListAddButtonVue :tasks-count="tasks.length" @open-dialog="openDialog" />
</template>

<style scoped>
.tasks-move {
  transition: transform 0.5s;
}
</style>
