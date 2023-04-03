import React from "react";
import styles from "./Filter.module.scss";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

function Filter({ setStatus, setNumberPage, setGender, setSpecies }) {

  let clear = () => {
    setStatus(""); 
    setNumberPage(""); 
    setGender("");
    setSpecies("");
    window.location.reload(false);
  }
  return (
    <div className={styles.container}>
      <div className={styles.titleFilter}>Filtros</div>
      <div className={styles.clearIcon} onClick={clear}>Limpar</div>
      <div className={styles.wrapper}>
        <div className={styles.accordion}>
          <Status setStatus={setStatus} setNumberPage={setNumberPage} />
          <Gender setGender={setGender} setNumberPage={setNumberPage} />
          <Species setSpecies={setSpecies} setNumberPage={setNumberPage} />
        </div>
      </div>
    </div>
  );
}

export default Filter;
