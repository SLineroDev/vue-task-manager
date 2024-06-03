<script setup lang="ts">
import AppCheck from '@/components/AppCheck.vue'

const value = defineModel({
  type: Boolean,
  default: false
})
const { isEditing } = defineProps({
  isEditing: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <label
    class="flex flex-col min-h-0 rounded border-text group"
    :class="{ 'cursor-pointer': isEditing }">
    <span class="pb-1 font-semibold select-none">Status</span>
    <div
      class="flex gap-4 p-3 bg-light dark:bg-secondary rounded-xl group-focus-within:ring-1 group-focus-within:ring-primary group-focus-within:ring-opacity-50"
      :class="{ 'bg-white dark:!bg-black outline-none pointer-events-none p-0 pt-2': !isEditing }">
      <AppCheck :value="value" :read-only="!isEditing" @change="() => (value = !value)" />
      <span
        class="leading-[26px] select-none text-muted"
        :class="[
          { 'text-primary': value },
          { '!text-secondary dark:!text-light': isEditing && !value }
        ]">
        {{ value ? 'Done' : 'To do' }}
      </span>
    </div>
  </label>
</template>
