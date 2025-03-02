import React from "react";

import styles from "./Blog.module.sass";

import Button from "../components/Button";
import { Link } from "react-router-dom";

import PostListSidebar from "../components/PostListSidebar";

import blogPost1 from "../assets/images/ethiopia_coffee_plantages_square.png";
import blogPost2 from "../assets/images/espresso_lesson.png";
import blogPost3 from "../assets/images/single_origin_vs_blend.png";
import blogPost4 from "../assets/images/latte_art.png";

// Übersicht der Blog-Artikel mit Bildern und Links zu den einzelnen Artikeln
// (hartkodiert)
// Zur Demonstrationszwecken sind alle Artikel zu einem einzigen Blog-Post verlinkt

const Blog = ({viewport}) => {
    return (
        <main className={styles.blogPage}>
            <h1>Blog</h1>
            <section className={styles.blogSection} aria-label="Blog-Artikel">

                <article className={styles.blogArticle}>
                    <figure>
                        <img src={blogPost1} alt="Kaffee-Plantage in Äthiopien" />
                        <figcaption>Kaffee-Plantage in Äthiopien</figcaption>
                    </figure>
                    <div className={styles.articleContent}>
                        <h3>Äthiopien: Ein Streifzug durch die Wiege des Kaffees</h3>
                        <p>Äthiopien gilt als die Wiege des Kaffees – hier, in den hochgelegenen Regionen des Horns von Afrika, hat die Pflanze ihren Ursprung. Schon die Legende vom Hirten Kaldi, dessen Ziegen nach dem Verzehr der Kaffeekirschen voller Energie tanzten, erzählt von der tiefen kulturellen Verbindung Äthiopiens mit dem Kaffee. Doch Äthiopien ist nicht nur eine Ursprungsregion, sondern auch eine Schatzkammer aromatischer Vielfalt...</p>
                        <Button text="Mehr lesen" link="/post/ethiopia" aria="Erfahre mehr über den Kaffee-Land Äthiopien" color="white"/>

                    </div>

                </article>
 
            <article className={styles.blogArticle}>
            <figure>
                    <img src={blogPost2} alt="ein Café und eine Espresso-Maschine" />
                    <figcaption>Den perfekte Espresso zubereiten</figcaption>
            </figure>
            <div className={styles.articleContent}>
                    <h3>Der perfekte Espresso: Tipps und Tricks für zu Hause</h3>
                    <p>Espresso ist die Königsdisziplin der Kaffeezubereitung – und mit ein paar einfachen Tricks kannst du auch zu Hause ein perfektes Ergebnis erzielen. Wir zeigen dir, wie du deinen Espresso optimal extrahierst, welcher Mahlgrad der richtige ist und worauf du bei der Wahl der Bohnen achten solltest. Mit unseren Tipps und etwas Übung gelingt dir bald ein Espresso wie vom Profi...</p>
                    <Button text="Mehr lesen" link="/post/espresso" aria="Erfahre mehr darüber, wie man den perfekten Espresso zubereitet"/>

                </div>




            </article>
            <article className={styles.blogArticle}>
                <figure>
                    <img src={blogPost3} alt="Kaffee wird in einer Espresso Tasse gegossen" />
                    <figcaption>Single Origin vs Blend</figcaption>
                </figure>

                <div className={styles.articleContent}>
                    <h3>Single Origin vs. Blend: Die Unterschiede erklärt</h3>
                    <p>Single Origin oder Blend – was ist der Unterschied und welcher Kaffee passt am besten zu deinem Geschmack? Wir erklären dir die Vor- und Nachteile beider Varianten und zeigen dir, wie du die richtige Wahl für deinen perfekten Kaffeegenuss triffst...</p>
                    <Button text="Mehr lesen" link="/post/origin" aria="Erfahre mehr über den Unterschied zwischen Single Origins und Blends" color="white"/>

                </div>

            </article>

            <article className={styles.blogArticle}>
            <figure>
                    <img src={blogPost4} alt="Cappuccino mit Latte Art" />
                    <figcaption>Die Kunst des Latte Art</figcaption>
                </figure>
                <div className={styles.articleContent}>
                    <h3>Die Kunst der Latte Art</h3>
                    <p>Ein guter Kaffee ist ein Genuss – aber ein Kaffee mit kunstvoller Latte Art ist ein echtes Erlebnis. Die filigranen Muster, die Baristas auf den samtigen Milchschaum zaubern, sind nicht nur ein optischer Hingucker, sondern auch ein Zeichen für höchste Kaffeequalität und Handwerkskunst. Latte Art entsteht durch das perfekte Zusammenspiel von Espresso und geschäumter Milch. Entscheidend ist die richtige Textur...</p>
                    <Button text="Mehr lesen" link="/post/latte" aria="Erfahre mehr über die Kunst des Latte Art"/>

                </div>

                


            </article>
            </section>
            
            {/* Sidebar mit Links zu den Blog-Artikeln
            (wird nur bei der Desktop-Ansicht angezeigt) */}
            
            {viewport > 1080 && <PostListSidebar className={styles.blogAside}/>}

        </main>
    );
    }

export default Blog;