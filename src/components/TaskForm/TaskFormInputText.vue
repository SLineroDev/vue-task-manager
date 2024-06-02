<script setup lang="ts">
import { ref } from 'vue'

const value = defineModel<String>()
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

const inputRef = ref<HTMLInputElement>()
function focus() {
  inputRef.value?.focus()
}
defineExpose<{ focus: () => void }>({ focus })
</script>

<template>
  <input
    ref="inputRef"
    type="text"
    class="p-3 rounded-xl bg-light dark:bg-secondary dark:placeholder-text-light/50 focus-visible:outline-1 focus-visible:outline-muted focus:outline-none"
    :class="[
      {
        'bg-white dark:!bg-black outline-none pointer-events-none p-0 focus-visible:!outline-none':
          !isEditing
      },
      { 'ring-1 ring-danger focus-visible:outline-none focus:outline-none': !isValid }
    ]"
    v-model="value"
    :readonly="!isEditing"
    placeholder="Task title" />
</template>
