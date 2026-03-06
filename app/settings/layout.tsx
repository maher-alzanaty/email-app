"use client";

import { ReactNode, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ComposeModal from "@/components/ComposeModal";
import RightPanel from "@/components/RightPanel";
interface SidebarItemProps {
  icon: string;
  name: string;
  count?: number;
  active?: boolean; // is this tab selected
  onClick?: () => void;
}

function SidebarItem({ icon, name, count, active = false, onClick }: SidebarItemProps) {
  return (
    <div
      className={`flex justify-between items-center px-2 py-3 rounded cursor-pointer
        ${active ? "bg-[#0D034A]/10 border-l-2 border-[#0D034A]" : "hover:bg-gray-100"}`}
      onClick={onClick}
    >
      {/* Left side: icon + name */}
      <div className="flex items-center gap-2">
        <Image src={icon} width={16} height={16} alt={name} />
        <span className={`font-semibold ${active ? "text-[#0D034A]" : "text-gray-700"}`}>
          {name}
        </span>
      </div>

      {/* Right side: optional count */}
      {count !== undefined && (
        <span className={`text-sm font-bold ${active ? "text-[#0D034A]" : "text-gray-700"}`}>
          {count}
        </span>
      )}
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

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("All Mail"); // <-- this tracks selected tab
     const [showCompose, setShowCompose] = useState(false);
       const [search, setSearch] = useState("");
     const [activePanel, setActivePanel] = useState<string | null>(null);







       
 

  const sidebarItems = [
    { name: "All Mail", icon: "/vector-allemail.png", count: 16 },
    { name: "Inbox", icon: "/vector-inbox.png" },
  
    { name: "Spam", icon: "/vector-spam.png" },
    { name: "Sent", icon: "/vector-sent.png" },
    { name: "Archive", icon: "/vector-archive.png" },
    { name: "Pinned", icon: "/vector-pinned.png" },
    { name: "More", icon: "/more.png" },
  ];
  return (
    <div className="flex min-h-screen bg-[#F7F8FC] overflow-hidden">
 

      {/* ========================= */}
      {/* DESKTOP SIDEBAR */}
      {/* ========================= */}
       <aside className="hidden lg:flex w-64 bg-white border-r border-gray-200  flex-col p-4">
             <button className="bg-[#14004D] text-white px-4 py-2 rounded-md mb-6 hover:opacity-90 flex justify-center items-center gap-1"
                onClick={() => setShowCompose(true)}
             >
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
                 {/* <div className="flex justify-between items-center px-2 py-3 bg-[#0D034A]/10 border-l-2 border-[#0D034A] rounded-r-lg cursor-pointer">
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
                         </div> */}
            {sidebarItems.map((item, i) => (
  <SidebarItem
    key={i}
    icon={item.icon}
    name={item.name}
    count={item.count}
    active={activeTab === item.name} // track the selected tab in state
    onClick={() => setActiveTab(item.name)}
  />
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

      {/* ========================= */}
      {/* MOBILE TOP NAVBAR */}
      {/* ========================= */}
      <div className="flex-1 flex flex-col relative">

      {/* MOBILE MENU BAR */}
{/* MOBILE MENU BAR */}
{/* MOBILE MENU BAR */}
<div className="lg:hidden flex items-center justify-between h-16 px-4 bg-gray-100 w-full border-b">

  {/* LEFT - menu */}
  <button onClick={() => setMobileMenuOpen(true)}>
    <Image
      src="/menu.png"
      width={24}
      height={24}
      alt="menu"
    />
  </button>

  {/* CENTER - title */}
  <h1 className="text-[16px] font-semibold text-[#333]">
    Inbox
  </h1>

  {/* RIGHT - avatar */}
  <Image
    src="/person.png"
    width={32}
    height={32}
    className="rounded-full"
    alt="profile"
  />

</div>

{/* MOBILE SEARCH BAR */}
<div className="flex lg:hidden items-center gap-2 px-4 py-3 border-b bg-gray-50">

  <Image
    src="https://img.icons8.com/ios-filled/50/000000/search.png"
    width={20}
    height={20}
    alt="search"
  />

  <input
    type="text"
    placeholder="Search"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="flex-1 text-[14px] outline-none text-gray-700 placeholder-gray-500"
  />

</div>

        {/* PAGE CONTENT */}
        <main className="flex-1">{children}

          {showCompose && <ComposeModal onClose={() => setShowCompose(false)} />}
        </main>
         
      </div>
       {/* Right Sidebar */}
<div className="hidden lg:flex absolute right-6 top-32 flex-col gap-4 w-8">
  <HoverIcon
    icon="https://img.icons8.com/ios-filled/50/1FC16B/calendar.png"
    bgHover="hover:bg-[#e0f7f2]"
    onClick={() => setActivePanel("calendar")}
  />
  <div className="h-px w-8 bg-gray-300"></div>

  <HoverIcon
    icon="/notes.png"
    bgHover="hover:bg-[#fff3cd]"
    onClick={() => setActivePanel("notes")}
  />
  <div className="h-px w-8 bg-gray-300"></div>

  <HoverIcon
    icon="/task.png"
    bgHover="hover:bg-[#cce0ff]"
    onClick={() => setActivePanel("tasks")}
  />
  <div className="h-px w-8 bg-gray-300"></div>

  <HoverIcon
    icon="/contact.png"
    bgHover="hover:bg-[#d1d1d1]"
    onClick={() => setActivePanel("contacts")}
  />
</div>
 {/* Right Panel */}
            {activePanel && (
              <RightPanel
                type={activePanel}
                onClose={() => setActivePanel(null)}
              />
            )}

      {/* ========================= */}
      {/* MOBILE FULL SCREEN MENU */}
      {/* ========================= */}
    {mobileMenuOpen && (
  <div className="fixed inset-0 z-50 bg-[#F7F8FC] lg:hidden flex flex-col">

    {/* TOP BAR */}
    <div className="flex items-center justify-between px-4 h-16 bg-white border-b">
      <button onClick={() => setMobileMenuOpen(false)}>
        <Image src="/menu.png" width={24} height={24} alt="menu"/>
      </button>

      <h1 className="font-semibold text-[16px] text-[#333]">
        Inbox
      </h1>

      <Image
        src="/person.png"
        width={32}
        height={32}
        className="rounded-full"
        alt="profile"
      />
    </div>


    {/* FORWARD BUTTON */}
    <div className="p-4 bg-gray-100 border-b">
      <button className="flex items-center justify-between w-full border rounded px-4 py-2 text-gray-500 justify-center gap-2 bg-white hover:bg-gray-200">
      Example@gmail.com
        <span>▾</span>
      </button>
    </div>


    {/* SEARCH */}
    <div className="flex items-center gap-2 px-4 py-3 bg-white border-b">
      <Image
        src="https://img.icons8.com/ios-filled/50/000000/search.png"
        width={18}
        height={18}
        alt="search"
      />
      <span className="text-gray-500 text-sm">Search</span>
    </div>


    {/* SIDEBAR ITEMS */}
    <div className="bg-white flex-1 text-gray-700">

{sidebarItems.map((item, i) => (
  <SidebarItem
    key={i}
    icon={item.icon}
    name={item.name}
    count={item.count}
    active={activeTab === item.name} // track the selected tab in state
    onClick={() => setActiveTab(item.name)}
  />
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
               {/* <button className="mt-auto text-red-500 text-sm hover:underline flex items-center gap-2"
                  onClick={() => router.push("/")}
               >
                 <Image
                   src="/vectorsignout.png"
                   width={16}
                   height={16}
                   alt="Sign Out"
                
                 />
                 Sign Out
               </button> */}

    </div>
    {/* ========================= */}


  </div>
)}




{/* MOBILE BOTTOM NAV */}
{/* ========================= */}
<div className="lg:hidden fixed bottom-0 left-0 w-full bg-white rounded-b-[24px] shadow-lg z-50 border-t border-gray-200">
  <div className="flex justify-between items-center px-4 py-2">
    
    {/* Search Tab */}
    <button
      className="flex flex-col items-center justify-center flex-1 py-2"
      onClick={() => setActiveTab("Search")}
    >
      <Image
        src="/inbox.png"
        width={24}
        height={24}
        alt="inbox"
      />
    <span
  className={`text-xs mt-1 ${
    activeTab === "inbox"
      ? "font-bold text-[#0D034A]"
      : "text-gray-500"
  }`}
>
  Inbox
</span>
    </button>

    
 {/* Tasks*/}
<button
  className="flex flex-col items-center justify-center flex-1 py-2"
  onClick={() => setActivePanel("tasks")} // <-- use activePanel here
>
  <Image src="/tasks.png" width={24} height={24} alt="Tasks" />
  <span
    className={`text-xs mt-1 ${
      activePanel === "tasks" ? "font-bold text-[#0D034A]" : "text-gray-500"
    }`}
  >
    Tasks
  </span>
</button>

    {/* Scan / Center Button */}
    <button
      className="flex items-center justify-center w-16 h-16  border-4 border-white rounded-full shadow-lg -mt-6       bg-[#0D034A]"
      onClick={() => setActiveTab("Scan")}
    >
      <Image
        src="/scan.png"
        width={32}
        height={32}
        alt="Scan"
      />
    </button>

    {/* Calender tap*/}
    <button
      className="flex flex-col items-center justify-center flex-1 py-2"
      onClick={() => setActivePanel("calendar")} // <-- use activePanel here
    >
      <Image
        src="/calender2.png"
        width={24}
        height={24}
        alt="calendar"
        color="blue"
      />
   <span
  className={`text-xs mt-1 ${
    activeTab === "calendar"
      ? "font-bold text-[#0D034A]"
      : "text-gray-500"
  }`}
>
calendar
</span>
    </button>

  {/* Contacts */}
<button
  className="flex flex-col items-center justify-center flex-1 py-2"
  onClick={() => setActivePanel("contacts")} // <-- activePanel
>
  <Image src="/contacts2.png" width={24} height={24} alt="contacts" />
  <span
    className={`text-xs mt-1 ${
      activePanel === "contacts" ? "font-bold text-[#0D034A]" : "text-gray-500"
    }`}
  >
    contacts
  </span>
</button>

  </div>
  
</div>

    </div>
  );
}