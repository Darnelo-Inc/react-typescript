import { FC, useState, useEffect } from "react"
import axios from "axios"
import { ITodo } from "../types/types"
import List from "../components/List"
import TodoItem from "../components/TodoItem"

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    try {
      const res = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      )
      setTodos(res.data)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <List<ITodo>
      items={todos}
      renderItems={(todo) => <TodoItem key={todo.id} todo={todo} />}
    />
  )
}

export default TodosPage
