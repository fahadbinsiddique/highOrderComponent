import { useRef, useState } from "react";

const Counter = () => {
  const [show, setShow] = useState(true);
  const ref = useRef(null);
  return (
    <div>
      <button
        className="p-4 m-4 bg-amber-500 rounded-2xl border-b-blue-500 border-2"
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle With setState
      </button>
      <button
        className="p-4 m-4 bg-amber-500 rounded-2xl border-b-blue-500 border-2"
        onClick={() => {
          ref.current.remove();
        }}
      >
        Remove This Dom
      </button>
      {show && (
        <p
          className="p-4 m-4 bg-green-300 rounded-2xl  border-b-blue-500 border-2"
          ref={ref}
        >
          Hello World
        </p>
      )}
    </div>
  );
};

export default Counter;
