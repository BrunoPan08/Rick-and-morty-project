import React, { useState, useEffect } from "react";
import "./App.scss";
import Filter from "./componentes/filter/Filter";
import Carts from "./componentes/cards/Cards";
import Pages from "./componentes/pages/Pages";
import Search from "./componentes/search/Search";
// import blogFetch from "./axios/Config"

function App() {
  let [numberPage, setNumberPage] = useState(1);
  let [search, setSearch] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${numberPage}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <div className="title">
        <h1>Rick and morty</h1>
      </div>
      <div className="containerSearch">
        <Search setNumberPage={setNumberPage} setSearch={setSearch}/>
      </div>
      <div className="containerFilter">
        <Filter />
      </div>
      <div className="container">
        <div className="row">
          <Carts results={results} />
        </div>
      </div>
      <div>
        <Pages numberPage={numberPage} setNumberPage={setNumberPage}/>
      </div>
    </div>
  );
}

export default App;
