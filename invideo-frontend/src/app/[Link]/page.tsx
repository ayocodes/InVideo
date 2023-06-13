import Link from "next/link";
import React from "react";

const result = [
  { time: "(00:10 - 10:30)", img: "/1.png" },
  { time: "(00:10 - 10:30)", img: "/2.png" },
  { time: "(00:10 - 10:30)", img: "/3.png" },
];

const page = () => {
  return (
    <main className=" py-[50px] px-[45px]">
      <p className="">Crystalrohr</p>
      <div className=" w-full h-full flex items-center flex-col gap-[70px] px-[100px]">
        <Link
          className=" p-2.5 bg-[#242729] flex  h-min gap-2.5 rounded-md"
          href={"/"}
        >
          <img src="/arrow-left.svg" alt="" className=" " />
          <p className=" text-sm whitespace-nowrap">Go back</p>
        </Link>
        <div className=" grid grid-cols-3 w-full gap-[60px]">
          {result.map((item, i) => (
            <div key={i} className=" flex flex-col gap-5">
              <img src={item.img} alt="" className=" h-[250px]" />
              <p>Time stamp {item.time}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#242729] w-full p-4 rounded-2xl">
          <input
            type="text"
            className=" bg-[#171717] outline-none w-full p-2.5 rounded-2xl text-sm"
            placeholder="Enter your question.."
          />
          <p className=" text-sm leading-7 mt-6 pb-[30px]">
            These titles provide a general idea of the content and purpose of
            each worksheet, allowing you to organize and manage different
            aspects of your data effectively. Feel free to customize them based
            on your specific needs and use cases.
          </p>
        </div>
      </div>
    </main>
  );
};

export default page;
