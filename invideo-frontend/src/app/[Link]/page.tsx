"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const result = [
  { time: "(00:10 - 10:30)", img: "/1.png" },
  { time: "(00:10 - 10:30)", img: "/2.png" },
  { time: "(00:10 - 10:30)", img: "/3.png" },
];

const page = () => {
  const [time, setTime] = useState<{
    time: string;
    img: string;
  }>();
  return (
    <main className=" py-[40px] px-[45px]">
      <p>Crystalrohr</p>
      <div className=" w-full h-full flex items-center flex-col px-[100px]">
        <Link
          className=" p-2.5 bg-[#242729] flex  h-min gap-2.5 rounded-md"
          href={"/"}
        >
          <img src="/arrow-left.svg" alt="" className=" " />
          <p className=" text-sm whitespace-nowrap">Go back</p>
        </Link>

        {time ? (
          <div className=" w-full">
            <section className=" relative flex items-center justify-center w-full h-[550px] overflow-hidden mt-7">
              <Image
                style={{
                  objectFit: "cover",
                  zIndex: 0,
                }}
                fill
                priority
                src={time.img}
                alt={""}
              />
            </section>
            <p className=" mt-4 text-sm">Time stamp {time.time}</p>
          </div>
        ) : (
          <>
            <div className=" grid grid-cols-3 w-full gap-[60px] mt-[70px]">
              {result.map((item, i) => (
                <div key={i} className=" flex flex-col gap-5">
                  <img src={item.img} alt="" className=" h-[250px]" />
                  <p
                    className=" mt-4 text-sm cursor-pointer"
                    onClick={() => setTime(item)}
                  >
                    Time stamp {item.time}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-[#242729] w-full p-4 rounded-2xl mt-[70px]">
              <input
                type="text"
                className=" bg-[#171717] outline-none w-full p-2.5 rounded-2xl text-sm"
                placeholder="Enter your question.."
              />
              <p className=" text-sm leading-7 mt-6 pb-[30px]">
                These titles provide a general idea of the content and purpose
                of each worksheet, allowing you to organize and manage different
                aspects of your data effectively. Feel free to customize them
                based on your specific needs and use cases.
              </p>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default page;
