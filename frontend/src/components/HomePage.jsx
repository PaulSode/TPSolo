import "./HomePage.css";

const HomePage = ({ setView }) => {
  return (
    <div className="container">
      <section className="hero">
        <h1 className="title">⚡ CYBERSTORE 2077</h1>
        <p className="subtitle">
          L'avenir du shopping est maintenant — implants, gadgets et augmentations.
        </p>
        <div className="actions">
          <button
            className="cta"
            onClick={() => {
              if (typeof setView === "function") setView("catalog");
            }}
          >
            Découvrir le catalogue
          </button>
          <a
            href="#"
            className="secondary"
            onClick={(e) => e.preventDefault()}
          >
            En savoir plus
          </a>
        </div>
      </section>

      <section className="features">
        {[
          { title: "Technologie de pointe", desc: "Composants certifiés et garanties.", icon: "🧠" },
          { title: "Livraison ultra-rapide", desc: "Réseau de drones 24/7.", icon: "⚡" },
          { title: "Support 24/7", desc: "Assistance post-installation.", icon: "🛠️" },
        ].map((f, i) => (
          <div key={i} className="featureCard">
            <div className="featureIcon">{f.icon}</div>
            <h3 className="featureTitle">{f.title}</h3>
            <p className="featureDesc">{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
