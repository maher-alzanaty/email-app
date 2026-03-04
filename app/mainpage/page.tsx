"use client";

import { useState } from "react";
import Image from "next/image";

// ---------- Import your existing components ----------
import DashboardEmail from"../dashboard/page";            // your dashboard page
import  Settings  from "../settings/page";              // your settings page
  const sidebarItems = [
    // { name: "All Mail", icon: "/vector-allemail.png" },
    { name: "Inbox", icon: "/vector-inbox.png" },
    { name: "Spam", icon: "/vector-spam.png" },
    { name: "Sent", icon: "/vector-sent.png" },
    { name: "Archive", icon: "/vector-archive.png" },
    { name: "Pinned", icon: "/vector-pinned.png" },
    { name: "More", icon: "/more.png" },
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


export default function MainPage() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
     <aside className="w-64 bg-white border-r border-gray-200 flex flex-col p-4">
          <button className="bg-[#14004D] text-white px-4 py-2 rounded-md mb-6 hover:opacity-90 flex justify-center items-center gap-1">
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
  
          <nav className="flex flex-col gap-2 flex-1 text-gray-700">
              <div className="flex justify-between items-center px-2 py-3 bg-[#0D034A]/10 border-l-2 border-[#0D034A] rounded-r-lg cursor-pointer">
                        <div className="flex items-start  gap-2">
                          <Image
                            src="/vector-allemail.png"
                            width={16}
                            height={16}
                            alt="inbox"
                          />
                          <span className="font-bold text-[#0D034A]">All Mail</span>
                        </div>
                        <span className="text-sm font-bold text-[#0D034A]">16</span>
                      </div>
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
                src="/vectorsignout.png"
                width={16}
                height={16}
                alt="Sign Out"
              />
              Sign Out
            </button>
          </nav>
        </aside>
  

      {/* Main Content */}
      <main className="flex-1 relative">
        {/* Top Right Settings Icon */}

        
  <div className="absolute right-6 top-6 z-[9999] pointer-events-auto">
  <Image
    src="https://img.icons8.com/ios-filled/50/606060/settings.png"
    width={24}
    height={24}
    alt="Settings"
    className="cursor-pointer"
    onClick={() => {
      console.log("clicked");
      setShowSettings(prev => !prev);
    }}
  />
          <Image
            src="https://randomuser.me/api/portraits/men/75.jpg"
            width={32}
            height={32}
            alt="Profile"
            className="rounded-md cursor-pointer hover:opacity-80"
          />
        </div>

        {/* Render content based on showSettings */}
        {showSettings ? <Settings /> : <DashboardEmail />}
      </main>
    </div>
  );
}