import React, { useState } from "react";
import styles from "./Burgermenu.module.sass";

import { useEffect } from "react";

// Quelle für animiertes Burger Icon: https://codepen.io/designcouch/pen/ExvwPY
// (für React angepasst)

const Burgermenu = ({mobileMenuOpen, toggler}) => {

  const toggleMenu = () => {
   toggler();
  };

  return (
    <div
      className={`${styles.navIcon} ${mobileMenuOpen ? styles.open : ""}`}
      onClick={toggleMenu}
      aria-label="Gehe zur mobilen Navigation"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Burgermenu;

