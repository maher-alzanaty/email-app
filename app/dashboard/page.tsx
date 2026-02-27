"use client";

import Image from "next/image";
import { useState } from "react";

// Sample Emails
const emails = [
  {
    sender: "Jeanne Nesty",
    subject: "Weekly update",
    preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    time: "3:13 PM",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    unread: true,
  },
  {
    sender: "John Lennon",
    subject: "UI project : Client Dashboard",
    preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    time: "3:13 PM",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    unread: true,
  },
  {
    sender: "Spotify",
    subject: "Daily mix available",
    preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    time: "3:13 PM",
    avatar: "/spotify.png",
    unread: true,
  },
  {
    sender: "Apple",
    subject: "Your Apple bill",
    preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    time: "3:13 PM",
    avatar: "/apple.png",
    unread: false,
  },
];

// Sidebar Item Component
function SidebarItem({ icon, name }: { icon: string; name: string }) {
  return (
    <div className="flex items-center gap-2 px-2 py-3 hover:bg-gray-100 rounded cursor-pointer">
      <Image src={icon} width={16} height={16} alt={name} />
      {name}
    </div>
  );
}

// Right Sidebar Hover Icon
function HoverIcon({ icon, bgHover }: { icon: string; bgHover: string }) {
  return (
    <div
      className={`w-8 h-8 relative bg-white rounded shadow cursor-pointer hover:${bgHover} transition`}
    >
      <Image
        src={icon}
        width={24}
        height={24}
        alt=""
        className="absolute left-[16.67%] top-[8.33%]"
      />
    </div>
  );
}

export default function Dashboard() {
  const [search, setSearch] = useState("");

  const filteredEmails = emails.filter(
    (email) =>
      email.sender.toLowerCase().includes(search.toLowerCase()) ||
      email.subject.toLowerCase().includes(search.toLowerCase()) ||
      email.preview.toLowerCase().includes(search.toLowerCase()),
  );

  const sidebarItems = [
    {
      name: "All Mail",
      icon: "/vector-allemail.png",
    },
    {
      name: "Inbox",
      icon: "/vector-inbox.png",
    },
    {
      name: "Spam",
      icon: "/vector-spam.png",
    },
    {
      name: "Sent",
      icon: "/vector-sent.png",
    },
    {
      name: "Archive",
      icon: "/vector-archive.png",
    },
    {
      name: "Pinned",
      icon: "/vector-pinned.png",
    },
    {
      name: "More",
      icon: "/more.png",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#F4F5F7] relative">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col p-4">
        <button className="bg-[#14004D] text-white px-4 py-2 rounded-md mb-6 hover:opacity-90 flex  justify-center items-center gap-1">
          <span className="mr-2">
            <Image
              src="/vector-message.png"
              width={16}
              height={16}
              alt="New Message"
            />
          </span>
          <span className="mr-2">New Message</span>
        </button>

        <nav className="flex flex-col gap-2 flex-1 text-gray-700  ">
          {sidebarItems.map((item, i) => (
            <SidebarItem key={i} {...item} />
          ))}
          <div className="w-full h-1 bg-gray-100 mt-2"></div>
          {/* Labels */}
          <div className="mt-6 flex items-center justify-between">
            <h4 className="text-sm font-semibold text-gray-500">Labels</h4>
            <Image
              src="https://img.icons8.com/ios-filled/50/000000/plus-math.png"
              width={16}
              height={16}
              alt="Add Label"
              className="cursor-pointer"
            />
          </div>

          {/* Sign Out */}
          <button className="mt-auto text-red-500 text-sm hover:underline flex items-center gap-2">
            <Image
              src="https://img.icons8.com/ios-filled/50/FF0000/logout-rounded-left.png"
              width={16}
              height={16}
              alt="Sign Out"
            />
            Sign Out
          </button>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col p-6 relative">
        {/* Settings + Profile Top Right */}
        <div className="absolute right-6 top-6 flex items-center gap-3">
          <Image
            src="https://img.icons8.com/ios-filled/50/606060/settings.png"
            width={24}
            height={24}
            alt="Settings"
            className="cursor-pointer hover:opacity-80"
          />
          <Image
            src="https://randomuser.me/api/portraits/men/75.jpg"
            width={32}
            height={32}
            alt="Profile"
            className="rounded-md cursor-pointer hover:opacity-80"
          />
        </div>

        {/* Search Bar */}
        <div className="flex items-center px-4 py-3 gap-3 h-12 bg-[#0D034A1A] rounded-md absolute left-10 right-32 top-6">
          {/* Search Icon */}
          <Image
            src="https://img.icons8.com/ios-filled/50/000000/search.png"
            width={16}
            height={16}
            alt="Search Icon"
            className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none ms-2"
          />
          <input
            type="text"
            placeholder="  Search emails..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14004D] placeholder-gray-500 text-gray-700"
          />
          <Image src="/srchl.png" width={16} height={16} alt="Search Icon" />
        </div>

        {/* Emails */}
        <div
          className="flex-1 bg-white rounded-lg shadow overflow-auto mt-24 "
          style={{ width: "calc(100% - 3em)" }}
        >
          <div className="flex justify-between items-center px-4 py-2 my-2 w-full h-6">
            {/* Left Actions */}
            <div className="flex items-center gap-3 w-60">
              <div className="w-6 h-6 rounded cursor-pointer flex items-center justify-center">
                {/* Left Icon */}
                <span className="text-white text-sm">{"<"}</span>
                <img src="/square.png" alt="Left Arrow" className="" />
              </div>
              <div className="w-6 h-6 rounded cursor-pointer flex items-center justify-center">
                {/* Refresh Icon */}
                <img src="/refresh.png" alt="Refresh" className="" />
              </div>
            </div>

            {/* Pages count */}
            <div className="flex items-center justify-center gap-3 w-32">
              <div className="w-6 h-6 bg-gray-400 rounded flex items-center justify-center cursor-pointer">
                {"<"}
              </div>
              <span className="text-gray-600 text-sm">50 of 90</span>
              <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center cursor-pointer">
                {">"}
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6 w-48 justify-end">
              <div className="w-6 h-6  rounded cursor-pointer flex items-center justify-center">
                {/* Some icon */}
                {/* <span className="text-white text-sm">...</span> */}
                <img src="/dashed.png" alt="More Options" className="" />
              </div>
              <div className="w-6 h-6  rounded cursor-pointer flex items-center justify-center">
                {/* <span className="text-white text-sm">⚙</span> */}
                <img src="/underray.png" alt="More Options" className="" />
              </div>
            </div>
          </div>

          {filteredEmails.map((email, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between px-4 py-3 border-b last:border-b-0 cursor-pointer ${
                email.unread ? "bg-gray-50" : ""
              } hover:bg-gray-100`}
            >
              <div className="flex items-center gap-3">
                {email.unread && (
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                )}
                <input type="checkbox" className="accent-[#14004D]" />
                {email.avatar ? (
                  <Image
                    src={email.avatar}
                    alt={email.sender}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
                    {email.sender[0]}
                  </div>
                )}
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-800">
                    {email.sender}
                  </span>
                  <span className="text-gray-600 text-sm">{email.subject}</span>
                  <span className="text-gray-400 text-sm">{email.preview}</span>
                </div>
              </div>
              <span className="text-gray-500 text-sm">{email.time}</span>
            </div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="absolute right-6 top-32 flex flex-col gap-4 w-8 h-56 items-start">
          <HoverIcon
            icon="https://img.icons8.com/ios-filled/50/1FC16B/calendar.png"
            bgHover="bg-[#e0f7f2]"
          />
          <div className="h-px w-8 bg-gray-300 hover:bg-gray-400 transition"></div>

          <HoverIcon icon="/notes.png" bgHover="bg-[#fff3cd]" />
          <div className="h-px w-8 bg-gray-300 hover:bg-gray-400 transition"></div>

          <HoverIcon icon="/task.png" bgHover="bg-[#cce0ff]" />
          <div className="h-px w-8 bg-gray-300 hover:bg-gray-400 transition"></div>

          <HoverIcon icon="/contact.png" bgHover="bg-[#d1d1d1]" />
        </div>
      </main>
    </div>
  );
}
