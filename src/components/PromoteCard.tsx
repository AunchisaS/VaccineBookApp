"use client";
import { VideoPlayer } from "./VideoPlayer";
import { useWindowListener } from "@/hooks/useWindowListener";
import { useState } from "react";

export function PromoteCard() {
  const [playing, setPlaying] = useState(true);

  useWindowListener("contextmenu", (e: Event) => {
    e.preventDefault();
  });

  return (
    <div className="w-[70%] bg-blue-100 p-4 rounded-lg shadow-md mx-[15%] my-10 flex">
      <VideoPlayer isPlaying={playing} vdoSrc="/video/getvaccine.mp4" />

      <div className="flex flex-col mx-10">
        <h2 className="text-2xl font-semibold mb-2">Get your vaccine today</h2>
        <button
          className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-2 rounded-md"
          onClick={() => setPlaying(!playing)}
        >
          {playing ? "Pause" : "Play"}{" "}
        </button>
      </div>
    </div>
  );
}
