import React from "react";

import { Link } from "react-router-dom";

// Sidebar-Komponente mit einer Liste von Links zu den Blog-Artikeln

const PostListSidebar = () => {
    return(
        <aside role="menubar" className="hidden text-primary bg-secondary max-w-[20vw] justify-self-end p-5 mr-10 mb-20 row-start-2 row-end-3 col-start-2 col-end-3
                            desktop:block" 
                            aria-labelledby="aside-title">
            <h2 className="text-2xl text-center max-w-2/3 mb-5
                            desktop-xl:text-3xl" id="aside-title">Artikelübersicht</h2>
            <ul className="list-none">
                <li className="mb-5 text-primary font-bold text-lg no-underline hover:underline">
                    <Link to="/post/ethiopia" aria-label="Erfahre mehr über den Kaffee-Land Äthiopien">Äthiopien: Ein Streifzug durch die Wiege des Kaffees</Link>
                </li>
                <li className="mb-5 text-primary font-bold text-lg no-underline hover:underline">
                    <Link to="/espresso" aria-label="Erfahre mehr darüber, wie man den perfekten Espresso zubereitet">Der perfekte Espresso: Tipps und Tricks für zu Hause</Link>
                    </li>
                <li className="mb-5 text-primary font-bold text-lg no-underline hover:underline">
                <Link to="/origin" aria-label="Erfahre mehr über den Unterschied zwischen Single Origins und Blends">Single Origin vs. Blend: Die Unterschiede erklärt</Link>
                </li>
                <li className="mb-5 text-primary font-bold text-lg no-underline hover:underline">
                <Link to="/post/latte" aria-label="Erfahre mehr über die Kunst des Latte Art">Die Kunst der Latte Art</Link>
                </li>
                </ul>
            </aside>
    );
}

export default PostListSidebar;