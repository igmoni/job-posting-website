import Image from "next/image";
import Link from "next/link";
import React from "react";

const navItems = [
  { href: "/jobs", label: "Browse jobs" },
  { href: "/jobs/post", label: "Post a job" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/auth/signin", label: "Sign in" },
];

const Navbar = () => {
  return (
    <nav className="flex justify-center py-4">
      <div className="flex items-center justify-between w-full max-w-5xl">
        <div>
          <Link href={"/"} className="flex items-center space-x-2">
            <Image width={40} height={40} src={"/logo.png"} alt="Logo" />
            <span>Job Board</span>
          </Link>
        </div>

        <div className="flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-neutral-800/70 hover:bg-neutral-100 px-2 py-1 hover:border border-neutral-400/50 rounded-lg hover:text-black transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
