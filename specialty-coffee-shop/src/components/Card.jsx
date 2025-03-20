import React from "react";

// Card-Komponente
// diese importiert Bild-Adresse, alt-Text, Card-Titel und Card-Text als props

const Card = ({src, alt, title, children}) => {
    return(
        <article className="flex flex-col items-center text-center rounded-md shadow-md p-5 w-[240px] h-[520px] mb-5 bg-transparent" aria-label={alt}>
            <figure>
                <img className="mt-5 w-40 h-40" src={`${src}`} alt={`${alt}`}/>
                <figcaption className="block text-md font-bold mt-5">
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