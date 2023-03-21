import { FC } from "react"
import { ITodo } from "../types/types"

interface TodoItemProps {
  todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div
      style={{
        margin: "8px",
        padding: "10px",
        border: "1px solid #333",
      }}
    >
      <input type="checkbox" checked={todo.completed} onChange={() => {}} />
      <div>
        {todo.id}. {todo.title}
      </div>
    </div>
  )
}

export default TodoItem
