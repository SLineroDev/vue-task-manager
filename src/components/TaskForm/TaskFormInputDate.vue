<script setup lang="ts">
import BaseDateReadOnly from '@/components/base/BaseDateReadOnly.vue'

const value = defineModel({
  type: String,
  default: ''
})
const { isEditing, showError } = defineProps({
  isEditing: {
    type: Boolean,
    default: false
  },
  showError: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div v-if="!isEditing" class="flex items-center gap-4 p-2">
    <BaseDateReadOnly :date="value" />
  </div>
  <input
    type="date"
    v-if="isEditing"
    class="p-3 rounded-xl bg-light border-text dark:bg-secondary dark:placeholder-text-light/50 dark:[color-scheme:dark] focus-visible:outline-1 focus-visible:outline-muted focus:outline-none"
    :class="[
      { 'dark:bg-black outline-none pointer-events-none p-0 pt-2': !isEditing },
      { 'ring-1 ring-danger': showError }
    ]"
    :readonly="!isEditing"
    v-model="value"
    placeholder="Due Date" />
</template>
