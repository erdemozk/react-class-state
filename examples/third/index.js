import React from "react"
import ClassState from "react-class-state"
import ReactDOM from "react-dom"

class TodoState extends ClassState {
  todos = []

  async fetchTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await response.json()
    this.setState((state) => (state.todos = data))
  }
}
const todoState = new TodoState()
todoState.fetchTodos()

const App = () => {
  todoState.watchState()
  return (
    <div>
      {todoState.todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
