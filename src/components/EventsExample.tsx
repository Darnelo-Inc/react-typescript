import { FC, useState, ChangeEvent, MouseEvent, DragEvent, useRef } from "react"

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("")
  const [isDrop, setIsDrop] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("  Управляемый: ", value)
    console.log("Неуправляемый: ", inputRef.current?.value)
  }

  const dragHandler = (e: DragEvent<HTMLDivElement>) => {
    console.log("Drag")
  }

  const dropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrop(true)
    console.log("Drop")
  }

  const dragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrop(true)
  }

  const dragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrop(false)
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={changeHandler}
        placeholder="Управляемый инпут"
      ></input>
      <input
        ref={inputRef}
        type="text"
        placeholder="Неуправляемый инпут"
      ></input>
      <button onClick={clickHandler}>Log values</button>

      <div
        draggable
        onDrag={dragHandler}
        style={{
          width: "150px",
          height: "150px",
          marginTop: "20px",
          background: "red",
        }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragOver={dragOver}
        onDragLeave={dragLeave}
        style={{
          width: "150px",
          height: "150px",
          marginTop: "20px",
          background: isDrop ? "green" : "blue",
        }}
      ></div>
    </div>
  )
}

export default EventsExample
