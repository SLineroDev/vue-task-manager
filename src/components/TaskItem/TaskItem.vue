<script setup lang="ts">
import BaseCheck from '@/components/base/BaseCheck.vue'
import BaseDateReadOnly from '@/components/base/BaseDateReadOnly.vue'
import AppTrashIcon from '@/components/icons/AppTrashIcon.vue'
import { useTasksProviderInject } from '@/providers/useTasksProvider'
import type { Task } from '@/types'
import { type PropType } from 'vue'

const { task } = defineProps({
  task: {
    type: Object as PropType<Task>,
    required: true
  }
})

const { removeTask } = useTasksProviderInject()!

const emit = defineEmits(['open-task'])
</script>

<template>
  <div class="container flex w-full group">
    <div
      :data-test-id="`TASK_ITEM_${task.id}`"
      class="box-border z-[1] min-w-0 flex items-center justify-between flex-1 gap-6 py-4 bg-white dark:bg-dark rounded-2xl px-7 hover:ring-inset hover:ring-1 hover:ring-stone-600 focus:"
      @click="() => emit('open-task', task.id)">
      <label class="cursor-pointer" @click.stop.prevent="() => (task.done = !task.done)">
        <BaseCheck :value="task.done" />
      </label>
      <div class="flex flex-col flex-1 min-w-0 gap-2">
        <span class="-mb-3 text-sm dark:text-muted">#{{ task.id }}</span>
        <h3 class="text-2xl truncate">{{ task.title }}</h3>
        <p
          v-if="task.description"
          :title="task.description"
          class="inline-block max-w-full pt-1 overflow-hidden truncate border-t border-muted dark:text-muted">
          {{ task.description }}
        </p>
        <div class="flex gap-4 md:hidden">
          <BaseDateReadOnly :date="task.dueDate" />
        </div>
      </div>
      <div class="hidden gap-4 md:flex">
        <BaseDateReadOnly :date="task.dueDate" />
      </div>
    </div>
    <div
      :data-test-id="`REMOVE_TASK_BUTTON_${task.id}`"
      class="items-center self-center hidden h-full p-4 -ml-3 transition-transform -translate-x-full cursor-pointer sm:flex pl-7 text-light dark:text-dark bg-danger rounded-r-2xl hover:bg-danger-hover group-hover:-translate-x-0"
      @click.stop="() => removeTask(task.id)">
      <AppTrashIcon />
    </div>
  </div>
</template>
