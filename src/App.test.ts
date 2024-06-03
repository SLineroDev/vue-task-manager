import { mount } from '@vue/test-utils'
import App from './App.vue'

describe('App.vue', () => {
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
})
