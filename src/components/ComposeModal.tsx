"use client";
import { useState } from "react";

export default function ComposeModal({ onClose }: { onClose: () => void }) {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="fixed inset-0 z-50 bg-black/20 flex items-center justify-center">

      {/* ================= MOBILE COMPOSE ================= */}
      <div className="flex lg:hidden flex-col w-full h-full bg-white text-gray-700">

        {/* Mobile Header */}
        <div className="flex items-center justify-between px-4 h-14 border-b">
          <button onClick={onClose}>←</button>
          <span className="font-medium"></span>
          <button className="bg-[#0D034A] text-white px-3 py-1 rounded text-sm">
            Send
          </button>
        </div>

        {/* Inputs */}
        
        <div className="px-4 py-3 flex flex-col gap-3">
          <input
            type="text"
            placeholder="To"
            value={"to:"}
            onChange={(e) => setTo(e.target.value)}
            className="border-b outline-none py-2"
          />
               <input
            type="text"
            placeholder="Cc"
            value={"cc:"}
            onChange={(e) => setTo(e.target.value)}
            className="border-b outline-none py-2"
          />
               <input
            type="text"
            placeholder="Bcc"
            value={"bcc:"}
            onChange={(e) => setTo(e.target.value)}
            className="border-b outline-none py-2"
          />

          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="border-b outline-none py-2"
          />
        </div>

        {/* Body */}
        <textarea
          className="flex-1 p-4 outline-none resize-none"
          placeholder="Write your message..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

      </div>

      {/* ================= DESKTOP COMPOSE ================= */}
      <div className="hidden lg:flex relative w-[600px] h-[608px] bg-white rounded-t-lg shadow-lg flex-col">

        {/* Header */}
        <div className="flex justify-between items-center h-10 px-4 bg-[#333333] rounded-t-lg">
          <span className="font-medium text-white text-sm">New Message</span>
          <div className="flex gap-2">
            <button className="w-5 h-5 flex items-center justify-center hover:bg-gray-500 rounded text-white">–</button>
            <button className="w-5 h-5 flex items-center justify-center hover:bg-gray-500 rounded text-white">□</button>
            <button onClick={onClose} className="w-5 h-5 flex items-center justify-center hover:bg-gray-500 rounded text-white">×</button>
          </div>
        </div>

        {/* Recipients */}
        <div className="flex items-center h-10 px-4 border-b border-gray-700 text-sm">
          <span className="text-gray-500 mr-2">To</span>
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Recipients"
            className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-500"

          />
          <div className="flex gap-2 ml-4 text-xs text-gray-500">
            <span className="cursor-pointer hover:text-black">Cc</span>
            <span className="cursor-pointer hover:text-black">Bcc</span>
          </div>
        </div>

        {/* Subject */}
        <div className="px-4 h-10 border-b border-gray-200">
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            className="w-full outline-none text-sm text-gray-700 placeholder-gray-500"
          />
        </div>

        {/* Body Toolbar (example formatting) */}
        {/* <div className="flex items-center px-2 py-1 gap-2 border-b border-gray-200 bg-white text-gray-600 text-sm shadow-sm">
          <button className="w-6 h-6"><img src="https://img.icons8.com/material-outlined/24/000000/undo.png" /></button>
          <button className="w-6 h-6"><img src="https://img.icons8.com/material-outlined/24/000000/redo.png" /></button>
          <select className="text-sm outline-none border-none">
            <option>Sans Serif</option>
            <option>Serif</option>
          </select>
          <select className="text-sm outline-none border-none">
            <option>10pt</option>
            <option>12pt</option>
            <option>14pt</option>
          </select>
          <button className="w-6 h-6"><img src="https://img.icons8.com/material-outlined/24/000000/bold.png" /></button>
          <button className="w-6 h-6"><img src="https://img.icons8.com/material-outlined/24/000000/italic.png" /></button>
          <button className="w-6 h-6"><img src="https://img.icons8.com/material-outlined/24/000000/underline.png" /></button>
          <button className="w-6 h-6"><img src="https://img.icons8.com/material-outlined/24/000000/list.png" /></button>
        </div> */}

        {/* Body */}
        <textarea
          className="flex-1 p-4 text-sm outline-none resize-none text-gray-700 placeholder-gray-500"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body Text"
        />

       {/* Format Text Bar */}
<div className="absolute bottom-20 left-3 w-[573px] h-9 bg-white shadow-md rounded-sm flex items-center gap-2 px-2">

  {/* Undo */}
  <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-200 rounded">
    <img src="https://img.icons8.com/material-outlined/24/000000/undo.png" alt="Undo" />
  </button>

  {/* Redo */}
  <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-200 rounded">
    <img src="https://img.icons8.com/material-outlined/24/000000/redo.png" alt="Redo" />
  </button>

  {/* Font Family */}
  <select className="text-sm outline-none border-none bg-white text-gray-600">
    <option>Sans Serif</option>
    <option>Serif</option>
    <option>Monospace</option>
  </select>

  {/* Font Size */}
  <select className="text-sm outline-none border-none g-white text-gray-600">
    <option>10pt</option>
    <option>12pt</option>
    <option>14pt</option>
    <option>16pt</option>
  </select>

  {/* Bold */}
  <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-200 rounded">
    <img src="https://img.icons8.com/material-outlined/24/000000/bold.png" alt="Bold" />
  </button>

  {/* Italic */}
  <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-200 rounded">
    <img src="https://img.icons8.com/material-outlined/24/000000/italic.png" alt="Italic" />
  </button>

  {/* Underline */}
  <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-200 rounded">
    <img src="https://img.icons8.com/material-outlined/24/000000/underline.png" alt="Underline" />
  </button>

  {/* Bulleted List */}
  <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-200 rounded">
    <img src="https://img.icons8.com/material-outlined/24/000000/bulleted-list.png" alt="Bullets" />
  </button>

  {/* Numbered List */}
  <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-200 rounded">
    <img src="https://img.icons8.com/material-outlined/24/000000/numbered-list.png" alt="Numbering" />
  </button>

  {/* Align Left */}
  <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-200 rounded">
    <img src="https://img.icons8.com/material-outlined/24/000000/align-left.png" alt="Align Left" />
  </button>

  {/* Align Center */}
  <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-200 rounded">
    <img src="https://img.icons8.com/material-outlined/24/000000/align-center.png" alt="Align Center" />
  </button>

  {/* Align Right */}
  <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-200 rounded">
    <img src="https://img.icons8.com/material-outlined/24/000000/align-right.png" alt="Align Right" />
  </button>

</div>

        {/* Draft Toolbar */}
        <div className="absolute bottom-5 left-[126px] w-[216px] h-6 flex items-center gap-2">
          <button className="w-6 h-6  rounded-sm"><img src="/formatcolor.png" className="w-4 h-4" /></button>
          <button className="w-6 h-6  rounded-sm"><img src="/attachfile.png" className="w-4 h-4" /></button>
          <button className="w-6 h-6  rounded-sm"><img src="/link.png" className="w-4 h-4" /></button>
          <button className="w-6 h-6  rounded-sm"><img src="/mood.png" className="w-4 h-4" /></button>
          <button className="w-6 h-6  rounded-sm"><img src="/image.png" className="w-4 h-4" /></button>
          <button className="w-6 h-6  rounded-sm"><img src="/lock.png" className="w-4 h-4" /></button>
          <button className="w-6 h-6  rounded-sm"><img src="/ink.png" className="w-4 h-4" /></button>
        </div>

        {/* Bottom Actions */}
        <div className="flex justify-between items-center px-4 py-2 border-t border-gray-200 mt-auto">
          <button className="flex items-center gap-2 bg-[#0D034A] text-white text-sm px-4 py-2 rounded">
            Send
            <img src="https://img.icons8.com/material-outlined/24/ffffff/filled-sent.png" className="w-4 h-4" />
          </button>
          <div className="flex gap-3">
            <img src="https://img.icons8.com/material-outlined/24/000000/delete.png" className="w-5 h-5 cursor-pointer" />
            <img src="https://www.svgrepo.com/show/438160/navigation-dots-more-vertical-option-icon.svg" className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>

  );
}