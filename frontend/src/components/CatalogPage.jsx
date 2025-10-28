import { useState, useEffect } from "react";
import Loader from "./Loader";
import "./CatalogPage.css";

const CatalogPage = ({ API_URL, onSelectProduct, categories }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  const fetchProducts = () => {
    setLoading(true);
    let url = `${API_URL}/products/?search=${search}`;
    if (selectedCategory) url += `&category=${selectedCategory}`;
    if (priceRange.min) url += `&min_price=${priceRange.min}`;
    if (priceRange.max) url += `&max_price=${priceRange.max}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data.results || data))
      .catch((err) => console.error("Erreur produits:", err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="catalog">
      <div className="filters">
        <input
          placeholder="🔍 Rechercher un produit..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="select"
        >
          <option value="">Toutes catégories</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <div>
          <input
            type="number"
            placeholder="Prix min"
            value={priceRange.min}
            onChange={(e) =>
              setPriceRange({ ...priceRange, min: e.target.value })
            }
            className="priceInput"
          />
          <input
            type="number"
            placeholder="Prix max"
            value={priceRange.max}
            onChange={(e) =>
              setPriceRange({ ...priceRange, max: e.target.value })
            }
            className="priceInput"
          />
        </div>
        <button onClick={fetchProducts} className="ctaButton">
          Filtrer
        </button>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="grid">
          {products.map((p) => (
            <div
              key={p.id}
              className="card"
              onClick={() => onSelectProduct(p.slug)}
            >
              <img
                src={p.image || "https://via.placeholder.com/200"}
                alt={p.name}
                className="image"
              />
              {p.featured && <div className="badge">FEATURED</div>}
              <h3 className="title">{p.name}</h3>
              <p className="price">{p.price} €</p>
              <p className="category">{p.category_name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CatalogPage;
