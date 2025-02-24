import React from "react";

import styles from "./Card.module.sass";

// Card-Komponente
// diese importiert Bild-Adresse, alt-Text, Card-Titel und Card-Text als props

const Card = ({src, alt, title, children}) => {
    return(
        <article className={styles.card} aria-label={alt}>
            <figure>
                <img src={`${src}`} alt={`${alt}`}/>
                <figcaption>
                    <h3>
                        {title}
                    </h3>
                </figcaption>
            </figure>
            {children}
        </article>
    )
}

export default Card;