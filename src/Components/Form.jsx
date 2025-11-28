import { useRef } from "react";
import MyInput from "./MyInput";

export const Form = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <MyInput type="text" placeholder="Enter" ref={inputRef} />
      <br />

      <button
        onClick={handleClick}
        className="bg-blue-400 m-10 border-2 rounded-2xl p-5 border-gray-500"
      >
        Focus The Input
      </button>
    </>
  );
};
