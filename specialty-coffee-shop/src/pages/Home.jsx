import React from "react";

import Card from "../components/Card";

const Home = ({viewport}) => {
    return (
    <main>
        <section>
            <figure>
                <img src="https://imageplaceholder.net/382" alt="Alessio Nocita, Gründer von Specialty Coffee Duisburg" />
                <figcaption>Alessio Nocita, Gründer von Specialty Coffee Duisburg</figcaption>
            </figure>
            <article>
            <h1>Hero-Titel</h1>
            <p>Hero-Text</p>
            </article>
        </section>
        <section>
            <Card src="https://imageplaceholder.net/240" 
                    alt="Platzhalter Card 1" 
                    title="Platzhalter Card 1">
                        <p>Card 1 Text</p>
                    </Card>
                    <Card src="https://imageplaceholder.net/240" 
                    alt="Platzhalter Card 2" 
                    title="Platzhalter Card 2">
                        <p>Card 2 Text</p>
                    </Card>
                    <Card src="https://imageplaceholder.net/240"
                    alt="Platzhalter Card 3"
                    title="Platzhalter Card 3">
                        <p>Card 3 Text</p>
                    </Card>
                    <Card src="https://imageplaceholder.net/240"
                    alt="Platzhalter Card 4"
                    title="Platzhalter Card 4">
                        <p>Card 4 Text</p>
                    </Card>
        </section>
        <section>
        <figure>
                <img src="https://imageplaceholder.net/382" alt="Unser Kaffee, von uns mit Leidenschaft und Können geröstet" />
                <figcaption>Unser Kaffee, von uns mit Leidenschaft und Können geröstet</figcaption>
            </figure>
            <article>
            <h1>Unser Kaffee</h1>
            <p>Kaffeetext</p>
            </article>
        </section>
        <section>
            <article>
            <h1>Das neue Blog-Post</h1>
                <figure>
                    <img src="https://imageplaceholder.net/382" alt="Das neue Blog-Post" />
                    <figcaption>Das neue Blog-Post</figcaption>
                </figure>
                <p>Das neue Blog-Post Text</p>
            </article>
        </section>
    </main>
    );
    }

export default Home;