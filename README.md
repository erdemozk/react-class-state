# React Class State (react-class-state)
Very small, fast, and unopinionated. You can use just like you want, state-rerenders are minimum especially if you use state.watch(). Everything is type supported and smooth!

---
### Usage
First, create a React app, then paste this to your console:
```
// For NPM
npm install react-class-state

// For Yarn
yarn add react-class-state
```

#### Creating State

```TSX
import ClassState from "react-class-state"
import { ITodo } from "./types/ITodo"

class TodoState extends ClassState {
  todos: ITodo[] = []

  // If you want, you can use actions inside the class, if you want you can also follow the next usages
  async fetchTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    this.setState(async (state) => (state.todos = await response.json()))
  }
}
const todoState = new TodoState()
todoState.fetchTodos()
```

#### Other Way To Change State

```TSX
// You can change the state from anywhere, in regular files or inside class components/function components
const response = await fetch("https://jsonplaceholder.typicode.com/todos")
todoState.setState(async (state) => (state.todos = await response.json()))  */
``` 


#### Usage

```TSX
import React from "react"
import {todoState} from "./TodoState"

const App: React.FC = () => {
  const { todos } = todoState.getState()
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  )
}

export default App

```

#### Changing state inside components

```TSX
const App: React.FC = () => {
  const { setState } = todoState.getState()
  useEffect(() => {
    ;(async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos")
      todoState.setState(async (state) => (state.todos = await response.json()))
    })()
  }, [])
  return <h1>React Class State</h1>
  
}

```


#### You can use the system however you want.
```TSX
// If you use 'todoState.watch()' in your parent, you don't need to use it in another file.
export const OtherUse: React.FC = () => {
  todoState.watch()

  return (
    <div>
      {todoState.todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  )
}

```
