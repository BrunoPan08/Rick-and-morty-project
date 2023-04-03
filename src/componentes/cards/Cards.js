import React from "react";
import style from "./Cards.module.scss";
import { useState } from 'react'
import { Link } from "react-router-dom";

function Cartoes({ results , setfavourite, page}) {
  const [selected, setSelected] = useState(null);
  let display;
  let i;
  console.log("pegar resultado", results);
  const toggle = (character) => {
    if(selected === i) { 
      return setSelected(character)
    }

    setSelected(i)
  }

  function isOpen(){
    return selected === i ? "" : `${style.active}`;
  }
  console.log("mostrar resultado", results);
  if (results) {
    display = results.map((showCharacter) => {
      let { id, name, image, location, status } = showCharacter;
      return (
        <Link to={`${page}${id}`} key={id} className={style.content}>
          <div className={style.box}>
            <img src={image} alt=""></img>
            <div className={style.boxInformation}>
              <div className={style.nameCharacter}>{name}</div>
              <div className={style.localization}>
                <div className={style.titleLocalization}>localização: </div>
                <div className={style.nameLocalization}>{location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === "Alive") {
              return <div className={style.statusAlive}>{status}</div>;
            } else if (status === "Dead") {
              return <div className={style.statusDead}>{status}</div>;
            } else {
              return <div className={style.statusUnknown}>{status}</div>;
            }
          })()}
          <div className={style.heardIcon}><svg className={isOpen()} onClick={(i) => toggle(i)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg></div>
        </Link>
      );
    });
  } else {
    display = "Nenhum personagem foi achado!";
  }

  return <>{display}</>;
}

export default Cartoes;
