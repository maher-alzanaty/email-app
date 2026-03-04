"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
    avatar: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    unread: true,
  },
  {
    sender: "Apple",
    subject: "Your Apple bill",
    preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    time: "3:13 PM",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
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

// Actions row component
function ActionsRow() {
  return (
    <div className="flex justify-between items-center px-4 py-2 mt-4 w-full max-w-[1100px]">
      {/* Left actions */}
      <div className="flex items-center gap-4">
        <Image
          src="/square.png"
          width={24}
          height={24}
          alt="Select All"
          className="cursor-pointer hover:opacity-70"
        />
        <Image
          src="https://img.icons8.com/material-outlined/24/000000/refresh.png"
          width={24}
          height={24}
          alt="Refresh"
          className="cursor-pointer hover:opacity-70"
        />
        <Image
          src="/vector-archive.png"
          width={24}
          height={24}
          alt="Archive"
          className="cursor-pointer hover:opacity-70"
        />
        <Image
          src="https://img.icons8.com/material-outlined/24/000000/error.png"
          width={24}
          height={24}
          alt="Report Spam"
          className="cursor-pointer hover:opacity-70"
        />
        <Image
          src="https://img.icons8.com/material-outlined/24/000000/delete.png"
          width={24}
          height={24}
          alt="Delete"
          className="cursor-pointer hover:opacity-70"
        />
            <Image
          src="https://img.icons8.com/material-outlined/24/000000/mail.png"
          width={24}
          height={24}
          alt="Mark Unread"
          className="cursor-pointer hover:opacity-70"
        />
        <Image
          src="/vectormove.png"
          width={24}
          height={24}
          alt="Move"
          className="cursor-pointer hover:opacity-70"
        />
       <Image
  src="https://www.svgrepo.com/show/438160/navigation-dots-more-vertical-option-icon.svg"
  width={24}
  height={24}
  alt="More Options"
  className="cursor-pointer hover:opacity-70"
/>
      </div>

      {/* Pages count */}
   

      {/* Right actions */}
      <div className="flex items-center gap-4">
           <div className="flex items-center gap-3">
        <div className="w-6 h-6 bg-gray-400 rounded flex items-center justify-center cursor-pointer hover:bg-gray-500">
          {"<"}
        </div>
        <span className="text-gray-600 text-sm">50 of 90</span>
        <div className="w-6 h-6 bg-gray-400 rounded flex items-center justify-center cursor-pointer hover:bg-gray-500">
          {">"}
        </div>
      </div>
      
        <Image
          src="/dashed.png"
          width={24}
          height={24}
          alt="Move"
          className="cursor-pointer hover:opacity-70"
        />
       <Image
  src="/underray.png"
  width={24}
  height={24}
  alt="More Options"
  className="cursor-pointer hover:opacity-70"
/>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const router = useRouter();
const params = useParams();
const [selectedEmail, setSelectedEmail] = useState<number>(
  Number(params?.id ?? 0)
);
  const [emails, setEmails] = useState(
    initialEmails.map((email) => ({ ...email, starred: false }))
  );

  const filteredEmails = emails.filter(
    (email) =>
      email.sender.toLowerCase().includes(search.toLowerCase()) ||
      email.subject.toLowerCase().includes(search.toLowerCase()) ||
      email.preview.toLowerCase().includes(search.toLowerCase())
  );

  const toggleStar = (index: number) => {
    setEmails((prev) =>
      prev.map((email, i) => (i === index ? { ...email, starred: !email.starred } : email))
    );
  };

const markAsRead = (index: number) => {
  setEmails((prev) =>
    prev.map((email, i) => (i === index ? { ...email, unread: false } : email))
  );
  setSelectedEmail(index); // now it's fine
};

  const sidebarItems = [
    { name: "All Mail", icon: "/vector-allemail.png" },
    { name: "Inbox", icon: "/vector-inbox.png" },
    { name: "Spam", icon: "/vector-spam.png" },
    { name: "Sent", icon: "/vector-sent.png" },
    { name: "Archive", icon: "/vector-archive.png" },
    { name: "Pinned", icon: "/vector-pinned.png" },
    { name: "More", icon: "/more.png" },
  ];

const email =
  selectedEmail >= 0 && selectedEmail < filteredEmails.length
    ? filteredEmails[selectedEmail]
    : null;

  return (
    <div className="flex min-h-screen bg-[#F4F5F7] relative">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col p-4">
        <button className="bg-[#14004D] text-white px-4 py-2 rounded-md mb-6 hover:opacity-90 flex justify-center items-center gap-1">
          <Image src="/vector-message.png" width={16} height={16} alt="New Message" />
          <span>New Message</span>
        </button>
        <nav className="flex flex-col gap-2 flex-1 text-gray-700">
          {sidebarItems.map((item, i) => (
            <SidebarItem key={i} {...item} />
          ))}
          <div className="w-full h-1 bg-gray-100 mt-2"></div>
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
          <button className="mt-auto text-red-500 text-sm hover:underline flex items-center gap-2"
         onClick={() => router.push("/")}
          >
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

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col p-6 relative">
        {/* Top Right */}
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
        <div className="flex items-center  py-3 gap-3 h-12 bg-[#0D034A1A] rounded-md px-4    " style={{ width: "calc(100% - 5em)" }}>
          <Image
            src="https://img.icons8.com/ios-filled/50/000000/search.png"
            width={16}
            height={16}
            alt="Search Icon"
          
          />
          <input
            type="text"
            placeholder="Search emails..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14004D] placeholder-gray-500 text-gray-700"
          />
            <Image src="/srchl.png" width={16} height={16} alt="Search Icon" />
        </div>

        {/* Actions */}
        <ActionsRow />

        {/* Emails & content */}
        <div className="flex flex-1 mt-4 overflow-hidden gap-4 "  style={{ width: "calc(100% - 3em)" }}>
        

          {/* Email content panel */}
        
          {email && (
            <div className="flex-1 bg-white rounded-lg shadow px-6 py-4 overflow-auto flex flex-col gap-6">

  {/* ================= SUBJECT ROW ================= */}
  <div className="flex items-center justify-between border-b pb-4">

    {/* Left Side */}
    <div className="flex items-center gap-3">
      <h2 className="text-2xl font-normal text-[#333]">
        {email.subject}
      </h2>

      {/* Star Icon */}
       <img src="/emailrow.png" alt="Email Row" className="w-5 h-5 cursor-pointer hover:opacity-70" />
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#777"
        strokeWidth={2}
        className="w-5 h-5 cursor-pointer hover:stroke-yellow-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        />
      </svg> */}

      {/* Category Badge */}
      <span className="text-xs bg-black/5 px-2 py-1 rounded text-black/60 font-medium">
        Inbox
      </span>
    </div>

    {/* Right Icons */}
    <div className="flex items-center gap-4 text-[#333]">
      {/* Print */}
      <svg className="w-5 h-5 cursor-pointer hover:opacity-70" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6 9V2h12v7h2a2 2 0 012 2v6h-4v5H6v-5H2v-6a2 2 0 012-2h2zm2-5v5h8V4H8zm8 13H8v3h8v-3z"/>
      </svg>

      {/* Open in new */}
      <img src="/opennew.png" alt="Open in new" className="w-5 h-5 cursor-pointer hover:opacity-70" />
      {/* <svg className="w-5 h-5 cursor-pointer hover:opacity-70" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"/>
        <path d="M5 5h5V3H3v7h2V5z"/>
      </svg> */}
    </div>
  </div>

  {/* ================= RECIPIENT + TIMESTAMP ================= */}
  <div className="flex justify-between items-start">

    {/* Left Section */}
    <div className="flex items-start gap-3">

      {email.avatar && (
        <Image
          src={email.avatar}
          width={40}
          height={40}
          alt={email.sender}
          className="rounded-full"
        />
      )}

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm text-[#333]">
            {email.sender}
          </span>
          <span className="text-xs text-[#777]">
            &lt;email@domain.com&gt;
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#777]">
          <span>to</span>
          <span>me</span>
          <span className="underline cursor-pointer ml-4 text-[#0D034A]">
            Unsubscribe
          </span>
        </div>
      </div>
    </div>

    {/* Right Section */}
    <div className="flex items-center gap-4 text-xs text-[#777]">
      <span>{email.time}</span>
      <span>(8 hours ago)</span>
      <img src="/emailstar.png" alt="Starred" className="w-4 h-4 cursor-pointer hover:opacity-70" />

      {/* Reply */}
      <svg className="w-5 h-5 cursor-pointer hover:opacity-70" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 9V5l-7 7 7 7v-4.1c3.86 0 6.89 1.54 9 4.1-1-5-4-10-9-10z"/>
      </svg>

      {/* More */}
      <svg className="w-5 h-5 cursor-pointer hover:opacity-70" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="5" r="2"/>
        <circle cx="12" cy="12" r="2"/>
        <circle cx="12" cy="19" r="2"/>
      </svg>
    </div>
  </div>

  {/* ================= EMAIL BODY ================= */}
  <div className="text-sm text-black leading-relaxed">
    <p className="mb-4">
      {email.preview}
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod,
      nisi vel consectetur euismod, nisl nunc consectetur nisi, euismod
      consectetur nisi nisl euismod nisi.
    </p>
  </div>

  {/* ================= SMART REPLIES ================= */}
  <div className="flex gap-3">
    <button className="border border-gray-200 px-4 py-2 rounded-lg text-sm text-[#0D034A] hover:bg-gray-50">
      Looking forward to it!
    </button>

    <button className="border border-gray-200 px-4 py-2 rounded-lg text-sm text-[#0D034A] hover:bg-gray-50">
      We will be there!
    </button>

    <button className="border border-gray-200 px-4 py-2 rounded-lg text-sm text-[#0D034A] hover:bg-gray-50">
      Thanks for the update!
    </button>
  </div>

  {/* Divider */}
  <div className="border-t pt-4"></div>

  {/* ================= ACTION BUTTONS ================= */}
  <div className="flex gap-4">
    <button className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
     <img src="/reply.png" alt="Reply" className="w-4 h-4 inline mr-2" /> Reply
    </button>

    <button className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
     <img src="/forward.png" alt="Forward" className="w-4 h-4 inline mr-2" />Forward
    </button>
  </div>

</div>
          )}
       
        </div>

        {/* Right Sidebar */}
        <div className="absolute right-6 top-32 flex flex-col gap-4 w-8 h-56 items-start">
          <HoverIcon icon="https://img.icons8.com/ios-filled/50/1FC16B/calendar.png" bgHover="bg-[#e0f7f2]" />
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