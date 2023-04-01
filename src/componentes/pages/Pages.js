import React from "react";
import styles from "./Pages.module.scss";
import ReactPaginate from "react-paginate";

function Pages({ numberPage, setNumberPage }) {
  let next = () => {
    setNumberPage((newPage) => newPage + 1);
  };

  let prev = () => {
    if (numberPage === 1) {
      return;
    }
    setNumberPage((newPage) => newPage - 1);
  };
 // trabalha com disable
  return (
    <div className={styles.container}>
      <button onClick={prev}>Anterior</button>
      <button onClick={next}>Próximo</button>
    </div>
  );
}

export default Pages;
