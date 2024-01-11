import React from "react";
import Image from "next/image";

type Props = {};

export default function Loading({}: Props) {
  return (
    <div className="absolute left-0 top-0  w-screen h-screen z-50 bg-black/10">
      <div className="flex justify-center items-center h-screen ">
        <div className="loading"></div>
      </div>
    </div>
  );
}
