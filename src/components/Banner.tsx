"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Banner() {
  const covers = [
    "/img/bg.png",
    "/img/banner01.jpg",
    "/img/banner02.jpg",
    "/img/banner03.jpg",
  ];
  const [index, setIndex] = useState(0);
  const router = useRouter();

  return (
    <div
      className="block p-5 select-none m-0 w-screen h-[80vh] relative"
      onClick={() => {
        setIndex((index + 1) % 4);
      }}
    >
      <Image
        src={covers[index % 4]}
        alt="cover"
        fill={true}
        priority
        objectFit="cover"
      />
      <div className="text-white relative top-[60px] z-20 text-center">
        <h1 className="text-4xl font-semibold mb-3">Time To Vaccinate</h1>
        <h3 className="text-lg">Quick and Painless Protection</h3>
      </div>
      <button
        className="bg-white text-blue-600 border boarder-indigo-600 font-semibold  shadow-l
            p-2 m-2 rounded z-20 absolute bottom-0 right-0
            hover:bg-blue-600 hover:text-white hover:border-transparent"
        onClick={(e) => {
          e.stopPropagation();
          router.push("/hospital");
        }}
      >
        View All Hospitals
      </button>
    </div>
  );
}
