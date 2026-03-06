"use client";

import Image from "next/image";
import { useState } from "react";
import RightPanel from "@/components/RightPanel";
import { usePathname, useRouter } from "next/navigation";
import ComposeModal from "@/components/ComposeModal";


// Sample Emails
const initialEmails = [
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
function HoverIcon({ 
  icon, 
  bgHover, 
  onClick 
}: { 
  icon: string; 
  bgHover: string; 
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`w-8 h-8 flex items-center justify-center bg-white rounded shadow cursor-pointer ${bgHover} hover:opacity-80 transition`}
    >
      <Image src={icon} width={20} height={20} alt="" />
    </div>
  );
}

export default function Dashboard() {
  const [search, setSearch] = useState("");
    const router = useRouter();
    const pathname = usePathname();

    const [showSettings, setShowSettings] = useState(false);
    const [activePanel, setActivePanel] = useState<string | null>(null);
     const [showCompose, setShowCompose] = useState(false);

  const [emails, setEmails] = useState(
    initialEmails.map((email) => ({ ...email, starred: false })),
  );

  const filteredEmails = emails.filter(
    (email) =>
      email.sender.toLowerCase().includes(search.toLowerCase()) ||
      email.subject.toLowerCase().includes(search.toLowerCase()) ||
      email.preview.toLowerCase().includes(search.toLowerCase()),
  );

  const toggleStar = (index: number) => {
    setEmails((prev) =>
      prev.map((email, i) =>
        i === index ? { ...email, starred: !email.starred } : email,
      ),
    );
  };

  const markAsRead = (index: number) => {
    setEmails((prev) =>
      prev.map((email, i) =>
        i === index ? { ...email, unread: false } : email,
      ),
    );
  };

  const sidebarItems = [
    // { name: "All Mail", icon: "/vector-allemail.png" },
    { name: "Inbox", icon: "/vector-inbox.png" },
    { name: "Spam", icon: "/vector-spam.png" },
    { name: "Sent", icon: "/vector-sent.png" },
    { name: "Archive", icon: "/vector-archive.png" },
    { name: "Pinned", icon: "/vector-pinned.png" },
    { name: "More", icon: "/more.png" },
  ];

  return (
    <div className="flex min-h-screen bg-[#F4F5F7] relative">
      {/* LEFT SIDEBAR */}
 
      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col p-6 relative">
     {/* Right top icons - hide on small screens */}
<div className="hidden lg:flex absolute right-6 top-6 items-center gap-3">
  <Image
    src="https://img.icons8.com/ios-filled/50/606060/settings.png"
    width={24}
    height={24}
    alt="Settings"
    className="cursor-pointer hover:opacity-80"
    onClick={() => {
    if (pathname === "/settings") {
      setShowSettings(prev => !prev); // toggle open/close
    } else {
      router.push("/settings");
    }
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

{/* Search Bar - hide on small screens */}
<div className="hidden lg:flex items-center px-4 py-3 gap-3 h-12 bg-[#0D034A1A] rounded-md absolute left-10 right-32 top-6">
  <Image
    src="https://img.icons8.com/ios-filled/50/000000/search.png"
    width={16}
    height={16}
    alt="Search Icon"
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
          className="flex-1 bg-white rounded-lg shadow overflow-auto mt-5 lg:mt-20 w-full lg:w-[calc(100%-3em)]"
       
        >
          <div className="flex justify-between items-center px-4 py-2 my-2 w-full h-6">
            {/* Left Actions */}
            <div className="flex items-center gap-3 w-60">
              <div className="w-6 h-6 rounded cursor-pointer flex items-center justify-center">
                <span className="text-white text-sm">{"<"}</span>
                <img src="/square.png" alt="Left Arrow" className="" />
              </div>
              <div className="w-6 h-6 rounded cursor-pointer flex items-center justify-center">
                <img src="/refresh.png" alt="Refresh" className="" />
              </div>
            </div>

            {/* Pages count */}
           

            {/* Right Actions */}
            <div className="flex items-center gap-6 w-55 justify-end">
               <div className="flex items-center justify-end gap-3 w-32">
              <div className="w-6 h-6 bg-gray-400 rounded flex items-center justify-center cursor-pointer">
                {"<"}
              </div>
              <span className="text-gray-600 text-sm">50 of 90</span>
              <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center cursor-pointer">
                {">"}
              </div>
            </div>
              <div className="w-6 h-6 rounded cursor-pointer flex items-center justify-center">
                <img src="/dashed.png" alt="More Options" className="" />
              </div>
              <div className="w-6 h-6 rounded cursor-pointer flex items-center justify-center">
                <img src="/underray.png" alt="More Options" className="" />
              </div>
            </div>
          </div>

          {filteredEmails.map((email, idx) => (
            <div
              key={idx}
              onClick={() => {markAsRead(idx);
                 router.push(`/emailmessage/${idx}`);
              }
              }
              className={`flex items-center justify-between px-4 py-3 border-b last:border-b-0 cursor-pointer ${
                email.unread ? "bg-gray-50" : ""
              } hover:bg-gray-100`}
            >
              <div className="flex items-center gap-3">
                {/* ⭐ STAR */}
                <input type="checkbox" className="accent-[#14004D]" />
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleStar(idx);
                   
                  }}
                  className="w-5 h-5 flex items-center justify-center cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={email.starred ? "#facc15" : "none"}
                    stroke="#191918"
                    strokeWidth={1.5}
                    className="w-4 h-4 transition-transform duration-200 hover:scale-110"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>

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

              {/* RIGHT SIDE */}
              <div className="flex flex-col items-end">
                <span className="text-gray-500 text-sm">{email.time}</span>
                {email.unread && (
                  <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mt-2"></span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar */}



{showCompose && <ComposeModal onClose={() => setShowCompose(false)} />}

        
      </main>
      {/* Right Panel */}
          {activePanel && (
            <RightPanel
              type={activePanel}
              onClose={() => setActivePanel(null)}
            />
          )}
      
    </div>
  );
}