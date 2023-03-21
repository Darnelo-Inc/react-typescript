import { FC } from "react"
import { IUser } from "../types/types"

interface UserItemProps {
  user: IUser
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div
      style={{
        margin: "8px",
        padding: "10px",
        border: "1px solid #333",
      }}
    >
      <span>
        {user.id}. {user.name}
      </span>
      <div>
        {user.email}
        <dl>
          <li>{user.address.street}</li>
          <li>{user.address.city}</li>
        </dl>
      </div>
    </div>
  )
}

export default UserItem
