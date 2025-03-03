import React from "react";

import styles from "./Coffee.module.sass";

import brazilCoffeeBag from "../assets/images/brazil_coffee_bag.png";
import indiaCoffeeBag from "../assets/images/india_coffee_bag.png";
import guatemalaCoffeeBag from "../assets/images/guatemala_coffee_bag.png";

// "Unser Kaffee" Seite, die die verschiedenen Kaffeesorten vorstellt
// Jeder Artikel enthält ein Bild, den Kaffee-Namen, eine Beschreibung 
// und einen ausführlichen Vorstellungstext

const Coffee = () => {
    return (
    <main>
        <section className={styles.coffeeList} aria-labelledby="coffee-title">
            <h1 id="coffee-title">Unser Kaffee</h1>
            <h2>Beste ausgesuchte, qualitative Single Origins</h2>

            <article className={styles.coffeeArticle}>
                <figure className={styles.coffeePicture}>
                    <img src={brazilCoffeeBag} alt="Unser Brazil Kaffee" />
                    <figcaption>Unser Brazil Kaffee</figcaption>
                </figure>
                <h3 className={styles.coffeeTitle}>Brazil</h3>
                <h4 className={styles.coffeeSubtitle}>Sanfte Süße und Schokoladige Noten</h4>
                <p className={styles.coffeeText}>Dieser Kaffee aus Brasilien besticht durch sein vollmundiges Aroma mit feinen Noten von Schokolade, Nüssen und Karamell. Die niedrige Säure und der cremige Körper machen ihn zu einem perfekten Begleiter für Espresso, Cappuccino oder einfach pur als Filterkaffee.</p>
            </article>
            <article className={styles.coffeeArticle}>
                <figure className={styles.coffeePicture}>
                    <img src={indiaCoffeeBag} alt="Unser India Kaffee" />
                    <figcaption>Unser India Kaffee</figcaption>
                </figure>
                <h3 className={styles.coffeeTitle}>India</h3>
                <h4 className={styles.coffeeSubtitle}>Würziger und exotischer Kaffee</h4>
                <p className={styles.coffeeText}>Ein Kaffee mit Charakter! Unser India-Kaffee beeindruckt mit würzigen Noten von Zartbitterschokolade, Gewürzen und einem Hauch von dunklem Honig. Sein kräftiger Körper und die dezente Säure machen ihn ideal für alle, die ein intensives Geschmackserlebnis suchen.</p>
            </article>
            <article className={styles.coffeeArticle}>
                <figure className={styles.coffeePicture}>
                    <img src={guatemalaCoffeeBag} alt="Unser Guatemala Kaffee" />
                    <figcaption>Unser Guatemala Kaffee</figcaption>
                </figure>
                <h3 className={styles.coffeeTitle}>Guatemala</h3>
                <h4 className={styles.coffeeSubtitle}>Fruchtig und komplexer Kaffee</h4>
                <p className={styles.coffeeText}>Dieser Hochlandkaffee aus Guatemala verführt mit lebendigen Aromen von roten Beeren, feiner Zitrussäure und einem Hauch von Kakao. Die ausgewogene Balance zwischen Süße und Säure macht ihn zu einem exzellenten Genuss für Pour-Over, French Press oder als aromatischen Filterkaffee.</p>
            </article>
        </section>
    </main>);
    }

export default Coffee;