import { Footer, Navbar, Card, Marker } from "../../components";
import Head from "next/head";
import axios from "axios";

interface IVerses {
  verses: object[]
}

export const getStaticPaths = async () => {
  const response: any = await axios.get(`${process.env.NEXT_PUBLIC_API}/chapters?language=en`)
  const data = await response.data.chapters
  const paths = data.map((chapter: any) => {
    return {
      params: { id: chapter.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/quran/verses/uthmani?chapter_number=${id}`)

  return {
    props: { verses: response.data.verses }
  }

}
const getVerse = (str: string) => {
  return str.split(':')[1];
}

const SurahById = ({ verses }: IVerses) => {

  return (
    <div>
      <Head>
        <title>Quran App | Verse</title>
        <meta name="keywords" content="quran app" />
      </Head>
      <div className="container">
        <Navbar href="/chapter" />
        <div>
          {verses.map((verse: any) =>
            <Card key={verse.id} className="py-3 border-b-2">
              <a onClick={() => window.localStorage.setItem("verse", `${getVerse(verse.verse_key)}`)}>
                <div className="flex px-5 items-center">
                  <div className=" text-xs">
                    <Marker>
                      {getVerse(verse.verse_key)}
                    </Marker>
                  </div>
                  <div className="flex-auto text-right font-light text-xl pl-3">
                    <p>{verse.text_uthmani}</p>
                  </div>
                </div>
              </a>
            </Card>
          )}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default SurahById;