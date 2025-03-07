import React from "react";

import styles from "./About.module.sass";

import aboutUs from "../assets/images/about.png";

// About-Seite mit Bild und Präsentationstext

const About = () => {
    return (
        <main className={styles.container}>
            <section aria-labelledby="title">
            <h1 class="text-5xl" id="title">Über uns</h1>
                <article>
                    <figure className={styles.picture}>
                        <img src={aboutUs} alt="Die Inhaber in der Rösterei" />
                        <figcaption>Die Inhaber in der Rösterei</figcaption>
                    </figure>
                    <div className={styles.textContent}>
                    <h2 className="text-2xl">Specialty Coffee: Guter Geschmack als Leidenschaft</h2>
                    <p>Willkommen bei unserer Rösterei, wo Kaffee mehr ist als nur ein Getränk – er ist eine Leidenschaft, ein Handwerk und eine Reise um die Welt in jeder Tasse. Wir glauben daran, dass herausragender Kaffee mit Sorgfalt, Wissen und Hingabe beginnt. Deshalb setzen wir auf nachhaltige Anbaumethoden, enge Beziehungen zu unseren Kaffeebauern und eine sorgfältige Handröstung, um das Beste aus jeder Bohne herauszuholen.
Unsere Rösterei ist ein familiengeführtes Unternehmen, in dem Tradition und Innovation Hand in Hand gehen. Seit Generationen widmen wir uns der Kunst des Kaffeeröstens und freuen uns, unser Wissen und unsere Leidenschaft mit euch zu teilen.
Unsere Reise beginnt in den besten Anbaugebieten der Welt, von den fruchtbaren Vulkanböden Mittelamerikas bis zu den hochgelegenen Plantagen Afrikas. Wir wählen unsere Bohnen mit Bedacht aus, um ein außergewöhnliches Geschmackserlebnis zu garantieren. Jede Röstung ist ein Balanceakt zwischen Tradition und Innovation, mit dem Ziel, die natürlichen Aromen des Kaffees perfekt zur Geltung zu bringen. Doch guter Kaffee endet nicht bei der Bohne. Wir sind davon überzeugt, dass die Zubereitung genauso entscheidend ist. Ob als Espresso, Pour-Over oder klassischer Filterkaffee – wir möchten, dass jede Tasse zu einem kleinen Genussmoment wird.
In unserer Rösterei kannst du unseren Kaffee direkt vor Ort kaufen und dich von der Qualität unserer Bohnen selbst überzeugen. Zudem haben wir eine kleine Specialty Bar eingerichtet, in der du unsere Kaffeesorten probieren kannst, bevor du dich für deinen Favoriten entscheidest. So kannst du den perfekten Kaffee für deinen Geschmack entdecken und ein Stück unserer Leidenschaft mit nach Hause nehmen.
Unsere Leidenschaft für Kaffee teilen wir nicht nur in unserer Rösterei, sondern auch mit unserer Community. In unseren Workshops und Verkostungen bringen wir Menschen zusammen, um mehr über Kaffee zu lernen und neue Geschmackswelten zu entdecken. Denn für uns bedeutet Specialty Coffee mehr als nur Qualität – er steht für Transparenz, Nachhaltigkeit und die Liebe zum Detail.
Tauche ein in die Welt des Kaffees und genieße mit uns jeden Schluck. Willkommen in unserer Rösterei!
</p>
</div>
                </article>
            </section>
        </main>
    )
    }

export default About;