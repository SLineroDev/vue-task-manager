import { inject, provide, ref, type InjectionKey, type Ref } from 'vue'

export interface DialogProvider {
  dialogRef: Ref<HTMLDialogElement | null>
  taskId: Ref<number | null>
  isNewTask: Ref<boolean>
  openDialog: (id: number, addTask?: boolean) => void
  closeDialog: () => void
  handleClickOutside: (event: MouseEvent) => void
}

export const DIALOG_PROVIDER_KEY = Symbol() as InjectionKey<DialogProvider>

export const useDialogProvider: () => DialogProvider = () => {
  const dialogRef = ref<HTMLDialogElement | null>(null)
  const taskId = ref<number | null>(null)
  const isNewTask = ref<boolean>(false)

  function openDialog(id: number, addTask: boolean = false) {
    taskId.value = id
    isNewTask.value = addTask
    dialogRef.value?.showModal()
  }

  function closeDialog() {
    taskId.value = null
    dialogRef.value?.close()
  }

  function handleClickOutside(event: MouseEvent) {
    if (event.target === dialogRef.value) {
      closeDialog()
    }
  }

  provide<DialogProvider>(DIALOG_PROVIDER_KEY, {
    dialogRef,
    taskId,
    isNewTask,
    openDialog,
    closeDialog,
    handleClickOutside
  })

  return {
    dialogRef,
    taskId,
    isNewTask,
    openDialog,
    closeDialog,
    handleClickOutside
  }
}

export const useDialogProviderInject = () => {
  const dialogProvider = inject(DIALOG_PROVIDER_KEY)
  if (!dialogProvider) {
    throw new Error('usedialogProviderInject must be used within a DialogProvider')
  }
  return dialogProvider
}
