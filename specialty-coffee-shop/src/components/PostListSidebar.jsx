import React from "react";

import styles from "./PostListSidebar.module.sass";
import { Link } from "react-router-dom";

const PostListSidebar = () => {
    return(
        <aside className={`${styles.sideBar} mr-10 mb-20 hidden row-start-2 row-end-3 col-start-2 col-end-3
                            desktop:block`} 
                            aria-labelledby="aside-title">
            <h2 id="aside-title">Artikelübersicht</h2>
            <ul>
                <li>
                    <Link to="/post/ethiopia" aria-label="Erfahre mehr über den Kaffee-Land Äthiopien">Äthiopien: Ein Streifzug durch die Wiege des Kaffees</Link>
                </li>
                <li>
                    <Link to="/espresso" aria-label="Erfahre mehr darüber, wie man den perfekten Espresso zubereitet">Der perfekte Espresso: Tipps und Tricks für zu Hause</Link>
                    </li>
                <li>
                <Link to="/origin" aria-label="Erfahre mehr über den Unterschied zwischen Single Origins und Blends">Single Origin vs. Blend: Die Unterschiede erklärt</Link>
                </li>
                <li>
                <Link to="/post/latte" aria-label="Erfahre mehr über die Kunst des Latte Art">Die Kunst der Latte Art</Link>
                </li>
                </ul>
            </aside>
    );
}

export default PostListSidebar;