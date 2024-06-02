<script setup lang="ts">
import AppCalendarIcon from '@/components/icons/AppCalendarIcon.vue'

const { date } = defineProps({
  date: {
    type: String,
    required: true
  }
})
</script>

<template>
  <AppCalendarIcon class="stroke-tertiary" />
  <span class="leading-[26px] text-muted">
    {{ new Date(date).toLocaleDateString() }}
  </span>
</template>
