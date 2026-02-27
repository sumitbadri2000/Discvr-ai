const ProductCard = ({ product }) => {
  return (
    <div className="bg-linear-to-br from-slate-800/50 to-purple-800/30 backdrop-blur-lg rounded-xl p-6 border border-purple-700/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
          {product.name}
        </h3>
        <div className="bg-linear-to-r from-cyan-500/20 to-purple-500/20 rounded-lg px-3 py-1">
          <span className="text-xs font-medium text-cyan-300 uppercase tracking-wide">
            {product.category}
          </span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-baseline">
          <span className="text-3xl font-bold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            ₹{product.price}
          </span>
          <span className="text-purple-300 ml-2 text-sm">per unit</span>
        </div>
      </div>

      <p className="text-purple-200 leading-relaxed mb-4">
        {product.description}
      </p>
    </div>
  );
};

export default ProductCard;
