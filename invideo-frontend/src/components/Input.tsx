import React from "react";

const Input = () => {
  return (
    <div className=" w-[650px] py-4 px-5 bg-[#1A1C1E] rounded-2xl flex  gap-3 justify-center">
      <input type="text" className=" w-full bg-transparent outline-none" placeholder="Paste a YouTube link here..." />

      <button className=" bg-[#0D6FD0] py-4 rounded-md px-6">Start</button>
    </div>
  );
};

export default Input;
