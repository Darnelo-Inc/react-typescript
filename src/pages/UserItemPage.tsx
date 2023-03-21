import { FC, useState, useEffect } from "react"
import axios from "axios"
import { IUser } from "../types/types"
import { useParams, useNavigate } from "react-router-dom"

type UserItemPageParams = {
  id: string
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null)
  const params = useParams<UserItemPageParams>()
  const nav = useNavigate()

  useEffect(() => {
    fetchUsers()
  }, []) //eslint-disable-line

  async function fetchUsers() {
    try {
      const res = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      )
      setUser(res.data)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      <button onClick={() => nav("/users")}>Back</button>
      <h2>
        User {user?.id}: {user?.name}
      </h2>
      <div>Email: {user?.email}</div>
    </>
  )
}

export default UserItemPage
