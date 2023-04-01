import React from "react";
import style from "./Cards.module.scss";

function Cartoes({ results }) {
  let display;
  console.log("mostrar resultado", results);
  if (results) {
    display = results.map((showCharacter) => {
      let { id, name, image, location, status } = showCharacter;
      return (
        <div key={id} className={style.content}>
          <div className={style.box}>
            <img src={image} alt=""></img>
            <div className={style.boxInformation}>
              <div className={style.nameCharacter}>{name}</div>
              <div className={style.localization}>
                <div className={style.titleLocalization}>localização: </div>
                <div>{location.name}</div>
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
        </div>
      );
    });
  } else {
    display = "Nenhum personagem foi achado!";
  }

  return <>{display}</>;
}

export default Cartoes;
