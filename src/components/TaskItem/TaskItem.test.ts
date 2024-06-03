import { TASKS_PROVIDER_KEY, useTasksProvider, useTasksProviderInject } from '@/providers/useTasksProvider'
import { mount } from '@vue/test-utils'
import TaskItem from './TaskItem.vue'

describe('TaskItem.vue', () => {
  it('renders the task title', () => {
    const wrapper = mount(TaskItem, {
      global: {
        provide: {
          [TASKS_PROVIDER_KEY as symbol]: useTasksProvider()
        }
      },
      props: {
        task: { id: 1, title: 'Task 1', done: false }
      }
    })

    const title = wrapper.find('h3')
    expect(title.text()).toBe('Task 1')
  })

  it('Task is deleted', async () => {
    const removeTask = vi.fn()
    const wrapper = mount(TaskItem, {
      global: {
        provide: {
          [TASKS_PROVIDER_KEY as symbol]: useTasksProvider()
        }
      },
      props: {
        task: { id: 1, title: 'Task 1', done: false }
      },
      inject: {
        removeTask: {
          default: removeTask
        }
      }
    })

    const title = wrapper.find('h3')
    const deleteButton = wrapper.find('[data-test-id="REMOVE_TASK_BUTTON_1"]')
    expect(title.text()).toBe('Task 1')

    await deleteButton.trigger('click')

    expect(removeTask).toHaveBeenCalled()
  })

  it('Task is deleted', async () => {
    const removeTask = vi.fn()
    const wrapper = mount(TaskItem, {
      global: {
        provide: {
          [TASKS_PROVIDER_KEY as symbol]: useTasksProvider()
        }
      },
      props: {
        task: { id: 1, title: 'Task 1', done: false }
      },
      inject: {
        removeTask: {
          default: removeTask
        }
      }
    })

    const title = wrapper.find('h3')
    const deleteButton = wrapper.find('[data-test-id="REMOVE_TASK_BUTTON_1"]')
    expect(title.text()).toBe('Task 1')

    await deleteButton.trigger('click')

    expect(removeTask).toHaveBeenCalled()
  })
})
