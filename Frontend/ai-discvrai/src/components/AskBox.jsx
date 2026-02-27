import { useState } from "react";

const AskBox = ({ onAsk, loading }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    if (!query.trim()) return;
    onAsk(query);
  };

  return (
    <div className="flex gap-2 mb-6">
      <input
        className="border rounded-lg p-2 flex-1"
        placeholder="Ask something… (e.g., budget laptop)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-black text-white px-4 rounded-lg">
        {loading ? "Thinking..." : "Ask AI"}
      </button>
    </div>
  );
};

export default AskBox;
