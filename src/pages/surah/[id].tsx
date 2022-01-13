import { Component, useCallback, useEffect, useState } from "react";
import { Table } from "../../components";
import { useRouter, withRouter ,NextRouter } from "next/router";
import axios from "axios";
import { getServers } from "dns";


const SurahById = () => {
const router = useRouter();
const [verse, setVerse] = useState<any>([])
const {id} = router.query



useEffect(() => {
  if(!id){
    return;
  } else{
    const getVerses = async() => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/quran/verses/uthmani?chapter_number=${id} `)
      return setVerse(response.data.verses)
    }
    getVerses()
  }
}, [id])  
  
  
  return(
    <div>
    <Table className=" bg-amber-100">
      <thead>
      {verse.map((verse: any) => 
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

export default SurahById;