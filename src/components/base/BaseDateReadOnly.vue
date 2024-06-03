<script setup lang="ts">
import AppCalendarIcon from '@/components/icons/AppCalendarIcon.vue'

const { date } = defineProps({
  date: {
    type: String
  }
})
</script>

<template>
  <AppCalendarIcon class="stroke-tertiary" />
  <div class="leading-[26px] text-muted">
    <span v-if="date" class="text-dark dark:text-light">
      {{ new Date(date).toLocaleDateString() }}
    </span>
    <span v-else class="pl-4">No Date</span>
  </div>
</template>
