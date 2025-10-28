import { useState, useEffect } from "react";
import "./App.css";
import CatalogPage from "./components/CatalogPage";
import ProductPage from "./components/ProductPage";
import HomePage from "./components/HomePage";

const API_URL = "http://127.0.0.1:8000/api";

function App() {
  const [view, setView] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/categories/`)
      .then((res) => res.json())
      .then(setCategories)
      .catch((err) => console.error("Erreur catégories:", err));
  }, []);

  const handleSelectProduct = (productSlug) => {
    fetch(`${API_URL}/products/${productSlug}/`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedProduct(data);
        setView("product");
      })
      .catch((err) => console.error("Erreur produit:", err));
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo">CYBERSTORE</div>
        <nav className="nav">
          {["home", "catalog"].map((v) => (
            <button
              key={v}
              className={`navButton ${view === v ? "navButtonActive" : ""}`}
              onClick={() => setView(v)}
            >
              {v === "home" ? "Accueil" : "Catalogue"}
            </button>
          ))}
        </nav>
      </header>

      {view === "home" && <HomePage />}
      {view === "catalog" && (
        <CatalogPage
          API_URL={API_URL}
          onSelectProduct={handleSelectProduct}
          categories={categories}
        />
      )}
      {view === "product" && selectedProduct && (
        <ProductPage selectedProduct={selectedProduct} setView={setView} />
      )}

      <footer className="footer">
        <p>© 2077 Cyberstore Inc.</p>
      </footer>
    </div>
  );
}

export default App;