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
        <main className="flex flex-col h-auto w-screen max-h-none
                        desktop:grid desktop:grid-cols-[70%_30%] desktop:grid-rows[auto_1fr]">
            <h1 className="row-start-1 row-end-2 col-start-1 col-end-3 text-2xl mb-5 text-center desktop:mb-10 desktop:text-3xl">Blog</h1>
            <section className="flex flex-col items-center row-start-2 row-end-3 col-start-1 col-end-2 bg-transparent h-auto min-h-none m-0
                                laptop:mb-20 desktop:ml-5 desktop:pl-5" 
                                aria-label="Blog-Artikel">

                <article className="flex flex-col items-center justify-start h-auto min-h-none odd:bg-[#616b30] even:bg-[#f0f0f0] odd:text-[#f0f0f0] even:text-[#333]
                                    desktop:grid desktop:grid-cols-2 desktop:h-[600px] desktop:min-h-[600px] desktop:w-[70vw] ">
                    <figure className="w-screen h-[240px]
                                        tablet:h-[400px]
                                        desktop:w-full desktop:h-full desktop:odd:order-1 desktop:even:order-2">
                        <img className="w-screen h-[240px] object-cover object-center
                                        tablet:h-[400px]
                                        desktop:w-full desktop:h-full" src={blogPost1} alt="Kaffee-Plantage in Äthiopien" />
                        <figcaption>Kaffee-Plantage in Äthiopien</figcaption>
                    </figure>
                    <div className="flex flex-col align-start justify-center py-10 text-left w-[80vw] max-w-[90vw] mx-auto 
                                        desktop:w-[400px] desktop:max-w-[30vw] desktop:odd:order-2 desktop:even:order-1">
                        <h3 className="text-2xl mb-5 text-center font-bold max-w-[80vw]
                                        laptop:font-size-md laptop:max-w-[680px]
                                        desktop:text-left desktop:pl-5">Äthiopien: Wiege des Kaffees</h3>
                        <p className="text-md mb-3 max-w-[80vw]
                                        tablet:text-lg
                                        laptop:max-w-[680px]
                                        desktop:text-lg desktop:w-[28vw] desktop:max-w-[28vw] desktop:p-5">Äthiopien gilt als die Wiege des Kaffees – hier, in den hochgelegenen Regionen des Horns von Afrika, hat die Pflanze ihren Ursprung. Schon die Legende vom Hirten Kaldi, dessen Ziegen nach dem Verzehr der Kaffeekirschen voller Energie tanzten, erzählt von der tiefen kulturellen Verbindung Äthiopiens mit dem Kaffee. Doch Äthiopien ist nicht nur eine Ursprungsregion, sondern auch eine Schatzkammer aromatischer Vielfalt...</p>
                        <Button text="Mehr lesen" link="/post/ethiopia" aria="Erfahre mehr über den Kaffee-Land Äthiopien" color="white"/>

                    </div>

                </article>
 
            <article className="flex flex-col items-center justify-start h-auto min-h-none odd:bg-[#616b30] even:bg-[#f0f0f0] odd:text-[#f0f0f0] even:text-[#333]
                                    desktop:grid desktop:grid-cols-2 desktop:h-[600px] desktop:min-h-[600px] desktop:w-[70vw]">
            <figure className="w-screen h-[240px]
                                        tablet:h-[400px]
                                        desktop:w-full desktop:h-full desktop:odd:order-1 desktop:even:order-2">
                    <img className="w-screen h-[240px] object-cover object-center
                                        tablet:h-[400px]
                                        desktop:w-full desktop:h-full" src={blogPost2} alt="ein Café und eine Espresso-Maschine" />
                    <figcaption>Den perfekte Espresso zubereiten</figcaption>
            </figure>
            <div className="flex flex-col align-start justify-center py-10 text-left w-[80vw] max-w-[80vw] mx-auto
                                desktop:w-[400px] desktop:max-w-[30vw] desktop:odd:order-2 desktop:even:order-1">
                    <h3 className="text-2xl mb-5 text-center font-bold max-w-[80vw]
                                        laptop:font-size-md
                                        desktop:text-left">Der perfekte Espresso: Tipps und Tricks</h3>
                    <p className="text-md mb-3 max-w-[80vw] 
                                        desktop:text-lg">Espresso ist die Königsdisziplin der Kaffeezubereitung – und mit ein paar einfachen Tricks kannst du auch zu Hause ein perfektes Ergebnis erzielen. Wir zeigen dir, wie du deinen Espresso optimal extrahierst, welcher Mahlgrad der richtige ist und worauf du bei der Wahl der Bohnen achten solltest. Mit unseren Tipps und etwas Übung gelingt dir bald ein Espresso wie vom Profi...</p>
                    <Button text="Mehr lesen" link="/post/espresso" aria="Erfahre mehr darüber, wie man den perfekten Espresso zubereitet"/>

                </div>




            </article>
            <article className="flex flex-col items-center justify-start h-auto min-h-none odd:bg-[#616b30] even:bg-[#f0f0f0] odd:text-[#f0f0f0] even:text-[#333]
                                    desktop:grid desktop:grid-cols-2 desktop:h-[600px] desktop:min-h-[600px] desktop:w-[70vw]">
                <figure className="w-screen h-[240px]
                                        tablet:h-[400px]
                                        desktop:w-full desktop:h-full desktop:odd:order-1 desktop:even:order-2">
                    <img className="w-screen h-[240px] object-cover object-center
                                        tablet:h-[400px]
                                        desktop:w-full desktop:h-full" src={blogPost3} alt="Kaffee wird in einer Espresso Tasse gegossen" />
                    <figcaption>Single Origin vs Blend</figcaption>
                </figure>

                <div className="flex flex-col align-start justify-center text-left py-10 w-[80vw] max-w-[80vw] mx-auto
                                desktop:w-[400px] desktop:max-w-[30vw] desktop:odd:order-2 desktop:even:order-1">
                    <h3 className="text-2xl mb-5 text-center font-bold max-w-80vw]
                                        laptop:font-size-md
                                        desktop:text-left">Single Origin vs. Blend: Die Unterschiede erklärt</h3>
                    <p className="text-md mb-3 max-w-[80vw]
                                        desktop:text-lg">Single Origin oder Blend – was ist der Unterschied und welcher Kaffee passt am besten zu deinem Geschmack? Wir erklären dir die Vor- und Nachteile beider Varianten und zeigen dir, wie du die richtige Wahl für deinen perfekten Kaffeegenuss triffst...</p>
                    <Button text="Mehr lesen" link="/post/origin" aria="Erfahre mehr über den Unterschied zwischen Single Origins und Blends" color="white"/>

                </div>

            </article>

            <article className="flex flex-col items-center justify-start h-auto min-h-none odd:bg-[#616b30] even:bg-[#f0f0f0] odd:text-[#f0f0f0] even:text-[#333]
                                    desktop:grid desktop:grid-cols-2 desktop:h-[600px] desktop:min-h-[600px] desktop:w-[70vw] desktop:overflow-y-hidden">
            <figure className="w-screen h-[240px]
                                        tablet:h-[400px]
                                        desktop:w-full desktop:h-full desktop:odd:order-1 desktop:even:order-2">
                    <img className="w-screen h-[240px] object-cover object-center
                                        tablet:h-[400px]
                                        desktop:w-full desktop:h-full" src={blogPost4} alt="Cappuccino mit Latte Art" />
                    <figcaption>Die Kunst des Latte Art</figcaption>
                </figure>
                <div className="flex flex-col align-start justify-center py-10 text-left w-[80vw] max-w-[80vw] mx-auto
                                desktop:w-[400px] desktop:max-w-[30vw] desktop:odd:order-2 desktop:even:order-1">
                    <h3 className="text-2xl mb-5 text-center font-bold max-w-[80vw]
                                        laptop:font-size-md
                                        desktop:text-left">Die Kunst der Latte Art</h3>
                    <p className="text-md mb-3 max-w-[80vw]
                                        desktop:text-lg">Ein guter Kaffee ist ein Genuss – aber ein Kaffee mit kunstvoller Latte Art ist ein echtes Erlebnis. Die filigranen Muster, die Baristas auf den samtigen Milchschaum zaubern, sind nicht nur ein optischer Hingucker, sondern auch ein Zeichen für höchste Kaffeequalität und Handwerkskunst. Latte Art entsteht durch das perfekte Zusammenspiel von Espresso und geschäumter Milch. Entscheidend ist die richtige Textur...</p>
                    <Button text="Mehr lesen" link="/post/latte" aria="Erfahre mehr über die Kunst des Latte Art"/>

                </div>

                


            </article>
            </section>
            
            {/* Sidebar mit Links zu den Blog-Artikeln
            (wird nur bei der Desktop-Ansicht angezeigt) */}
            
            {viewport > 1080 && <PostListSidebar className="hidden row-start-2 row-end-3 col-start-2 col-end-3 mr-2
                                                            desktop:block"/>}

        </main>
    );
    }

export default Blog;