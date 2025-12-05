"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 px-4">
        <nav className="container mx-auto bg-[#D7D7D7] rounded-lg p-3 mt-3 flex justify-between items-center shadow-xl relative">
          <div className="flex items-center gap-3">
            <Image
              src="/Logo.png"
              width={40}
              height={40}
              alt="Logo Pedro Lima"
            />
          </div>

          <button onClick={() => setOpen(!open)}>
            {open ? (
              <X size={28} className="text-[#FF751F]" />
            ) : (
              <Menu size={28} className="text-[#FF751F]" />
            )}
          </button>

          <div
            className={`absolute top-full left-0 right-0 mx-auto transition-all duration-500 ${
              open
                ? "opacity-100 translate-y-2 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <ul className="bg-[#D7D7D7] rounded-lg shadow-lg p-6 flex flex-col gap-6 font-medium">
              ...
            </ul>
          </div>
        </nav>
      </div>

      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
