import { ReactElement, ReactNode } from "react"

interface ListProps<T> {
  items: T[]
  renderItems: (item: T) => ReactNode
}

function List<T>(props: ListProps<T>): ReactElement {
  return <div>{props.items.map(props.renderItems)}</div>
}

export default List
