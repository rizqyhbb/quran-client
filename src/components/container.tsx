import { Component, ReactNode } from "react";
import classNames from 'classnames';

interface IContainerProps{
  childre: ReactNode,
  className: string,
}

class Container extends Component<IContainerProps, {}>{
  render(){
    return(
    <div className={classNames("container px-28", this.props.className)}>
      {this.props.children}
    </div>
    )
  }
}

export default Container
