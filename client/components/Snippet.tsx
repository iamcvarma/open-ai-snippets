import React, { useState } from "react";
import Results from "./Results";
import UserInput from "./UserInput";

function Snippet() {
  const [prompt, setPrompt] = useState("");
  const [snippet, setSnippet] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [results, setResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const MAX_CHAR = 32;
  const handleSubmit = (prompt: string) => {
    if (!prompt.length) return;
    setIsLoading(true);
    fetch(
      `https://visqe28jta.execute-api.ap-south-1.amazonaws.com/prod/generate_snippet_and_keywords?prompt=${prompt}`
    )
      .then((res) => res.json())
      .then((res) => {
        setKeywords(res.keywords);
        setSnippet(res.snippet);
        setResults(true);
      })
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false));
  };
  const handleBack = () => {
    setPrompt("");
    setResults(false);
  };
  // bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-pink-700 via-orange-300 to-fuchsia-300
  return (
    <div className="w-[100%]">
      <h1 className="font-extrabold p-2 text-transparent text-center text-4xl md:text-8xl bg-clip-text bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-400 via-zinc-100 to-green-600 ">
        Copy.ai
      </h1>
      {!results ? (
        <UserInput
          handleSubmit={handleSubmit}
          prompt={prompt}
          setPrompt={setPrompt}
          maxChar={MAX_CHAR}
          isLoading={isLoading}
        />
      ) : (
        <Results
          snippet={snippet}
          keywords={keywords}
          handleBack={handleBack}
          prompt={prompt}
        />
      )}
    </div>
  );
}

export default Snippet;
