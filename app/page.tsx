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
    <div className="relative min-h-screen bg-[#F4F5F7] overflow-hidden flex">
      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-10 z-10">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Welcome Back 👋
          </h1>

          <p className="text-gray-500 mb-8">
            Sign in to access your inbox, manage your messages, and stay
            connected securely.
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Email</label>
              <input
                type="email"
                placeholder="Example@email.com"
                className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#14004D]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="At least 8 characters"
                className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#14004D]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-[#14004D]" />
                Remember Me
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
      </div>

      {/* RIGHT DARK SECTION */}
      <div className="hidden lg:block absolute right-0 bottom-0 w-1/2 h-1/2 bg-[#2F3455]" />

      {/* IMAGE 1 (Rotated 180°) */}
      <Image
        src="/image1.png"
        alt="Image 1"
        width={148}
        height={165}
        className="hidden lg:block absolute"
        style={{
          top: "111px",
          left: "821px",

          filter: "drop-shadow(0px 25px 35px rgba(0,0,0,0.25))",
        }}
      />

      {/* IMAGE 2 WITH /MC TEXT */}
      <div
        className="absolute hidden lg:block"
        style={{
          top: "274px",
          left: "997px",
          width: "148.73px",
          height: "214.13px",
        }}
      >
        {/* Make parent relative */}
        <div className="relative   w-full h-full">
          <Image
            src="/image2.png"
            alt="Image 2"
            fill
            className="object-contain"
            style={{
              filter: "drop-shadow(0px 25px 35px rgba(0,0,0,0.25))",
            }}
          />

          {/* CENTERED /MC TEXT */}
          <div
            className={`${roboto.className} absolute inset-0 flex items-center justify-center`}
            style={{
              transform: "rotate(30deg)",
              fontSize: "30px",
              fontWeight: 700,
              color: "#14004D",
              letterSpacing: 0, // <-- this sets letter spacing to 0
            }}
          >
            <p style={{ width: 69, height: 42 }}>/MC</p>
          </div>
        </div>
      </div>
    </div>
  );
}
