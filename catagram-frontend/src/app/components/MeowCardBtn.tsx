"use client";

import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { PiCatDuotone } from "react-icons/pi";

export const MeowCardBtn = () => {
  const [isImgOpen, setIsImgOpen] = useState(false);
  return (
    <div>
      {isImgOpen && (
        <div className="fixed flex justify-center items-center top-0 left-0 z-50 bg-white bg-opacity-70 w-screen h-full ">
          <div className="bg-white p-4  border-2 border-slate-100 ">
            <button
              onClick={() => {
                setIsImgOpen(false);
              }}>
              <IoMdClose className=" text-4xl *: ml-auto" />
            </button>
            <div className="bg-[#FFF6F4] flex flex-col gap-8 border-[#9D9D9D]  border-2 overflow-hidden rounded-xl p-4 w-[600px]">
              <div className="flex justify-between">
                <div className="font-logotext  text-[#C66176] text-[72px]   ">
                  Catagram
                </div>
                <div className="w-[124px] h-[124px] mt-8 bg-slate-600">qr</div>
              </div>
              <div className="flex gap-12">
                <img
                  className="h-[150px] w-[150px] object-cover"
                  src={
                    "https://media.discordapp.net/attachments/1111754976969109564/1130139273753022554/IMG_1577.jpg?ex=66a25cb7&is=66a10b37&hm=9ed0d75fd1910db95c779562fa8b3c53e06d12b644c2bb56c5db3c2672defc1f&=&format=webp&width=466&height=350"
                  }
                />
                <div className="flex flex-col  ">
                  <div className="flex mb-4">
                    <div className=" font-kanit text-md text-[#C66176]">
                      name :
                    </div>
                    <div className=" font-kanit text-4xl font-semibold text-[#C66176]">
                      MAKIMA
                    </div>
                  </div>

                  <div className=" font-kanit text-md text-[#C66176]">
                    Age:Four months old
                  </div>
                  <div className=" font-kanit text-md text-[#C66176]">
                    Gender:Female
                  </div>
                  <div className=" font-kanit text-md text-[#C66176]">
                    Kind:Dwarf Hamster
                  </div>
                  <div className=" font-kanit text-md text-[#C66176]">
                    Home:Incheon, South Korea
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <button
        className=" font-kanit border-slate text-sm border-2 px-4 py-2.5 rounded-md flex items-center gap-2 bg-white hover:shadow-md hover:bg-blue-100"
        onClick={() => {
          setIsImgOpen(true);
        }}>
        <PiCatDuotone className=" text-2xl text-blue-700" />
        <div className="select-none"> Meow Card</div>
      </button>
    </div>
  );
};
