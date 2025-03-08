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
        <section className="m-0 w-screen laptop:max-w-4/5 laptop:mx-auto laptop:mb-20" aria-labelledby="coffee-title">
            <h1 className="text-3xl text-center" id="coffee-title">Unser Kaffee</h1>
            <h2 className="text-xl mb-5 px-3 text-center">Beste ausgesuchte, qualitative Single Origins</h2>

            <article className="w-screen min-h-[330px] grid grid-cols-2 grid-rows-[auto_auto_1fr] gap-2 odd:bg-[#616b3a] even:bg-[#f0f0f0] 
                                laptop:odd:bg-transparent laptop:even:bg-transparent laptop:mt-10" aria-label="Brazil Kaffee">
                <figure className="col-start-1 col-end-2 row-start-1 row-end-4 justify-self-center desktop:justify-self-end">
                    <img className="max-w-[50vw] h-full object-cover laptop:w-[40vw] desktop:mr-5" src={brazilCoffeeBag} alt="Unser Brazil Kaffee" />
                    <figcaption>Unser Brazil Kaffee</figcaption>
                </figure>
                <h3 className="row-start-1 row-end-2 col-start-2 col-end-3 text-3xl font-bold py-2 px-2 desktop:text-3xl">Brazil</h3>
                <h4 className="row-start-2 row-end-3 col-start-2 col-end-3 text-lg py-1 px-2 desktop:text-2xl">Sanfte Süße und Schokoladige Noten</h4>
                <p className="row-start 3 row-end-4 col-start-2 col-end-3 text-sm px-3 pb-2 
                            laptop:w-2/3 laptop:text-lg">Dieser Kaffee aus Brasilien besticht durch sein vollmundiges Aroma mit feinen Noten von Schokolade, Nüssen und Karamell. Die niedrige Säure und der cremige Körper machen ihn zu einem perfekten Begleiter für Espresso, Cappuccino oder einfach pur als Filterkaffee.</p>
            </article>
            <article className="w-screen min-h-[330px] grid grid-cols-2 grid-rows-[auto_auto_1fr] gap-2 odd:bg-[#616b3a] even:bg-[#f0f0f0] 
                                laptop:odd:bg-transparent laptop:even:bg-transparent laptop:mt-10" aria-label="India Kaffee">
                <figure className="col-start-1 col-end-2 row-start-1 row-end-4 justify-self-center desktop:justify-self-end">
                    <img className="max-w-[50vw] h-full object-cover object-[30%_50%] laptop:w-[40vw] desktop:mr-5" src={indiaCoffeeBag} alt="Unser India Kaffee" />
                    <figcaption>Unser India Kaffee</figcaption>
                </figure>
                <h3 className="row-start-1 row-end-2 col-start-2 col-end-3 text-3xl font-bold py-2 px-2 desktop:text-3xl">India</h3>
                <h4 className="row-start-2 row-end-3 col-start-2 col-end-3 text-lg py-1 px-2 desktop:text-2xl">Würziger und exotischer Kaffee</h4>
                <p className="row-start 3 row-end-4 col-start-2 col-end-3 text-sm px-3 pb-2 
                            laptop:w-2/3 laptop:text-lg">Ein Kaffee mit Charakter! Unser India-Kaffee beeindruckt mit würzigen Noten von Zartbitterschokolade, Gewürzen und einem Hauch von dunklem Honig. Sein kräftiger Körper und die dezente Säure machen ihn ideal für alle, die ein intensives Geschmackserlebnis suchen.</p>
            </article>
            <article className="w-screen min-h-[330px] grid grid-cols-2 grid-rows-[auto_auto_1fr] gap-2 odd:bg-[#616b3a] even:bg-[#f0f0f0] 
                                laptop:odd:bg-transparent laptop:even:bg-transparent laptop:mt-10" aria-label="Guatemala Kaffee">
                <figure className="col-start-1 col-end-2 row-start-1 row-end-4 justify-self-center desktop:justify-self-end">
                    <img className="max-w-[50vw] h-full object-cover laptop:w-[40vw] desktop:mr-5" src={guatemalaCoffeeBag} alt="Unser Guatemala Kaffee" />
                    <figcaption>Unser Guatemala Kaffee</figcaption>
                </figure>
                <h3 className="row-start-1 row-end-2 col-start-2 col-end-3 text-3xl font-bold py-2 px-2 desktop:text-3xl">Guatemala</h3>
                <h4 className="row-start-2 row-end-3 col-start-2 col-end-3 text-lg py-1 px-2 desktop:text-2xl">Fruchtig und komplexer Kaffee</h4>
                <p className="row-start 3 row-end-4 col-start-2 col-end-3 text-sm px-3 pb-2 
                                laptop:w-2/3 laptop:text-lg">Dieser Hochlandkaffee aus Guatemala verführt mit lebendigen Aromen von roten Beeren, feiner Zitrussäure und einem Hauch von Kakao. Die ausgewogene Balance zwischen Süße und Säure macht ihn zu einem exzellenten Genuss für Pour-Over, French Press oder als aromatischen Filterkaffee.</p>
            </article>
        </section>
    </main>);
    }

export default Coffee;