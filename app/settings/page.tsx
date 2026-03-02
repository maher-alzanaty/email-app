"use client";

import Image from "next/image";
import { useState } from "react";

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
function HoverIcon({ icon, bgHover }: { icon: string; bgHover: string }) {
  return (
    <div className={`w-8 h-8 relative bg-white rounded shadow cursor-pointer hover:${bgHover} transition`}>
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
    <div className="flex min-h-screen bg-[#F4F5F7] relative">
      {/* ================= LEFT SIDEBAR ================= */}
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

          <button className="mt-auto text-red-500 text-sm hover:underline flex items-center gap-2">
            <Image src="/vectorsignout.png" width={16} height={16} alt="Sign Out" />
            Sign Out
          </button>
        </nav>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
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
        <div
          className="flex items-center py-3 gap-3 h-12 bg-[#0D034A1A] rounded-md px-4"
          style={{ width: "calc(100% - 5em)" }}
        >
          <Image
            src="https://img.icons8.com/ios-filled/50/000000/search.png"
            width={16}
            height={16}
            alt="Search Icon"
          />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14004D] placeholder-gray-500 text-gray-700"
          />
            <Image src="/srchl.png" width={16} height={16} alt="Search Icon" />
        </div>

        {/* ================= SETTINGS CONTENT ================= */}
        <div className="flex flex-1 mt-6 overflow-hidden" style={{ width: "calc(100% - 3em)" }}>
          <div className="flex-1 bg-white rounded-lg shadow px-8 py-6 flex flex-col relative">
            {/* Header */}
            <div className="border-b pb-4 mb-6">
              <h2 className="text-2xl font-semibold text-[#333]">Settings</h2>
            </div>

            {/* Tabs */}
            <div className="flex gap-8 border-b pb-3 mb-6 text-sm">
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

            {/* Tab Content */}
            <div className="flex flex-col gap-4 text-sm flex-1 overflow-y-auto">
              {activeTab === "General" && (
                <>
                  <DropdownRow
                    label="Language"
                    description="Display language"
                    options={["English(US)", "Arabic"]}
                    value={language}
                    onChange={setLanguage}
                  />
                  <DropdownRow
                    label="Time Format"
                    options={["12-hour", "24-hour"]}
                    value={timeFormat}
                    onChange={setTimeFormat}
                  />
                  <DropdownRow
                    label="Refresh Time"
                    options={["1 Min", "5 Min", "15 Min"]}
                    value={refreshTime}
                    onChange={setRefreshTime}
                  />
                  <DropdownRow
                    label="Themes"
                    options={["Default", "Dark", "Light"]}
                    value={theme}
                    onChange={setTheme}
                  />
                  <DropdownRow
                    label="Messages Per Page"
                    description="Conversations per page"
                    options={["25", "50", "100"]}
                    value={messagesPerPage}
                    onChange={setMessagesPerPage}
                  />
                  <DropdownRow
                    label="Desktop Notifications"
                    options={["New mail notifications on", "Off"]}
                    value={desktopNotification}
                    onChange={setDesktopNotification}
                  />
                </>
              )}

              {activeTab === "Security & Privacy" && (
                <>
                  <ToggleButtonRow
                    label="Two-factor verification"
                    description="Increase your security by enabling two factor verification for your account"
                  />
                  <CheckboxRow
                    label="Paranoid encryption"
                    description="Enables browser-level on-the-fly encryption in Files. AES256."
                  />
                  <CheckboxRow
                    label="File encryption"
                    description="Every time while upload you will be asked if the file should be encrypted."
                  />
                </>
              )}

              {activeTab === "Account & Integration" && (
                <>
                  <ToggleButtonRow
                    label="Connect to Google"
                    description="Can log in using Google account"
                  />
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

                    <DropdownRow
                    label="Week Start Day :"
                    options={["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]}
                    value={weekStartDay}
                    onChange={setWeekStartDay}
                  />
                    <DropdownRow
                    label="Default Tap:"
                    options={["Month", "Week", "Day"]}
                    value={defaultTap}
                    onChange={setDefaultTap}
                  />
                 </>
              )}

              {/* Save Button */}
              <div className="pt-6 flex justify-end">
                <button className="bg-[#0D034A] text-white px-6 py-2 rounded-md hover:opacity-90">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT FLOATING SIDEBAR ================= */}
        <div className="absolute right-6 top-32 flex flex-col gap-4 w-8">
          <HoverIcon icon="https://img.icons8.com/ios-filled/50/1FC16B/calendar.png" bgHover="bg-[#e0f7f2]" />
          <div className="h-px w-8 bg-gray-300"></div>
          <HoverIcon icon="/notes.png" bgHover="bg-[#fff3cd]" />
          <div className="h-px w-8 bg-gray-300"></div>
          <HoverIcon icon="/task.png" bgHover="bg-[#cce0ff]" />
          <div className="h-px w-8 bg-gray-300"></div>
          <HoverIcon icon="/contact.png" bgHover="bg-[#d1d1d1]" />
        </div>
      </main>
    </div>
  );
}