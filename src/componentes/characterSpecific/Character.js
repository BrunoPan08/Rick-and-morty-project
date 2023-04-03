import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import style from "./Character.module.scss"

const Character = () => {
  let [fetchedData, updateFetchedData] = useState([]);
  let {id} = useParams();
  let {name, image, created,species, status, type, gender} = fetchedData;
  let api = `https://rickandmortyapi.com/api/character/${id}`
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  let hasType = () => {
    if (type == "") {
      return "none";
    } else {
      return type;
    }
  }
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.alignBoxOne}>
          <h1 className={style.nameCharacter}>{name}</h1>
          <img src={image} alt='' className={style.imageCharacter}></img>
        </div>
        <div className={style.alignBoxTwo}>
          <div>
            <span className={style.infoCharacter}>genero:</span>
            <span>{gender}</span>
          </div>
          <div>
            <span className={style.infoCharacter}>Especie:</span>
            <span>{species}</span>
          </div>
          <div>
            <span className={style.infoCharacter}>tipo:</span>
            <span>{hasType()}</span>
          </div>
          <div>
            <span className={style.infoCharacter}>Nascimento:</span>
            <span>{created}</span>
          </div>
          <div>
            <span className={style.infoCharacter}>Estado:</span>
            <span>{status}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Character
