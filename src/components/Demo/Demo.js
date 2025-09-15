import React, { useLayoutEffect } from "react";
import "./Demo.css";

function Demo() {
  return (
    <section className="section section-demo">
      <div className="iframe-container">
        <iframe
          src="https://www.youtube.com/embed/SSO-eB9Up0U"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
}

export default Demo;
