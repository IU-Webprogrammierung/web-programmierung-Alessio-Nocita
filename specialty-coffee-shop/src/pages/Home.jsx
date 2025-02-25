import React from "react";

import Card from "../components/Card";
import Button from "../components/Button";

import styles from "./Home.module.sass";

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

        {/* Hero-Section */}
        <section className={styles.heroSection} aria-labelledby="hero-section">
            <figure>
                <img src={heroImage} alt="Die Gründer von Specialty Coffee Duisburg in der Rösterei" />
                <figcaption>Die Gründer von Specialty Coffee Duisburg in der Rösterei</figcaption>
            </figure>
            <article>
            <h1 id="hero-section">Einzigartigen Geschmack <br />und Aromen</h1>
            <p>Bei Specialty Coffee Duisburg verbinden wir handverlesene Kaffeebohnen aus nachhaltigem Anbau mit unserer Leidenschaft für außergewöhnliche Aromen. Wir setzen auf direkte Partnerschaften mit Farmern, um Qualität, Transparenz und faire Bedingungen zu garantieren. Unsere sorgfältige Röstung bringt die individuellen Geschmacksprofile jeder Herkunft zur Geltung – von fruchtig-leicht bis schokoladig-intensiv. Genieße Kaffee, der nicht nur gut schmeckt, sondern auch Gutes bewirkt.</p>
            </article>
        </section>

        {/* Cards-Section zur Darstellung der Services */}
        <section className={styles.cards} aria-label="Übersicht unseres Service">
            <h1>Unser Service</h1>
            <article className={styles.cardsItems}>
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
                    </article>
        </section>

        {/* Section zur Präsentation des Kaffees */}
        <section className={styles.heroSection} aria-labelledby="coffee-title">
        <figure>
                <img src={coffeeBeans} alt="Kaffeebohnen auf einem rustikalen Tisch vor Bokeh-Lichtern" />
                <figcaption>Kaffeebohnen auf einem rustikalen Tisch vor Bokeh-Lichtern</figcaption>
            </figure>
            <article>
            <h1 id="coffee-title">Unser Kaffee</h1>
            <p>Unser Kaffee ist so vielfältig wie die Regionen, aus denen er stammt. Von den fruchtig-floralen Noten äthiopischer Bohnen über die schokoladige Tiefe brasilianischer Ernten bis hin zu den würzigen Akzenten indischer Spezialitäten und der lebendigen Süße aus Guatemala – wir kennen und lieben den Charakter jeder Herkunft. Durch unsere schonende Röstung und die Kunst, außergewöhnliche Blends zu kreieren, bringen wir das Beste aus jeder Bohne in deine Tasse. Das Ergebnis: Kaffee, der nicht nur schmeckt, sondern Geschichten erzählt – von den Feldern bis in deine Tasse.</p>
            </article>
        </section>

        {/* Featured-Blog-Post Section*/}
        <section className={styles.blogSection} aria-labelledby="featured-blog-post">
            <h1>Letzter Blog-Post</h1>
            <article className={styles.blogArticle}>
            <div className={styles.articleContent}>
                <h2 id="featured-blog-post">Äthiopien: Ein Streifzug durch die Wiege des Kaffees</h2>
                <p>"Äthiopien gilt als die Wiege des Kaffees – hier, in den hochgelegenen Regionen des Horns von Afrika, hat die Pflanze ihren Ursprung. Schon die Legende vom Hirten Kaldi, dessen Ziegen nach dem Verzehr der Kaffeekirschen voller Energie tanzten, erzählt von der tiefen kulturellen Verbindung Äthiopiens mit dem Kaffee. Doch Äthiopien ist nicht nur eine Ursprungsregion, sondern auch eine Schatzkammer aromatischer Vielfalt...</p>
                <Button className={styles.button} text="Mehr dazu" link="#" aria="Lese unser letzter Blog-Artikel"/>
                </div>
                <figure>
                    <img src={featuredBlogPostImage} alt="Eine Landschaft einer Kaffee-Plantage in Äthiopien" />
                    <figcaption>Eine Landschaft einer Kaffee-Plantage in Äthiopien</figcaption>
                </figure>
                
            </article>
        </section>
    </main>
    );
    }

export default Home;