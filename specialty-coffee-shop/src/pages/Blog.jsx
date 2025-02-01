import React from "react";

const Blog = () => {
    return (
        <main>
            <h1>Blog</h1>
            <section>
                <article>
                    <div>
                        <h3>Äthiopien: Ein Streifzug durch die Wiege des Kaffees</h3>
                        <p>Äthiopien gilt als die Wiege des Kaffees – hier, in den hochgelegenen Regionen des Horns von Afrika, hat die Pflanze ihren Ursprung. Schon die Legende vom Hirten Kaldi, dessen Ziegen nach dem Verzehr der Kaffeekirschen voller Energie tanzten, erzählt von der tiefen kulturellen Verbindung Äthiopiens mit dem Kaffee. Doch Äthiopien ist nicht nur eine Ursprungsregion, sondern auch eine Schatzkammer aromatischer Vielfalt...</p>
                    </div>
                    <figure>
                        <img src="https://imageplaceholder.net/382" alt="Das neue Blog-Post" />
                        <figcaption>Das neue Blog-Post</figcaption>
                    </figure>
                </article>
            </section>
            <article>
                <figure>
                    <img src="https://imageplaceholder.net/382" alt="Espresso" />
                    <figcaption>Espresso</figcaption>
                </figure>

                <div>
                    <h3>Der perfekte Espresso: Tipps und Tricks für zu Hause</h3>
                    <p>Espresso ist die Königsdisziplin der Kaffeezubereitung – und mit ein paar einfachen Tricks kannst du auch zu Hause ein perfektes Ergebnis erzielen. Wir zeigen dir, wie du deinen Espresso optimal extrahierst, welcher Mahlgrad der richtige ist und worauf du bei der Wahl der Bohnen achten solltest. Mit unseren Tipps und etwas Übung gelingt dir bald ein Espresso wie vom Profi...</p>
                </div>

            </article>
            <article>
                <figure>
                    <img src="https://imageplaceholder.net/382" alt="Kaffeebohnen" />
                    <figcaption>Kaffeebohnen</figcaption>
                </figure>

                <div>
                    <h3>Single Origin vs. Blend: Die Unterschiede erklärt</h3>
                    <p>Single Origin oder Blend – was ist der Unterschied und welcher Kaffee passt am besten zu deinem Geschmack? Wir erklären dir die Vor- und Nachteile beider Varianten und zeigen dir, wie</p>
                </div>
            </article>

            <article>
                <figure>
                    <img src="https://imageplaceholder.net/382" alt="Kaffeebohnen" />
                    <figcaption>Kaffeebohnen</figcaption>
                </figure>

                <div>
                    <h3>Single Origin vs. Blend: Die Unterschiede erklärt</h3>
                    <p>Single Origin oder Blend – was ist der Unterschied und welcher Kaffee passt am besten zu deinem Geschmack? Wir erklären dir die Vor- und Nachteile beider Varianten und zeigen dir, wie</p>
                </div>
            </article>
            <aside>
            <h2>Artikelübersicht</h2>
            <ul>
                <li>Äthiopien: Ein Streifzug durch die Wiege des Kaffees</li>
                <li>Der perfekte Espresso: Tipps und Tricks für zu Hause</li>
                <li>Single Origin vs. Blend: Die Unterschiede erklärt</li>
                <li></li>
                </ul>
            </aside>
        </main>
    );
    }

export default Blog;