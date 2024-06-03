<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import AppEditIcon from '@/components/icons/AppEditIcon.vue'
import AppPlusIcon from '@/components/icons/AppPlusIcon.vue'
import AppSaveIcon from '@/components/icons/AppSaveIcon.vue'
import AppTrashIcon from '@/components/icons/AppTrashIcon.vue'

const { isNewTask, isEditing } = defineProps({
  isNewTask: {
    type: Boolean,
    required: true
  },
  isEditing: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['click-cancel', 'click-delete', 'click-edit'])
</script>

<template>
  <div class="flex items-center justify-end gap-4 font-semibold select-none">
    <BaseButton v-if="isNewTask || (!isNewTask && isEditing)" :color="'outline'" @click="emit('click-cancel')">
      <span class="font-semibold">Cancel</span>
    </BaseButton>
    <BaseButton v-if="!isNewTask && !isEditing" :color="'danger'" @click="emit('click-delete')">
      <span class="font-semibold">Delete</span>
      <template #icon>
        <AppTrashIcon />
      </template>
    </BaseButton>
    <BaseButton v-if="!isNewTask && !isEditing" :color="'default'" @click="emit('click-edit')">
      <span class="font-semibold">Edit</span>
      <template #icon>
        <AppEditIcon />
      </template>
    </BaseButton>
    <BaseButton v-if="isNewTask || isEditing" :type="'submit'">
      <span class="font-semibold" v-if="isNewTask">Add Task</span>
      <span class="font-semibold" v-if="!isNewTask && isEditing">Save</span>
      <template #icon>
        <AppPlusIcon v-if="isNewTask" />
        <AppSaveIcon v-if="!isNewTask && isEditing" />
      </template>
    </BaseButton>
  </div>
</template>
