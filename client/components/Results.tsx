import React from "react";
interface Props {
  snippet: string;
  keywords: string[];
  prompt: string;
  handleBack(): void;
}
const Results = ({ snippet, keywords, prompt, handleBack }: Props) => {
  return (
    <div>
      <h2>Results for {prompt}</h2>
      <h3>Snippet:</h3>
      <p>{snippet}</p>
      <h3>Keywords:</h3>
      {keywords.map((word) => (
        <div>{word}</div>
      ))}
      <button onClick={() => handleBack()}>back</button>
    </div>
  );
};

export default Results;
