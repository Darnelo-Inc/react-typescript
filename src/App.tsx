import { useState, useEffect } from "react"
import axios from "axios"
import Card, { CardVariants } from "./components/Card"
// import UserList from "./components/UserList"
import { IUser } from "./types/types"
import List from "./components/List"
import UserItem from "./components/UserItem"
import TodoItem from "./components/TodoItem"
import { ITodo } from "./types/types"
import EventsExample from "./components/EventsExample"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  const [users, setUsers] = useState<IUser[]>([])
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchUsers()
    fetchTodos()
  }, [])

  async function fetchUsers() {
    try {
      const res = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      )
      setUsers(res.data)
    } catch (e) {
      console.log(e)
    }
  }

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
    <>
      <Card
        width="300px"
        height="200px"
        onClick={(num) => console.log(num)}
        variant={CardVariants.outlined}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          aperiam at harum numquam officiis molestiae beatae esse praesentium
          architecto fugit perferendis a repudiandae, dolor odit, eligendi
          tempora? Distinctio, blanditiis obcaecati.
        </p>
      </Card>

      {/* <UserList users={users} /> */}

      <List<IUser>
        items={users}
        renderItems={(user) => <UserItem key={user.id} user={user} />}
      />

      <List<ITodo>
        items={todos}
        renderItems={(todo) => <TodoItem key={todo.id} todo={todo} />}
      />

      <EventsExample />
    </>
  )
}

export default App
