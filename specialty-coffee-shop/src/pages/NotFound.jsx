import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <main>
            <section aria-labelledby="404-title">
                <h1 id="404-title">Ups! Dieser Coffee Brew ist leider nicht gelungen!</h1>
                <p>Die Kaffeeseite, die du suchst, existiert nicht.</p>
                <p>Von hier kannst du es wieder versuchen: <Link to="/home">Home</Link></p>
            </section>
        </main>
    );
    }

export default NotFound;

