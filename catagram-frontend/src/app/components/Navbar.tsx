import { NextComponentType } from "next";
import Link from "next/link";
import { GoHomeFill, GoPersonFill, GoSearch } from "react-icons/go";

export const Navbar = () => {
  return (
    <nav className="bg-[#FFDED5] text-white h-screen w-1/6 pt-8 px-2 sticky top-0 z-50">
      <div className="flex flex-col">
        <Link href={"/"} className="flex items-center justify-center  mb-20">
          <div className="font-logotext text-5xl ">Catagram</div>
        </Link>
        <div className="flex flex-col gap-1">
          <Link
            href={"/"}
            className="text-2xl flex items-center gap-2 rounded-md hover:bg-[#FEAAAA] px-4 py-2 mx-2 transition delay-50 ease-in-out">
            <GoHomeFill />
            <div className="text-xl font-kanit">Home</div>
          </Link>
          <Link
            href={"#"}
            className="text-2xl flex items-center gap-2 rounded-md hover:bg-[#FEAAAA] px-4 py-2 mx-2 transition delay-50 ease-in-out">
            <GoSearch />
            <div className="text-xl font-kanit">Search</div>
          </Link>
          <Link
            href={"/profile"}
            className="text-2xl flex items-center gap-2 rounded-md hover:bg-[#FEAAAA] px-4 py-2 mx-2 transition delay-50 ease-in-out">
            <GoPersonFill />
            <div className="text-xl font-kanit">Profile</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};
