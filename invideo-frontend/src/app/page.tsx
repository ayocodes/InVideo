import Input from "@/components/Input";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" py-[50px] px-[45px] h-screen">
      <div className=" fixed inset-0 bg-[rgba(0,0,0,0.5)] grid place-items-center overscroll-none z-40">
        <div className=" mt-[-200px] flex flex-col items-center  gap-10">
          <p className=" font-semibold text-2xl font-SC">Auto caption YouTube videos</p>
          <Input />
        </div>
      </div>
      <p className=''>Crystalrohr</p>
      <div className=" w-full h-full flex justify-center items-end pb-[60px]">
        <img src="/qr.svg" alt=""  />
      </div>
    </main>
  );
}
