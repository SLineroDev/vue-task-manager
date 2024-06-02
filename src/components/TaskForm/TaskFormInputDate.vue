<script setup lang="ts">
import AppDateReadOnly from '@/components/AppDateReadOnly.vue'

const value = defineModel({
  type: String,
  default: ''
})
const { isEditing, isValid } = defineProps({
  isEditing: {
    type: Boolean,
    default: false
  },
  isValid: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div v-if="!value && !isEditing" class="p-2 text-muted">-</div>
  <div v-if="value && !isEditing" class="flex items-center gap-4 p-2">
    <AppDateReadOnly :date="value" />
  </div>
  <input
    type="date"
    v-if="isEditing"
    class="p-3 rounded-xl bg-light border-text dark:bg-secondary dark:placeholder-text-light/50 dark:[color-scheme:dark] focus-visible:outline-1 focus-visible:outline-muted focus:outline-none"
    :class="[
      { 'dark:bg-black outline-none pointer-events-none p-0 pt-2': !isEditing },
      { 'ring-1 ring-danger': !isValid }
    ]"
    :readonly="!isEditing"
    v-model="value"
    placeholder="Due Date" />
</template>
