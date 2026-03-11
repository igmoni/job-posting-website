"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

type AuthVisibility = "all" | "user" | "guest";

type NavItem = {
  label: string;
  href?: string;
  visibility: AuthVisibility;
  action?: "logout";
};

const NAV_ITEMS: NavItem[] = [
  { label: "Browse Jobs", href: "/jobs", visibility: "all" },
  { label: "Post a Job", href: "/jobs/post", visibility: "user" },
  { label: "Dashboard", href: "/dashboard", visibility: "user" },
  { label: "Sign Out", visibility: "user", action: "logout" },
  { label: "Sign In", href: "/auth/signin", visibility: "guest" },
];

export function Navbar() {
  const { data: session, status } = useSession();

  const isAuthenticated = !!session;

  const visibleItems = NAV_ITEMS.filter((item) => {
    if (item.visibility === "all") return true;
    if (item.visibility === "user") return isAuthenticated;
    if (item.visibility === "guest") return !isAuthenticated;
    return false;
  });

  return (
    <nav className="flex justify-center py-4 border-b border-neutral-200">
      <div className="flex items-center justify-between w-full max-w-5xl px-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" width={40} height={40} alt="Logo" />
          <span className="font-semibold text-lg">Job Board</span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-4">
          {visibleItems.map((item) => {
            if (item.action === "logout") {
              return (
                <button
                  key="logout"
                  onClick={() => signOut({ callbackUrl: "/auth/signin" })}
                  className="text-neutral-700 hover:text-black transition"
                >
                  {item.label}
                </button>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href!}
                className="text-neutral-700 hover:text-black transition"
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}