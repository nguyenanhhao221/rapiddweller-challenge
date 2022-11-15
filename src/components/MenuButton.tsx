import React from "react";

type Props = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const MenuButton = ({ menuOpen, setMenuOpen }: Props) => {
  const genericHamburgerLine = `h-1 w-7 my-0.5 rounded-full bg-white transition ease transform duration-300`;
  return (
    <button
      title="Open / Close Menu"
      type="button"
      className="group flex flex-col items-center justify-center rounded"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          menuOpen ? "translate-y-1 rotate-45" : "group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          menuOpen ? "opacity-0" : "group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          menuOpen
            ? "-translate-y-3 -rotate-45 group-hover:opacity-100"
            : "group-hover:opacity-100"
        }`}
      />
    </button>
  );
};
