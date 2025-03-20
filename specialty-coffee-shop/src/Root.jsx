import React from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import MobileHeader from "./components/MobileHeader";
import DesktopHeader from "./components/DesktopHeader";
import MobileMenu from "./components/MobileMenu";
import DesktopMenu from "./components/DesktopMenu";
import Footer from "./components/Footer";

// Root-Komponente. Zeigt die Header-, Menu- und Footer-Komponenten responsiv an. 
// Die Viewport-Größe wird als props von App.jsx übergeben.

const Root = () => {


// setzt die Variable "viewport" wenn die Seite geladen wird
    const [viewport, setViewport] = useState(window.innerWidth);

  window.addEventListener("load", () => {
    setViewport(window.innerWidth);
  });

// aktualisiert die Variable "viewport" falls die Fenstergröße geändert wird
  window.addEventListener("resize", () => {
    setViewport(window.innerWidth);
  });

  // State für das Mobile Menu
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Event Handler für das Mobile Menu. Wird per Uplift von MobileHeader und MobileMenu getriggert
    // und sendet das isOpen-Status zurück
    const handleClick = () => {
        setMobileMenuOpen((prev) => !prev);
    }

    return (
    <>
    {viewport <= 768 ? <MobileHeader mobileMenuOpen={mobileMenuOpen} toggler={handleClick} /> : <DesktopHeader />}
    {viewport <= 768 ? <MobileMenu isOpen={mobileMenuOpen} toggler={handleClick} /> : <DesktopMenu />}
    <Outlet />
    <Footer viewport={viewport}/>
    </>
    );
    }

export default Root;
