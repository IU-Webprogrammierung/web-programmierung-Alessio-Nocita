import React from "react";
import { Link } from "react-router-dom";

import facebook_logo from "../assets/images/facebook_logo.png";
import instagram_logo from "../assets/images/instagram_logo.png";

// Footer-Komponente
// zeigt eine Copyright-Angabe, das Impressum und Social Media-Links an

const Footer = ({viewport}) => {

    const handleClick = () => {
        window.scrollTo(0, 0);
    }

    return(
        <footer className="relative bg-primary text-white px-5 py-2 grid grid-cols-[50%_50%] justify-center overflow-hidden grid-rows-1 box-border w-full h-[72px] font-md bottom-0 left-0 z-100 laptop:fixed desktop:px-20 desktop:py-5 desktop:grid-cols-5 desktop:grid-rows-1
                                laptop:grid-col-5 " aria-label="Footer">
            {viewport > 768 && <div className="hidden col-start-1 col-end-3 self-center desktop:block">©2025 Alessio Nocita - Specialty Coffee Duisburg</div>}
            <div className="flex justify-around w-[100px] col-start-1 col-end-2 justify-self-center self-center desktop:col-start-4 desktop:col-end-5">
            <figure>
                <img className="px-2 transform-[translateY(-2px)] cursor-pointer" src={facebook_logo} alt="Facebook Logo" />
            </figure>
            <figure>
                <img className="px-2 cursor-pointer" src={instagram_logo} alt="Instagram Logo" />
            </figure>
            </div>
            
            <span className="bg-transparent no-underline justify-self-center self-center col-start-2 col-end-3 desktop:col-start-5 desktop:col-end-6"><Link className="" to="/impressum" aria-label="Gehe zum Impressum" onClick={handleClick}>Impressum</Link></span>
        </footer>
    )
}

export default Footer;
