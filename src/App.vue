<script setup lang="ts">
import { onMounted, ref } from 'vue'
import TheDialog from '@/components/TheDialog.vue'
import TheHeader from '@/components/TheHeader.vue'
import MyTasks from '@/components/MyTasks.vue'
import { useTasksProvider } from '@/composables/useTasksProvider'
import { LOCAL_STORAGE_KEY } from './constants'

const { tasks, nextId } = useTasksProvider()

const dialogRef = ref<InstanceType<typeof TheDialog>>()

onMounted(() => {
  const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (!savedTasks) return
  tasks.value = JSON.parse(savedTasks)
})

function openDialog(taskId?: number) {
  dialogRef.value?.openDialog(taskId || nextId.value, taskId === undefined)
}
</script>

<template>
  <Teleport to="body">
    <TheDialog ref="dialogRef" />
  </Teleport>
  <TheHeader />
  <main class="relative flex flex-col h-[calc(100svh-6rem)] overflow-y-hidden">
    <MyTasks @open-dialog="openDialog" />
  </main>
</template>
