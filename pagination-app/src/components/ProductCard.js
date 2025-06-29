export const ProductCard = ({ product }) => {
  return (
    <div key={product.id} className="products_card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product_img"
      />
      <span>{product.title}</span>
    </div>
  );
};