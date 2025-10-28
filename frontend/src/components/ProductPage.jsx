import "./ProductPage.css";

const ProductPage = ({ selectedProduct, setView }) => (
  <div className="content">
    <button className="backButton" onClick={() => setView("catalog")}>
      ← Retour au catalogue
    </button>

    <div className="productDetail">
      <div style={{ flex: 1 }}>
        <img
          src={selectedProduct.image || "https://via.placeholder.com/400"}
          alt={selectedProduct.name}
          className="image"
        />
      </div>
      <div style={{ flex: 2 }}>
        {selectedProduct.featured && <div className="badge">FEATURED</div>}
        <h1 className="name">{selectedProduct.name}</h1>
        <p className="category">{selectedProduct.category.name}</p>
        <div className="price">{selectedProduct.price} €</div>
        <p className="desc">{selectedProduct.description}</p>
        <p className="stock">
          Stock: {selectedProduct.stock} unités —{" "}
          {selectedProduct.in_stock ? (
            <span style={{ color: "#00ff9f" }}>✓ Disponible</span>
          ) : (
            <span style={{ color: "#ff0000" }}>✗ Rupture</span>
          )}
        </p>
      </div>
    </div>
  </div>
);

export default ProductPage;
