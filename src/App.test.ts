import { mount } from '@vue/test-utils'
import App from './App.vue'

describe('App.vue', () => {
  beforeEach(() => {
    // create teleport target
    const el = document.createElement('div')
    el.id = 'dialog'
    document.body.appendChild(el)
  })

  it('renders without crashing', () => {
    const wrapper = mount(App)

    const header = wrapper.find('h1')
    const myTasks = wrapper.find('h2')

    expect(header.text()).toBe('Vue Task Manager')
    expect(myTasks.text()).toContain('My tasks')
  })

  it('renders the form when no tasks are present', () => {
    const wrapper = mount(App)

    const form = wrapper.find('#emptyForm')
    expect(form.isVisible()).toBeTruthy()
  })

  it('does not render the form when tasks are present', () => {
    const wrapper = mount(App, {
      global: {
        mocks: {
          tasks: [{ id: 1, title: 'Task 1', completed: false }]
        }
      }
    })

    const form = wrapper.find('#emptyForm')
    expect(form.exists()).toBeFalsy()
  })

  it('render TaskList when tasks are present', () => {
    const wrapper = mount(App, {
      global: {
        mocks: {
          tasks: [{ id: 1, title: 'Task 1', completed: false }]
        }
      }
    })

    const task1 = wrapper.find('[data-test-id="TASK_ITEM_1"]')
    expect(task1.exists()).toBeTruthy()
  })

  it('render Add Task button when tasks are present', () => {
    const wrapper = mount(App, {
      global: {
        mocks: {
          tasks: [{ id: 1, title: 'Task 1', completed: false }]
        }
      }
    })

    const addTaskBtn = wrapper.find('[data-test-id="ADD_TASK_BUTTON"]')
    expect(addTaskBtn.exists()).toBeTruthy()
  })
})
