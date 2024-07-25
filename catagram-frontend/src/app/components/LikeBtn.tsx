"use client";

import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

export const LikeBtn = () => {
  const [isLike, setIsLike] = useState(false);
  return (
    <div>
      <div className="flex items-center gap-4">
        <div
          className=""
          onClick={() => {
            setIsLike(!isLike);
          }}>
          {isLike && (
            <FaHeart className="text-5xl text-[#B18C82] hover:text-[#614740]" />
          )}
          {!isLike && (
            <FaRegHeart className="text-5xl text-[#B18C82] hover:text-[#614740]" />
          )}
        </div>
        <div className=" font-kanit text-2xl font-bold text-[#B18C82]">
          {1000}
        </div>
      </div>
    </div>
  );
};
