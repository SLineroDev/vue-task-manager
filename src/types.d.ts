export type Task = {
  id: number
  title: string
  description?: string
  dueDate?: string
  done: boolean
}

export type Data = {
  tasks: Task[]
  id: number
}
