
import { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Table, Navbar, Card, Footer } from "../components";
import axios from 'axios';

interface IAboutState {
  chapters: [];
}

class Chapter extends Component<{}, IAboutState>{
  state: IAboutState = {
    chapters: [],
  }

  componentDidMount = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/chapters?language=en`)
      this.setState({
        chapters: response.data.chapters
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div>
        <Head>
          <title>Quran App</title>
          <meta name="keywords" content="quran app" />
        </Head>
        <div className=" container px-5" >
          <Navbar />
          <h1 className=" text-slate-400">Assalamualaikum</h1>
          <Card className=" py-5 my-5 px-5 relative">
            <p className="text-white font-medium">Last Read</p>
            <br />
            <p className="text-white font-bold text-xl">Al-Fatiha</p>
            <p className="text-white ">Ayah No: 1</p>
            <div className="absolute bottom-0 right-0">
              <Image src="/quran.png" alt="quran image" width={173} height={97} />
            </div>
          </Card>
          <div className="flex">
            <Table className="flex-auto">
              <tbody>
                {this.state.chapters.map((chapter: any) =>
                  <Card key={chapter.id} className=" bg-none py-1 border-b-2">
                    <Link passHref={true} href={`surah/${chapter.id}`}>
                      <div className="px-5 flex items-center">
                        <div className="flex-none">
                          <p>{chapter.id}</p>
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
              </tbody>
            </Table>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Chapter