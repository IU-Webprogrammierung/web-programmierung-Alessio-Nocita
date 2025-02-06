import React from "react";
import { Link } from "react-router-dom";

const PostListSidebar = () => {
    return(
        <aside aria-labelledby="aside-title">
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