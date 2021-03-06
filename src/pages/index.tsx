import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import { Button } from "../components"

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Quran App</title>
        <meta name="keywords" content="quran app" />
      </Head>
      <div className="container text-center h-screen flex flex-col justify-center items-center">
        <h1 className="font-extrabold text-3xl text-violet-700">Quran App</h1>
        <br />
        <p className="text-lg font-light">Read Quran everyday</p>
        <br />
        <div className="flex justify-center relative">
          <Image src="https://i.ibb.co/2grCwS8/quranapp-logo.png" alt="quran app logo" width={314} height={450} layout="fixed" unoptimized />
          <div className="absolute -bottom-5 bg-amber-400 h-14 rounded-full px-7 flex items-center text-white text-lg font-bold ">
            <Link href="/chapter" passHref>
              Get Started
            </Link>
          </div>
        </div>
      </div>

    </div >
  )
}

export default HomePage;
