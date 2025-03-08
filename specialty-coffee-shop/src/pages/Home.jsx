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
        {/* Hero-Section */}
        <section className="flex flex-col h-auto max-h-none text-[#333]
                            desktop:flex-row desktop:justify-between desktop:items-center desktop:w-screen desktop:overflow-hidden desktop:h-[600px] desktop:min-h-[600px]"
                            aria-labelledby="hero-section">
            <figure className="h-[240px] max-h-[240px] object-cover
                                laptop:w-screen laptop:h-[400px] laptop:max-h-[400px]
                                desktop:w-[50vw] desktop:h-[600px] desktop:max-h-[600px] desktop:object-[50%_30%]
                                ">
                <img className="h-[240px] max-h-[240px] object-cover object-[50%_30%]
                                laptop:w-screen laptop:h-[400px] laptop:max-h-[400px] 
                                desktop:w-[50vw] desktop:h-full desktop:max-h-none desktop:object-[50%_30%]
                                " 
                                src={heroImage} alt="Die Gründer von Specialty Coffee Duisburg in der Rösterei" />
                <figcaption>Die Gründer von Specialty Coffee Duisburg in der Rösterei</figcaption>
            </figure>
            <article className="flex flex-col h-auto items-center w-screen mb-5
                                laptop:items-center laptop:mb-5
                                desktop:items-end desktop:justify-center desktop:text-right desktop:w-[50vw] desktop:p-5
                                ">
            <h1 className="mt-6 text-center
                            laptop:m-6
                            desktop: mr-20 desktop:text-right" id="hero-section">Einzigartigen Geschmack <br />und Aromen</h1>
            <p className="w-4/5 font-normal p-2">Bei Specialty Coffee Duisburg verbinden wir handverlesene Kaffeebohnen aus nachhaltigem Anbau mit unserer Leidenschaft für außergewöhnliche Aromen. Wir setzen auf direkte Partnerschaften mit Farmern, um Qualität, Transparenz und faire Bedingungen zu garantieren. Unsere sorgfältige Röstung bringt die individuellen Geschmacksprofile jeder Herkunft zur Geltung – von fruchtig-leicht bis schokoladig-intensiv. Genieße Kaffee, der nicht nur gut schmeckt, sondern auch Gutes bewirkt.</p>
            </article>
        </section>

        {/* Cards-Section zur Darstellung der Services */}
        <section className="flex flex-col justify-center items-center mx-auto my-8 w-[90vw]" aria-label="Übersicht unseres Service">
            <h1>Unser Service</h1>
            <article className="flex flex-col justify-start items-center my-8 mx-auto w-[90vw] text-[#333]
            laptop:grid laptop:grid-cols-2 laptop:grid-rows-2 laptop:justify-items-center
            desktop:flex desktop:flex-row desktop:justify-around desktop:w-[70vw]
            ">
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
        <section className="flex flex-col h-auto max-h-none text-[#333]
                            desktop:flex-row desktop:justify-between desktop:items-center desktop:w-screen desktop:overflow-hidden desktop:h-[600px] desktop:min-h-[600px]" aria-labelledby="coffee-title">
        <figure className="h-[240px] max-h-[240px] object-cover
                                laptop:w-screen laptop:h-[400px] laptop:max-h-[400px]
                                desktop:w-[50vw] desktop:h-[600px] desktop:max-h-[600px] desktop:object-[50%_30%]
                                ">
                <img className="h-[240px] max-h-[240px] object-cover object-[50%_30%]
                                laptop:w-screen laptop:h-[400px] laptop:max-h-[400px] 
                                desktop:w-[50vw] desktop:h-full desktop:max-h-none desktop:object-[50%_30%]" src={coffeeBeans} alt="Kaffeebohnen auf einem rustikalen Tisch vor Bokeh-Lichtern" />
                <figcaption>Kaffeebohnen auf einem rustikalen Tisch vor Bokeh-Lichtern</figcaption>
            </figure>
            <article className="flex flex-col h-auto items-center w-screen mb-5
                                laptop:items-center laptop:mb-5
                                desktop:items-end desktop:justify-center desktop:text-right desktop:w-[50vw] desktop:p-5
                                ">
            <h1 className="mt-6 text-center
                            laptop:mb-6
                            desktop:m-0 desktop:mt-0 desktop:text-right" id="coffee-title">Unser Kaffee</h1>
            <p className="w-4/5 font-normal p-2">Unser Kaffee ist so vielfältig wie die Regionen, aus denen er stammt. Von den fruchtig-floralen Noten äthiopischer Bohnen über die schokoladige Tiefe brasilianischer Ernten bis hin zu den würzigen Akzenten indischer Spezialitäten und der lebendigen Süße aus Guatemala – wir kennen und lieben den Charakter jeder Herkunft. Durch unsere schonende Röstung und die Kunst, außergewöhnliche Blends zu kreieren, bringen wir das Beste aus jeder Bohne in deine Tasse. Das Ergebnis: Kaffee, der nicht nur schmeckt, sondern Geschichten erzählt – von den Feldern bis in deine Tasse.</p>
            </article>
        </section>

        {/* Featured-Blog-Post Section*/}
        <section className="flex flex-col items-center w-screen h-auto max-h-none mb-0 text-[#333]
                            desktop:max-h-[600px] desktop:h-[600px] desktop:overflow-hidden desktop:mb-20" aria-labelledby="featured-blog-post">
            <h1 className="mt-8 mb-4 text-2xl laptop:text-4xl">Letzter Blog-Post</h1>
            <article className="flex flex-col-reverse w-screen items-center font-bold text-center
                        desktop:flex-row desktop:justify-between desktop:text-left"> 
                <div className="flex flex-col justify-center text-center w-4/5 p-5 items-center
                                desktop:w-[50vw] desktop:text-left">
                    <h2 className="mb-4 text-2xl text-center
                                    laptop:text-left
                                    desktop:w-[80%] desktop:max-w-none desktop:pl-5" id="featured-blog-post">Äthiopien: Wiege des Kaffees</h2>
                    <p className="font-normal text-left
                                    laptop:p-5 laptop:items-center">"Äthiopien gilt als die Wiege des Kaffees – hier, in den hochgelegenen Regionen des Horns von Afrika, hat die Pflanze ihren Ursprung. Schon die Legende vom Hirten Kaldi, dessen Ziegen nach dem Verzehr der Kaffeekirschen voller Energie tanzten, erzählt von der tiefen kulturellen Verbindung Äthiopiens mit dem Kaffee. Doch Äthiopien ist nicht nur eine Ursprungsregion, sondern auch eine Schatzkammer aromatischer Vielfalt...</p>
                    <Button text="Mehr dazu" link="/post/lastpost" aria="Lese unser letzter Blog-Artikel"/>
                </div>
                <figure className="h-[240px] flex w-screen object:cover object-[50%_30%]
                                tablet:h-[500px] tablet:max-h-[500px]
                                laptop:max-h-[400px]
                                desktop:w-[50vw] desktop:h-[600px] desktop:max-h-[600px] ">
                    <img className="w-full object-cover laptop:w-screen laptop:max-h-[400px]
                                    desktop:h-[600px] desktop:max-h-[600px]" src={featuredBlogPostImage} alt="Eine Landschaft einer Kaffee-Plantage in Äthiopien" />
                    <figcaption>Eine Landschaft einer Kaffee-Plantage in Äthiopien</figcaption>
                </figure>
                
            </article>
        </section>



    </main>
    );
    }

export default Home;