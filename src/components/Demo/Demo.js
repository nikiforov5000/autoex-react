import "./Demo.css";

function Demo() {
  const youtubeParams = "autoplay=1&controls=0&mute=1";

  return (
    <section className="section section-demo">
      <div className="iframe-container">
        <iframe
          title="demo"
          src={`https://www.youtube.com/embed/SSO-eB9Up0U?${youtubeParams}`}
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
}

export default Demo;
