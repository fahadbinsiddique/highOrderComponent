import { forwardRef, useImperativeHandle, useRef } from "react";

const MyInput = (props, ref) => {
  const realInputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      realInputRef.current.focus();
    },
  }));

  //   useImperativeHandle(ref, () => {
  //     return {
  //       focus() {
  //         realInputRef.current.focus();
  //       },
  //     };
  //   });

  return (
    <input
      {...props}
      ref={realInputRef}
      className="bg-gray-400 m-10 border-2 p-5 border-sky-500"
    />
  );
};
const ForwardedMyInput = forwardRef(MyInput);

export default ForwardedMyInput;
