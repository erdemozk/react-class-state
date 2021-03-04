import React, { useEffect } from "react"
import ClassState from "react-class-state"
import ReactDOM from "react-dom"

class TodoState extends ClassState {
  todos = []
}
const todoState = new TodoState()

const App = () => {
  const { todos, setState } = todoState.getState()
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos")
      setState(async (state) => (state.todos = await response.json()))
    }
    fetchTodos()
  }, [])

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
