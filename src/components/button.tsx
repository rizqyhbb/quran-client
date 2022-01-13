import classNames from "classnames";
import { Component, ReactNode } from "react";

interface IButtonProps {
  clickHandler?: () => void
  children: ReactNode
  className?: string
}

class Button extends Component<IButtonProps, {}> {
  render() {
    return (
      <button className={classNames("h-14 font-extrabold px-7 rounded-full bg-amber-400 text-white hover:bg-amber-400", this.props.className)} type="button" onClick={this.props.clickHandler}>
        {this.props.children}
      </button>
    )
  }
}

export default Button