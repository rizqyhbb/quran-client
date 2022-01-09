
import { Component } from "react";
import Link from "next/link";
import { Table } from "../components";
import axios from 'axios';

interface IAboutState {
  chapters: [];
}

class About extends Component<{}, IAboutState>{
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
    return(
      <div className="flex">
      <Table className="flex-auto">
        <thead>
          <tr>
            <th>No</th>
            <th>Surah</th>
            <th>Verse</th>
          </tr>
        </thead>
        <tbody>
          {this.state.chapters.map((chapter: any) => 
          <Link key={chapter.id} href={`${process.env.NEXT_PUBLIC_API}/`}>
              <tr>
                <td className="text-center">{chapter.id}</td>
                <td>{chapter.name_simple}</td>
                <td className="text-center">{chapter.verses_count}</td>
              </tr>
          </Link>
          )}
        </tbody>
      </Table>
      </div>
    )
  }
}

export default About