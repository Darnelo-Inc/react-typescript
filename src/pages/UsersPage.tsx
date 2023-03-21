import { FC, useState, useEffect } from "react"
import axios from "axios"
import { IUser } from "../types/types"
import List from "../components/List"
import UserItem from "../components/UserItem"
import { useNavigate } from "react-router-dom"

const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([])

  const nav = useNavigate()

  useEffect(() => {
    fetchUsers()
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

  return (
    <List<IUser>
      items={users}
      renderItems={(user) => (
        <UserItem
          key={user.id}
          user={user}
          onClick={(user) => nav("/users/" + user.id)}
        />
      )}
    />
  )
}

export default UsersPage
