import { useCart } from '../context/CartContext';
import { getProductImage } from '../data/products';

export default function ProductCard({ product, accent }) {
  const { addItem } = useCart();

  return (
    <div className={`product-card accent-${accent}`}>
      <div className="thumb">
        <img src={getProductImage(product)} alt={product.name} loading="lazy" />
      </div>
      <div className="info">
        <h4>{product.name}</h4>
        <p className="blurb">{product.blurb}</p>
        <div className="row">
          <span className="price">${(product.price / 100).toFixed(2)}</span>
          <button className="add-btn" onClick={() => addItem(product)} aria-label={`Add ${product.name} to cart`}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
