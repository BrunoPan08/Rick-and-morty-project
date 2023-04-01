import React from 'react';
import styles from './Search.module.scss';

function Search({ setSearch, setNumberPage }) {
  return (
    <>
      <input
      onChange={(e) => {
        setNumberPage(1)
        setSearch(e.target.value);
      }}
      placeholder="Pesquisa pelo personagem" 
      type="text" 
      />
      {/* <button 
      onClick={(e) =>{
        e.preventDefault()
      }}
      >Pesquisar</button> */}
    </>
  )
}

export default Search
