<script setup lang="ts">
import AppCheckIcon from '@/components/icons/AppCheckIcon.vue'

/* const value = defineModel({ type: Boolean, default: false }) */
const { value, readOnly, id } = defineProps({
  value: {
    type: Boolean,
    default: false
  },
  id: {
    type: String,
    default: ''
  },
  readOnly: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['change'])
</script>

<template>
  <input
    type="checkbox"
    :id="id"
    :value="value"
    class="absolute w-0 h-0 opacity-0"
    @change="() => emit('change')"
    :disabled="readOnly"
    aria-label="Status" />
  <div
    class="flex items-center justify-center w-6 h-6 border-2 border-gray-400 rounded focus:"
    :class="{ 'border-green-500': value }">
    <AppCheckIcon v-if="value" class="w-4 h-4 text-green-500" />
  </div>
</template>
