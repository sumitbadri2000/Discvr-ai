import { useState } from "react";

const AskBox = ({ onAsk, loading }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    if (!query.trim()) return;
    onAsk(query);
  };

  return (
    <div className="bg-linear-to-r from-purple-800/30 to-blue-800/30 backdrop-blur-lg rounded-xl p-6 border border-purple-700/30 shadow-xl">
      <div className="flex gap-3">
        <div className="flex-1">
          <input
            className="w-full bg-slate-800/50 border border-purple-600/30 rounded-lg px-4 py-3 text-purple-100 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
            placeholder="Ask something… (e.g., budget laptop)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-linear-to-r from-cyan-500 via-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:via-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          disabled={loading || !query.trim()}>
          {loading ? (
            <span className="flex items-center space-x-2">
              <svg
                className="animate-spin h-4 w-4"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Thinking...</span>
            </span>
          ) : (
            <span className="flex items-center space-x-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>Ask AI</span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default AskBox;
