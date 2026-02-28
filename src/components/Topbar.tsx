"use client";
import Image from "next/image";

export default function Topbar() {
  return (
    <div className="h-16 bg-white flex items-center justify-between px-8 shadow-sm">

      {/* Search */}
      <div className="bg-gray-100 rounded-lg px-4 py-2 w-[400px] flex items-center gap-2">
        <Image
          src="https://img.icons8.com/material-outlined/24/606060/search.png"
          width={20}
          height={20}
          alt="search"
        />
        <input
          className="bg-transparent outline-none w-full text-sm"
          placeholder="Search"
        />
      </div>

      {/* Profile */}
      <Image
        src="https://i.pravatar.cc/40"
        width={40}
        height={40}
        alt="profile"
        className="rounded-full"
      />
    </div>
  );
}