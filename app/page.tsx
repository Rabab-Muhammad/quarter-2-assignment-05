import Header from "@/components/Header/Header";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-[80%]">
        <div className="w-1/2 flex flex-col justify-center items-start m-24 pt-20 ">
          <h1 className="text-[40px] font-bold font-serif text-[#000000] w-[496px]  tracking-wide ">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="pt-5">
            <Image
              src={"/images/para.svg"}
              alt="paragraph"
              height={147}
              width={902}
            />
          </p>
          <button className="bg-[#A29875] p-[10px] rounded-[10px] w-[288px] h-[58px] text-2xl text-white font-serif  mt-8 ">
            Explore Now
          </button>
        </div>
        <div className="w-1/2 flex justify-center pt-5">
          <Image
            src={"/images/figma.svg"}
            alt="main-image"
            height={647}
            width={462}
          />
        </div>
      </div>
    </div>
  );
}
