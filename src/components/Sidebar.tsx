"use client";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="w-[240px] bg-white p-6 flex flex-col justify-between shadow-sm">

      <div className="flex flex-col gap-6">

        <div className="bg-[#0D034A] text-white px-4 py-3 rounded-lg flex items-center gap-2 cursor-pointer">
          <Image
            src="https://img.icons8.com/ios-filled/24/ffffff/plus-math.png"
            width={20}
            height={20}
            alt="compose"
          />
          <span>New Message</span>
        </div>

        <div className="text-[#0D034A] font-bold cursor-pointer">
          Inbox
        </div>

        <div className="text-gray-600 cursor-pointer">Starred</div>
        <div className="text-gray-600 cursor-pointer">Spam</div>
        <div className="text-gray-600 cursor-pointer">Sent</div>
        <div className="text-gray-600 cursor-pointer">Drafts</div>
      </div>

      <div className="text-red-500 cursor-pointer">Sign Out</div>
    </div>
  );
}