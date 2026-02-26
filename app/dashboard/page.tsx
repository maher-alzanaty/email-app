"use client";

import Image from "next/image";

const emails = [
  {
    sender: "Jeanne Nesty",
    subject: "Weekly update",
    preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    time: "3:13 PM",
    avatar: null,
    unread: true,
  },
  {
    sender: "John Lennon",
    subject: "UI project : Client Dashboard",
    preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    time: "3:13 PM",
    avatar: "/john.png",
    unread: true,
  },
  {
    sender: "Services PayPal",
    subject: "Payment received",
    preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    time: "3:13 PM",
    avatar: "/paypal.png",
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
    sender: "Mathias Goblet",
    subject: "Financial information",
    preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    time: "3:13 PM",
    avatar: "/mathias.png",
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

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#F4F5F7]">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col p-4">
        {/* New Message button */}
        <button className="bg-[#14004D] text-white px-4 py-2 rounded-md mb-6 hover:opacity-90 flex items-center justify-center">
          <span className="mr-2">
            <img
              src="/vector-message.png"
              alt="New Message"
              className="w-4 h-4"
            />
          </span>{" "}
          New Message
        </button>

        {/* Sidebar menu vertical */}
        <nav className="flex flex-col gap-2 flex-1">
          <div className="flex justify-between items-center px-2 py-1 bg-gray-100 rounded font-semibold">
            <img src="/vector-allemail.png" alt="Folder" className="w-4 h-4 " />
            All Mail <span>16</span>
          </div>
          {[
            { name: "Inbox", icon: "/vector-inbox.png" },
            { name: "Spam", icon: "/vector-spam.png" },
            { name: "Sent", icon: "/vector-sent.png" },
            { name: "Archive", icon: "/vector-archive.png" },
            { name: "Pinned", icon: "/vector-pinned.png" },
            { name: "More", icon: "/vector-more.png" },
          ].map((item, i, arr) => (
            <div key={i}>
              <div className="flex items-center gap-2 px-2 py-3 hover:bg-gray-100 rounded cursor-pointer">
                <img src={item.icon} alt={item.name} className="w-4 h-4" />
                {item.name}
              </div>

              {/* Line only after last item */}
              {i === arr.length - 1 && (
                <div className="border-b border-gray-300 mt-2"></div>
              )}
            </div>
          ))}
          {/* Labels */}
          <div className="mt-6 flex items-center justify-between">
            <h4 className="text-sm font-semibold text-gray-500">Labels</h4>

            <img
              src="/vector-add.png"
              alt="Add Label"
              className="w-4 h-4 cursor-pointer"
            />
          </div>

          {/* Sign Out */}
          <button className="mt-auto text-red-500 text-sm hover:underline flex items-center gap-2">
            <span>
              <img
                src="/vector-signout.png"
                alt="Sign Out"
                className="w-4 h-4 mr-2"
              />
            </span>{" "}
            Sign Out
          </button>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col p-6">
        {/* Search bar */}
        <div className="mb-4 w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14004D]"
          />
        </div>

        {/* Emails table */}
        <div className="flex-1 bg-white rounded-lg shadow overflow-auto">
          {emails.map((email, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between px-4 py-3 border-b last:border-b-0 cursor-pointer ${email.unread ? "bg-gray-50" : ""} hover:bg-gray-100`}
            >
              <div className="flex items-center gap-3">
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

        {/* Right icons */}
        <div className="absolute right-4 top-28 flex flex-col gap-4">
          <button className="p-2 bg-white rounded shadow">
            <Image src="/calendar.png" width={24} height={24} alt="Calendar" />
          </button>
          <button className="p-2 bg-white rounded shadow">
            <Image src="/tasks.png" width={24} height={24} alt="Tasks" />
          </button>
          <button className="p-2 bg-white rounded shadow">
            <Image src="/contacts.png" width={24} height={24} alt="Contacts" />
          </button>
        </div>
      </main>
    </div>
  );
}
