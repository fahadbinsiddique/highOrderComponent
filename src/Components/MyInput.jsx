import { forwardRef } from "react";

const MyInput = (props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className="bg-gray-400 m-10 border-2 p-5 border-sky-500"
    />
  );
};
const ForwardedMyInput = forwardRef(MyInput);

export default ForwardedMyInput;
