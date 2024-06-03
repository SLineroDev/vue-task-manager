<script setup lang="ts">
import AppPlusIcon from '@/components/icons/AppPlusIcon.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const { tasksCount } = defineProps({
  tasksCount: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['open-dialog'])
</script>

<template>
  <div
    data-test-id="ADD_TASK_BUTTON"
    v-if="tasksCount > 0"
    class="absolute w-[98%] h-1/6 bottom-0 bg-gradient-to-t transition-all from-light dark:from-secondary via-light dark:via-secondary to-transparent z-10 text-center mx-auto flex items-center justify-center gap-4 animate-fadeIn">
    <BaseButton @click="emit('open-dialog')">
      <span>Add Task</span>
      <template #icon>
        <AppPlusIcon />
      </template>
    </BaseButton>
  </div>
</template>
