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
    <div className={classNames('w-full rounded-xl hover:bg-neutral-100 ', className)}>
      {children}
    </div>
  )
}

export default Card;
