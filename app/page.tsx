"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700"],
});

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "admin@test.com" && password === "1234") {
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="relative w-[1440px] h-[900px] bg-[#F7F8FC] overflow-hidden">
      {/* LOGIN FORM */}
      <div
        className="absolute left-[calc(50%-388px/2-354px)] 
                top-[calc(50%-423px/2)] 
                w-[388px] h-[423px] 
                flex flex-col gap-12 
                relative"
      >
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold text-gray-800 text-center">
            Welcome Back 👋
          </h1>
          <p className="text-sm text-gray-500 text-center">
            Sign in to access your inbox, manage your messages, and stay
            connected securely.
          </p>
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleLogin}>
          <div className="flex flex-col gap-2">
            <label className="text-gray-600 text-sm">Email</label>
            <input
              type="email"
              placeholder="Example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#14004D]"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-600 text-sm">Password</label>
            <input
              type="password"
              placeholder="At least 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#14004D]"
              required
            />
          </div>

          <div className="flex justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-[#14004D]" /> Remember Me
            </label>
            <a href="#" className="text-[#14004D] hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#14004D] text-white py-3 rounded-xl hover:opacity-90 transition-all"
          >
            Login
          </button>
        </form>
      </div>

      {/* RIGHT BACKGROUND */}
      <div
        className="absolute w-[709px] h-[900px] left-[801px] top-0"
        style={{
          background:
            "linear-gradient(217.64deg, #454D7B -10.97%, #181B2B 101.6%)",
        }}
      />

      {/* ===== VECTOR COLUMNS ===== */}

      {/* Column 2 (Back) */}
      <Image
        src="/Vector2.svg"
        alt="column2"
        width={346.92}
        height={834.37}
        className="absolute"
        style={{
          left: "897.81px",
          top: "267.19px",
          zIndex: 1,
        }}
      />

      {/* Column 1 (Front Left) */}
      <Image
        src="/Vector1.svg"
        alt="column1"
        width={214.82}
        height={518.14}
        className="absolute"
        style={{
          left: "801px",
          top: "594.86px",
          zIndex: 2,
        }}
      />

      {/* Column 3 (Front Right) */}
      <Image
        src="/Vector3.svg"
        alt="column3"
        width={235.14}
        height={564.99}
        className="absolute"
        style={{
          left: "1213.29px",
          top: "505.61px",
          zIndex: 2,
        }}
      />

      {/* ===== IMAGES ON TOP ===== */}

      {/* Left icon */}
      <Image
        src="/image3.png"
        alt="22"
        width={114.15}
        height={108.38}
        className="absolute mt-10 ml-"
        style={{
          left: "850.69px",
          top: "554.06px",
          filter: "drop-shadow(-9px 6px 7.3px rgba(0,0,0,0.35))",

          zIndex: 3,
        }}
      />

      {/* Middle icon */}
      <Image
        src="/image1.png"
        alt="middle"
        width={209}
        height={233}
        className="absolute mt-10 ml-0"
        style={{
          left: "975px",
          top: "150px",
          zIndex: 3,
        }}
      />

      {/* Right icon */}
      <Image
        src="/image2.svg"
        alt="right"
        width={148}
        height={165}
        className="absolute mt-10 ml-0"
        style={{
          left: "1260px",
          top: "380px",
          zIndex: 3,
        }}
      />
      {/* /MC Text */}
      <div
        className={`${roboto.className} absolute flex items-center`}
        style={{
          width: "69px",
          height: "42px",
          left: "1288px",
          top: "485px",
          fontWeight: 700,
          fontSize: "36px",
          lineHeight: "42px",
          color: "#0D034A",
          transform: "matrix(0.87, 0.5, 0, 1, 0, 0)",
          zIndex: 4,
        }}
      >
        /MC
      </div>
    </div>
  );
}
