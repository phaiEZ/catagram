import { NextComponentType } from "next";
import Link from "next/link";
import { GoHomeFill, GoPersonFill, GoSearch } from "react-icons/go";
import { IoMdTrophy } from "react-icons/io";

export const Navbar = () => {
  return (
    <nav className="  bg-white h-screen w-1/6 pt-8 px-2 sticky top-0 z-50 shadow-md">
      <div className="flex flex-col">
        <Link href={"/"} className="flex items-center justify-center  mb-20">
          <div className="font-logotext text-5xl text-black ">Catagram</div>
        </Link>
        <div className="flex flex-col gap-1">
          <Link
            href={"/"}
            className="text-2xl flex items-center gap-2 rounded-md hover:bg-[#FEAAAA] px-4 py-2 mx-2 transition delay-50 ease-in-out">
            <GoHomeFill className="text-black " />
            <div className="text-xl font-kanit text-black ">Home</div>
          </Link>
          <Link
            href={"#"}
            className="text-2xl flex items-center gap-2 rounded-md hover:bg-[#FEAAAA] px-4 py-2 mx-2 transition delay-50 ease-in-out">
            <GoSearch className="text-black " />
            <div className="text-xl font-kanit text-black s">Search</div>
          </Link>
          <Link
            href={"#"}
            className="text-2xl flex items-center gap-2 rounded-md hover:bg-[#FEAAAA] px-4 py-2 mx-2 transition delay-50 ease-in-out">
            <IoMdTrophy className="text-black " />
            <div className="text-xl font-kanit text-black s">Hall of meow</div>
          </Link>
          <Link
            href={"/profile"}
            className="text-2xl flex items-center gap-2 rounded-md hover:bg-[#FEAAAA] px-4 py-2 mx-2 transition delay-50 ease-in-out">
            <GoPersonFill className="text-black " />
            <div className="text-xl font-kanit text-black ">Profile</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};
