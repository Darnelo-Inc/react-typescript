import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import TodoItemPage from "./pages/TodoItemPage"
import TodosPage from "./pages/TodosPage"
import UserItemPage from "./pages/UserItemPage"
import UsersPage from "./pages/UsersPage"
import EventsExample from "./components/EventsExample"

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          margin: "20px",
        }}
      >
        <Link
          style={{
            margin: "5px",
            padding: "8px",
            color: "black",
            textDecoration: "none",
            border: "1px solid #333",
          }}
          to="/users"
        >
          Users
        </Link>
        <Link
          style={{
            margin: "5px",
            padding: "8px",
            color: "black",
            textDecoration: "none",
            border: "1px solid #333",
          }}
          to="/todos"
        >
          Todos
        </Link>
      </div>
      <Routes>
        <Route path={"/users"} element={<UsersPage />} />
        <Route path={"/todos"} element={<TodosPage />} />
        <Route path={"/users/:id"} element={<UserItemPage />} />
        <Route path={"/todos/:id"} element={<TodoItemPage />} />
      </Routes>
    </BrowserRouter>
    // <EventsExample />
  )
}

export default App
