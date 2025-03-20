import React from "react";
import { Link } from "react-router-dom";

// 404-Seite, die angezeigt wird, wenn eine Seite nicht gefunden wird

const NotFound = () => {
  return (
    <main>
      <section
        className="flex flex-col justify-center items-center h-[25vw] text-primary"
        aria-labelledby="404-title"
      >
        <h1 id="404-title">
          Ups! Dieser Coffee Brew ist leider nicht gelungen!
        </h1>
        <p>Die Kaffeeseite, die du suchst, existiert nicht.</p>
        <p>
          Von hier kannst du es wieder versuchen:
          <span className="text-red-800">
            <Link to="/">Home</Link>
          </span>
        </p>
      </section>
    </main>
  );
};

export default NotFound;
