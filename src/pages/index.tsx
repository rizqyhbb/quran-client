import Link from "next/link"
import Image from "next/image"
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
    <div className="contianer px-24 text-center h-screen flex flex-col justify-center">
      <h1 className="font-extrabold text-2xl">Quran App</h1>
      <br />
      <p className=" font-light">Read Quran everyday</p>
      {/* <Image src="https://i.ibb.co/dB7sKvr/quranapp-logo.png" alt="quran app logo"></Image> */}
      <Image 
        alt="Mountains"
        src="https://i.ibb.co/dB7sKvr/quranapp-logo.png"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <Link href="/chapter">Chapter</Link>
    </div>

    )
  }  
}

export default Home
