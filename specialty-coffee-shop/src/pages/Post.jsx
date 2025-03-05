import React from "react";

import styles from "./Post.module.sass";

import blogPost from "../assets/images/ethiopia_coffee_plantages.png";
import Button from "../components/Button";

// Single Blog Post-Seite
// enthält Titel, Autor, Veröffentlichungsdatum, Text und Bild
// (hartkodiert)

const Post = () => {

    return (
    <main>
        <section className={styles.postSection}>
            <article className={styles.postArticle}>
                <h1>Äthiopien: Wiege des Kaffees</h1>
                <time datetime="2021-09-15">15. September 2021</time>
                <h2>Ein Artikel von <address>Max Mustermann</address></h2>

                <figure className={styles.articlePicture}>
                    <img src={blogPost} alt="Eine Kaffee-Plantage in Äthiopien" />
                    <figcaption>Eine Kaffee-Plantage in Äthiopien</figcaption>
                </figure>
<div className={styles.postContent}>
<p>Äthiopien gilt als die Wiege des Kaffees – hier, in den hochgelegenen Regionen des Horns von Afrika, hat die Pflanze ihren Ursprung. Schon die Legende vom Hirten Kaldi, dessen Ziegen nach dem Verzehr der Kaffeekirschen voller Energie tanzten, erzählt von der tiefen kulturellen Verbindung Äthiopiens mit dem Kaffee. Doch Äthiopien ist nicht nur eine Ursprungsregion, sondern auch eine Schatzkammer aromatischer Vielfalt.</p>

<h4>Die Vielfalt äthiopischer Kaffeesorten</h4>
<p>Äthiopiens Kaffeeanbau ist einzigartig, denn hier wachsen die Pflanzen in einer natürlichen Umgebung, oft wild oder in Mischkulturen mit anderen Pflanzen. Anders als in vielen anderen Ländern, wo gezielt kultivierte Varietäten dominieren, gibt es in Äthiopien eine beeindruckende genetische Vielfalt an Kaffeepflanzen. Dies führt zu einem außergewöhnlich breiten Spektrum an Aromen – von blumig-leichten bis zu intensiven, fruchtigen Geschmacksnoten.</p>

<p>Die bekanntesten Anbaugebiete sind:</p>
<ul>
<li><strong>Yirgacheffe</strong>: Berühmt für florale Noten, eine ausgeprägte Zitrussäure und einen eleganten Körper. Ideal für Liebhaber von feinen, Tee-ähnlichen Kaffees.</li>
<li><strong>Sidamo</strong>: Mild und komplex, mit einer harmonischen Mischung aus Fruchtigkeit und Würze. Perfekt für alle, die eine balancierte Tasse mit sanfter Säure schätzen.</li>
<li><strong>Harrar</strong>: Bekannt für seinen kräftigen Körper und seine wilden, fast weinähnlichen Noten von Beeren und Gewürzen – ein Favorit für Fans intensiver Aromen.</li>
</ul>

<h4>Verarbeitung und ihre Auswirkungen auf den Geschmack</h4>
<p>Äthiopischer Kaffee wird traditionell auf zwei Arten aufbereitet:</p>
<ul>
<li><strong>Gewaschene (washed) Aufbereitung</strong>: Dabei werden die Kaffeekirschen nach der Ernte entpulpt, fermentiert und gewaschen, bevor sie getrocknet werden. Dies führt zu einem sauberen, hellen Geschmack mit ausgeprägten fruchtigen und floralen Noten. Besonders Yirgacheffe- und Sidamo-Kaffees werden oft gewaschen verarbeitet.</li>
<li><strong>Sonnentrockene (natural) Aufbereitung</strong>: Hier werden die ganzen Kaffeekirschen in der Sonne getrocknet, wodurch sich die Aromen aus dem Fruchtfleisch intensiver in die Bohnen übertragen. Das Ergebnis sind oft süßlichere, vollmundigere Kaffees mit Noten von Beeren, Trockenfrüchten und Schokolade – typisch für Kaffees aus Harrar.</li>
</ul>

<h4>Äthiopiens Rolle im heutigen Spezialitätenkaffee-Markt</h4>
<p>Die Bedeutung Äthiopiens für den globalen Kaffeemarkt ist enorm. Das Land zählt nicht nur zu den größten Produzenten, sondern auch zu den Pionieren der Specialty-Coffee-Bewegung. Viele der weltbesten Kaffees stammen aus Äthiopien, und seine Bauern tragen mit traditionellen Anbaumethoden und nachhaltiger Bewirtschaftung zur Erhaltung der ursprünglichen Kaffeegenetik bei.</p>

<p>Für Kaffeeliebhaber ist äthiopischer Kaffee eine Reise durch die Geschichte und die Aromen des Ursprungslandes des Kaffees. Egal, ob als Filterkaffee, in der French Press oder als milder Espresso – äthiopischer Kaffee bietet eine faszinierende Geschmackstiefe, die man probiert haben muss.</p>
             </div>
            <Button text="Zurück" link="/blog" aria="Zurück zu Blog"/>
            </article>
        </section>
    </main>
    );
    }

export default Post;