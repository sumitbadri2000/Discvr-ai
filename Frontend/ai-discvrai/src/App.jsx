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
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">AI Product Discovery</h1>

      <AskBox onAsk={handleAsk} loading={loading} />

      {error && (
        <div className="bg-red-100 text-red-600 p-3 rounded mb-4">{error}</div>
      )}

      {summary && (
        <div className="bg-gray-100 p-4 rounded mb-6">🤖 {summary}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default App;
