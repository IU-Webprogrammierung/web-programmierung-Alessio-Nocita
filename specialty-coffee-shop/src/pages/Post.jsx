import React from "react";

const Post = () => {
    return (
    <main>
        <section>
            <article>
                <h1>Äthiopien: Ein Streifzug durch die Wiege des Kaffees</h1>
                <time datetime="2021-09-15">15. September 2021</time>
                <h2>Ein Artikel von <address>Max Mustermann</address></h2>

                <figure>
                    <img src="https://imageplaceholder.net/382" alt="Das neue Blog-Post" />
                    <figcaption>Das neue Blog-Post</figcaption>
                </figure>
                <p>"Äthiopien gilt als die Wiege des Kaffees – hier, in den hochgelegenen Regionen des Horns von Afrika, hat die Pflanze ihren Ursprung. Schon die Legende vom Hirten Kaldi, dessen Ziegen nach dem Verzehr der Kaffeekirschen voller Energie tanzten, erzählt von der tiefen kulturellen Verbindung Äthiopiens mit dem Kaffee. Doch Äthiopien ist nicht nur eine Ursprungsregion, sondern auch eine Schatzkammer aromatischer Vielfalt...</p>
            </article>
        </section>
    </main>
    );
    }

export default Post;