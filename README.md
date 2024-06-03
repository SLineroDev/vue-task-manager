# Vue Task Manager

![Cover Image of Vue Task Manager](/public/cover.png)

This is a simple task manager application built with [Vue 3](https://vuejs.org/) and [Tailwind](https://tailwindcss.com/).

With a **100 score in Lighthouse**
![Picture of Lighthouse score showing 100 in all 4 (not counting PWA)](/public/100-lighthouse.png)

With **auto dark/light** themes using [tailwind dark mode](https://tailwindcss.com/docs/dark-mode)

![Picture of Vue Task Manager with the light theme](/public/light-theme.png)

And fully responsive for mobile

![Picture of Vue Task Manager with the light theme in mobile size](/public/mobile.png)

## Prerequisites

Before you begin, ensure you have met the following requirements:

* Install [Node.js](https://nodejs.org/en/download/) version 18.3 or higher.

## Recommended IDE Setup

The recommended IDE setup is [VSCode](https://code.visualstudio.com/) + the  [Vue - Official extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar). The extension provides syntax highlighting, TypeScript support, and intellisense for template expressions and component props.

## Setup and Usage

To install Vue Task Manager, introduce these commands in a new terminal:

1. Clone the repository:

   ```sh
   git clone https://github.com/slinerodev/vue-task-manager.git
   ```

2. Navigate into the project directory:

   ```sh
   cd vue-task-manager
   ```

3. Install the dependencies:

   ```sh
    npm install
    ```

### Usage

* Compile and Hot-Reload for Development

    ```sh
    npm dev
    ```

* Type-Check, Compile and Minify for Production

    ```sh
    npm build
    ```

* Lint with [ESLint](https://eslint.org/)

  ```sh
  npm lint
  ```

* Execute tests with [Vitest](https://vitest.dev/) and [Vue Test Utils](https://test-utils.vuejs.org/)

  ```sh
  npm test
  ```

## Functionality

Vue Task Manager provides a comprehensive set of features for managing tasks:

* **Create Tasks:** Users can create new tasks using a native modal. The task details are entered into a form, and upon submission, the task is added to the task list.

* **View Task:** Users can view the details of a task in the same native modal used for creating and editing tasks. This provides a consistent user experience and allows users to quickly view task details without navigating away from the main task list.

* **Edit Tasks:** Existing tasks can be edited using the same native modal used for creating tasks. The form is pre-filled with the existing task details, which can be updated as needed.

* **Delete Tasks:** Users can delete tasks directly from the task detail modal or from the task list.

* **List Tasks:** All tasks are listed in a main view. This list provides an overview of all tasks, their titles, description, due date and their completion status.

* **Cancel Task Editing:** If a user decides not to proceed with editing a task, they can cancel the operation. The original task data is preserved and the form is reset.

* **Auto Dark/Light Mode:** The application automatically adapts to the user's preferred color scheme based on their browser settings. This means if the user has set their preference to dark mode in their operating system or browser, the application will automatically display in dark mode, and vice versa for light mode.

* **Animations:** The application incorporates subtle animations to enhance the user experience. These include smooth transitions when opening and closing the task modal, as well as when adding, editing, or deleting tasks. The animations are implemented using Vue's built-in transition system and tailwind.

  This not only makes the application more visually appealing but also helps guide the user's attention and provide visual feedback on their actions.

## Design Decisions

During the development of Vue Task Manager, several important design decisions were made:

* **Tailwind CSS:** I decided to use Tailwind CSS for its utility-first approach, which allows for rapid UI development and encourages consistency.

* **No Dependencies**: The only dependency is vue. So no UI or state management dependencies.

* **Provide/Inject for State Management:** The provide/inject pattern was chosen for state management due to its simplicity and efficiency in passing data from a parent component to its descendants, eliminating the need for props in intermediate components.

* **Vitest and Vue Test Utils for Testing:** Vitest was chosen for its speed and zero-config setup, and Vue Test Utils was chosen for its comprehensive testing utilities for Vue components.

In a larger application, it might be beneficial to incorporate a component library such as [PrimeVue](https://primevue.org/) and a global state management library like [Pinia](https://pinia.vuejs.org/) (Specially if we need SSR)
