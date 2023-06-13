import Link from "next/link";
import React from "react";

const result = [
  { time: "(00:10 - 10:30)", img: "/1.png" },
  { time: "(00:10 - 10:30)", img: "/2.png" },
  { time: "(00:10 - 10:30)", img: "/3.png" },
];

const page = () => {
  return (
    <main className=" py-[50px] px-[45px] h-screen">
      <p className="">Crystalrohr</p>
      <div className=" w-full h-full  flex justify-center">
        <Link
          className=" p-2.5 bg-[#81818163] flex  h-min gap-2.5 rounded-md"
          href={"/"}
        >
          <img src="/arrow-left.svg" alt="" className=" " />
          <p className=" text-sm">Go back</p>
        </Link>
        
      </div>
    </main>
  );
};

export default page;
