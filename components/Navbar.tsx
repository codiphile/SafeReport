"use client";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
// import MobileMenu

export default function Navbar() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full border-b text-white border-white/5 bg-black/60 backdrop-blur-xl z-50">
        <div className="mx-auto max-w-7xl px-6 ">
          <div className="flex h-16 items-center justify-between ">
            {/* logo and brand  */}
            <div className="flex items-center space-x-3">
              <Link href={"/"} className="flex items-center space-x-3">
                <div className="h-9 w-9 bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center rounded-xl">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <span className="text-sm md:text-xl font-semibold text-wrap">
                  Safe Report
                </span>
              </Link>
            </div>

            {/* main navigation  */}

            <div className="hidden md:flex items-center space-x-6">
              <Link
                href={"/submit-report"}
                className="text-sm text-zinc-400 hover:text-white transition-colors "
              >
                Submit Report
              </Link>
              <Link
                href={"/track-report"}
                className="text-sm text-zinc-400 hover:text-white transition-colors "
              >
                Track Report
              </Link>
              <Link
                href={"/how-it-works"}
                className="text-sm text-zinc-400 hover:text-white transition-colors "
              >
                How it Works
              </Link>
              <Link
                href={"/resources"}
                className="text-sm text-zinc-400 hover:text-white transition-colors "
              >
                Resources
              </Link>
            </div>
            {/* Emergency Button  */}
            <div className="flex items-center space-x-4">
              <Link
                href={"/contact"}
                className="hidden md:block text-sm text-zinc-400 hover:text-white transition-colors "
              >
                Contact
              </Link>
              <button
                className="group flex h-9  
              text-sm
              items-center gap-2 rounded-full bg-red-500/10 pl-4 pr-5 font-medium text-red-500 ring-1 ring-inset ring-red-500/20 transition-all hover:bg-red-500/20"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                Emergency: 911
              </button>

              {/* mobile menu button  */}
              <button
                className="md:hidden p-2 text-zinc-400 hover:text-white"
                onClick={() => {
                  setIsMobileMenu(true);
                }}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenu}
        onClose={() => {
          setIsMobileMenu(false);
        }}
      />
    </>
  );
}
