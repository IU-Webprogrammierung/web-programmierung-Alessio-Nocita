import React from "react";
import { Link } from "react-router-dom";

import styles from "./NotFound.module.sass";

// 404-Seite, die angezeigt wird, wenn eine Seite nicht gefunden wird

const NotFound = () => {
    return (
        <main>
            <section className={styles.notFound} aria-labelledby="404-title">
                <h1 id="404-title">Ups! Dieser Coffee Brew ist leider nicht gelungen!</h1>
                <p>Die Kaffeeseite, die du suchst, existiert nicht.</p>
                <p>Von hier kannst du es wieder versuchen: <Link to="/">Home</Link></p>
            </section>
        </main>
    );
    }

export default NotFound;

