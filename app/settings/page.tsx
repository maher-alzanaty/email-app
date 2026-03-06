"use client";

import Image from "next/image";

import RightPanel from "@/components/RightPanel";
import ComposeModal from "@/components/ComposeModal";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

// ================= Sidebar Item =================
function SidebarItem({ icon, name, count }: { icon: string; name: string; count?: number }) {
  return (
    <div className="flex items-center justify-between gap-2 px-2 py-3 hover:bg-gray-100 rounded cursor-pointer">
      <div className="flex items-center gap-2">
        <Image src={icon} width={16} height={16} alt={name} />
        <span>{name}</span>
      </div>
      {count && <span className="text-sm text-gray-500">{count}</span>}
    </div>
  );
}


// ================= Right Sidebar Hover Icon =================
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

// ================= Reusable Rows =================
function DropdownRow({ label, description, options, value, onChange }: { 
  label: string;
  description?: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
}) {
 return (
  <div className="flex items-center justify-between w-full py-2 border-b border-gray-200">
    <div className="flex flex-row items-center gap-2 w-full">
      <p className="text-sm font-medium text-[#333]">{label}</p>

      {description && (
        <p className="text-sm text-gray-500 ml-6">{description}</p>
      )}

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="ml-auto border border-gray-300 rounded px-3 py-1 text-sm 
                   focus:outline-none focus:ring-2 focus:ring-[#14004D] 
                   bg-white text-gray-700"
      >
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  </div>
);
}

interface DoubleDropdownRowProps {
  label: string;
  firstOptions: string[];
  secondOptions: string[];
  firstValue: string;
  secondValue: string;
  onFirstChange: (value: string) => void;
  onSecondChange: (value: string) => void;
}

function DoubleDropdownRow({
  label,
  firstOptions,
  secondOptions,
  firstValue,
  secondValue,
  onFirstChange,
  onSecondChange,
}: DoubleDropdownRowProps) {
  return (
    <div className="flex items-center w-full py-2 border-b border-gray-200">
      
      {/* Label */}
      <p className="text-sm font-medium text-[#333] w-40">
        {label}
      </p>

      {/* First Dropdown */}
      <select
        value={firstValue}
        onChange={(e) => onFirstChange(e.target.value)}
        className="border border-gray-300 rounded px-3 py-1 text-sm 
                   focus:outline-none focus:ring-2 focus:ring-[#14004D] 
                   bg-white text-gray-700"
      >
        {firstOptions.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>

      {/* Middle Text */}
      <span className="mx-3 text-sm text-gray-600"> from </span>

      {/* Second Dropdown */}
      <select
        value={secondValue}
        onChange={(e) => onSecondChange(e.target.value)}
        className="border border-gray-300 rounded px-3 py-1 text-sm 
                   focus:outline-none focus:ring-2 focus:ring-[#14004D] 
                   bg-white text-gray-700"
      >
        {secondOptions.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>

    </div>
  );
}

function ToggleButtonRow({ label, description }: { label: string; description?: string }) {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="flex items-center justify-between w-full py-2 border-b border-gray-200">
      <div className="flex flex-row gap-1">
        <p className="text-sm font-medium text-[#333]">{label}</p>
          <button
        onClick={() => setEnabled(!enabled)}
        className={`px-3 py-1 rounded-md text-white text-sm transition mx-3 ${
          enabled ? "bg-[#0D034A]" : "bg-gray-300 text-gray-700"
        }`}
      >
        {enabled ? "Enabled" : "Enable"}
      </button>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
    
    </div>
  );
}

function CheckboxRow({ label, description }: { label: string; description?: string }) {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex items-center justify-between w-full py-2 border-b border-gray-200">
      <div className="flex flex-row gap-1">
        <p className="text-sm font-medium text-[#333]">{label}</p>
         <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} className="mx-3 accent-[#14004D]" />
        {description && <p className="text-sm text-gray-500">{description}</p>}
           
      </div>
  
    </div>
  );
}

// ================= Dashboard Component =================
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("General");
  const router = useRouter();
  const pathname = usePathname(); // current path
    const handleClick = () => {
    if (pathname === "/settings") {
      router.push("/dashboard"); // go back if already in settings
    } else {
      router.push("/settings"); // go to settings
    }
  };

  // ======== General Settings State ========
  const [language, setLanguage] = useState("English(US)");
  const [timeFormat, setTimeFormat] = useState("12-hour");
  const [refreshTime, setRefreshTime] = useState("1 Min");
  const [theme, setTheme] = useState("Default");
  const [messagesPerPage, setMessagesPerPage] = useState("50");
  const [desktopNotification, setDesktopNotification] = useState("New mail notifications on");
const [weekStartDay, setWeekStartDay] = useState("Sunday");
const [defaultTap, setDefaultTap] = useState("Month");
const [startTime, setStartTime] = useState("09:00 AM");
const [endTime, setEndTime] = useState("06:00 PM");
const [activePanel, setActivePanel] = useState<string | null>(null);
 const [showCompose, setShowCompose] = useState(false);
  const [search, setSearch] = useState("");
  const [showSettings, setShowSettings] = useState(false);

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
   <div className="flex min-h-screen bg-[#F4F5F7]">
      {/* ================= LEFT SIDEBAR ================= */}
     

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 flex flex-col  relative top-0">
 x
        
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

        {/* ================= SETTINGS CONTENT ================= */}
      <div    className="flex-1 bg-white rounded-lg shadow overflow-auto mt-5 lg:mt-20 w-full lg:w-[calc(100%-4em)] hidden lg:flex">
  <div className="flex-1 bg-white rounded-lg shadow px-8 py-6 flex flex-col relative">
    
    {/* Header */}
    <div className="border-b pb-4 mb-6 flex-shrink-0">
      <h2 className="text-2xl font-semibold text-[#333]">Settings</h2>
    </div>

    {/* Tabs */}
    <div className="flex gap-8 border-b pb-3 mb-6 text-sm flex-shrink-0">
      {["General", "Security & Privacy", "Account & Integration", "Files & Calendar"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-2 ${
            activeTab === tab
              ? "text-[#0D034A] font-semibold border-b-2 border-[#0D034A]"
              : "text-gray-500 hover:text-black"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>

    {/* Scrollable Tab Content */}
    <div className="flex-1 overflow-y-auto flex flex-col gap-4 text-sm">
      {activeTab === "General" && (
        <>
          <DropdownRow label="Language" description="Display language" options={["English(US)", "Arabic"]} value={language} onChange={setLanguage} />
          <DropdownRow label="Time Format" options={["12-hour", "24-hour"]} value={timeFormat} onChange={setTimeFormat} />
          <DropdownRow label="Refresh Time" options={["1 Min", "5 Min", "15 Min"]} value={refreshTime} onChange={setRefreshTime} />
          <DropdownRow label="Themes" options={["Default", "Dark", "Light"]} value={theme} onChange={setTheme} />
          <DropdownRow label="Messages Per Page" description="Conversations per page" options={["25", "50", "100"]} value={messagesPerPage} onChange={setMessagesPerPage} />
          <DropdownRow label="Desktop Notifications" options={["New mail notifications on", "Off"]} value={desktopNotification} onChange={setDesktopNotification} />
        </>
      )}

      {activeTab === "Security & Privacy" && (
        <>
          <ToggleButtonRow label="Two-factor verification" description="Increase your security by enabling two factor verification for your account" />
          <CheckboxRow label="Paranoid encryption" description="Enables browser-level on-the-fly encryption in Files. AES256." />
          <CheckboxRow label="File encryption" description="Every time while upload you will be asked if the file should be encrypted." />
        </>
      )}

      {activeTab === "Account & Integration" && (
        <>
          <ToggleButtonRow label="Connect to Google" description="Can log in using Google account" />
          <CheckboxRow label="Google Drive in Files" description="Enable Google Drive in Files" />
        </>
      )}

      {activeTab === "Files & Calendar" && (
        <>
          <CheckboxRow label="Files Table view" description="Enable Table view for files list" />
          <CheckboxRow label="Preview Pane" description="Enable preview pane in Files" />
          <DoubleDropdownRow
            label="Work day starts"
            firstOptions={["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM"]}
            secondOptions={["04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"]}
            firstValue={startTime}
            secondValue={endTime}
            onFirstChange={setStartTime}
            onSecondChange={setEndTime}
          />
          <DropdownRow label="Week Start Day :" options={["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"]} value={weekStartDay} onChange={setWeekStartDay} />
          <DropdownRow label="Default Tap:" options={["Month","Week","Day"]} value={defaultTap} onChange={setDefaultTap} />
        </>
      )}

      {/* Save Button */}
      <div className="pt-6 flex justify-end flex-shrink-0">
        <button className="bg-[#0D034A] text-white px-6 py-2 rounded-md hover:opacity-90">
          Save
        </button>
      </div>
    </div>
  </div>
</div>
      <div    className="flex-1 bg-white rounded-lg shadow overflow-auto mt-5 lg:mt-20 w-full  lg:hidden">
  <div className="flex-1 bg-white rounded-lg shadow px-8 py-6 flex flex-col relative">
    
    {/* Header */}
    <div className="border-b pb-4 mb-6 flex-shrink-0">
      <h2 className="text-2xl font-semibold text-[#333]">Settings</h2>
    </div>

    {/* Tabs */}
    <div className="flex gap-8 border-b pb-3 mb-6 text-sm flex-shrink-0">
      {["General", "Security & Privacy", "Account & Integration", "Files & Calendar"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-2 ${
            activeTab === tab
              ? "text-[#0D034A] font-semibold border-b-2 border-[#0D034A]"
              : "text-gray-500 hover:text-black"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>

    {/* Scrollable Tab Content */}
    <div className="flex-1 overflow-y-auto flex flex-col gap-4 text-sm">
      {activeTab === "General" && (
        <>
          <DropdownRow label="Language" description="Display language" options={["English(US)", "Arabic"]} value={language} onChange={setLanguage} />
          <DropdownRow label="Time Format" options={["12-hour", "24-hour"]} value={timeFormat} onChange={setTimeFormat} />
          <DropdownRow label="Refresh Time" options={["1 Min", "5 Min", "15 Min"]} value={refreshTime} onChange={setRefreshTime} />
          <DropdownRow label="Themes" options={["Default", "Dark", "Light"]} value={theme} onChange={setTheme} />
          <DropdownRow label="Messages Per Page" description="Conversations per page" options={["25", "50", "100"]} value={messagesPerPage} onChange={setMessagesPerPage} />
          <DropdownRow label="Desktop Notifications" options={["New mail notifications on", "Off"]} value={desktopNotification} onChange={setDesktopNotification} />
        </>
      )}

      {activeTab === "Security & Privacy" && (
        <>
          <ToggleButtonRow label="Two-factor verification" description="Increase your security by enabling two factor verification for your account" />
          <CheckboxRow label="Paranoid encryption" description="Enables browser-level on-the-fly encryption in Files. AES256." />
          <CheckboxRow label="File encryption" description="Every time while upload you will be asked if the file should be encrypted." />
        </>
      )}

      {activeTab === "Account & Integration" && (
        <>
          <ToggleButtonRow label="Connect to Google" description="Can log in using Google account" />
          <CheckboxRow label="Google Drive in Files" description="Enable Google Drive in Files" />
        </>
      )}

      {activeTab === "Files & Calendar" && (
        <>
          <CheckboxRow label="Files Table view" description="Enable Table view for files list" />
          <CheckboxRow label="Preview Pane" description="Enable preview pane in Files" />
          <DoubleDropdownRow
            label="Work day starts"
            firstOptions={["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM"]}
            secondOptions={["04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"]}
            firstValue={startTime}
            secondValue={endTime}
            onFirstChange={setStartTime}
            onSecondChange={setEndTime}
          />
          <DropdownRow label="Week Start Day :" options={["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"]} value={weekStartDay} onChange={setWeekStartDay} />
          <DropdownRow label="Default Tap:" options={["Month","Week","Day"]} value={defaultTap} onChange={setDefaultTap} />
        </>
      )}

      {/* Save Button */}
      <div className="pt-6 flex justify-end flex-shrink-0">
        <button className="bg-[#0D034A] text-white px-6 py-2 rounded-md hover:opacity-90">
          Save
        </button>
      </div>
    </div>
  </div>
</div>

        {/* ================= RIGHT FLOATING SIDEBAR ================= */}
 {/* ================= RIGHT FLOATING SIDEBAR ================= */}

{showCompose && <ComposeModal onClose={() => setShowCompose(false)} />}

      </main>
      
      
 
    </div>
  );
}