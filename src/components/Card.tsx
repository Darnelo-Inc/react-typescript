import { useState, FC, PropsWithChildren } from "react"

export enum CardVariants {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string
  height?: string
  onClick: (num: number) => void
  variant?: CardVariants
}

const Card: FC<PropsWithChildren<CardProps>> = ({
  width,
  height,
  onClick,
  variant,
  children,
}) => {
  const [num, setNum] = useState(0) // eslint-disable-line
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width,
        height,
        padding: "10px",
        textAlign: "center",
        border: variant === CardVariants.outlined ? "1px solid gray" : "none",
        background: variant === CardVariants.primary ? "lightgray" : "white",
      }}
      onClick={() => onClick(num)}
    >
      {children}
    </div>
  )
}

export default Card
