import { useEffect, useState } from "react";
import API from "./api";
import ProductCard from "./components/ProductCard";
import AskBox from "./components/AskBox";

function App() {
  const [products, setProducts] = useState([]);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data);
    } catch {
      setError("Failed to load products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAsk = async (query) => {
    try {
      setLoading(true);
      setError("");
      setSummary("");

      const res = await API.post("/ask", { query });

      setProducts(res.data.products);
      setSummary(res.data.summary);
    } catch {
      setError("AI request failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <h1 className="text-5xl font-bold mb-8 text-center bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
        AI Product Discovery
      </h1>

      <div className="max-w-4xl mx-auto mb-8">
        <AskBox onAsk={handleAsk} loading={loading} />
      </div>

      {error && (
        <div className="max-w-4xl mx-auto mb-6">
          <div className="bg-red-900/90 border border-red-700 text-red-200 p-4 rounded-lg shadow-lg shadow-red-900/20">
            {error}
          </div>
        </div>
      )}

      {summary && (
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-linear-to-r from-purple-800/50 to-blue-800/50 border border-purple-700/30 text-purple-100 p-6 rounded-xl shadow-xl backdrop-blur-sm">
            🤖 <span className="font-medium">{summary}</span>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
