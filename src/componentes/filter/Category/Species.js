import React from "react";
import styles from "./Species.module.scss";
import { useState } from "react";
import FilterButton from "../button/FilterButton";

const Species = ({ setSpecies, setNumberPage }) => {
  const [selected, setSelected] = useState(null);
  let i;
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poppybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  const toggle = () => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  function isOpen() {
    return selected === i ? "-" : "+";
  }

  function checkedOptionISOpen() {
    return selected === i ? styles.optionButtonShow : styles.optionButton;
  }
  return (
    <div className={styles.item}>
      <div className={styles.title} onClick={(i) => toggle(i)}>
        <div>Species</div>
        <span>{isOpen()}</span>
      </div>
      <div className={checkedOptionISOpen()}>
        {species.map((items, index) => (
          <FilterButton
            key={index}
            name="species"
            index={index}
            items={items}
            setNumberPage={setNumberPage}
            task={setSpecies}
          />
        ))}
      </div>
    </div>
  );
};

export default Species;
