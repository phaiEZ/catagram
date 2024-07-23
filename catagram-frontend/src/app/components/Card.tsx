import Link from "next/link";
import { IoMdHeartEmpty } from "react-icons/io";
import { TbMessageCircle2 } from "react-icons/tb";
import { HiOutlineShare } from "react-icons/hi";
export const Card = () => {
  return (
    <div className="flex flex-col shadow-lg  rounded-lg p-4 w-[800px] gap-4">
      <img src="https://v1.tailwindcss.com/img/card-top.jpg"></img>
      <div className="flex gap-1">
        <IoMdHeartEmpty className="text-4xl" />
        <TbMessageCircle2 className="text-4xl" />
        <HiOutlineShare className="text-4xl" />
      </div>
    </div>
  );
};
