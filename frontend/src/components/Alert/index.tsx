import { ReactNode } from "react"
import classNames from "utils/classNames"

const Alert = ({ text, show, colour, icon }: { text: string | ReactNode, show: boolean, colour: string, icon: ReactNode }) => {
  return show && <span className={classNames('p-2 rounded-full text-white inline-flex items-center gap-2 pr-4', colour)}>
    {icon}
    {text}
  </span>
}

export default Alert
