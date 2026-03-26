"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

export default function Navbar() {
  const pathname = usePathname();

  // Unified neon green active styling for the entire nav bar
  const navLinks = [
    { name: "HOME", href: "/", activeColor: "text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]" },
    { name: "PROJECTS", href: "/projects", activeColor: "text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]" },
    { name: "CONTACT", href: "/contact", activeColor: "text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]" },
  ];

  return (
    <nav className="absolute top-0 right-0 p-6 flex gap-6 z-50 text-sm tracking-widest bg-transparent">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${orbitron.className} font-bold transition-all duration-300 ${
              isActive 
                ? link.activeColor 
                : "text-gray-500 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
