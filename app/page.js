"use client"
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

// axios used for apis
const page = () => {
  const [imge, setImge] = useState([])
  const getImages = async () => {
    try{
      const response = await axios.get("https://picsum.photos/v2/list")
      const data = response.data
      console.log(imge)
      setImge(data)
    } catch(error){
      console.error("error fetching images")
    }
  }
  return(
    <div>
      <Link href="/About">About</Link>
      <Link href="/Courses">Courses</Link>
      <button onClick={getImages} className="px-5 py-3 bg-green-600 text-white">Get images</button>
      <div>
        {imge.map((elem,i) => {
          return <img key={i} src = {elem.download_url} width={300} height={300} className="m-10 inline-block rounded"/>
        })}
      </div>
    </div>
  )
}

export default page;