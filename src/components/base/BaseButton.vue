<script setup lang="ts">
import type { PropType } from 'vue'

type ButtonColor = 'primary' | 'default' | 'outline' | 'danger'
type ButtonType = 'button' | 'submit' | 'reset'

const { color, type } = defineProps({
  color: {
    type: String as PropType<ButtonColor>,
    default: 'primary'
  },
  type: {
    type: String as PropType<ButtonType>,
    default: 'button'
  }
})

const emit = defineEmits(['click'])
</script>
<template>
  <button
    :type="type"
    class="flex gap-2 p-4 leading-6 transition-colors rounded-3xl"
    :class="[
      {
        'bg-primary text-white stroke-white dark:text-dark dark:stroke-dark hover:bg-primary-hover': color === 'primary'
      },
      {
        'bg-dark dark:bg-light text-light dark:text-dark hover:bg-transparent hover:text-dark hover:outline hover:outline-1 hover:outline-dark dark:hover:outline-light dark:hover:text-light ':
          color === 'default'
      },
      {
        'bg-transparent text:dark dark:text-light border border-dark dark:border-light hover:bg-dark dark:hover:bg-light hover:text-light dark:hover:text-dark':
          color === 'outline'
      },
      { 'bg-danger text-light hover:bg-danger-hover': color === 'danger' }
    ]"
    @click="() => emit('click')">
    <slot></slot>
    <slot name="icon"></slot>
  </button>
</template>
