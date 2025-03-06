/// <reference types="vite/client" />

import { ToDo } from './todo'
import { DefineComponent } from 'vue'

declare module '@/components/AddToDoView.vue' {
  const component: DefineComponent<
    {
      todo: ToDo | null
    },
    object,
    {
      onAdd: (priority: string) => void
    }
  >
  export default component
}
