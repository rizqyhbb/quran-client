import classNames from "classnames";
import { ReactNode } from "react";


interface ICard {
  className?: string,
  children: ReactNode
}

const Card = ({
  className,
  children
}: ICard) => {
  return (
    <div className={classNames('w-full rounded-xl bg-gradient-to-tr from-violet-500 to-fuchsia-500', className)}>
      {children}
    </div>
  )
}

export default Card;
