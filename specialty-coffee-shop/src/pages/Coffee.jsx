import React from "react";

import brazilCoffeeBag from "../assets/images/brazil_coffee_bag.png";
import indiaCoffeeBag from "../assets/images/india_coffee_bag.png";
import guatemalaCoffeeBag from "../assets/images/guatemala_coffee_bag.png";

// "Unser Kaffee" Seite, die die verschiedenen Kaffeesorten vorstellt
// Jeder Artikel enthält ein Bild, den Kaffee-Namen, eine Beschreibung 
// und einen ausführlichen Vorstellungstext

const Coffee = () => {
    return (
    <main>
        <section aria-labelledby="coffee-title">
            <h1 id="coffee-title">Unsere Kaffee</h1>
            <h2>Beste ausgesuchte, qualitative Single Origins</h2>

            <article>
                <figure>
                    <img src={brazilCoffeeBag} alt="Unser Brazil Kaffee" />
                    <figcaption>Unser Brazil Kaffee</figcaption>
                </figure>
                <h3>Brazil</h3>
                <h4>Sanfte Süße und Schokoladige Noten</h4>
                <p>Dieser Kaffee aus Brasilien besticht durch sein vollmundiges Aroma mit feinen Noten von Schokolade, Nüssen und Karamell. Die niedrige Säure und der cremige Körper machen ihn zu einem perfekten Begleiter für Espresso, Cappuccino oder einfach pur als Filterkaffee.</p>
            </article>
            <article>
                <figure>
                    <img src={indiaCoffeeBag} alt="Unser India Kaffee" />
                    <figcaption>Unser India Kaffee</figcaption>
                </figure>
                <h3>India</h3>
                <h4>Würziger und exotischer Kaffee</h4>
                <p>Ein Kaffee mit Charakter! Unser India-Kaffee beeindruckt mit würzigen Noten von Zartbitterschokolade, Gewürzen und einem Hauch von dunklem Honig. Sein kräftiger Körper und die dezente Säure machen ihn ideal für alle, die ein intensives Geschmackserlebnis suchen.</p>
            </article>
            <article>
                <figure>
                    <img src={guatemalaCoffeeBag} alt="Unser Guatemala Kaffee" />
                    <figcaption>Unser Guatemala Kaffee</figcaption>
                </figure>
                <h3>Guatemala</h3>
                <h4>Fruchtig und komplexer Kaffee</h4>
                <p>Dieser Hochlandkaffee aus Guatemala verführt mit lebendigen Aromen von roten Beeren, feiner Zitrussäure und einem Hauch von Kakao. Die ausgewogene Balance zwischen Süße und Säure macht ihn zu einem exzellenten Genuss für Pour-Over, French Press oder als aromatischen Filterkaffee.</p>
            </article>
        </section>
    </main>);
    }

export default Coffee;