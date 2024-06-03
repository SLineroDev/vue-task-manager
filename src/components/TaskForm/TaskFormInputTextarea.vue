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
  <div v-if="!isEditing" class="p-3 truncate" :class="{ 'text-muted': !value }" :title="value">
    {{ value || '-' }}
  </div>
  <div v-else>
    <textarea
      class="w-full p-3 min-h-16 rounded-xl border-text bg-light dark:bg-secondary dark:placeholder-light/50 focus-visible:outline-1 focus-visible:outline-muted focus:outline-none"
      :class="{
        'bg-white dark:!bg-black outline-none pointer-events-none p-0 resize-none': !isEditing
      }"
      v-model="value"
      maxlength="200"
      rows="4"
      placeholder="Task Description" />
  </div>
</template>
