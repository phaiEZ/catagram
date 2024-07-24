import React from "react";
import Link from "next/link";
export const ProfileIcon: React.FC<{ img: string }> = ({ img }) => {
  return (
    <Link
      href="#"
      className="h-24 w-24 text-center flex flex-col justify-center">
      <img
        className="rounded-full w-full h-full object-cover "
        src={img}
        alt="Profile Icon"
      />
    </Link>
  );
};
