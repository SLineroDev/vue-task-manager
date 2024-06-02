import type { Task } from './types'

export const NEW_TASK: Omit<Task, 'id'> = {
  title: '',
  description: '',
  dueDate: '',
  done: false
}

export const LOCAL_STORAGE_KEY = 'vue-task-manager:tasks'
