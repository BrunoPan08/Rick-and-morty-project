import React, { useState, useEffect } from 'react'

const Episodes = () => {

  let [id,setId] = useState(1);
  let [info, setInfo] = useState([])
  let { air_data, name } = info;
  let api = `https://rickandmortyapi.com/api/episode/${id}`
  console.log("checa a info", info)
  useEffect(() => {
    (async function(){
      let data = await fetch(api).then(res => res.json())
      setInfo(data);
    })()
  },[api])
  return (
    <div>
      
    </div>
  )
}

export default Episodes
