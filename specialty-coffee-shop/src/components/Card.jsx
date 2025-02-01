import React from "react";

const Card = ({src, alt, title, children}) => {
    return(
        <article aria-label={alt}>
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