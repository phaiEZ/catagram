"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

interface ImageProps {
  img: string;
  description: string;
}

export const Image: React.FC<ImageProps> = ({ img, description }) => {
  const [isImgOpen, setIsImgOpen] = useState(false);
  return (
    <>
      {isImgOpen && (
        <div className="fixed flex justify-center items-center top-0 left-0 z-50 bg-white bg-opacity-70 w-screen h-full ">
          <div className="bg-white p-4 pb-4 border-2 border-slate-100 ">
            <IoMdClose
              onClick={() => {
                setIsImgOpen(false);
              }}
              className=" text-4xl *: ml-auto"
            />
            <img
              className="h-[700px] w-[600px] object-cover"
              src={img}
              alt={description}
            />
            <p className="mt-4 text-center text-gray-700 text-2xl font-kanit">
              {description}
            </p>
          </div>
        </div>
      )}

      <div
        className="bg-white p-4 pb-4 border-2 border-slate-100 hover:shadow-2xl"
        onClick={() => {
          setIsImgOpen(true);
        }}>
        <img
          className="h-[300px] w-[360px] object-cover"
          src={img}
          alt={description}
        />
        <p className="mt-4 text-center text-gray-700 font-kanit">
          {description}
        </p>
      </div>
    </>
  );
};
