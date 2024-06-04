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
    leave-active-class="absolute duration-500 transform"
    enter-from-class="scale-0 opacity-0"
    leave-to-class="scale-0 opacity-0"
    class="flex flex-col w-full min-h-full gap-8 pb-20 overflow-x-hidden overflow-y-auto">
    <TaskItem
      :tabindex="index"
      class="cursor-pointer animate-slideUp"
      v-for="[index, task] in tasks.slice().reverse().entries()"
      :key="task.id"
      :task="task"
      @open-task="() => openDialog(task.id)" />
  </TransitionGroup>
  <div class="container">
    <TaskForm v-if="tasks.length === 0" :task-id="nextId" id="emptyForm" class="mt-3" />
  </div>
  <TaskItemListAddButtonVue :tasks-count="tasks.length" @open-dialog="openDialog" />
</template>

<style scoped>
.tasks-move {
  transition: transform 0.5s;
}
</style>
