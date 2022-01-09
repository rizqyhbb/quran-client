import { Component, ReactNode } from "react";
import classNames from 'classnames';

interface ITableProps {
  children: ReactNode,
  className?: string
}

class Table extends Component<ITableProps, {}>{

  render() {
      return(
        <table className={classNames("table-auto", this.props.className)}>
          {this.props.children}
        </table>
      )
  }
}

export default Table;