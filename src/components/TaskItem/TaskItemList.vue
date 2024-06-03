<script setup lang="ts">
import TaskForm from '@/components/TaskForm/TaskForm.vue'
import TaskItem from '@/components/TaskItem/TaskItem.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import AppPlusIcon from '@/components/icons/AppPlusIcon.vue'
import { useTasksProviderInject } from '@/providers/useTasksProvider'

const { tasks, nextId } = useTasksProviderInject()

const emit = defineEmits(['open-dialog'])
function openDialog(taskId?: number) {
  emit('open-dialog', taskId)
}
</script>

<template>
  <div class="text-center">
    <h2 class="py-6 text-2xl">
      My tasks
      <span class="text-muted">{{ tasks.length }}</span>
    </h2>
    <span v-if="tasks.length == 0">You don't have any tasks yet. Let's create one!</span>
  </div>
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
  <div
    v-if="tasks.length > 0"
    class="absolute w-[98%] h-1/6 bottom-0 bg-gradient-to-t transition-all from-light dark:from-secondary via-light dark:via-secondary to-transparent z-10 text-center mx-auto flex items-center justify-center gap-4 animate-fadeIn">
    <BaseButton @click="openDialog">
      <span>Add Task</span>
      <template #icon>
        <AppPlusIcon />
      </template>
    </BaseButton>
  </div>
</template>

<style scoped>
.tasks-move {
  transition: transform 0.5s;
}
</style>
