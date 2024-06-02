<script setup lang="ts">
const value = defineModel({ type: String })
const { isEditing } = defineProps({
  isEditing: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <span v-if="!value && !isEditing" class="p-2 text-muted">-</span>
  <textarea
    v-if="value || isEditing"
    class="p-3 rounded-xl border-text bg-light dark:bg-secondary dark:placeholder-light/50 focus-visible:outline-1 focus-visible:outline-muted focus:outline-none"
    :class="{ 'dark:!bg-black outline-none pointer-events-none p-0': !isEditing }"
    :readonly="!isEditing"
    v-model="value"
    placeholder="Task Description" />
</template>
