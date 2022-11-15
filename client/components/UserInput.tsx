import React, { useState } from "react";

interface Props {
  prompt: string;
  setPrompt(arg0: string): void;
  maxChar: number;
  isLoading: boolean;
  handleSubmit(prompt: string): void;
}

const UserInput = ({
  prompt,
  setPrompt,
  isLoading,
  maxChar,
  handleSubmit,
}: Props) => {
  const inputIsValid = prompt.length < maxChar;
  const handleUserInput = (text: string) => {
    if (text.length <= maxChar) {
      setPrompt(text);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-semi-bold text-white text-lg m-4">
        Describe your product and I will create a creative ad snippet along with
        keywords
      </p>
      <form 
      className="flex flex-col items-center"
      >
        <div className="flex flex-col align-baseline items-end">
          <input
            className="w-[35vw] h-10 p-2 text-white border-[1px] rounded-lg border-white focus:border-[2px] bg-transparent m-2 focus:outline-none"
            type="text"
            placeholder="or just the product name..."
            value={prompt}
            onChange={(e) => handleUserInput(e.target.value)}
          />
          <p className="text-white">
            {prompt.length}/{maxChar}
          </p>
        </div>
        <button
          type="sumbit"
          className="text-white text-semi-bold border-[1px] px-4 py-2 rounded-xl hover:bg-white/30 transition-colors duration-150 disabled:bg-white/30"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(prompt);
          }}
          disabled={!inputIsValid || isLoading}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserInput;
