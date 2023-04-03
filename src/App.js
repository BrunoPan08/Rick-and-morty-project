import React, { useState, useEffect } from "react";
import "./App.scss";
import Filter from "./componentes/filter/Filter";
import Cards from "./componentes/cards/Cards";
import Pages from "./componentes/pages/Pages";
import Search from "./componentes/search/Search";
import Navbar from "./componentes/navbar/Navbar";
import { BrowserRouter , Routes, Route} from "react-router-dom"
import CharacterSpecific from './componentes/characterSpecific/Character'
import Favorite from "./componentes/pages/Favorite";
// import blogFetch from "./axios/Config"

function App() {
  return(
    <BrowserRouter>
      <div className="App">
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:id" element={<CharacterSpecific/>} />
        <Route path="/favoritos" element={<Favorite/>} />
      </Routes>
    </BrowserRouter>
  )
}

function Home() {
  let [numberPage, setNumberPage] = useState(1);
  let [search, setSearch] = useState("");
  let [favourite, setfavourite] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${numberPage}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <div className="containerSearch">
        <Search setNumberPage={setNumberPage} setSearch={setSearch} />
      </div>
      <div className="containerFilter">
        <Filter
          setStatus={setStatus}
          setNumberPage={setNumberPage}
          setGender={setGender}
          setSpecies={setSpecies}
        />
      </div>
      <div className="container">
        <div className="row">
          <Cards page="/" results={results} setfavourite={setfavourite}/>
        </div>
      </div>
      <div>
        <Pages numberPage={numberPage} setNumberPage={setNumberPage} />
      </div>
    </div>
  );
}

export default App;
