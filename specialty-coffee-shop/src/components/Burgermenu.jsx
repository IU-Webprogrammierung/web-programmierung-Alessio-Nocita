import React, { useState } from "react";
import styles from "./Burgermenu.module.sass";

// Quelle für animiertes Burger Icon: https://codepen.io/designcouch/pen/ExvwPY
// (für React angepasst)

const Burgermenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`${styles.navIcon} ${isOpen ? styles.open : ""}`}
      onClick={toggleMenu}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Burgermenu;
