import React from "react";
import styles from "./Navbar.module.scss"
import { NavLink, Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <div className={styles.navbar}>
        <div className={styles.containerFluid}>
          <a className={styles.alignTitle} href="#">
            <h3>Rick and Morty</h3>
          </a>
          <div className={styles.pagesNav}>
            <div className={styles.alignNav}>
                  <NavLink to="/" className={styles.alignItem}>
                    Personagem
                  </NavLink>
                  <NavLink to="/favoritos" className={styles.alignItem}>
                    Favoritos
                  </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
