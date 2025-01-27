import React from "react";

import Card from "../components/Card";
import Button from "../components/Button";

const Home = ({viewport}) => {
    return (
    <main>
        <section>
            <figure>
                <img src="https://imageplaceholder.net/382" alt="Alessio Nocita, Gründer von Specialty Coffee Duisburg" />
                <figcaption>Alessio Nocita, Gründer von Specialty Coffee Duisburg</figcaption>
            </figure>
            <article>
            <h1>Einzigartigen Geschmack und Aromen</h1>
            <p>Bei Specialty Coffee Duisburg verbinden wir handverlesene Kaffeebohnen aus nachhaltigem Anbau mit unserer Leidenschaft für außergewöhnliche Aromen. Wir setzen auf direkte Partnerschaften mit Farmern, um Qualität, Transparenz und faire Bedingungen zu garantieren. Unsere sorgfältige Röstung bringt die individuellen Geschmacksprofile jeder Herkunft zur Geltung – von fruchtig-leicht bis schokoladig-intensiv. Genieße Kaffee, der nicht nur gut schmeckt, sondern auch Gutes bewirkt.</p>
            </article>
        </section>
        <section>
            <Card src="https://imageplaceholder.net/240" 
                    alt="Icon einer Kaffee-Pflanze" 
                    title="Einzigartige Sorten">
                        <p>Wir wählen nur die besten Bohnen aus nachhaltigem Anbau, um dir ein unvergleichliches Geschmackserlebnis zu bieten – von exotischen Fruchtnoten bis zu nussigen Nuancen.</p>
                    </Card>
                    <Card src="https://imageplaceholder.net/240" 
                    alt="Icon eines Kaffee-Bohne" 
                    title="Sorgfältige Röstung">
                        <p>Jede Bohne wird bei uns in Duisburg schonend geröstet, um die feinen Aromen perfekt zur Geltung zu bringen. Frische und Qualität, die du schmeckst.

</p>
                    </Card>
                    <Card src="https://imageplaceholder.net/240"
                    alt="Icon einer Kaffeemaschine"
                    title="Genuss hier vor Ort">
                        <p>Erlebe unsere Kaffeespezialitäten direkt in unserer gemütlichen Bar in Duisburg. Frisch aufgebrüht, mit Liebe zubereitet – der perfekte Ort für echte Kaffeegenießer.</p>
                    </Card>
                    <Card src="https://imageplaceholder.net/240"
                    alt="Icon eines Kalenders"
                    title="Workshops & Events">
                        <p>Lerne die Kunst des perfekten Kaffees in unseren Barista-Kursen oder entdecke exklusive Coffee-Tastings. Werde selbst zum Experten!</p>
                    </Card>
        </section>
        <section>
        <figure>
                <img src="https://imageplaceholder.net/382" alt="Unser Kaffee, von uns mit Leidenschaft und Können geröstet" />
                <figcaption>Unser Kaffee, von uns mit Leidenschaft und Können geröstet</figcaption>
            </figure>
            <article>
            <h1>Unser Kaffee</h1>
            <p>Unser Kaffee ist so vielfältig wie die Regionen, aus denen er stammt. Von den fruchtig-floralen Noten äthiopischer Bohnen über die schokoladige Tiefe brasilianischer Ernten bis hin zu den würzigen Akzenten indischer Spezialitäten und der lebendigen Süße aus Guatemala – wir kennen und lieben den Charakter jeder Herkunft. Durch unsere schonende Röstung und die Kunst, außergewöhnliche Blends zu kreieren, bringen wir das Beste aus jeder Bohne in deine Tasse. Das Ergebnis: Kaffee, der nicht nur schmeckt, sondern Geschichten erzählt – von den Feldern bis in deine Tasse.</p>
            </article>
        </section>
        <section>
            <article>
            <h1>Äthiopien: Ein Streifzug durch die Wiege des Kaffees</h1>
                <figure>
                    <img src="https://imageplaceholder.net/382" alt="Das neue Blog-Post" />
                    <figcaption>Das neue Blog-Post</figcaption>
                </figure>
                <p>"Äthiopien gilt als die Wiege des Kaffees – hier, in den hochgelegenen Regionen des Horns von Afrika, hat die Pflanze ihren Ursprung. Schon die Legende vom Hirten Kaldi, dessen Ziegen nach dem Verzehr der Kaffeekirschen voller Energie tanzten, erzählt von der tiefen kulturellen Verbindung Äthiopiens mit dem Kaffee. Doch Äthiopien ist nicht nur eine Ursprungsregion, sondern auch eine Schatzkammer aromatischer Vielfalt...</p>
                <Button text="Mehr dazu" link="#" />
            </article>
        </section>
    </main>
    );
    }

export default Home;