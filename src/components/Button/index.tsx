import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface IButton {
  onClick?: () => void
  children: ReactNode
  to?: string
}

const Button = (props: IButton) => {
  if (props.to) {
    return (
      <Link to={props.to}>
        <button>{props.children}</button>
      </Link>
    )
  }

  return <button onClick={props.onClick}>{props.children}</button>
}

export default Button
