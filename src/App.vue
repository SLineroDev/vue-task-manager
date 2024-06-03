<script setup lang="ts">
import TaskItemList from '@/components/TaskItem/TaskItemList.vue'
import TheDialog from '@/components/TheDialog.vue'
import TheHeader from '@/components/TheHeader.vue'
import { useTasksProvider } from '@/providers/useTasksProvider'
import { onMounted, ref } from 'vue'
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
  <Teleport to="#dialog">
    <TheDialog ref="dialogRef" />
  </Teleport>
  <TheHeader />
  <main class="relative flex flex-col min-h-0 h-[calc(100svh-6rem)]" :class="{ 'overflow-y-auto': tasks.length === 0 }">
    <TaskItemList @open-dialog="openDialog" />
  </main>
</template>
