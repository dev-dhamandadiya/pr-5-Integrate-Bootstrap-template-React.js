const ProductCard = ({ image }) => {
  return (
    <div className="product-item">
      <span className="badge bg-success position-absolute m-3">-15%</span>

      <figure>
        <img src={image} className="tab-image" alt="" />
      </figure>

      <h3>Sunstar Fresh Melon Juice</h3>

      <span className="qty">1 UNIT</span>
      <span className="rating">⭐ 4.5</span>

      <span className="price">$18.00</span>

      <div className="d-flex align-items-center justify-content-between">
        <div className="input-group product-qty">
          <button className="btn btn-light">-</button>
          <span className="px-3">1</span>
          <button className="btn btn-light">+</button>
        </div>

        <a href="#" className="nav-link">
          Add to Cart
        </a>
      </div>
    </div>
  );
};

export default ProductCard;