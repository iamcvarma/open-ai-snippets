import React,{useState} from "react";

interface Props {
  prompt:string;
  setPrompt(arg0:string):void;
  maxChar:number;
  isLoading:boolean;
  handleSubmit(prompt:string):void;
}

const UserInput = ({prompt,setPrompt,isLoading,maxChar,handleSubmit}:Props) => {

  const inputIsValid = prompt.length<maxChar;
  const handleUserInput = (text:string)=>{
    if (text.length<=maxChar){
      setPrompt(text)
    }
  }

  return (
    <div>
      <p>
        Tell me what your brand is about and I will generate a cool snippet and
        keywords for you.
      </p>
      <input
        type="text"
        placeholder="like watch..."
        value={prompt}
        onChange={(e)=>handleUserInput(e.target.value)}
      />
      <p>{prompt.length}/{maxChar}</p>
      <button onClick={()=>handleSubmit(prompt)} disabled={!inputIsValid || isLoading}>Submit</button>
    </div>
  );
};

export default UserInput;
