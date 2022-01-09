import { Component } from "react";
import { Table } from "../../components";
import { withRouter ,NextRouter } from "next/router";
import axios from "axios";

interface WithRouterProps {
  router: NextRouter
  
}

interface ISurahByIdProps extends WithRouterProps{
}

interface ISurahByIdState {
  verses: []
}

class SurahById extends Component<ISurahByIdProps, ISurahByIdState> {
  state: ISurahByIdState = {
    verses: []
  }


  componentDidMount = async() => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/quran/verses/uthmani?chapter_number=2`)

    this.setState({
      verses: response.data.verses
    })
  }

  render(){
    return(
      <div>
        <Table className=" bg-amber-100">
          <thead>
            {this.state.verses.map((verse: any) => 
            verse.id%2 ? 
              <tr key={verse.id} className="text-right border-y-4 border-amber-100">
                <td className="flex justify-center">{verse.verse_key} </td>
                <td className="text-right bg-amber-200 pr-2 text-2xl py-3 rounded-l-2xl">{verse.text_uthmani}</td>
              </tr> :
              <tr key={verse.id} className="text-right border-y-4 border-amber-100">
              <td className="flex justify-center">{verse.verse_key}</td>
              <td className="text-right bg-amber-300 pr-2 text-2xl py-3 rounded-l-2xl">{verse.text_uthmani}</td>
            </tr>
            )}
          </thead>
        </Table>
      </div>
    )
  }
}

export default withRouter(SurahById);