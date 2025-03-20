import React from "react";

import blogPost from "../assets/images/ethiopia_coffee_plantages.png";
import Button from "../components/Button";

// Single Blog Post-Seite
// enthält Titel, Autor, Veröffentlichungsdatum, Text und Bild
// (hartkodiert)

const Post = () => {
  return (
    <main className="pb-10">
      <section>
        <article
          className="grid grid-cols-1 grid-rows-[auto_auto_auto_240px_1fr_auto] w-screen text-primary bg-secondary justify-center mx-auto pb-10 mb-20 
                                laptop:w-4/5
                                desktop:grid-rows-[auto_auto_auto_400px_1fr_auto]"
        >
          <h1 className="text-xl text-center mt-5 w-full mx-auto mb-2 laptop:text-3xl desktop:mt-10 desktop:w-4/5">
            Äthiopien: Wiege des Kaffees
          </h1>
          <time
            className="text-md text-center mt-1 laptop:text-lg"
            datetime="2021-09-15"
          >
            15. September 2021
          </time>
          <h2 className="text-md text-center mb-5 laptop:text-lg">
            Ein Artikel von <address className="inline">Max Mustermann</address>
          </h2>

          <figure className="h-[240px] w-full mx-auto desktop:h-[400px]">
            <img
              className="w-full h-[240px] object-cover object-center 
                                    desktop:h-[400px]"
              src={blogPost}
              alt="Eine Kaffee-Plantage in Äthiopien"
            />
            <figcaption>Eine Kaffee-Plantage in Äthiopien</figcaption>
          </figure>
          <div
            className="w-4/5 text-left mx-auto py-5 px-5 
                tablet:w-3/4
                desktop:w-2/3 desktop:px-0 desktop:pt-5"
          >
            <p>
              Äthiopien gilt als die Wiege des Kaffees – hier, in den
              hochgelegenen Regionen des Horns von Afrika, hat die Pflanze ihren
              Ursprung. Schon die Legende vom Hirten Kaldi, dessen Ziegen nach
              dem Verzehr der Kaffeekirschen voller Energie tanzten, erzählt von
              der tiefen kulturellen Verbindung Äthiopiens mit dem Kaffee. Doch
              Äthiopien ist nicht nur eine Ursprungsregion, sondern auch eine
              Schatzkammer aromatischer Vielfalt.
            </p>

            <h4 className="font-bold mt-5 mb-1 text-xl">
              Die Vielfalt äthiopischer Kaffeesorten
            </h4>
            <p>
              Äthiopiens Kaffeeanbau ist einzigartig, denn hier wachsen die
              Pflanzen in einer natürlichen Umgebung, oft wild oder in
              Mischkulturen mit anderen Pflanzen. Anders als in vielen anderen
              Ländern, wo gezielt kultivierte Varietäten dominieren, gibt es in
              Äthiopien eine beeindruckende genetische Vielfalt an
              Kaffeepflanzen. Dies führt zu einem außergewöhnlich breiten
              Spektrum an Aromen – von blumig-leichten bis zu intensiven,
              fruchtigen Geschmacksnoten.
            </p>

            <p>Die bekanntesten Anbaugebiete sind:</p>
            <ul className="list-none p-0">
              <li>
                <strong>Yirgacheffe</strong>: Berühmt für florale Noten, eine
                ausgeprägte Zitrussäure und einen eleganten Körper. Ideal für
                Liebhaber von feinen, Tee-ähnlichen Kaffees.
              </li>
              <li>
                <strong>Sidamo</strong>: Mild und komplex, mit einer
                harmonischen Mischung aus Fruchtigkeit und Würze. Perfekt für
                alle, die eine balancierte Tasse mit sanfter Säure schätzen.
              </li>
              <li>
                <strong>Harrar</strong>: Bekannt für seinen kräftigen Körper und
                seine wilden, fast weinähnlichen Noten von Beeren und Gewürzen –
                ein Favorit für Fans intensiver Aromen.
              </li>
            </ul>

            <h4>Verarbeitung und ihre Auswirkungen auf den Geschmack</h4>
            <p>
              Äthiopischer Kaffee wird traditionell auf zwei Arten aufbereitet:
            </p>
            <ul>
              <li>
                <strong>Gewaschene (washed) Aufbereitung</strong>: Dabei werden
                die Kaffeekirschen nach der Ernte entpulpt, fermentiert und
                gewaschen, bevor sie getrocknet werden. Dies führt zu einem
                sauberen, hellen Geschmack mit ausgeprägten fruchtigen und
                floralen Noten. Besonders Yirgacheffe- und Sidamo-Kaffees werden
                oft gewaschen verarbeitet.
              </li>
              <li>
                <strong>Sonnentrockene (natural) Aufbereitung</strong>: Hier
                werden die ganzen Kaffeekirschen in der Sonne getrocknet,
                wodurch sich die Aromen aus dem Fruchtfleisch intensiver in die
                Bohnen übertragen. Das Ergebnis sind oft süßlichere,
                vollmundigere Kaffees mit Noten von Beeren, Trockenfrüchten und
                Schokolade – typisch für Kaffees aus Harrar.
              </li>
            </ul>

            <h4>Äthiopiens Rolle im heutigen Spezialitätenkaffee-Markt</h4>
            <p>
              Die Bedeutung Äthiopiens für den globalen Kaffeemarkt ist enorm.
              Das Land zählt nicht nur zu den größten Produzenten, sondern auch
              zu den Pionieren der Specialty-Coffee-Bewegung. Viele der
              weltbesten Kaffees stammen aus Äthiopien, und seine Bauern tragen
              mit traditionellen Anbaumethoden und nachhaltiger Bewirtschaftung
              zur Erhaltung der ursprünglichen Kaffeegenetik bei.
            </p>

            <p>
              Für Kaffeeliebhaber ist äthiopischer Kaffee eine Reise durch die
              Geschichte und die Aromen des Ursprungslandes des Kaffees. Egal,
              ob als Filterkaffee, in der French Press oder als milder Espresso
              – äthiopischer Kaffee bietet eine faszinierende Geschmackstiefe,
              die man probiert haben muss.
            </p>
          </div>
          <div
            className="text-right w-3/4 justify-self-center
                             desktop:w-2/3"
          >
            <Button text="Zurück" link="/blog" aria="Zurück zu Blog" formValid={true}/>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Post;
