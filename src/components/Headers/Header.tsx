import Link from "next/link";
import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { MenuButton } from "./MenuButton";
import { LanguageButton } from "./LanguageButton";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="bg-primary p-5">
      <div className="wrapper flex items-center justify-between">
        <div className="logo">
          <Link
            href="/"
            className="p-5 font-aller text-[22.4px] text-white xs:text-5xl"
          >
            BENERATOR
          </Link>
        </div>
        {/* Mobile Menu */}
        <div className="block md:hidden">
          <div
            className={`fixed left-[20%] top-0 right-0 bottom-0 bg-primary pl-10 pr-5 pt-5 pb-20 ${
              menuOpen ? `visible` : `invisible`
            }`}
          >
            <div className="flex items-center justify-between">
              <LanguageButton />
              <div className="hamburger-menu-button">
                <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              </div>
            </div>
            <nav className="mt-20 md:mt-0">
              <Navbar />
            </nav>
          </div>
          <div className={`pb-2 ${menuOpen ? `hidden` : `block`}`}>
            <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:gap-12">
          <Navbar />
          <LanguageButton />
        </div>
      </div>
    </div>
  );
};
