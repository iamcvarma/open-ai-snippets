import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
interface Props {
  snippet: string;
  keywords: string[];
  prompt: string;
  handleBack(): void;
}
const Results = ({ snippet, keywords, prompt, handleBack }: Props) => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="bg-white/20 rounded-xl p-4 text-white relative">
        <h3 className="text-lg">
          Snippet for <span className="text-slate-700">{prompt}</span>:
        </h3>
        <CopyToClipboard onCopy={() => setCopied(true)} text={snippet}>
          <button
            disabled={copied}
            className={`${
              copied ? "bg-white/20" : ""
            } absolute top-1 right-3  hover:bg-white/20 rounded-xl p-1 transition duration-100  `}
          >
            {copied ? "copied!" : "copy"}
          </button>
        </CopyToClipboard>
        <p className="m-2">{snippet}</p>
      </div>
      <div className="bg-white/20 rounded-xl p-4 text-white relative w-full">
        <h3>Keywords:</h3>
        <div className="flex flex-wrap gap-3 ">
          {keywords.map((word, i) => (
            <div
              key={i}
              className="bg-white/10 px-2 py-1 rounded-full hover:bg-white/30 transition-all duration-150 cursor-pointer"
            >
              #{word}
            </div>
          ))}
        </div>
      </div>
      <button
        className="text-white  border-[1px] px-4 py-2 rounded-xl hover:bg-white/30 transition-colors duration-150 "
        onClick={() => handleBack()}
      >
        back
      </button>
    </div>
  );
};

export default Results;
