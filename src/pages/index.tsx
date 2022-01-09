import Link from "next/link"
import { Component } from "react"
import {Button} from '../components'

interface IHomeState {
count: number
}
interface IHomeProps {
  currentCount: number
}

class Home extends Component<IHomeProps, IHomeState> {  
  state: IHomeState = {
    count: 0
  }
  

  componentDidMount = () => {
    this.props.currentCount 
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  reset = () => {
    this.setState({
      count: 0
    })
  }

  render(){
    return (
    <div className="contianer px-24 flex items-center">
      <Button clickHandler={this.decrement}>-</Button>
      <h1>
      {this.state.count}
      </h1>
      <Button clickHandler={this.increment}>+</Button>
      <Button clickHandler={this.reset}>reset</Button>
      
      <Link href="/about">To About</Link>
    </div>

    )
  }  
}

export default Home
