import React, { useState } from "react";
import Results from "./Results";
import UserInput from "./UserInput";

function Snippet() {
  const [prompt, setPrompt] = useState("");
  const [snippet, setSnippet] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [results, setResults] = useState(false);
  const [isLoading,setIsLoading] = useState(false)
  const MAX_CHAR = 32;
  const handleSubmit = (prompt: string) => {
    setIsLoading(true)
    fetch(
      `https://visqe28jta.execute-api.ap-south-1.amazonaws.com/prod/generate_snippet_and_keywords?prompt=${prompt}`
    )
      .then((res) => res.json())
      .then((res) => {
        setKeywords(res.keywords);
        setSnippet(res.snippet);
        setResults(true);
      })
      .catch(err=>alert(err))
      .finally(()=>setIsLoading(false))
  };
  const handleBack = () => {
    setPrompt("");
    setResults(false);
  };
  return (
    <div>
      <h1>Snippet-AI</h1>
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
