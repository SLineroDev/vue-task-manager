import { LOCAL_STORAGE_KEY } from '@/constants'
import type { Task } from '@/types'
import { computed, inject, provide, ref, type ComputedRef, type InjectionKey, type Ref } from 'vue'

export interface TasksProvider {
  tasks: Ref<Task[]>
  nextId: ComputedRef<number>
  addTask: (task: Task) => void
  editTask: (task: Task) => void
  removeTask: (id: number) => void
}

export const TASKS_PROVIDER_KEY = Symbol() as InjectionKey<TasksProvider>

function updateTasksFromLocalStorage(tasks: Task[]) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
}

export const useTasksProvider: () => TasksProvider = () => {
  const tasks = ref<Task[]>([])

  const nextId = computed(() =>
    tasks.value.length > 0 ? tasks.value[tasks.value.length - 1].id + 1 : 1
  )

  function addTask(task: Task) {
    tasks.value.push(task)
    updateTasksFromLocalStorage(tasks.value)
  }

  function editTask(task: Task) {
    const index = tasks.value.findIndex((t) => t.id === task.id)
    tasks.value[index] = { ...task }
    updateTasksFromLocalStorage(tasks.value)
  }

  function removeTask(id: number) {
    const index = tasks.value.findIndex((task) => task.id === id)
    tasks.value.splice(index, 1)
    updateTasksFromLocalStorage(tasks.value)
  }

  provide<TasksProvider>(TASKS_PROVIDER_KEY, {
    tasks,
    nextId,
    addTask,
    editTask,
    removeTask
  })

  return {
    tasks,
    nextId,
    addTask,
    editTask,
    removeTask
  }
}

export const useTasksProviderInject = () => {
  const tasksProvider = inject(TASKS_PROVIDER_KEY)
  if (!tasksProvider) {
    throw new Error('useTasksProviderInject must be used within a TasksProvider')
  }
  return tasksProvider
}
