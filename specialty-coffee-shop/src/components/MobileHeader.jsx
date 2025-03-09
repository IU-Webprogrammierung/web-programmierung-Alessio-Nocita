import React from "react";

import { Link } from "react-router-dom";

import Burgermenu from "./Burgermenu";
import logo from "../assets/images/specialty_coffee_duisburg_logo.png";

// Mobile-Header-Komponente
// zeigt das Logo (mit Homepage verlinkt) und das Burgermenu als anclickbares Icon an

const MobileHeader = ({mobileMenuOpen, toggler}) => {

    const handleClick = () => {
        toggler();
    }

    return(
        <header className="flex justify-around items-center w-5/6 mx-auto">
                    <Link to="/" aria-label="Gehe zur Homepage">
                    <figure>
                        <img className="m-5 w-2/3" src={logo} alt="Specialty Coffee Duisburg Logo" />
                    </figure>
                    </Link>
            <Burgermenu mobileMenuOpen={mobileMenuOpen} toggler={handleClick}/>
        </header>
    )
}

export default MobileHeader;