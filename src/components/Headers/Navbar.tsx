import Link from "next/link";
import React from "react";

//TODO Update correct link to page
export const Navbar = () => {
  return (
    <ul className="flex flex-col gap-4 text-white md:flex-row">
      <li className="transition-colors hover:text-hover-green">
        <Link href="#">Editions</Link>
      </li>
      <Link href="#ui">
        <li className="transition-colors hover:text-hover-green">UI</li>
      </Link>
      <Link href="#faq">
        <li className="transition-colors hover:text-hover-green">FAQ</li>
      </Link>
      <Link href="#contact">
        <li className="transition-colors hover:text-hover-green">Contact</li>
      </Link>
    </ul>
  );
};
