
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Navbar, Card, Footer, Marker } from "../../components";
import axios from 'axios';
import { useEffect, useState } from "react";

interface IChapter {
  chapters: object[]
}

export const getStaticProps = async () => {

  const response: any = await axios.get(`${process.env.NEXT_PUBLIC_API}/chapters?language=en`)
  return {
    props: { chapters: response.data.chapters }
  }

}


const Chapter = ({ chapters }: IChapter) => {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('we are running on the client')
    } else {
      console.log('we are running on server')
    }
  })

  return (
    <div>
      <Head>
        <title>Quran App | Chapters</title>
        <meta name="keywords" content="quran app" />
      </Head>
      <div className="container" >
        <Navbar href="/" />
        <h1 className="px-5 text-slate-400">Assalamualaikum</h1>
        <div className="px-5">
          <Card className=" py-5 my-5 px-5 relative bg-gradient-to-tr from-violet-500 to-fuchsia-500">
            <p className="text-white font-medium">Last Read</p>
            <br />
            <p className="text-white font-bold text-xl">Al-Fatiha</p>
            <p className="text-white ">Ayah No: 1</p>
            <div className="absolute bottom-0 right-0">
              <Image src="https://i.ibb.co/TYH2dvW/quran.png" alt="quran image" width={173} height={97} unoptimized />
            </div>
          </Card>
        </div>
        <div className="flex">

          <div className="flex-auto">
            {chapters.map((chapter: any) =>
              <Card key={chapter.id} className="py-1 border-b-2 hover:cursor-pointer">
                <Link passHref={true} href={`surah/${chapter.id}`}>
                  <div className="px-5 flex items-center">

                    <div className="flex-none text-xs">
                      <Marker>
                        {chapter.id}
                      </ Marker>
                    </div>

                    <div className="flex-none px-5">
                      <p className="font-bold">{chapter.name_simple}</p>
                      <p className=" font-light text-sm">{chapter.verses_count} verses</p>
                    </div>

                    <div className="flex-auto text-right text-violet-500 text-2xl">
                      <p>{chapter.name_arabic}</p>
                    </div>

                  </div>
                </Link>
              </Card>
            )}
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Chapter;