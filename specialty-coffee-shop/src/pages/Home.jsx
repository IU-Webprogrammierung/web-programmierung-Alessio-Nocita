import React from "react";

import Card from "../components/Card";
import Button from "../components/Button";

import heroImage from "../assets/images/specialty_coffee_duisburg_home.png"
import coffeeBeans from "../assets/images/coffee_beans.png"
import featuredBlogPostImage from "../assets/images/ethiopia_coffee_plantages.png"
import cardIcon1 from "../assets/images/coffee-bag.svg"
import cardIcon2 from "../assets/images/handshake.svg"
import cardIcon3 from "../assets/images/espresso-machine.svg"
import cardIcon4 from "../assets/images/calendar.svg"

const Home = ({viewport}) => {
    return (
    <main>
        <section>
            <figure>
                <img src={heroImage} alt="Alessio Nocita, Gründer von Specialty Coffee Duisburg" />
                <figcaption>Alessio Nocita, Gründer von Specialty Coffee Duisburg</figcaption>
            </figure>
            <article>
            <h1>Einzigartigen Geschmack und Aromen</h1>
            <p>Bei Specialty Coffee Duisburg verbinden wir handverlesene Kaffeebohnen aus nachhaltigem Anbau mit unserer Leidenschaft für außergewöhnliche Aromen. Wir setzen auf direkte Partnerschaften mit Farmern, um Qualität, Transparenz und faire Bedingungen zu garantieren. Unsere sorgfältige Röstung bringt die individuellen Geschmacksprofile jeder Herkunft zur Geltung – von fruchtig-leicht bis schokoladig-intensiv. Genieße Kaffee, der nicht nur gut schmeckt, sondern auch Gutes bewirkt.</p>
            </article>
        </section>
        <section>
            <Card src={cardIcon1} 
                    alt="Icon einer Kaffee-Tüte" 
                    title="Einzigartige Sorten">
                        <p>Wir wählen nur die besten Bohnen aus nachhaltigem Anbau, um dir ein unvergleichliches Geschmackserlebnis zu bieten – von exotischen Fruchtnoten bis zu nussigen Nuancen.</p>
                    </Card>
                    <Card src={cardIcon2} 
                    alt="Icon eines Handschlags" 
                    title="Fair Trade">
                        <p>Wir setzen auf direkte Partnerschaften mit Kaffeebauern weltweit, um faire Preise und Bedingungen zu garantieren. Gemeinsam für eine nachhaltige Zukunft
</p>
                    </Card>
                    <Card src={cardIcon3}
                    alt="Icon einer Kaffeemaschine"
                    title="Genuss hier vor Ort">
                        <p>Erlebe unsere Kaffeespezialitäten direkt in unserer gemütlichen Bar in Duisburg. Frisch aufgebrüht, mit Liebe zubereitet – der perfekte Ort für echte Kaffeegenießer.</p>
                    </Card>
                    <Card src={cardIcon4}
                    alt="Icon eines Kalenders"
                    title="Workshops & Events">
                        <p>Lerne die Kunst des perfekten Kaffees in unseren Barista-Kursen oder entdecke exklusive Coffee-Tastings. Werde selbst zum Experten!</p>
                    </Card>
        </section>
        <section>
        <figure>
                <img src={coffeeBeans} alt="Unser Kaffee, von uns mit Leidenschaft und Können geröstet" />
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
                    <img src={featuredBlogPostImage} alt="Das neue Blog-Post" />
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