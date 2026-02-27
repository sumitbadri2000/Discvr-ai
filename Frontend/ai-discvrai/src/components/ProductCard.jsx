const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-2xl p-4 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{product.name}</h3>

      <p className="text-sm text-gray-500 capitalize">{product.category}</p>

      <p className="font-bold mt-2">₹{product.price}</p>

      <p className="text-sm mt-2 text-gray-600">{product.description}</p>
    </div>
  );
};

export default ProductCard;
