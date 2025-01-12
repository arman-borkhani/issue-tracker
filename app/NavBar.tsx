import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

export const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="border-b py-5 mb-5">
      <div className="container">
        <div className="flex items-center gap-6">
          <Link href="/">
            <AiFillBug size={20} />
          </Link>

          <ul className="flex gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  className="text-zinc-500 hover:text-zinc-800 transition-colors"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
