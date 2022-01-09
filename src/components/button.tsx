import { Component, ReactNode } from "react";

interface IButtonProps {
  clickHandler: () => void
  children: ReactNode
}

class Button extends Component<IButtonProps, {}> {
  render(){
    return(
    <button className="h-5 px-5 rounded-full text-grey bg-blue-400 text-white hover:bg-blue-500" type="button" onClick={this.props.clickHandler}>
      {this.props.children}
    </button>
    )
  }
}

export default Button