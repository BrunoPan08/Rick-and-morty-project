import React from 'react'
import styles from "./Gender.module.scss"
import { useState } from 'react'
import FilterButton from "../button/FilterButton"

const Gender = ({ setGender, setNumberPage }) => {
  const [selected, setSelected] = useState(null);
  let i;
  let genders = ["male", "female", "genderless", "unknown"]
  const toggle = () => {
    if(selected === i) { 
      return setSelected(null)
    }

    setSelected(i)
  }

  function isOpen(){
    return selected === i ? "-" : "+";
  }

  function checkedOptionISOpen(){
    return selected === i ? styles.optionButtonShow : styles.optionButton;
  }

  return (
    <div className={styles.item}>
      <div className={styles.title} onClick={(i) => toggle(i)}>
        <div>Genero</div>
        <span>{isOpen()}</span>
      </div>
      <div className={checkedOptionISOpen()}>
        {genders.map((items, index) =>(
        <FilterButton key={index} name="genders" index={index} items={items} setNumberPage={setNumberPage} task={setGender}/>
        ))}
      </div>
    </div>
  )
}

export default Gender
