<script setup lang="ts">
import { ref } from 'vue'
import TaskFormInputDate from './TaskFormInputDate.vue'
import TaskFormInputText from './TaskFormInputText.vue'
import TaskFormInputTextarea from './TaskFormInputTextarea.vue'

interface Props {
  type: 'text' | 'textarea' | 'date' | 'checkbox'
  isEditing: boolean
  showError?: boolean
  errorMessage?: string
}

const value = defineModel<String>()
const { type, isEditing, showError, errorMessage } = defineProps<Props>()
const titleRef = ref<InstanceType<typeof TaskFormInputText>>()

function focus() {
  titleRef.value?.focus()
}
defineExpose<{ focus: () => void }>({ focus })
</script>

<template>
  <label class="flex flex-col">
    <span class="pb-1 font-semibold select-none">
      <slot></slot>
    </span>
    <TaskFormInputText
      ref="titleRef"
      v-if="type === 'text'"
      v-model="value"
      :isEditing="isEditing"
      :showError="showError" />
    <TaskFormInputTextarea v-else-if="type === 'textarea'" v-model="value" :isEditing="isEditing" />
    <TaskFormInputDate
      v-else-if="type === 'date'"
      v-model="value"
      :isEditing="isEditing"
      :showError="showError" />
    <span v-show="showError" class="pt-1 text-sm text-danger-hover" :class="{ hidden: !showError }">
      {{ errorMessage }}
    </span>
  </label>
</template>
